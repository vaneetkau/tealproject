const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

// Create a new loan
router.post('/loans', async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create loan' });
  }
});

// Get all loans
router.get('/loans', async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch loans' });
  }
});



// Update a loan
router.put('/loans/:id', async (req, res) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLoan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update loan' });
  }
});

// Delete a loan
router.delete('/loans/:id', async (req, res) => {
  try {
    await Loan.findByIdAndRemove(req.params.id);
    res.json({ message: 'Loan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete loan' });
  }
});

module.exports = router;
