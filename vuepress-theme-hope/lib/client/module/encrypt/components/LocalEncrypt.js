import { defineComponent, h } from "vue";
import PasswordModal from "@theme-hope/module/encrypt/components/PasswordModal";
import { usePathEncrypt } from "@theme-hope/module/encrypt/composables";
export default defineComponent({
    name: "LocalEncrypt",
    setup(_props, { slots }) {
        const { isEncrypted, validateToken } = usePathEncrypt();
        return () => isEncrypted.value
            ? h(PasswordModal, { full: true, onVerify: validateToken })
            : (slots["default"]?.() || null);
    },
});
//# sourceMappingURL=LocalEncrypt.js.map