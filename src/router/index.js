import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// 此种方式引入的组件在项目打包的时候会直接编译在主文件中
import { isLogined } from "../utils/tools";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /* {
    path: '/hometwo',
    name: 'Hometwo',
    component: () => import('../views/Hometwo/index.vue'),

    children: [{
      path: 'recommend',
      name: 'Recommend',
      component: () => import('../views/Hometwo/Recommend/index.vue'),
    }]
  }, */
  {
    path: "/cart",
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
    // 组件懒加载，此种引入方式加载的组件是被编译成单独的js文件，在使用的时候才加载
    // 在项目上线做性能优化的时候建议使用此方法
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      needLogin: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});

export default router;
