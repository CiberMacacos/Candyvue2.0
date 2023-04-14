import { defineStore } from "pinia";

export const useCartProducts = defineStore('cart', {
  state: () => ({
    cart: []//localStorage -> JSON.parse....
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
