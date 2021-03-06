"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hope = exports.hopeTheme = void 0;
const utils_1 = require("@vuepress/utils");
const alias_1 = require("./alias");
const bundler_1 = require("./bundler");
const extendsPage_1 = require("./extendsPage");
const compact_1 = require("./compact");
const layout_1 = require("./layout");
const plugins_1 = require("./plugins");
const prepare_1 = require("./prepare");
const socialMedia_1 = require("./socialMedia");
const status_1 = require("./status");
const themeConfig_1 = require("./themeConfig");
const themeColor_1 = require("./themeColor");
const hopeTheme = (options, 
// TODO: remove this option in stable release
legacy = false) => (app) => {
    const { plugins = {}, hostname, iconAssets, iconPrefix, addThis, backToTop, ...themeOptions } = legacy
        ? (0, compact_1.covertThemeConfig)(options)
        : options;
    if (legacy)
        (0, compact_1.checkStyle)(app);
    const status = (0, status_1.getStatus)(options);
    const themeConfig = (0, themeConfig_1.getThemeConfig)(app, themeOptions, status);
    const icons = status.enableBlog ? (0, socialMedia_1.checkSocialMediaIcons)(themeConfig) : {};
    (0, plugins_1.usePlugin)(app, plugins);
    if (app.env.isDebug)
        console.log("Theme plugin options:", plugins);
    return {
        name: "vuepress-theme-hope",
        alias: (0, alias_1.resolveAlias)(app.env.isDebug),
        define: () => ({
            ENABLE_BLOG: status.enableBlog,
            ENABLE_VISITOR: status.enableVisitor,
        }),
        extendsBundlerOptions: (config, app) => (0, bundler_1.updateBundlerConfig)(config, app),
        extendsPage: (page) => {
            if (legacy)
                page.frontmatter = (0, compact_1.covertFrontmatter)(page.frontmatter, page.filePathRelative || "");
            (0, extendsPage_1.extendsPage)(themeConfig, plugins, page, app.env.isDev);
        },
        onPrepared: () => Promise.all([
            (0, prepare_1.prepareSidebarData)(app, themeConfig),
            (0, themeColor_1.prepareThemeColorScss)(app, themeConfig),
            (0, prepare_1.prepareSocialMediaIcons)(app, icons),
        ]).then(() => void 0),
        plugins: (0, plugins_1.getPluginConfig)(plugins, themeConfig, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        {
            addThis,
            backToTop,
            hostname,
            iconAssets,
            iconPrefix,
        }, legacy),
        layouts: (0, layout_1.getLayoutConfig)(app, plugins),
        templateBuild: utils_1.path.resolve(__dirname, "../../templates/index.build.html"),
        clientConfigFile: (app) => (0, prepare_1.prepareConfigFile)(app, status),
    };
};
exports.hopeTheme = hopeTheme;
exports.hope = exports.hopeTheme;
//# sourceMappingURL=theme.js.map