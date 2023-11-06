import type {
	SoundcloudFilter,
	SoundcloudSelectionSearch,
	SoundcloudTrackSearch,
} from "../types";
import { Base } from "./Base";

export class Discover extends Base {
	public recentTracks = async (genre: string, params?: SoundcloudFilter) => {
		return this.api.fetch<SoundcloudTrackSearch>(
			`/recent_tracks/${genre}`,
			"GET",
			{
				params,
			},
		);
	};

	public mixedCollections = async (params?: SoundcloudFilter) => {
		return this.api.fetch<SoundcloudSelectionSearch>(
			`/mixed_collections`,
			"GET",
			{
				params,
			},
		);
	};
}
