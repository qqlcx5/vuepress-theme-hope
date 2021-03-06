"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covertNavbarConfig = void 0;
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const handleNavbarConfig = (config) => config
    .map((item) => {
    if (typeof item === "string")
        return item;
    if (typeof item === "object" && item) {
        (0, utils_1.deprecatedLogger)({
            options: item,
            deprecatedOption: "items",
            newOption: "children",
            scope: "navbar",
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (Array.isArray(item.children))
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handleNavbarConfig(item.children);
        return item;
    }
    return null;
})
    .filter((item) => item !== null);
/**
 * @deprecated You should use V2 standard navbar config and avoid using it
 */
const covertNavbarConfig = (config) => {
    if (config === false)
        return false;
    if (Array.isArray(config))
        return handleNavbarConfig(config);
    utils_2.logger.error('"navbar" config should be an array');
    return false;
};
exports.covertNavbarConfig = covertNavbarConfig;
//# sourceMappingURL=navbar.js.map