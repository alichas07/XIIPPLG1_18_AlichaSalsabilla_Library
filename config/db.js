// Mengimpor modul mysql2 untuk berinteraksi dengan database MySQL
const mysql = require('mysql2');

// Membuat koneksi pool ke database MySQL
const pool = mysql.createPool({
  host: '127.0.0.1', // Alamat server database (localhost)
  user: 'root', // Username database MySQL
  password: '', // Password database MySQL (kosong dalam konfigurasi ini)
  database: 'library', // Nama database yang digunakan
  port: 3308 // Port yang digunakan untuk koneksi ke MySQL (default biasanya 3306, tetapi di sini menggunakan 3308)
});

// Mengekspor pool koneksi dengan menggunakan .promise() 
// agar dapat digunakan dengan async/await di file lain
module.exports = pool.promise();
