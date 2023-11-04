const express = require('express');
const connectToDatabase = require('./db'); // Database connection module
const productNewsRoutes = require('./routes/productNewsRoutes');
const loanNewsRoutes = require('./routes/loanNewsRoutes');
const financialNewsRoutes = require('./routes/financialNewsRoutes');
const bankingNewsRoutes = require('./routes/bankingNewsRoutes');
const langaraNewsRoutes = require('./routes/langaraNewsRoutes');
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

  app.use('/api/product-news', productNewsRoutes);
  app.use('/api/loan-news', loanNewsRoutes);
  app.use('/api/financial-news', financialNewsRoutes);
  app.use('/api/banking-news', bankingNewsRoutes);
  app.use('/api/langara-news', langaraNewsRoutes);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
