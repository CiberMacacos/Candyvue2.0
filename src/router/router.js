import { createRouter, createWebHistory } from "vue-router";

import Mainkoa from "../views/Mainkoa.vue"
import Infokoa from "../views/Infokoa.vue"
import Constructionkoa from "../views/Constructionkoa.vue"
import Cartkoa from "../views/Cartkoa.vue"

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
    path: "/productlist/:country",
    props:true,
    name: "ProductList",
    component: () => import('../views/ProductListKoa.vue')
  },
  {
    path: "/detailproduct/:id",
    props:true,
    name: "DetailProduct",
    component: DetailProductkoa,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
