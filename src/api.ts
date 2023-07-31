/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
		public fetchFn = fetch,
	) {
		API.headers.Authorization = `OAuth ${oauthToken}`;
	}

	public async get(
		endpoint: string,
		params?: Record<string, any> | undefined,
	): Promise<Response> {
		const url = new URL(`${this.apiURL}${endpoint}`);
		if (params) {
			url.search = `${new URLSearchParams(params).toString()}&client_id=${
				this.clientID
			}`;
		} else {
			url.search = `?client_id=${this.clientID}`;
		}

		const response = await this.fetchFn(url.toString(), {
			headers: API.headers,
			method: "GET",
		});
		if (!response.ok) {
			throw new Error(
				`Failed to fetch ${url.toString()}: "${
					response.statusText
				}" with status code ${response.status}`,
			);
		}

		return response;
	}

	get headers() {
		return API.headers;
	}
}
