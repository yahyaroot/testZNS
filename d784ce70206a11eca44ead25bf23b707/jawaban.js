
let input=2**100;

 console.log('Input 2**1592 is Big Size Until Error')

 console.log(`Test Input Menggunakan ${input}`)
//

function cekResultPow(input){
    let conInt= BigInt(input);
    let sNumber = conInt.toString();
    var newData = [], total=0;
    
    // Push 3 Data
    for (var i = 0; i + 2 < sNumber.length; i += 3) {
        newData.push(sNumber[i] + sNumber[i + 1] + sNumber[i + 2]);
      }
      
      console.log(` Ambil 3 Data Pertama ${newData}`)
    
    // Ubah Tipe data String To Number
    let arry=[]
    newData.map(arr=>{
    arry.push(parseInt(arr))
    });
    
    console.log('Simpan ke Array',arry)
    
    for (let value of arry){
        total+=value;
    }
      console.log(`Hasil Jumlahnya Adalah ${total}`)

}

cekResultPow(input);
