const express = require('express');
const connectToDatabase = require('./db'); // Database connection module
const studentRoutes = require('./routes/studentRoutes'); // Student routes
const loanRoutes = require('./routes/loanRoutes'); // Loan routes
const paymentRoutes = require('./routes/paymentRoutes'); // Payment routes
const cors = require('cors');
const app = express();
const port = 4000;



app.use(cors());
// Allow requests from http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));


// Connect to MongoDB Atlas
(async () => {
  const db = await connectToDatabase();

  app.use(express.json());

  app.use('/api', studentRoutes);
  app.use('/api', loanRoutes);
  app.use('/api', paymentRoutes);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();




