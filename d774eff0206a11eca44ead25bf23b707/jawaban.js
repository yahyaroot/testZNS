
function countingValue(number) {
    let sum = 0;
    for(let i = 1; i < number; i++){
       if(i % 17 === 0 || i % 71 === 0){
        sum += i;
       }
    }   
    return sum;
 }
 
let input= 100000;

let mod= input % 51681;
console.log(`${input} setelah di Mod Adalah ${mod}`);

let result=countingValue(mod);
console.log(`Hasil Kelipatan 17 atau 71 dibawah ${input} Adalah ${result}`)
