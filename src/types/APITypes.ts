export interface SoundcloudFilter {
	limit?: number;
	offset?: number;
}

export interface SoundcloudSearchFilter extends SoundcloudFilter {
	q: string;
}

export interface SoundcloudSearch {
	next_href: null | string;
	query_urn: string;
	total_results?: number;
}

export type SoundcloudLicense =
	| "all-rights-reserved"
	| "cc-by"
	| "cc-by-nc"
	| "cc-by-nc-nd"
	| "cc-by-nc-sa"
	| "cc-by-nd"
	| "cc-by-sa"
	| "no-rights-reserved";
