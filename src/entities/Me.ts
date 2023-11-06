import type {
	SoundcloudFilter,
	SoundcloudPlaylist,
	SoundcloudTrack,
} from "../types";
import {
	type SoundcloudLikesIDsSearch,
	type SoundcloudWhoToFollowFilter,
	type SoundcloudWhoToFollowSearch,
} from "../types/MeTypes";
import type { SoundcloudUser } from "../types/UserTypes";

import { Base } from "./Base.js";

export class Me extends Base {
	public get = async () => {
		return this.api.fetch<SoundcloudUser>("/me", "GET");
	};

	trackReposts = {
		put: async (id: number) => {
			return this.sc.api.fetch<null>(`/me/track_reposts/${id}`, "PUT");
		},
		delete: async (id: number) => {
			return this.sc.api.fetch<null>(`/me/track_reposts/${id}`, "DELETE");
		},
		caption: async (id: number, caption: string) => {
			return await this.sc.api.fetch<null>(
				`/me/track_reposts/${id}/caption`,
				"PUT",
				{
					body: { payload: { caption }, type: "raw" },
				},
			);
		},
	};
	trackLikes = {
		get: async (params?: SoundcloudFilter) => {
			return this.sc.api.fetch<SoundcloudLikesIDsSearch>(
				"/me/track_likes/ids",
				"GET",
				{
					params,
				},
			);
		},
		put: async (id: number) => {
			return this.sc.api.fetch<null>(`/me/track_likes/${id}`, "PUT");
		},
		delete: async (id: number) => {
			return this.sc.api.fetch<null>(`/me/track_likes/${id}`, "DELETE");
		},
	};
	library = {
		all: async (params?: SoundcloudFilter) => {
			return this.api.fetch<SoundcloudPlaylist>("/me/library", "GET", {
				params,
			});
		},
	};
	suggested = {
		who_to_follow: async (params?: SoundcloudWhoToFollowFilter) => {
			return this.api.fetch<SoundcloudWhoToFollowSearch>(
				"/me/suggested/who_to_follow",
				"GET",
				{
					params,
				},
			);
		},
	};
}
