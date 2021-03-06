"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covertFrontmatter = void 0;
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const DEPRECATED_FRONTMATTER_OPTIONS = [
    ["authors", "author"],
    ["categories", "category"],
    ["tags", "tags"],
    ["time", "date"],
    ["visitor", "pageview"],
    ["sidebarDepth", "headerDepth"],
    ["copyrightText", "copyright"],
    ["anchorDisplay", "toc"],
    ["updateTime", "lastUpdated"],
    ["contributor", "contributors"],
    ["editLinks", "editLink"],
];
const DEPRECATED_HOME_FRONTMATTER_OPTIONS = [
    ["title", "heroText"],
    ["darkHeroImage", "heroImageDark"],
    ["action", "actions"],
];
const DROPPED_FRONTMATTER_OPTIONS = [
    ["metaTitle", "Pleae use custom resolver to set metaTitle."],
    ["mediaLink", "Social mediea links are no longer displayed in footer."],
    ["password", "Simple password protection is no longer supported."],
    ["search", "Search plugin no longer support this option."],
];
/**
 * @deprecated You should use V2 standard frontmatters and avoid using it
 */
const covertFrontmatter = (frontmatter, filePathRelative = "") => {
    DEPRECATED_FRONTMATTER_OPTIONS.forEach(([deprecatedOption, newOption]) => (0, utils_1.deprecatedLogger)({
        options: frontmatter,
        deprecatedOption,
        newOption,
        scope: `${filePathRelative || ""} frontmatter`,
    }));
    DROPPED_FRONTMATTER_OPTIONS.forEach((item) => (0, utils_1.droppedLogger)(frontmatter, ...item, `${filePathRelative ? `Found in ${filePathRelative}` : ""}`));
    if ("meta" in frontmatter) {
        utils_2.logger.warn(`"meta" in frontmatter is deprecated in V2, please use "head" instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
        frontmatter["head"] = [
            ...(frontmatter["head"] || []),
            frontmatter["meta"].map((item) => ["meta", item]),
        ];
        delete frontmatter["meta"];
    }
    if ("canonicalUrl" in frontmatter) {
        utils_2.logger.warn(`"canonicalUrl" in frontmatter is deprecated, please use "head" instead.${filePathRelative ? `Found in ${filePathRelative}` : ""}`);
        frontmatter["head"] = [
            ...(frontmatter["head"] || []),
            ["link", { rel: "canonical", href: frontmatter["canonicalUrl"] }],
        ];
        delete frontmatter["canonicalUrl"];
    }
    // check homepage
    if (frontmatter["home"] === true && !("layout" in frontmatter)) {
        DEPRECATED_HOME_FRONTMATTER_OPTIONS.forEach(([deprecatedOption, newOption]) => (0, utils_1.deprecatedLogger)({
            options: frontmatter,
            deprecatedOption,
            newOption,
            scope: `${filePathRelative || ""} frontmatter`,
        }));
    }
    return frontmatter;
};
exports.covertFrontmatter = covertFrontmatter;
//# sourceMappingURL=frontmatter.js.map