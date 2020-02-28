// require('dotenv').config();
// console.log('node env', process.env.NODE_ENV);

const server = require('./server.js');

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
    console.log(`Creating Tokens on port ${PORT}`);
});