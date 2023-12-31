import type { SoundcloudTrack, SoundcloudTranscoding } from "../types";

import { Base } from "./Base.js";

export class Util extends Base {
	private readonly getStreamLink = async (
		transcoding: SoundcloudTranscoding,
	) => {
		if (!transcoding.url) {
			return null;
		}

		const url = transcoding.url;
		const client_id = this.api.clientID;
		const headers = this.api.headers;
		const connect = url.includes("?")
			? `&client_id=${client_id}`
			: `?client_id=${client_id}`;
		try {
			const res = await fetch(url + connect, {
				headers: headers,
				method: "GET",
			});

			return (await res.json()) as {
				url: string;
			} | null;
		} catch {
			return null;
		}
	};

	private readonly sortTranscodings = (
		track: SoundcloudTrack,
		protocol?: "hls" | "progressive",
	) => {
		const transcodings = track.media.transcodings.sort((t) =>
			t.quality === "hq" ? -1 : 1,
		);
		if (!protocol) {
			return transcodings;
		}

		return transcodings.filter((t) => t.format.protocol === protocol);
	};

	public hqArtwork = (track: SoundcloudTrack) => {
		const hqArtwork = track.artwork_url.replace("large", "t500x500");
		return hqArtwork;
	};

	public streamLink = async (
		track: SoundcloudTrack,
		protocol?: "hls" | "progressive",
	) => {
		const transcodings = this.sortTranscodings(track, protocol);
		if (!transcodings.length) {
			return null;
		}

		return await this.getStreamLink(transcodings[0]);
	};
}
