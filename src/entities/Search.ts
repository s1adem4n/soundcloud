import type {
	SoundcloudAlbumFilter,
	SoundcloudAlbumSearch,
	SoundcloudAllSearch,
	SoundcloudPlaylistFilter,
	SoundcloudPlaylistSearch,
	SoundcloudQuerySearch,
	SoundcloudSearchFilter,
	SoundcloudTrackFilter,
	SoundcloudTrackSearch,
	SoundcloudUserFilter,
	SoundcloudUserSearch,
} from "../types";
import { Base } from "./Base";

export class Search extends Base {
	public tracks = async (params?: SoundcloudTrackFilter) => {
		return await this.api.fetch<SoundcloudTrackSearch>(
			"/search/tracks",
			"GET",
			{ params },
		);
	};

	public users = async (params?: SoundcloudUserFilter) => {
		return await this.api.fetch<SoundcloudUserSearch>("/search/users", "GET", {
			params,
		});
	};

	public queries = async (params?: SoundcloudSearchFilter) => {
		return await this.api.fetch<SoundcloudQuerySearch>(
			"/search/queries",
			"GET",
			{ params },
		);
	};

	public playlists = async (params?: SoundcloudPlaylistFilter) => {
		return await this.api.fetch<SoundcloudPlaylistSearch>(
			"/search/playlists",
			"GET",
			{ params },
		);
	};

	public albums = async (params?: SoundcloudAlbumFilter) => {
		return await this.api.fetch<SoundcloudAlbumSearch>(
			"/search/albums",
			"GET",
			{ params },
		);
	};

	public all = async (params?: SoundcloudSearchFilter) => {
		return await this.api.fetch<SoundcloudAllSearch>("/search", "GET", {
			params,
		});
	};

	public async searchNext<T>(next_href: string) {
		return await this.api.getURL(next_href);
	}
}
