export interface SoundcloudUser {
	avatar_url: string;
	city: string;
	comments_count: number;
	country_code: null | number;
	created_at: string;
	creator_subscription: SoundcloudCreatorSubscription;
	creator_subscriptions: SoundcloudCreatorSubscription[];
	description: string;
	first_name: string;
	followers_count: number;
	followings_count: number;
	full_name: string;
	groups_count: number;
	id: number;
	kind: string;
	last_modified: string;
	last_name: string;
	likes_count: number;
	permalink: string;
	permalink_url: string;
	playlist_count: number;
	playlist_likes_count: number;
	reposts_count: null | number;
	track_count: number;
	uri: string;
	urn: string;
	username: string;
	verified: boolean;
	visuals: {
		enabled: boolean;
		tracking: null;
		urn: string;
		visuals: SoundcloudVisual[];
	};
}

export interface SoundcloudVisual {
	entry_time: number;
	urn: string;
	visual_url: string;
}

export interface SoundcloudCreatorSubscription {
	product: {
		id: string;
	};
}
