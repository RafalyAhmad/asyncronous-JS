function hitung(angka1,angka2,callback){
    return callback(angka1,angka2);
}

const tambah = (a,b) => a+b;
const kali = (a,b)=> a*b;

console.log(hitung(10,5,tambah))


//studi kasus 2
function prosesPesanan(namaMakanan,callback){
    console.log(`Memproses pesanan: ${namaMakanan}`)
    callback()
}
function notifikasiSelesai(){console.log("Pesanan sudah siap! Silakan diambil")}

prosesPesanan("ayam geprek",notifikasiSelesai)