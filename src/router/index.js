import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Recipe from "../views/Recipe/Recipe.vue";
import Search from "../views/Search/Search.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/recipe/:id", name: "recipe", component: Recipe },
    { path: "/search/:query", name: "search", component: Search },
  ],
});

export default router;
