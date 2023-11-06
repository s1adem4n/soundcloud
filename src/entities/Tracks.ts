import type {
	SoundcloudCommentSearch,
	SoundcloudTrack,
	SoundcloudTrackSearch,
	SoundcloudCommentFilter,
	SoundcloudFilter,
} from "../types";

import { Base } from "./Base.js";

export class Tracks extends Base {
	public get = async (id: number) => {
		return await this.api.fetch<SoundcloudTrack>(`/tracks/${id}`, "GET");
	};

	public related = async (id: number, params?: SoundcloudFilter) => {
		return await this.api.fetch<SoundcloudTrackSearch>(
			`/tracks/${id}/related`,
			"GET",
			{ params },
		);
	};

	public getMultiple = async (ids: number[]) => {
		const params = { ids: ids.join(",") };
		return await this.api.fetch<SoundcloudTrack[]>(`/tracks`, "GET", {
			params,
		});
	};

	public comments = async (id: number, params?: SoundcloudCommentFilter) => {
		return await this.api.fetch<SoundcloudCommentSearch>(
			`/tracks/${id}/comments`,
			"GET",
			{ params },
		);
	};
}
