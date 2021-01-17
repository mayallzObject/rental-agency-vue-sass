import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home")
  },
  {
    path: "/:id",
    name: "Details",
    component: loadView("Details"),
    props: true
  },
  {
    path: "/realtors",
    name: "Realtors",
    component: loadView("Realtors")
  },
  {
    path: "/proposal",
    name: "Proposal",
    component: loadView("Proposal")
  },
  {
    path: "/contact",
    name: "Contact",
    component: loadView("Contact")
  },
  {
    path: "/careers",
    name: "Careers",
    component: loadView("Careers")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
