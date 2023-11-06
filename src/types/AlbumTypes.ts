import type { SoundcloudLicense } from "./APITypes";
import type { SoundcloudTrack } from "./TrackTypes";
import type { SoundcloudUser } from "./UserTypes";

export interface SoundcloudAlbum {
	artwork_url: string;
	created_at: string;
	description: string;
	display_date: string;
	duration: number;
	embeddable_by: "all" | "me" | "none";
	genre: string;
	id: number;
	is_album: boolean;
	kind: string;
	label_name: string;
	last_modified: string;
	license: SoundcloudLicense;
	likes_count: number;
	managed_by_feeds: boolean;
	permalink: string;
	permalink_url: string;
	public: boolean;
	published_at: string;
	purchase_title: null | string;
	purchase_url: null | string;
	release_date: string;
	reposts_count: number;
	secret_token: null | string;
	set_type: string;
	sharing: "private" | "public";
	tag_list: string;
	title: string;
	track_count: number;
	tracks: SoundcloudTrack[];
	uri: string;
	user: SoundcloudUser;
	user_id: number;
}
