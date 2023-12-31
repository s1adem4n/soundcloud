import type { SoundcloudSearch, SoundcloudSearchFilter } from "./APITypes";
import type { SoundcloudAlbum } from "./AlbumTypes";
import type { SoundcloudPlaylist } from "./PlaylistTypes";
import type { SoundcloudTrack } from "./TrackTypes";
import type { SoundcloudUser } from "./UserTypes";

export interface SoundcloudTrackSearch extends SoundcloudSearch {
	collection: SoundcloudTrack[];
}

export interface SoundcloudTrackFilter extends SoundcloudSearchFilter {
	"filer.content_tier"?: "SUB_HIGH_TIER"; // TODO: find out other content tiers, SUB_HIGH_TIER is go+
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

export interface SoundcloudUserSearch extends SoundcloudSearch {
	collection: SoundcloudUser[];
}

export interface SoundcloudUserFilter extends SoundcloudSearchFilter {
	"filter.place"?: string;
}

export interface SoundcloudQuery {
	output: string;
	query: string;
}

export interface SoundcloudQuerySearch extends SoundcloudSearch {
	collection: SoundcloudQuery[];
}

export interface SoundcloudPlaylistSearch extends SoundcloudSearch {
	collection: SoundcloudPlaylist[];
}

export interface SoundcloudPlaylistFilter extends SoundcloudSearchFilter {
	"filter.genre_or_tag"?: string;
}

export interface SoundcloudAlbumSearch extends SoundcloudSearch {
	collection: SoundcloudAlbum[];
}

export interface SoundcloudAlbumFilter extends SoundcloudSearchFilter {
	"filter.genre_or_tag"?: string;
}

export interface SoundcloudAllSearch extends SoundcloudSearch {
	collection: (
		| SoundcloudAlbum
		| SoundcloudPlaylist
		| SoundcloudTrack
		| SoundcloudUser
	)[];
}
