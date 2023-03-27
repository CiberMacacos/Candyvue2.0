import { jsonCall } from "./JsonCall";
import { random } from "./random";

export function getRandomProduct(){
    const json=jsonCall();
    return chosenProducts = random(0, json.length, 4);
}

