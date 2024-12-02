// Tipe Data
String
/*  
    Definisi: Tipe data untuk merepresentasikan teks.
    Penulisan: Dibatasi oleh tanda kutip tunggal ', ganda ", atau backticks `.
*/
// Comtoh:
let nama = "John Doe";
let ucapan = 'Halo Dunia!';
let sapaan = `Selamat datang, ${nama}`;

// Tipe Data
Number
/* 
    Definisi: Tipe data untuk merepresentasikan angka (baik bilangan bulat maupun desimal).
    Cakupan: Mendukung angka positif, negatif, desimal, bahkan Infinity dan NaN (Not a Number).
*/
// Contoh:
let usia = 25; 
let desimal = 3.14;
let takTerhingga = Infinity; // merepresentasikan angka yang lebih besar daripada bilangan terbesar yang dapat direpresentasikan
let tidakValid = NaN; // Hasil operasi yang tidak valid

// Tipe Data
Boolean
/* 
    Definisi: Tipe data dengan dua nilai: true atau false.
    Kegunaan: Biasanya digunakan untuk pengambilan keputusan atau logika.
*/
// Contoh:
let userIsLogin = true;
let userNoLogin = false;

// Tipe Data
Array
/* 
    Definisi: Koleksi data yang terorganisir dalam urutan indeks (dimulai dari 0).
    Kegunaan: Menyimpan banyak data dalam satu variabel.
*/
// Contoh:
let angka = [1, 2, 3, 4]; // index 3, angak 1 adalah index 0 dan angka 4 adalah index 3
let buah = ["apel", "pisang", "mangga", "melon", "semangka"]; // index 4 karena apel adalah index 0 dan semangka adalah index 4

// Tipe Data
Object
/* 
    Definisi: Struktur data yang menyimpan data dalam bentuk pasangan key-value.
    Kegunaan: Merepresentasikan entitas dengan banyak atribut.
*/
// Contoh:
let orang = {
    nama: "Alice",
    usia: 30,
    pekerjaan: "Guru"
  };

// Tipe Data
null
/* 
    Definisi: Tipe data yang merepresentasikan nilai yang tidak ada atau kosong secara sengaja.
*/
// Contoh:
let data = null; // Disetel kosong

// Tipe Data 
undefined
/* 
    Definisi: Menunjukkan bahwa variabel telah dideklarasikan tetapi belum memiliki nilai.
*/
// Contoh:
let nilai; // Tidak ada nilai
console.log(nilai); // undefined

// TIpe Data
Symbol
/* 
    Definisi: Tipe data primitif untuk membuat identifier yang unik.
Kegunaan: Cocok untuk kasus di mana diperlukan key unik di dalam objek.
*/
// Contoh:
let id = Symbol("id");
let user = { [id]: 12345 };

// TIpe Data
BigInt
/* 
    Definisi: Tipe data untuk menyimpan angka yang sangat besar melebihi batas Number.
    Penulisan: Ditambahkan huruf n di akhir angka.
*/
// Contoh:
let angkaBesar = 123456789012345678901234567890n;
let hasil = angkaBesar + 10n;
