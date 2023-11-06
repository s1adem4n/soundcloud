import type { SoundcloudLicense } from "./APITypes";
import type { SoundcloudFilter, SoundcloudSearch } from "./APITypes";
import type { SoundcloudUser } from "./UserTypes";

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

export interface SoundloudComment {
	body: string;
	created_at: string;
	id: number;
	kind: string;
	self: { urn: string };
	timestamp: number;
	track_id: number;
	user: SoundcloudUser;
	user_id: number;
}

export interface SoundcloudCommentFilter extends SoundcloudFilter {
	threaded: 0 | 1;
}

export interface SoundcloudCommentSearch extends SoundcloudSearch {
	collection: SoundloudComment[];
}
