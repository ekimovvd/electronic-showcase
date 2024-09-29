import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { UIInput, UIButton } from "@/components/ui";

import { AuthLoginRequestFactory } from "@/shared/repository/modules/auth/factory";
import { LocalStorageName, RouteName } from "@/shared/constants/enums";

const PASSWORD_MIN_LENGTH = 8;

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    UIInput,
    UIButton,
  },
  data() {
    return {
      isLoading: false,
      authLoginRequest: AuthLoginRequestFactory(),
      authRepository: this.$projectServices.authRepository,
    };
  },
  computed: {
    isEmailValidate(): boolean {
      const { email } = this.authLoginRequest;

      return (
        !!email && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
      );
    },

    isPasswordValidate(): boolean {
      return this.authLoginRequest.password.length >= PASSWORD_MIN_LENGTH;
    },

    isEmailMessageShow(): boolean {
      return !!this.authLoginRequest.email && !this.isEmailValidate;
    },

    isPasswordMessageShow(): boolean {
      return !!this.authLoginRequest.password && !this.isPasswordValidate;
    },

    isLoginDisabled(): boolean {
      return (
        !this.isEmailValidate || !this.isPasswordValidate || this.isLoading
      );
    },
  },
  methods: {
    async handleLogin(): Promise<void> {
      try {
        this.isLoading = true;

        const { token } = await this.authRepository.login(
          this.authLoginRequest
        );

        localStorage.setItem(LocalStorageName.token, token);

        void this.$router.push({ name: RouteName.main });
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
