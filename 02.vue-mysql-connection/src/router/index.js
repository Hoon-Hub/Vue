import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from "@/components/LoginForm";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginForm",
    component: LoginForm,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
