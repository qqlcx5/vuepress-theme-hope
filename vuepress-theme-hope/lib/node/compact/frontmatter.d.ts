import type { HopeThemePageFrontmatter } from "../../shared";
/**
 * @deprecated You should use V2 standard frontmatters and avoid using it
 */
export declare const covertFrontmatter: (frontmatter: Record<string, unknown>, filePathRelative?: string) => HopeThemePageFrontmatter & Record<string, unknown>;
