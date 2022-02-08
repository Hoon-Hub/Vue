<template>
  <v-app class="main-content-area">
    <login-form></login-form>
  </v-app>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
  },
  data: () => ({
    //
  }),
};
</script>
