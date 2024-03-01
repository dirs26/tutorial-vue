import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/HelloWorld.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./components/consume.vue"),
    },
  ],
});

const app = createApp(App);
app.use(router);

createApp(App).mount("#app");
