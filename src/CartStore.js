import { defineStore } from "pinia";
import { useProductStore } from './productsStore.js'

export const useCartProducts = defineStore('cart', {
  state: () => ({
    cartProducts: []//localStorage -> JSON.parse....
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
      if (i !== -1) {
        this.cartProducts[i].quantity += 1;
      } else {
        item.quantity = 1;
        this.cartProducts.push(item);
      } //esto no iría aquí, iría en ProductList y en Recomendados
    },

    decreaseProduct(item) {
      let index = this.cartProducts.findIndex(product => product.id == item.id);
      if (i !== -1) {
        this.cartProducts[i].quantity -= 1;
        if (this.cartProducts[i].quantity === 0) {
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
