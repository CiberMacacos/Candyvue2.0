import { defineStore } from "pinia";

export const useCartProducts = defineStore('cart', {
  state: () => ({
    items: []//localStorage -> JSON.parse....
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
    addProduct(item) {
      let index = this.items.findIndex(product => product.id == item.id);
      if (index !== -1) {
        this.products[index].quantity += 1;
      } else {
        item.quantity = 1;
        this.items.push(item);
      } //esto no iría aquí, iría en ProductList y en Recomendados
    },
    increaseProduct(item) {
      let index = this.items.findIndex(product => product.id == item.id);
      if (index !== -1) {
        this.items[index].quantity += 1;
      }
    },
    decreaseProduct(item) {
      let index = this.items.findIndex(product => product.id == item.id);
      if (index !== -1) {
        this.items[index].quantity -= 1;
        if (this.items[index].quantity === 0) {
          this.items = this.items.filter(product => product.id !== item.id);
        }
      }
    },
    removeProduct(item) {
      this.items = this.items.filter(product => product.id !== item.id);
    },

    payProducts() {

    }
  }
});
