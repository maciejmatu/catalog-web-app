const express = require('express');
const fallback = require('express-history-api-fallback');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('dist'));
app.use(fallback('index.html', { root: 'dist' }));

/* SERVER */
const server = app.listen(PORT);
console.log(`Server running on port ${server.address().port}.`);