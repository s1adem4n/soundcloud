import type { SoundcloudSearch } from "./APITypes";
import type { SoundcloudTrackSearch } from "./SearchTypes";

export interface SoundcloudSelection {
	description: string;
	id: string;
	items: SoundcloudTrackSearch;
	kind: string;
	last_updated: string;
	query_urn: string;
	social_proof: unknown;
	social_proof_users: unknown;
	style: null | string;
	title: string;
	tracking_feature_name: string;
	urn: string;
}

export interface SoundcloudSelectionSearch extends SoundcloudSearch {
	collection: SoundcloudSelection[];
}
