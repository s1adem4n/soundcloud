/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface RequestOpts {
	body?: Record<string, any>;
	params?: Record<string, any>;
}

type HttpVerb = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export class API {
	public static headers: Record<string, string> = {
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
			body: JSON.stringify(opts.body),
			headers: API.headers,
			method,
		});

		return response;
	}

	/**
	 * Fetches data from the specified endpoint using the specified HTTP verb and request options.
	 * @param endpoint - The endpoint to fetch data from.
	 * @param method - The HTTP verb to use for the request.
	 * @param opts - The request options to use for the request.
	 * @returns An object containing the fetched data and a boolean indicating whether the request was successful.
	 */
	public async fetch<T>(
		endpoint: string,
		method: HttpVerb,
		opts?: RequestOpts,
	) {
		const res = await this.makeRequest(endpoint, method, opts);
		return {
			data: res.ok ? ((await res.json()) as T) : null,
			success: res.ok,
		};
	}

	/**
	 * Fetches the URL with the given client ID and headers.
	 * @param url - The URL to fetch.
	 * @returns A Promise that resolves with the Response object.
	 * @throws An error if the response is not ok.
	 */
	public async getURL(url: string) {
		const urlObj = new URL(url);
		if (!urlObj.searchParams.has("client_id")) {
			urlObj.searchParams.append("client_id", this.clientID);
		}

		const response = await fetch(urlObj.toString(), {
			headers: API.headers,
			method: "GET",
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
