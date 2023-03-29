import { createRouter, createWebHistory } from "vue-router";

import Mainkoa from "../views/Mainkoa.vue"
import Infokoa from "../views/Infokoa.vue"
import Constructionkoa from "../views/Constructionkoa.vue"
import Cartkoa from "../views/Cartkoa.vue"
import ProductListkoa from "../views/ProductListKoa.vue"
import DetailProductkoa from "../views/DetailProductkoa.vue"

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
  {
    path: "/detailproduct",
    name: "DetailProduct",
    component: DetailProductkoa,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
