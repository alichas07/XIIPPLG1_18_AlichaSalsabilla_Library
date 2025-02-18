const Categories = require('../models/modelCategories');

module.exports = {
  index: async (req, res) => {
    try {
      const category = await Categories.getAll();
      res.status(200).json({
        status: true,
        data: category,
        message: "Categories retrieved successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const categories = await Categories.getById(req.params.id);
      if (!categories) {
        return res.status(404).json({ status: false, message: "Category not found" });
      }
      res.json({
        status: true,
        data: categories,
        message: "Category retrieved successfully",
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
      const categoryId = await Categories.add(req.body);
      res.status(200).json({
        status: true,
        data: { id: categoryId, ...req.body },
        message: "Category added successfully",
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
      const updated = await Categories.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ status: false, message: "Category not found" });
      }
      res.json({
        status: true,
        data: { id: req.params.id, ...req.body },
        message: "Category updated successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Categories.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: false, message: "Category not found" });
      }
      res.json({
        status: true,
        message: "Category deleted successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};