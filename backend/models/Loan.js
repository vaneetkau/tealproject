const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  type: String, // "loan" or "scholarship"
  loan_amount: Number,
  interest_rate: Number,
  loan_term: Number, // Number of months
  start_date: Date,
  end_date: Date, // For loan calculator
});


const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
