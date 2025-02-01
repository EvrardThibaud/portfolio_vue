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
    path: "/project/:id",
    name: "project",
    component: () => import("./pages/Project.vue"),
  },
  {
    path: "/skills",
    name: "skills",
    component: () => import("./pages/Skills.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: () => import("./pages/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; 
    } else {
      return { top: 0 }; 
    }
  },
});

export default router;
