"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.checkBundlerOptions = exports.themeConfig = exports.sidebarConfig = exports.navbarConfig = void 0;
const helper_v2_1 = require("./helper-v2");
const theme_1 = require("./theme");
const utils_1 = require("../utils");
/**
 * @deprecated use `navbar` instead
 */
const navbarConfig = (config) => {
    utils_1.logger.warn('"navbarConfig" is deprecated, please import and use "navbar" from vuepress-theme-hope instead.');
    return config;
};
exports.navbarConfig = navbarConfig;
/**
 * @deprecated use `sidebar` instead
 */
const sidebarConfig = (config) => {
    utils_1.logger.warn('"sidebarConfig" is deprecated, please import and use "sidebar" from vuepress-theme-hope instead.');
    return config;
};
exports.sidebarConfig = sidebarConfig;
/**
 * @deprecated import and use `hopeTheme` instead
 */
const themeConfig = (themeConfig) => {
    utils_1.logger.warn('"themeConfig" is deprecated, please import "hopeTheme" from vuepress-theme-hope and use "theme : hopeTheme(themeConfig)" instead.');
    return (0, theme_1.covertThemeConfig)(themeConfig);
};
exports.themeConfig = themeConfig;
const checkMarkdownOptions = (options = {}) => {
    // lineNumbers
    if ("lineNumbers" in options) {
        utils_1.logger.warn('"markdown.lineNumbers" is deprecated in VuePress2, please use "markdown.code.lineNumbers" instead.');
        options.code = options.code ?? {};
        if (typeof options.code === "object")
            options.code.lineNumbers = options["lineNumbers"];
        delete options["lineNumbers"];
    }
    // slugify
    if ("slugify" in options) {
        utils_1.logger.error('"markdown.slugify" is no longger supported in VuePress2.\nIf you want to change the slugify function anyway, set the following options separately:\n· markdown.anchor.slugify\n· markdown.toc.slugify\n· markdown.extractHeaders.slugify');
        delete options["slugify"];
    }
    // pageSuffix
    if ("pageSuffix" in options) {
        utils_1.logger.error('"markdown.pageSuffix" is no longger supported in VuePress2.');
        delete options["pageSuffix"];
    }
    // externalLinks
    if ("externalLinks" in options) {
        utils_1.logger.error('"markdown.externalLinks" is no longger supported in VuePress2, please use "markdown.links.externalAttrs" instead.');
        delete options["externalLinks"];
    }
    // plugins
    if ("plugins" in options) {
        utils_1.logger.error('"markdown.plugins" is no longger supported in VuePress2, please use "extendsMarkdown" hook instead.');
        delete options["plugins"];
    }
};
const checkPluginOptions = (plugins) => {
    // check plugin array
    if (Array.isArray(plugins))
        return plugins.flat().filter((item) => {
            if (typeof item === "function")
                return true;
            if (typeof item === "object") {
                const { name } = item;
                // check name
                if (typeof name !== "string") {
                    utils_1.logger.error('VuePress2 requires "name" option in plugins and it should strict equal it\'s package name.');
                    return false;
                }
                // check name
                if (!name.startsWith("vuepress-plugin-") &&
                    !name.match(/@.*\/vuepress-plugin-/)) {
                    utils_1.logger.error("VuePress2 requires plugin name to strict equal a package name, you should fix it");
                    return false;
                }
                // check renamed options
                [
                    // v1
                    ["ready", "onPrepared"],
                    ["updated", "onWatched"],
                    ["generated", "onGenerated"],
                    ["extendMarkdown", "extendsMarkdown"],
                    ["extendPageData", "extendsPage"],
                    // v2
                    ["templateSSR", "templateBuild"],
                ].forEach(([deprecatedOption, newOption]) => {
                    if (deprecatedOption in item)
                        utils_1.logger.warn(`"${deprecatedOption}" options in plugin options is deprecated in VuePress2, please use "${newOption}" instead.`);
                    // eslint-disable-next-line
                    item[newOption] = item[deprecatedOption];
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    delete item[deprecatedOption];
                });
                // check removed options
                [
                    // v1
                    "plugins",
                    "chainMarkdown",
                    "extendsCli",
                    "configureWebpack",
                    "chainWebpack",
                    "beforeDevServer",
                    "afterDevServer",
                    "additionalPages",
                    "clientDynamicModules",
                    "enhanceAppFiles",
                    "globalUIComponents",
                    "clientRootMixin",
                    // v2
                    "clientAppEnhanceFiles",
                    "clientAppRootComponentFiles",
                    "clientAppSetupFiles",
                ].forEach((removedOption) => {
                    if (removedOption in item)
                        utils_1.logger.error(`"${removedOption}" option in plugin options is no longer supported in VuePress2, make sure you are using a VuePress2 plugin.`);
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    delete item[removedOption];
                });
            }
            return false;
        });
    // check whether plugins is an object
    if (typeof plugins === "object") {
        utils_1.logger.error('VuePress2 does not support object format "plugins" anymore, you should import plugins and call them in an array.');
        return [];
    }
    return [];
};
const checkBundlerOptions = (config) => {
    [
        "postcss",
        "stylus",
        "scss",
        "sass",
        "less",
        "chainWebpack",
        "configureWebpack",
        "beforeDevServer",
        "afterDevServer",
        "evergreen",
    ].forEach((removedOption) => {
        if (removedOption in config)
            utils_1.logger.error(`"${removedOption}" option in config file is no longer supported in VuePress2, you should set it in bundler options.`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        delete config[removedOption];
    });
};
exports.checkBundlerOptions = checkBundlerOptions;
/**
 * @deprecated import and use `hopeTheme` instead
 */
const config = (userConfig) => {
    checkMarkdownOptions(userConfig["markdown"]);
    (0, exports.checkBundlerOptions)(userConfig);
    userConfig["plugins"] = checkPluginOptions(userConfig["plugins"]);
    // check renamed options
    [
        ["ready", "onPrepared"],
        ["updated", "onWatched"],
        ["generated", "onGenerated"],
        ["extendMarkdown", "extendsMarkdown"],
        ["extendPageData", "extendsPage"],
        ["patterns", "pagePatterns"],
        ["templateSSR", "templateBuild"],
    ].forEach(([deprecatedOption, newOption]) => {
        if (deprecatedOption in userConfig)
            utils_1.logger.warn(`"${deprecatedOption}" option in config file is deprecated in VuePress2, please use "${newOption}" instead.`);
        // eslint-disable-next-line
        userConfig[newOption] = userConfig[deprecatedOption];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        delete userConfig[deprecatedOption];
    });
    // check removed options
    [
        ["chainMarkdown", 'please use "extendsMarkdown" instead'],
        ["extendsCli"],
        ["configureWebpack", 'please set options in "bundler" instead'],
        ["chainWebpack", 'please set options in "bundler" instead'],
        [
            "additionalPages",
            'please use "app.pages.push(createPage())" in "onInitialized" hook',
        ],
        [
            "clientDynamicModules",
            'please use "app.writeTemp()" in "onPrepared" hook',
        ],
        ["clientAppRootComponentFiles", 'please use "clientConfigFile" instead'],
        ["clientAppSetupFiles", 'please use "clientConfigFile" instead'],
        ["clientAppEnhanceFiles", 'please use "clientConfigFile" instead'],
    ].forEach(([removedOption, hint = ""]) => {
        if (removedOption in userConfig)
            utils_1.logger.error(`"${removedOption}" option in config is no longer supported in VuePress2${hint ? `, ${hint}.` : "."}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        delete userConfig[removedOption];
    });
    // other options
    if ("extraWatchFiles" in userConfig) {
        utils_1.logger.error('"extraWatchFiles" options is removed in VuePress2, you should use "onWatched" hook.');
        delete userConfig["extraWatchFiles"];
    }
    return (0, helper_v2_1.defineHopeConfig)(userConfig);
};
exports.config = config;
//# sourceMappingURL=helper-v1.js.map