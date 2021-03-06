"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineHopeConfig = exports.defineThemeConfig = exports.defineSidebarObjectConfig = exports.defineSidebarArrayConfig = exports.defineSidebarConfig = exports.defineNavbarConfig = void 0;
const theme_1 = require("./theme");
const theme_2 = require("../theme");
const utils_1 = require("../utils");
/**
 * @deprecated use `navbar` instead
 */
const defineNavbarConfig = (config) => {
    utils_1.logger.warn('"defineNavbarConfig" is deprecated, please import and use "navbar" from vuepress-theme-hope instead.');
    return config;
};
exports.defineNavbarConfig = defineNavbarConfig;
/**
 * @deprecated use `sidebar` instead
 */
const defineSidebarConfig = (config) => {
    utils_1.logger.warn('"defineSidebarConfig" is deprecated, please import and use "sidebar" from vuepress-theme-hope instead.');
    return config;
};
exports.defineSidebarConfig = defineSidebarConfig;
/**
 * @deprecated use `arraySidebar` instead
 */
const defineSidebarArrayConfig = (config) => {
    utils_1.logger.warn('"defineSidebarArrayConfig" is deprecated, please import and use "arraySidebar" from vuepress-theme-hope instead.');
    return config;
};
exports.defineSidebarArrayConfig = defineSidebarArrayConfig;
/**
 * @deprecated use `objectSidebar` instead
 */
const defineSidebarObjectConfig = (config) => {
    utils_1.logger.warn('"defineSidebarObjectConfig" is deprecated, please import and use "objectSidebar" from vuepress-theme-hope instead.');
    return config;
};
exports.defineSidebarObjectConfig = defineSidebarObjectConfig;
/**
 * @deprecated import and use `hopeTheme` instead
 */
const defineThemeConfig = (themeConfig) => {
    utils_1.logger.warn('"defineThemeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    return (0, theme_1.covertThemeConfig)(themeConfig);
};
exports.defineThemeConfig = defineThemeConfig;
/**
 * @deprecated import and use `hopeTheme` instead
 */
const defineHopeConfig = (config) => {
    utils_1.logger.warn('"defineHopeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    // check themeConfig
    if ("themeConfig" in config && typeof config["themeConfig"] === "object") {
        config.theme = (0, theme_2.hopeTheme)(config["themeConfig"], true);
        utils_1.logger.warn('"themeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    }
    // check theme
    if (typeof config.theme !== "function")
        config.theme = (0, theme_2.hopeTheme)({});
    return config;
};
exports.defineHopeConfig = defineHopeConfig;
//# sourceMappingURL=helper-v2.js.map