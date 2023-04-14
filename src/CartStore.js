import { defineStore } from "pinia";
import { useProductStore } from "../productsStore.js"

export const cartProducts = defineStore('cart', {
  state: () => ({
    cart: //localStorage
  }),

  getters: {
    totalProducts() {

    },

    accumulateProducts() {

    },

    restartCart() {

    }
  },

  actions: {
    addProduct() {

    },

    removeProduct() {

    },

    payProducts() {

    }
  }
});
