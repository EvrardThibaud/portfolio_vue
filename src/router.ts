import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Maintenance.vue"),
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
    path: "/graphic-design",
    name: "design",
    component: () => import("./pages/GraphicDesign.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error404",
    component: () => import("./pages/Error404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
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
