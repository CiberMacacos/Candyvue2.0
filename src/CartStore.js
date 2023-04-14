import { defineStore } from "pinia";

export const cartProducts = defineStore('cart', {
  state: () => ({
    cart: //localStorage -> JSON.parse....
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
