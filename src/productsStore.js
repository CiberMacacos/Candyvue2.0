import { defineStore } from 'pinia';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase.js'

export const useProductStore = defineStore('productList', {
  state: () => ({
    productList: [],
    //cart: []
  }),
  actions: {
    async getData() {
      const res = query(collection(db, "products"));
      const querySnapshot = await getDocs(res);
      querySnapshot.forEach((doc) => {
        let product = doc.data();
        product.id = doc.id;
        this.productList.push(product)
      }
      )
    },
    /*addToCart(product) {
      this.cart.push(product)
    },
    increaseProd(id) {
      let item = this.cart.findIndex(item => item.id == id)
      this.cart[item].quantity++
    },
    decreaseProd(id) {
      let item = this.cart.findIndex(item => item.id == id)
      if (this.cart[item].quantity <= 1) {
        this.removeProd(id)
      } else {
        this.cart[item].quantity--
      }
    },
    removeProd(id) {
      let item = this.cart.findIndex(item => item.id == id)
      this.cart.splice(item, deleteCount: 1)
    }
  }, */
    // getters:{

    // filterProductList(country){
    //   return this.productList.filter(product => product.country==='Japan')
    //   }
    // }
  }
}
);

