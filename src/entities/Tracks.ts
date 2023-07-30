import type {
	SoundcloudTrack,
	SoundcloudTrackFilter,
	SoundcloudTrackSearch,
} from "../types";

import { Base } from "./Base.js";

export class Tracks extends Base {
	public get = async (id: number) => {
		const response = await this.api.get(`/tracks/${id}`);
		return (await response.json()) as SoundcloudTrack;
	};

	public related = async (id: number, limit?: number) => {
		const response = await this.api.get(`/tracks/${id}/related`, { limit });
		return (await response.json()) as SoundcloudTrack[];
	};

	public search = async (params?: SoundcloudTrackFilter) => {
		const response = await this.api.get("/search/tracks", params);
		return (await response.json()) as SoundcloudTrackSearch;
	};
}
