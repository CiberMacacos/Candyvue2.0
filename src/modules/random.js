export function random(min, max, num) {
    const res = [];
    for (let i = 0; i < num; i++) {
      // mientras la longitud de "res" (que tiene los valores a devolver) es igual al índice del for (quiere decir que no se ha añadido a res nada nuevo)
      while (res.length === i) {
        let found = false;
        const number = Math.floor(Math.random() * max) + min;
        for (const value of res) {
          if (value === number) {
            found = true;
          }
        }
        if (!found) {
          res.push(number);
        }
      }
    }
  
    return res;
  }