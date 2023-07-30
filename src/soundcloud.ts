import { API } from "./api.js";
import { Me } from "./entities/Me.js";
import { Tracks } from "./entities/Tracks.js";
import { Util } from "./entities/Util.js";

export class Soundcloud {
	public static clientID: string;
	public static oauthToken: string;
	public api: API;
	public me = new Me(this);
	public tracks = new Tracks(this);
	public util = new Util(this);

	constructor(clientID: string, oauthToken: string) {
		Soundcloud.clientID = clientID;
		Soundcloud.oauthToken = oauthToken;
		this.api = new API(clientID, oauthToken);
	}
}

export default Soundcloud;
