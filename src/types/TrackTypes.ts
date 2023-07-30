import { SoundcloudFilter, SoundcloudSearch } from "./APITypes.js";
import { SoundcloudUser } from "./UserTypes.js";

export type SoundcloudLicense =
	| "all-rights-reserved"
	| "cc-by"
	| "cc-by-nc"
	| "cc-by-nc-nd"
	| "cc-by-nc-sa"
	| "cc-by-nd"
	| "cc-by-sa"
	| "no-rights-reserved";

export interface SoundcloudTrack {
	artwork_url: string;
	comment_count: number;
	commentable: boolean;
	created_at: string;
	description: null | string;
	display_date: string;
	download_count: number;
	downloadable: boolean;
	duration: number;
	embeddable_by: "all" | "me" | "none";
	full_duration: number;
	genre: string;
	has_downloads_left: boolean;
	id: number;
	kind: string;
	label_name: null | string;
	last_modified: string;
	license: SoundcloudLicense;
	likes_count: number;
	media: {
		transcodings: SoundcloudTranscoding[];
	};
	monetization_model: string;
	permalink: string;
	permalink_url: string;
	playback_count: number;
	policy: string;
	public: boolean;
	publisher_metadata: {
		contains_music: boolean;
		id: number;
		urn: string;
	};
	purchase_title: null | string;
	purchase_url: null | string;
	release_date: string;
	reposts_count: number;
	secret_token: null | string;
	sharing: "private" | "public";
	state: "failed" | "finished" | "processing";
	streamable: boolean;
	tag_list: string;
	title: string;
	uri: string;
	urn: string;
	user: SoundcloudUser;
	user_id: number;
	visuals: null | string;
	waveform_url: string;
}

export interface SoundcloudTrackSearch extends SoundcloudSearch {
	collection: SoundcloudTrack[];
}

export interface SoundcloudTranscoding {
	duration: number;
	format: {
		mime_type: string;
		protocol: string;
	};
	preset: string;
	quality: string;
	snipped: boolean;
	url: string;
}

export interface SoundcloudTrackFilter extends SoundcloudFilter {
	"filter.created_at"?:
		| "last_day"
		| "last_hour"
		| "last_month"
		| "last_week"
		| "last_year";
	"filter.duration"?: "epic" | "long" | "medium" | "short";
	"filter.genre_or_tag"?: string;
	"filter.license"?:
		| "to_modify_commercially"
		| "to_share"
		| "to_use_commercially";
}
