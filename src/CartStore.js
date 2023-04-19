import { defineStore } from "pinia";
import { useProductStore } from './productsStore.js'
import alertColor from "./utils.js"
import { useLocalStorage } from "@vueuse/core";
import stripeKeys from "./stripeKeys.js"

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
      let total = 0;
      for (let i = 0; i < this.cartProducts.length; i++) {
        total = total + this.cartProducts[i].quantity;
      }
      return total;
    },

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
    },
    payProducts() {
      const lines = [];
      for (const value of this.cartProducts) {
        lines.push({ price: value.code, quantity: value.quantity });
      }
      Stripe(stripeKeys.public)
        .redirectToCheckout({
          lineItems: lines,
          mode: "payment",
          successUrl: "https://curious-truffle-ce9ba8.netlify.app/success.html",
          cancelUrl: "https://curious-truffle-ce9ba8.netlify.app/cancel.html",
        })
        .then((res) => {
          if (res.error) {
            $stripe.insertAdjacentElement("afterend", res.error.message);
          }
        })
    },
    restartCart() {
      this.cartProducts = []
    },
  }
});
