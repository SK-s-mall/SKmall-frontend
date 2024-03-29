// import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router';
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';

const routes = [
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
