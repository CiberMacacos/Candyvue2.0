import { createRouter, createWebHistory } from "vue-router";
import Mainkoa from "../views/Mainkoa.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Mainkoa,
  },
  {
    path: "/info",
    props:true,
    name: "Info",
    component: () => import('../views/Infokoa.vue')
  },
  {
    path: "/construction",
    props:true,
    name: "Construction",
    component: () => import('../views/Constructionkoa.vue')
  },
  {
    path: "/cart",
    props:true,
    name: "Cart",
    component: () => import('../views/Cartkoa.vue')
  },
  {
    path: "/productlist/:country",
    props: true,
    name: "ProductList",
    component: () => import('../views/ProductListKoa.vue')
  },
  {
    path: "/detailproduct/:id",
    props: true,
    name: "DetailProduct",
    component: () => import('../views/DetailProductkoa.vue')
  },
  {
    path: "/success",
    name: "SuccessPay",
    component: () => import('../views/SuccessPay.vue')
  },
  {
    path: "/error",
    name: "ErrorPay",
    component: () => import('../views/ErrorPay.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
