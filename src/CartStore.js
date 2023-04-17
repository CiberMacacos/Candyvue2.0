import { defineStore } from "pinia";
import { useProductStore } from './productsStore.js'
import Swal from "sweetalert2";
import alertColor from "./utils.js"
import { useLocalStorage } from "@vueuse/core";

export const useCartProducts = defineStore('cart', {
  state: () => ({
    cartProducts: []
    //cartProducts: useLocalStorage('cart', [])//localStorage -> JSON.parse....
  }),

  getters: {
    getCart() {
      return this.cartProducts;
    },

    totalProducts() {
      return this.cartProducts.length;
    }
  },

  actions: {
    addProduct(item) {
      let index = this.cartProducts.findIndex(product => product.id == item.id);
      if (index !== -1) {
        this.cartProducts[index].quantity += 1;
        //alertColor("Enhorabuena", "El producto ha sido añadido correctamente", "success", "Seguir comprando")
      } else {
        this.cartProducts.push(item);
        alertColor("Enhorabuena", "El producto ha sido añadido correctamente", "success", "Seguir comprando")
      } //esto no iría aquí, iría en ProductList y en Recomendados
    },

    decreaseProduct(item) {
      let index = this.cartProducts.findIndex(product => product.id == item.id);
      if (index !== -1) {
        this.cartProducts[index].quantity -= 1;
        if (this.cartProducts[index].quantity === 0) {
          this.cartProducts = this.cartProducts.filter(product => product.id !== item.id);
        }
      }
    },

    removeProduct(item) {
      this.cartProducts = this.cartProducts.filter(product => product.id !== item.id);
    },

    payProducts() {
      //aquí iría el código de Stripe para vincularlo al botón Pagar
    },

    restartCart() {
      this.cartProducts = [];
    }
  }
});
