function hitung(angka1,angka2,callback){
    return callback(angka1,angka2);
}

const tambah = (a,b) => a+b;
const kali = (a,b)=> a*b;

console.log(hitung(10,5,tambah))