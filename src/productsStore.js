import { defineStore } from 'pinia';
import { collection, query, getDocs } from 'firebase/firestore'
import { db } from '../src/firebase.js'

export const useProductList = defineStore('productList', {
  state: () => ({
    productList: [1,2,3,4,5],
    chosenProducts: []
  }),
  actions: {
    // async getData() {
    //   console.log("cogiendo datos lol")
    //   const res = query(collection(db, "products"));
    //   const querySnapshot = await getDocs(res);
    //   console.log(querySnapshot+ " querysnapchot")
    //   querySnapshot.forEach((doc) => {
    //     let product = doc.data();
    //     product.id = doc.id;
    //     this.productList.push(product);
    //     console.log(this.productList + " lista de cosas loquisimas")
    //   });
    // },
    getRandomProduct() {
        const chosenNumbers=[]
        while (this.chosenProducts.length<=4) {
        const randomNumber= Math.floor(Math.random()*this.productList.length) 
        if(!chosenNumbers.includes(randomNumber)){
          chosenNumbers.push(randomNumber)
          console.log(randomNumber+ " numero aleatorio")
          console.log(chosenNumbers+ " array de los cojones")
          this.chosenProducts.push(this.productList[randomNumber]);
        }
        console.log(this.chosenProducts)
      }
     
}
  },
});
