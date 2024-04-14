const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const database = require('./database');

const app = express();

// Middleware
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const employeeRoutes = require('./src/routes/employeeRoutes');
const assetRoutes = require('./src/routes/assetRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const stockRoutes = require('./src/routes/stockRoutes');
const issueRoutes = require('./src/routes/issueRoutes');
const returnRoutes = require('./src/routes/returnRoutes');
const scrapRoutes = require('./src/routes/scrapRoutes');
const historyRoutes = require('./src/routes/historyRoutes');

app.use('/employees', employeeRoutes);
app.use('/assets', assetRoutes);
app.use('/categories', categoryRoutes);
app.use('/stock', stockRoutes);
app.use('/issues', issueRoutes);
app.use('/returns', returnRoutes);
app.use('/scraps', scrapRoutes);
app.use('/history', historyRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
