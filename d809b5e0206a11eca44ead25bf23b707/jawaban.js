

function primaCek(angka) {
    let div = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        div++
      }
    }
    if(div == 2){
      console.log(`Input Awal ${angka} Adalah Prima`)
    }else{
      console.log(`${angka} Bukan Prima`)
    }

    let tempCheck=`${angka}`

        for(let j=tempCheck-1;j>1;j--){
           cekPrimaSebelumnya(j)
               }           
  }

  function cekPrimaSebelumnya(number){
    let pembagi = 0;
    for(let i=1; i <= number; i++){
      if(number%i == 0){
        pembagi++;
    }

    }

    if(pembagi == 2){   
        console.log(`Hasil ${number} Adalah Prima`)        
      }
      else{
        console.log(`${number} Bukan Prima`)
      }
  }

 primaCek(5)


