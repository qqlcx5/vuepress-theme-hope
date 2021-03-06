"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covertThemeConfig = void 0;
const navbar_1 = require("./navbar");
const sidebar_1 = require("./sidebar");
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const DEPRECATED_THEME_OPTIONS = [
    // v1
    ["darkLogo", "logoDark"],
    ["navAutoHide", "navbarAutoHide"],
    ["sidebarDepth ", "headerDepth"],
    ["prevLinks", "prevLink"],
    ["nextLinks", "nextLink"],
    ["editLinks", "editLink"],
    ["updateTime", "lastUpdated"],
    ["anchorDisplay", "toc"],
    ["nav", "navbar"],
    ["activeHash", "plugins.activeHeaderLinks"],
    ["comment", "plugins.comment"],
    ["copyCode", "plugins.copyCode"],
    ["copyright", "plugins.copyright"],
    ["feed", "plugins.feed"],
    ["git", "plugins.git"],
    ["mdEnhance", "plugins.mdEnhance"],
    ["readingTime", "plugins.readingTime"],
    ["photoswipe", "plugins.photoswipe"],
    ["pwa", "plugins.pwa"],
    ["sitemap", "plugins.sitemap"],
    ["seo", "plugins.seo"],
    ["wordPerMinute", "plugins.readingTime.wordPerMinute"],
    // v2
    ["fullSreen", "fullscreen"],
    ["headingDepth", "headerDepth"],
];
const DROPPED_THEME_OPTIONS = [
    // v1
    [
        "algolia",
        'The theme no longer bundles docsearch package, you should install and use "@vuepress/plugin-docsearch".',
    ],
    [
        "algoliaType",
        'The theme no longer bundles docsearch package, you should install and use "@vuepress/plugin-docsearch".',
    ],
    [
        "custom",
        "VuePress2 remove markdown slot support, you should extend theme layout to support similar feature.",
    ],
    [
        "displayAllHeaders",
        "Due to scalability consideration, V2 no longer supports this.",
    ],
    [
        "hideSiteTitleonMobile",
        "Site title will be hide on mobile because there is no space for it.",
    ],
    [
        "chunkRename",
        "Since it's hard to implement such feature on vite, we no longer support this plugin in V2.",
    ],
    [
        "cleanUrl",
        "Due to better seo consideration, we no longer support this plugin in V2.",
    ],
    [
        "smoothScroll",
        "We provides smooth scrolling via CSS in V2, so this plugin is no longer needed.",
    ],
];
/**
 * @deprecated You should use V2 standard options and avoid using it
 */
const handleBlogOptions = (blogOptions) => {
    if ("links" in blogOptions) {
        utils_2.logger.warn('"blog.links" options is deprecated, please use "blog.medias" instead');
        blogOptions["medias"] = blogOptions["links"];
        delete blogOptions["links"];
    }
    if ("perPage" in blogOptions) {
        utils_2.logger.warn('"blog.perPage" options is deprecated, please use "blog.articlePerPage" instead');
        blogOptions["articlePerPage"] = blogOptions["perPage"];
        delete blogOptions["perPage"];
    }
    if ("autoExcerpt" in blogOptions) {
        utils_2.logger.error('"blog.autoExcerpt" options is no longer supported, please use "plugins.blog.autoExcerpt" instead');
        delete blogOptions["autoExcerpt"];
    }
};
/**
 * @deprecated You should use V2 standard options and avoid using it
 */
const handleFooterOptions = (options) => {
    if (typeof options["footer"] === "object" && options["footer"]) {
        const footer = options["footer"];
        if ("copyright" in footer) {
            utils_2.logger.warn('"footer.copyright" options is deprecated, please use "copyright" instead');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options["copyright"] = footer["copyright"];
        }
        if ("display" in footer) {
            utils_2.logger.warn('"footer.display" options is deprecated, please use "displayFooter" instead');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options["displayFooter"] = footer["display"];
        }
        if ("content" in footer) {
            utils_2.logger.warn('"footer.content" options is deprecated, please use "footer" instead');
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            options["footer"] = footer["content"];
        }
        else
            delete options["footer"];
    }
};
/**
 * @deprecated You should use V2 standard options and avoid using it
 */
const covertThemeConfig = (themeOptions) => {
    // ensure plugins
    const plugins = (themeOptions["plugins"] =
        themeOptions["plugins"] || {});
    DEPRECATED_THEME_OPTIONS.forEach(([deprecatedOption, newOption]) => (0, utils_1.deprecatedLogger)({
        options: themeOptions,
        deprecatedOption,
        newOption,
        scope: "themeConfig",
    }));
    DROPPED_THEME_OPTIONS.forEach((item) => (0, utils_1.droppedLogger)(themeOptions, ...item));
    // handle navbar
    if ("navbar" in themeOptions)
        themeOptions["navbar"] = (0, navbar_1.covertNavbarConfig)(themeOptions["navbar"]);
    // handle sidebar
    if ("sidebar" in themeOptions)
        themeOptions["sidebar"] = (0, sidebar_1.convertSidebarConfig)(themeOptions["sidebar"]);
    // handle footer
    handleFooterOptions(themeOptions);
    // handle blog
    if (typeof themeOptions["blog"] === "object" && themeOptions["blog"]) {
        handleBlogOptions(themeOptions["blog"]);
        if (!plugins["blog"])
            plugins["blog"] = true;
    }
    // handle encrypt
    if (typeof themeOptions["encrypt"] === "object" && themeOptions["encrypt"]) {
        const encrypt = themeOptions["ecrypt"];
        if ("global" in encrypt && typeof encrypt["global"] !== "boolean") {
            utils_2.logger.warn('Setting admin password with "encrypt.global" in V1 is deprecated in V2, please use "encrypt.admin" instead.');
            encrypt["admin"] = encrypt["global"];
        }
        if ("status" in encrypt) {
            utils_2.logger.warn('"encrypt.status" is deprecated, please use "encrypt.global" instead.');
            encrypt["gloabl"] = encrypt["status"] === "global";
            delete encrypt["status"];
        }
    }
    if ("locales" in themeOptions &&
        typeof themeOptions["locales"] === "object") {
        Object.values(themeOptions["locales"]).forEach((localeConfig) => {
            DEPRECATED_THEME_OPTIONS.forEach(([deprecatedOption, newOption]) => (0, utils_1.deprecatedLogger)({
                options: localeConfig,
                deprecatedOption,
                newOption,
                scope: "themeConfig.locales",
            }));
            DROPPED_THEME_OPTIONS.forEach((item) => (0, utils_1.droppedLogger)(localeConfig, ...item));
            // handle navbar
            if ("navbar" in localeConfig)
                localeConfig["navbar"] = (0, navbar_1.covertNavbarConfig)(localeConfig["navbar"]);
            // handle sidebar
            if ("sidebar" in localeConfig)
                localeConfig["sidebar"] = (0, sidebar_1.convertSidebarConfig)(localeConfig["sidebar"]);
            // handle footer
            handleFooterOptions(localeConfig);
            // handle blog
            if (typeof localeConfig["blog"] === "object" && localeConfig["blog"]) {
                handleBlogOptions(localeConfig["blog"]);
                if (!plugins["blog"])
                    plugins["blog"] = true;
            }
        });
    }
    return themeOptions;
};
exports.covertThemeConfig = covertThemeConfig;
//# sourceMappingURL=theme.js.map