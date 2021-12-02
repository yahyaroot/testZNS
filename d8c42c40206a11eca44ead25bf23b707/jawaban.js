function countChar(s) {
   let i, n = s.length, acc = 0;
    for (i = 0; i < n; i++) {
      acc += parseInt(s[i], 36) - 9;
    }
    return acc;
  }
  let preConversi='SKY'

let conversi=(countChar(preConversi));

console.log(`Text Inputnya Adalah ${preConversi} `);

console.log(`Hasil Conversi Huruf ${preConversi} Adalah ${conversi}`)


function cekTriangles(counting)
{

    if (counting < 0)
        return false;
 
    let sum = 0;
    for (let n = 1; sum <= counting; n++)
    {
        sum = sum + n;
        if (sum == counting)
            return true;
    }
 
    return false;
}

    if (cekTriangles(conversi))
      console.log( `Dan Merupakan ${conversi} Adalah Bilangan Segita`);
    else
       console.log(`Dan Merupakan ${conversi} Bukan Bilangin Segitiga `)


  





