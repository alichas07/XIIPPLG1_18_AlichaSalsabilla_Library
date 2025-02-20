const Reviews = require('../models/modelReviews');

module.exports = {
  index: async (req, res) => {
    try {
      const reviews = await Reviews.getAll();
      res.status(200).json({
        status: true,
        data: reviews,
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const reviews = await Reviews.getById(req.params.id);
      if (!reviews) {
        return res.status(404).json({ status: false, message: "Review not found" });
      }
      res.json({
        status: true,
        data: reviews,
        message: "Review retrieved successfully",
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
      const reviewsId = await Reviews.add(req.body);
      res.status(200).json({
        status: true,
        data: { id: reviewsId, ...req.body },
        message: "Review added successfully",
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
      const updated = await Reviews.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ status: false, message: "Review not found" });
      }
      res.json({
        status: true,
        data: { id: req.params.id, ...req.body },
        message: "Review updated successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Reviews.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: false, message: "Review not found" });
      }
      res.json({
        status: true,
        message: "Review deleted successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};