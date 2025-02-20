const Loans = require('../models/modelLoans');

module.exports = {
  index: async (req, res) => {
    try {
      const loans = await Loans.getAll();
      res.status(200).json({
        status: true,
        data: loans,
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  show: async (req, res) => {
    try {
      const loans = await Loans.getById(req.params.id);
      if (!loans) {
        return res.status(404).json({ status: false, message: "Loan not found" });
      }
      res.json({
        status: true,
        data: loans,
        message: "Loan retrieved successfully",
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
      const loansId = await Loans.add(req.body);
      res.status(200).json({
        status: true,
        data: { id: loansId, ...req.body },
        message: "Loan added successfully",
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
      const updated = await Loans.update(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ status: false, message: "Loan not found" });
      }
      res.json({
        status: true,
        data: { id: req.params.id, ...req.body },
        message: "Loan updated successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await Loans.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: false, message: "Loan not found" });
      }
      res.json({
        status: true,
        message: "Loan deleted successfully",
        method: req.method,
        url: req.url,
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};