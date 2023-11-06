import type {
	SoundcloudFilter,
	SoundcloudSelectionSearch,
	SoundcloudTrackSearch,
} from "../types";

import { Base } from "./Base.js";

export class Discover extends Base {
	public mixedCollections = async (params?: SoundcloudFilter) => {
		return this.api.fetch<SoundcloudSelectionSearch>(
			`/mixed_collections`,
			"GET",
			{
				params,
			},
		);
	};

	public recentTracks = async (genre: string, params?: SoundcloudFilter) => {
		return this.api.fetch<SoundcloudTrackSearch>(
			`/recent_tracks/${genre}`,
			"GET",
			{
				params,
			},
		);
	};
}
