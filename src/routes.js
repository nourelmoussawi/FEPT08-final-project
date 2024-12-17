
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue"; 
import News from "./views/News.vue"; 
import CryptoLeaders from "./views/CryptoLeaders.vue"; 

const routes = [{ path: "/", name: "Home", component: Home },{ path: "/news", name: "News", component: News }, { path: "/crypto-leaders", name: "CryproLeaders", component: CryptoLeaders }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
