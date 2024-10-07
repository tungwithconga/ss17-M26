
import { createRouter, createWebHistory } from "vue-router";
let isLoggedIn = false;

// B1: Định nghĩa danh sách các route
const router = createRouter({
  history: createWebHistory(),
  routes: [
   {
    path:"/",
    alias: ["/home"],
    name:"home",
    component: import(/* webpackChunkName: "HomePage" */ "@/views/HomePage.vue"),
   },
   {
    path:"/about",
    name:"About",
    component: import(/* webpackChunkName: "AboutPage" */ "@/views/AboutPage.vue"),
   },
   {
    path:"/contact",
    alias: ["/get-in-touch"],
    name:"Contact",
    component: import(/* webpackChunkName: "ContactPage" */ "@/views/ContactPage.vue"),
   },
   {
    path:"/search",
    name:"Search",
    component: import(/* webpackChunkName: "ContactPage" */ "@/views/Search.vue"),
   },
   {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:import (/* webpackChunkName: "ContactPage" */ "@/views/NotFound.vue"),
  },
  {
    path:"/login",
    name:"Login",
    component: import(/* webpackChunkName: "LoginPage" */ "@/views/Login.vue"),
   },
   {
    path:"/dashboard",
    name:"Dashboard",
    component: import(/* webpackChunkName: "DashboardPage" */ "@/views/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
      // Kiểm tra nếu người dùng chưa đăng nhập, điều hướng về trang login
      if (!isLoggedIn) {
        next('/login');
      } else {
        next(); // Cho phép truy cập vào dashboard nếu đã đăng nhập
      }
    }
   },
   {
    path: '/admin',
    component:import (/* webpackChunkName: "admin" */"@/views/Admin.vue"),
    children: [
      {
        path: '',
        redirect: '/admin/manager-user',
      },
      {
        path: 'manager-user',
        component:import (/* webpackChunkName: "manager-user" */ "@/views/Users.vue"), 
      },
      {
        path: 'manager-product',
        component:import (/* webpackChunkName: "manager-product" */ "@/views/Products.vue"), 
      },
      {
        path: 'settings',
        component: import (/* webpackChunkName: "setting" */ "@/views/Settings.vue"), 
      },
    ],
   }
  ],
});

export default router;