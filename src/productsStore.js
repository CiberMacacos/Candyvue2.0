import { defineStore } from 'pinia';
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../src/firebase.js'
//aquí poner la función del random
export const useProductList = defineStore('productList', {
  state: () => ({
    productList: []
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
    },
  },
});
