import { describe, expect, it, vi } from "vitest";

import { helloWorld } from "./helloWorld.js";

describe("helloWorld", () => {
	it("logs 'Hello World!' to the console", () => {
		const logger = vi.spyOn(console, "log").mockImplementation(() => undefined);

		helloWorld();

		expect(logger).toHaveBeenCalledWith("Hello World!");
		expect(logger).toHaveBeenCalledTimes(1);
	});
});
