import { defineStore } from 'pinia';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase.js'

export const useProductStore = defineStore('productList', {
  state: () => ({
    productList: []
  }),
  actions: {
    async getData() {
      console.log("getDATA")
      const res = query(collection(db, "products"));
      console.log("res "+res.value)
      const querySnapshot = await getDocs(res);
      console.log("querysnapcshot "+ querySnapshot)
      querySnapshot.forEach((doc) => {
        console.log("bucle")
        let product = doc.data();
        product.id = doc.id;
        this.productList.push(product)
        console.log(this.productList)
      }
      )
      console.log("terminado")
},

    filterProductList(country){

    },
    showDetails(id){
      
    }
    }
  }

      // array.filter(e => (e.length < 2));
);

