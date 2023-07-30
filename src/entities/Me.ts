import type { SoundcloudUser } from "../types/UserTypes";

import { Base } from "./Base.js";

export class Me extends Base {
	public get = async () => {
		const response = await this.sc.api.get("/me");
		return (await response.json()) as SoundcloudUser;
	};
}
