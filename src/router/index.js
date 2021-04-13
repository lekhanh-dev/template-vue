import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import InfoUser from "../components/test_router/InfoUser.vue";
import page404 from "../components/test_router/page404.vue";
import UserPost from "../components/test_router/UserPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    // will match everything
    path: "*",
    name: "404",
    component: page404,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ["/home", "/ok"],
  },
  {
    path: "/my-cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/user/:id",
    name: "info-user",
    component: InfoUser,
    children: [{ path: "post", component: UserPost }],
    meta: { requiresAuth: true },
    // props: (route) => ({ query: route.query.q, a: route.query.ak }),
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  // base: "/app/",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // return { ...savedPosition, behavior: "smooth" };
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   console.log("ok nhe");
//   next(false);
// });

export default router;
