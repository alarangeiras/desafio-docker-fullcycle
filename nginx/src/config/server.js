const app = require('express')();
const defaultRoutes = require('../routes');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'))

app.use('/', defaultRoutes);

app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));

module.exports = app;