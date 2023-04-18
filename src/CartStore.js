import { defineStore } from "pinia";
import { useProductStore } from './productsStore.js'
import alertColor from "./utils.js"
import { useLocalStorage } from "@vueuse/core";

export const useCartProducts = defineStore('cart', {
  state: () => ({
    //cartProducts: []
    cartProducts: useLocalStorage('cartProducts', [])
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
        alertColor("¡Enhorabuena!", "El producto se ha añadido correctamente", "success", "Seguir comprando")
        //alertColor("Enhorabuena", "El producto ha sido añadido correctamente", "success", "Seguir comprando")
      } else {
        item.quantity = 1;
        this.cartProducts.push(item);
        alertColor("¡Enhorabuena!", "El producto se ha añadido correctamente", "success", "Seguir comprando")
      } //esto no iría aquí, iría en ProductList y en Recomendados
    },
    increaseProduct(id) {
      let index = this.cartProducts.findIndex(product => product.id == id.id);
      if (index !== -1) {
        this.cartProducts[index].quantity += 1;
      }
    },
    decreaseProduct(id) {
      let index = this.cartProducts.findIndex(product => product.id == id.id);
      if (index !== -1) {
        this.cartProducts[index].quantity -= 1;
        if (this.cartProducts[index].quantity === 0) {
          this.cartProducts = this.cartProducts.filter(product => product.id !== id.id);
        }
      }
    },
    removeProduct(id) {
      this.cartProducts = this.cartProducts.filter(product => product.id !== id.id);
      alertColor("Producto eliminado", "El producto se ha eliminado correctamente", "success", "Seguir comprando")
    },
    payProducts() {
      //aquí iría el código de Stripe para vincularlo al botón Pagar
    },
    restartCart() {
      this.cartProducts = []
    },
  }
});
