import { computed, defineComponent, h, resolveComponent } from "vue";
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import FadeSlideY from "@theme-hope/components/transitions/FadeSlideY";
import SkipLink from "@theme-hope/components/SkipLink";
import { useMobile } from "@theme-hope/composables";
import { useThemeData, useThemeLocaleData } from "@theme-hope/composables";
export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Layout",
    setup() {
        const themeData = useThemeData();
        const themeLocale = useThemeLocaleData();
        const page = usePageData();
        const frontmatter = usePageFrontmatter();
        const isMobile = useMobile();
        const sidebarDisplay = computed(() => themeLocale.value.blog.sidebarDisplay ||
            themeData.value.blog.sidebarDisplay ||
            "mobile");
        return () => [
            h(SkipLink),
            h(resolveComponent("CommonWrapper"), {}, {
                default: () => frontmatter.value.home
                    ? h(resolveComponent("HomePage"))
                    : h(FadeSlideY, () => h(resolveComponent("NormalPage"), { key: page.value.path })),
                ...(ENABLE_BLOG && sidebarDisplay.value !== "none"
                    ? { navScreenBottom: () => h(resolveComponent("BloggerInfo")) }
                    : {}),
                ...(ENABLE_BLOG &&
                    !isMobile.value &&
                    sidebarDisplay.value === "always"
                    ? { sidebar: () => h(resolveComponent("BloggerInfo")) }
                    : {}),
            }),
        ];
    },
});
//# sourceMappingURL=Layout.js.map