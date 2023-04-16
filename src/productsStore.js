import { defineStore } from 'pinia';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase.js'

export const useProductStore = defineStore('productList', {
  state: () => ({
    productList: [],
    //cart: [] aquí se inicializaría el carrito y habría que poner en actions el addProduct para añadirlo a cart=[]
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
    // getters:{

    // filterProductList(country){
    //   return this.productList.filter(product => product.country==='Japan')
    //   }
    // }
  }
}
);

