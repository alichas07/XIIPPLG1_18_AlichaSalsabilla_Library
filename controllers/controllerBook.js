const Book = require('../models/modelBook');

module.exports = {
  index: async (req, res) => {
    try {
      const books = await Book.getAll();
      res.status(200).json({
        status: true,
        data: books,
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const book = await Book.getById(req.params.id);
      if (!book) {
        return res.status(404).json({ status: false, message: "Book not found" });
      }
      res.json({
        status: true,
        data: book,
        message: "Data retrieved successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  store: async (req, res) => {
    try {
      console.log("Received data:", req.body);
      const bookId = await Book.add(req.body);
      res.status(200).json({
        status: true,
        data: { id: bookId, ...req.body },
        message: "Data added successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ success: false, error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const updated = await Book.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ status: false, message: "Book not found" });
      }
      res.json({
        status: true,
        data: { id: req.params.id, ...req.body },
        message: "Data updated successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Book.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: false, message: "Book not found" });
      }
      res.json({
        status: true,
        message: "Data deleted successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};