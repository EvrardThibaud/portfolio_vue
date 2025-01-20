import { createRouter, createWebHistory } from "vue-router";
import Projects from "./views/Projects.vue";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
