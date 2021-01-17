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
    path: "/about",
    name: "About",
    component: loadView("About")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
