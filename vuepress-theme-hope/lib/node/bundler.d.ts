import type { App } from "@vuepress/core";
/**
 * Add tags as customElement
 *
 * @param config VuePress Bundler config
 * @param app VuePress Node App
 * @param customElements tags recognized as custom element
 */
export declare const checkTag: (config: unknown, app: App) => void;
export declare const updateBundlerConfig: (config: unknown, app: App) => void;
