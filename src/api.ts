/* eslint-disable @typescript-eslint/no-explicit-any */

interface RequestOpts {
	params?: Record<string, any>;
	body?: Record<string, any>;
}

type HttpVerb = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export class API {
	public static headers: Record<string, any> = {
		Origin: "https://soundcloud.com",
		Referer: "https://soundcloud.com/",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.67",
	};

	constructor(
		public clientID: string,
		public oauthToken: string,
		public apiURL: string = "https://api-v2.soundcloud.com",
	) {
		API.headers.Authorization = `OAuth ${oauthToken}`;
	}

	private async makeRequest(
		endpoint: string,
		method: HttpVerb,
		opts: RequestOpts = {},
	) {
		const url = new URL(`${this.apiURL}${endpoint}`);
		if (opts.params) {
			url.search = `${new URLSearchParams(opts.params).toString()}&client_id=${
				this.clientID
			}`;
		} else {
			url.search = `?client_id=${this.clientID}`;
		}

		const response = await fetch(url.toString(), {
			method,
			headers: API.headers,
			body: JSON.stringify(opts.body),
		});

		return response;
	}

	public async fetch<T>(
		endpoint: string,
		method: HttpVerb,
		opts?: RequestOpts,
	) {
		const res = await this.makeRequest(endpoint, method, opts);
		return {
			success: res.ok,
			data: res.ok ? ((await res.json()) as T) : null,
		};
	}

	public async getURL(url: string) {
		const urlObj = new URL(url);
		if (!urlObj.searchParams.has("client_id")) {
			urlObj.searchParams.append("client_id", this.clientID);
		}
		const response = await fetch(urlObj.toString(), {
			method: "GET",
			headers: API.headers,
		});
		if (!response.ok) {
			throw new Error(
				`Failed to fetch ${urlObj.toString()}: ${response.status}`,
			);
		}
		return response;
	}

	get headers() {
		return API.headers;
	}
}
