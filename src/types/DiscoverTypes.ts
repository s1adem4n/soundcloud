import type { SoundcloudSearch } from "./APITypes";
import type { SoundcloudTrackSearch } from "./SearchTypes";

export interface SoundcloudSelection {
	urn: string;
	query_urn: string;
	title: string;
	description: string;
	tracking_feature_name: string;
	last_updated: string;
	style: string | null;
	social_proof: unknown | null;
	social_proof_users: unknown | null;
	items: SoundcloudTrackSearch;
	kind: string;
	id: string;
}

export interface SoundcloudSelectionSearch extends SoundcloudSearch {
	collection: SoundcloudSelection[];
}
