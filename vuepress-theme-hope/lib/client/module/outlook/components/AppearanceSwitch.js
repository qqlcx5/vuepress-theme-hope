import { computed, defineComponent, h } from "vue";
import { AutoIcon, DarkIcon, LightIcon, } from "@theme-hope/module/outlook/components/icons";
import { useThemeData } from "@theme-hope/composables";
import { useDarkMode } from "@theme-hope/module/outlook/composables";
import "../styles/appearance-switch.scss";
export default defineComponent({
    name: "AppearanceSwitch",
    setup() {
        const themeData = useThemeData();
        const { status } = useDarkMode();
        const darkmode = computed(() => themeData.value.darkmode);
        const toggleDarkMode = () => {
            if (darkmode.value === "switch") {
                status.value = { light: "dark", dark: "auto", auto: "light" }[status.value];
            }
            else
                status.value = status.value === "light" ? "dark" : "light";
        };
        return () => h("button", {
            id: "appearance-switch",
            onClick: () => toggleDarkMode(),
        }, [
            h(AutoIcon, {
                style: {
                    display: status.value === "auto" ? "block" : "none",
                },
            }),
            h(DarkIcon, {
                style: {
                    display: status.value === "dark" ? "block" : "none",
                },
            }),
            h(LightIcon, {
                style: {
                    display: status.value === "light" ? "block" : "none",
                },
            }),
        ]);
    },
});
//# sourceMappingURL=AppearanceSwitch.js.map