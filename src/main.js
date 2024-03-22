import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

// import 'animate.css'


import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Map from './components/map.vue'
import Stats from './components/Stats.vue'
import About from './components/About.vue'
import Cover from './components/Cover.vue'
import Book from './components/Book.vue'

const routes =[
{path:'/Dashboard',component:Home},
{path:'/Login',component:Login},
{path:'/Map',component:Map},
{path:'/Stats',component:Stats},
{path:'/About',component:About},
{path:'/',component:Cover},
{path:'/Book',component:Book}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp(App);

app.use(router).mount("#app");
