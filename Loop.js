// loop
let nilai = 15;
for (nilai = 0; nilai <= 15; nilai++) { // hapus <= (sama dengan), < (kurang dari)
    // console.log(nilai) 
}

// menentukan panjang sebuah data
const arrayString = ["apel", 5, "buah"]
for (let i = 1; i < arrayString.length; i++) {
    // console.log(arrayString[i])
}

// perulangan infinity atau perulangan tanpa henti
let number = 16;
for (;;) {
    // console.log(nilai);
    break; // Tambahkan break untuk mencegah perulangan tanpa akhir
          //  Hapus break uuntuk perulangan tanpa henti
}

// While
let value = 1;
while (value <= 5) {
    console.log(value);
    value++;
}

let i = 1; // Inisialisasi
while (i <= 5) { // Kondisi
    console.log(i); // Output: 1, 2, 3, 4, 5
    i++; // Ekspresi akhir  
    /* jika i++ di hilangkan maka akan menyebabkan perulangan tak terhenti (infinity loop)
       karena ekspresi i++ adalah kondisi perubahan pada while dan jika di hapus maka while 
       akan menganggap tidak ada perubahan karena while hanya akan bekerja ketika bernilai
       true dan tidak akan bekerja jika false*/
}

// do...while
do {
    // Kode yang akan dijalankan
} while (kondisi);

// contoh
let a = 1;
do {
    console.log(a); // Output: 1, 2, 3
    a++;
} while (a <= 3);  // memastikan blok kode dijalankan setidaknya satu kali,

// for...of
for (const item of iterable) {
    // Kode yang akan dijalankan
}

// contoh
const fruits = ["apple", "banana", "cherry"]; // Iterasi array
for (const fruit of fruits) {
    console.log(fruit); // Output: "apple", "banana", "cherry"
}

const text = "hello"; // Iterasi string
for (const char of text) {
    console.log(char); // Output: "h", "e", "l", "l", "o"
}

const uniqueNumbers = new Set([1, 2, 3]); // Iterasi set
for (const number of uniqueNumbers) {
    console.log(number); // Output: 1, 2, 3
} /* kapan digunakan 
    mengambil nilai langsung dari objek iterable tanpa memerlukan indeks. */

// for...in
for (const key in object) {
    // Kode yang akan dijalankan
}

// contoh
const person = { name: "John", age: 30, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);  
    // Output:
    // name: John
    // age: 30
    // city: New York
}  /* mengambil properti atau key dari sebuah objek.
      Hindari menggunakan untuk array, karena for...in dapat mengiterasi properti yang tidak diinginkan. */


