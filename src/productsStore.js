import { defineStore } from 'pinia';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase.js'

export const useProductList = defineStore('productList', {
  state: () => ({
    productList: [],
    chosenProducts: []
  }),
  actions: {
    async getData() {
      const res = query(collection(db, "products"));
      const querySnapshot = await getDocs(res);
      querySnapshot.forEach((doc) => {
        let product = doc.data();
        product.id = doc.id;
        this.productList.push(product);
      });
    }
  },
});
