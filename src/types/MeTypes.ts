import type { SoundcloudFilter, SoundcloudSearch } from "./APITypes";
import type { SoundcloudUser } from "./UserTypes";

export interface SoundcloudWhoToFollowFilter extends SoundcloudFilter {
	view?: "recommended-first";
}

export interface SoundcloudLikesIDsSearch extends SoundcloudSearch {
	collection: number[];
}

export interface SoundcloudWhoToFollowSearch extends SoundcloudSearch {
	collection: SoundcloudUser[];
}
