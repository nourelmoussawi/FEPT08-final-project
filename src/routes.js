import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "./HomeView.vue";
const routes = [{ path: "/", name: "Home", component: Home }];
const router = createRouter({
  history: "",
  routes,
});
export default router;
