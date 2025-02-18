// Mengimpor model User untuk berinteraksi dengan database
const User = require("../models/modelUser");

module.exports = {
  // Handler untuk mendapatkan semua pengguna
  index: async (req, res) => {
    try {
      // Memanggil method getAll() dari model User untuk mengambil semua data pengguna
      const users = await User.getAll();

      // Mengirimkan respons dalam format JSON dengan status 200 (OK)
      res.status(200).json({
        status: true, // Status berhasil
        data: users, // Data pengguna dari database
        method: req.method, // Metode HTTP yang digunakan (GET)
        url: req.url, // URL endpoint yang diakses
      });
    } catch (error) {
      // Jika terjadi error, kirimkan respons dengan status 500 (Internal Server Error)
      res.status(500).json({ success: false });
    }
  },

  // Handler untuk mendapatkan satu pengguna berdasarkan ID
  show: async (req, res) => {
    try {
      // Mengambil ID dari parameter URL
      const user = await User.getById(req.params.id);

      // Jika pengguna tidak ditemukan, kirimkan respons 404 (Not Found)
      if (!user) {
        return res.status(404).json({
          status: false,
          message: "User tidak ditemukan",
        });
      }

      // Mengirimkan respons JSON dengan data pengguna
      res.json({
        status: true,
        data: user,
        message: "Data berhasil didapat",
        method: req.method, // Metode HTTP yang digunakan (GET)
        url: req.url, // URL endpoint yang diakses
      });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  },

  // Handler untuk menambahkan pengguna baru ke database
  store: async (req, res) => {
    try {
      // Memanggil method add() dari model User untuk menyimpan data ke database
      const userId = await User.add(req.body);

      // Mengirimkan respons JSON dengan data yang baru ditambahkan
      res.status(200).json({
        status: true,
        data: { id: userId, ...req.body }, // Menyertakan ID yang baru dibuat
        message: "Data berhasil ditambahkan",
        method: req.method, // Metode HTTP yang digunakan (POST)
        url: req.url, // URL endpoint yang diakses
      });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  },

  // Handler untuk memperbarui data pengguna berdasarkan ID
  update: async (req, res) => {
    try {
      // Memanggil method update() dari model User untuk memperbarui data
      const updated = await User.update(req.params.id, req.body);

      // Jika tidak ada baris yang diperbarui, berarti user tidak ditemukan
      if (!updated) {
        return res.status(404).json({
          status: false,
          message: "User tidak ditemukan",
        });
      }

      // Mengirimkan respons JSON dengan data yang telah diperbarui
      res.json({
        status: true,
        data: { id: req.params.id, ...req.body }, // Menyertakan ID yang diperbarui
        message: "Data berhasil diubah",
        method: req.method, // Metode HTTP yang digunakan (PUT/PATCH)
        url: req.url, // URL endpoint yang diakses
      });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  },

  // Handler untuk menghapus pengguna berdasarkan ID
  delete: async (req, res) => {
    try {
      // Memanggil method delete() dari model User untuk menghapus data
      const deleted = await User.delete(req.params.id);

      // Jika pengguna tidak ditemukan, kirimkan respons 404 (Not Found)
      if (!deleted) {
        return res.status(404).json({
          status: false,
          message: "User tidak ditemukan",
        });
      }

      // Mengirimkan respons JSON bahwa data berhasil dihapus
      res.json({
        status: true,
        message: "Data berhasil dihapus",
        method: req.method, // Metode HTTP yang digunakan (DELETE)
        url: req.url, // URL endpoint yang diakses
      });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  },
};
