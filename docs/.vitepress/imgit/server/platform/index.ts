import { Platform } from "./platform";

export { Platform } from "./platform";

/** Platform-specific APIs. */
export const std: Readonly<Platform> = <never>{};

/** Binds platform APIs or attempts to auto-detect when not specified. */
export async function bind(api?: Platform) {
    api ??= await detect();
    for (const prop of Object.getOwnPropertyNames(api))
        (<Record<string, unknown>>std)[prop] = api[prop];
}

async function detect(): Promise<Platform> {
    // TODO: Bundlers statically parse conditional imports choke on deno's url imports.
    // if (typeof Deno !== "undefined") return (await import("./deno")).deno;
    if (process.versions.bun) return (await import("./bun")).bun;
    if (process.versions.node) return (await import("./node")).node;
    throw Error("Failed to detect JavaScript runtime; specify 'platform' via plugin parameter.");
}
