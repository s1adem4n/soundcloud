export interface SoundcloudFilter {
	limit?: number;
	offset?: number;
	q: string;
}

export interface SoundcloudSearch {
	next_href: string;
	query_urn: string;
	total_results: number;
}
