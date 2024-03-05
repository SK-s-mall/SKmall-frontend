<template>
  <div>
    <h1>Main Page</h1>
    <router-link :to="`/signin`">로그인</router-link>
    <br/>
    <router-link :to="`/signup`">회원가입</router-link>
  </div>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';

const routes = [
  { path: '/', redirect:'/'},
  { path: '/signin', component: Signin },
  { path: '/signup', component: Signup }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
