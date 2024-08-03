const express = require('express');
const app = express();
const businessRoutes = require('./routes/businessRoutes');
const userRoutes = require('./routes/userRoutes');
const tableRoutes = require('./routes/tableRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use('/api/businesses', businessRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tables', tableRoutes);
app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
