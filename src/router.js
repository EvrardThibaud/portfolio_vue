import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("./pages/Projects.vue"),
  },
  {
    path: "/project/:name:skills:src",
    name: "project",
    component: () => import("./pages/Project.vue"),
  },
  ,
  {
    path: "/:catchAll(.*)", 
    name: "Error404",
    component: () => import("./pages/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
