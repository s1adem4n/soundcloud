import type { SoundcloudLicense } from "./APITypes";
import type { SoundcloudTrack } from "./TrackTypes";
import type { SoundcloudUser } from "./UserTypes";

export interface SoundcloudAlbum {
	artwork_url: string;
	created_at: string;
	description: string;
	duration: number;
	embeddable_by: "all" | "me" | "none";
	genre: string;
	id: number;
	kind: string;
	label_name: string;
	last_modified: string;
	license: SoundcloudLicense;
	likes_count: number;
	managed_by_feeds: boolean;
	permalink: string;
	permalink_url: string;
	public: boolean;
	purchase_title: string | null;
	purchase_url: string | null;
	release_date: string;
	reposts_count: number;
	secret_token: string | null;
	sharing: "public" | "private";
	tag_list: string;
	title: string;
	uri: string;
	user_id: number;
	set_type: string;
	is_album: boolean;
	published_at: string;
	display_date: string;
	user: SoundcloudUser;
	tracks: SoundcloudTrack[];
	track_count: number;
}
