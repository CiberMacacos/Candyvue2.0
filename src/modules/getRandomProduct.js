import json from "../assets/products.json";

export function getRandomProduct(){
   const chosenNumbers=[]; 
   const chosenProducts=[];
    while (chosenProducts.length<4) {
        const randomNumber= Math.floor(Math.random()*json.length) 
        if(!chosenNumbers.includes(randomNumber)){
            chosenNumbers.push(randomNumber)
            chosenProducts.push(json[randomNumber]);
        }
    }
    return chosenProducts;
}
