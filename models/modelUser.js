// Mengimpor konfigurasi koneksi database dari file db.js
const pool = require("../config/db");

class User {
  // Metode untuk mengambil semua data pengguna dari tabel users
  static getAll = async () => {
    // Melakukan query SQL untuk mendapatkan semua data pengguna
    const [rows] = await pool.query("SELECT * FROM users");
    return rows; // Mengembalikan hasil query dalam bentuk array
  };

  // Metode untuk mengambil data pengguna berdasarkan ID
  static getById = async (id) => {
    // Query SQL dengan parameter id untuk mencari pengguna tertentu
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0]; // Mengembalikan satu objek pengguna (baris pertama hasil query)
  };

  // Metode untuk menambahkan pengguna baru ke dalam database
  static add = async (user) => {
    // Mendestrukturisasi objek user untuk mengambil data yang diperlukan
    const { username, password, name, email, phone } = user;
    
    // Melakukan query INSERT untuk menambahkan data pengguna ke dalam tabel users
    const [result] = await pool.query(
      "INSERT INTO users (username, password, name, email, phone) VALUES (?, ?, ?, ?, ?)",
      [username, password, name, email, phone]
    );

    return result.insertId; // Mengembalikan ID pengguna yang baru ditambahkan
  };

  // Metode untuk memperbarui data pengguna berdasarkan ID
  static update = async (id, user) => {
    // Mendestrukturisasi objek user untuk mendapatkan data yang akan diperbarui
    const { username, password, name, email, phone } = user;

    // Query SQL UPDATE untuk memperbarui data pengguna berdasarkan ID
    const [result] = await pool.query(
      "UPDATE users SET username = ?, password = ?, name = ?, email = ?, phone = ? WHERE id = ?",
      [username, password, name, email, phone, id]
    );

    return result.affectedRows; // Mengembalikan jumlah baris yang terpengaruh
  };

  // Metode untuk menghapus pengguna berdasarkan ID
  static delete = async (id) => {
    // Query SQL DELETE untuk menghapus pengguna dengan ID tertentu
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

    return result.affectedRows; // Mengembalikan jumlah baris yang dihapus
  };
}

// Mengekspor class User agar bisa digunakan di file lain
module.exports = User;
