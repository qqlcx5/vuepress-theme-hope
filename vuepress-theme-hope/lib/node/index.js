"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineSidebarObjectConfig = exports.defineSidebarConfig = exports.defineSidebarArrayConfig = exports.defineNavbarConfig = exports.defineThemeConfig = exports.defineHopeConfig = exports.covertThemeConfig = exports.convertSidebarConfig = exports.covertNavbarConfig = exports.covertFrontmatter = exports.themeConfig = exports.sidebarConfig = exports.navbarConfig = exports.config = void 0;
// TODO: remove in v2 stable version
const compact_1 = require("./compact");
Object.defineProperty(exports, "covertFrontmatter", { enumerable: true, get: function () { return 
    // v1
    compact_1.covertFrontmatter; } });
Object.defineProperty(exports, "covertNavbarConfig", { enumerable: true, get: function () { return compact_1.covertNavbarConfig; } });
Object.defineProperty(exports, "convertSidebarConfig", { enumerable: true, get: function () { return compact_1.convertSidebarConfig; } });
Object.defineProperty(exports, "covertThemeConfig", { enumerable: true, get: function () { return compact_1.covertThemeConfig; } });
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return compact_1.config; } });
Object.defineProperty(exports, "navbarConfig", { enumerable: true, get: function () { return compact_1.navbarConfig; } });
Object.defineProperty(exports, "sidebarConfig", { enumerable: true, get: function () { return compact_1.sidebarConfig; } });
Object.defineProperty(exports, "themeConfig", { enumerable: true, get: function () { return compact_1.themeConfig; } });
Object.defineProperty(exports, "defineHopeConfig", { enumerable: true, get: function () { return 
    // v2
    compact_1.defineHopeConfig; } });
Object.defineProperty(exports, "defineThemeConfig", { enumerable: true, get: function () { return compact_1.defineThemeConfig; } });
Object.defineProperty(exports, "defineNavbarConfig", { enumerable: true, get: function () { return compact_1.defineNavbarConfig; } });
Object.defineProperty(exports, "defineSidebarArrayConfig", { enumerable: true, get: function () { return compact_1.defineSidebarArrayConfig; } });
Object.defineProperty(exports, "defineSidebarConfig", { enumerable: true, get: function () { return compact_1.defineSidebarConfig; } });
Object.defineProperty(exports, "defineSidebarObjectConfig", { enumerable: true, get: function () { return compact_1.defineSidebarObjectConfig; } });
__exportStar(require("./themeConfig"), exports);
__exportStar(require("./helpers"), exports);
__exportStar(require("./locales"), exports);
__exportStar(require("./theme"), exports);
__exportStar(require("../shared"), exports);
exports.default = {
    config: compact_1.config,
    navbarConfig: compact_1.navbarConfig,
    sidebarConfig: compact_1.sidebarConfig,
    themeConfig: compact_1.themeConfig,
};
//# sourceMappingURL=index.js.map