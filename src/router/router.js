import { createRouter, createWebHistory } from "vue-router";

import Mainkoa from "../views/Mainkoa.vue"
import Infokoa from "../views/Infokoa.vue"
import Constructionkoa from "../views/Constructionkoa.vue"
import Cartkoa from "../views/Cartkoa.vue"
import ProductListkoa from "../views/ProductListKoa.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Mainkoa,
  },
  {
    path: "/info",
    name: "Info",
    component: Infokoa,
  },
  {
    path: "/construction",
    name: "Construction",
    component: Constructionkoa,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cartkoa,
  },
  {
    path: "/productlist",
    name: "ProductList",
    component: ProductListkoa,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
