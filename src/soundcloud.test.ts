import { beforeEach, describe, expect, it } from "vitest";

import { Soundcloud } from "./soundcloud.js";

describe("Soundcloud", () => {
	const clientID = "test-client-id";
	const oauthToken = "test-oauth-token";
	const apiURL = "https://test-api-url.com";

	let soundcloud: Soundcloud;

	beforeEach(() => {
		soundcloud = new Soundcloud(clientID, oauthToken, apiURL);
	});

	describe("constructor", () => {
		it("should set the clientID and oauthToken static properties", () => {
			expect(Soundcloud.clientID).toBe(clientID);
			expect(Soundcloud.oauthToken).toBe(oauthToken);
		});

		it("should create an instance of the API class", () => {
			expect(soundcloud.api).toBeDefined();
			expect(soundcloud.api.clientID).toBe(clientID);
			expect(soundcloud.api.oauthToken).toBe(oauthToken);
			expect(soundcloud.api.apiURL).toBe(apiURL);
		});
	});
});
