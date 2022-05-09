import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/jobs/JobsView.vue"),
  },
  {
    path: "/jobs/:id",
    name: "jobDetail",
    component: () =>
      import(/* webpackChunkName: "jobs" */ "../views/jobs/JobDetailView.vue"),
    props: true,
  },
  // redirect
  {
    path: "/all-jobs", // old url
    redirect: "/jobs" // new url
  },
  // 404 Page
  {
    path: "/:catchAll(.*)", // regex, catch any route that doesn't exists
    name: "Not Found",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
