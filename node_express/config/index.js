require('dotenv').config();

module.exports = {
    mongodbUser: process.env.MONGODB_USER,
    mongodbPswd: process.env.MONGODB_PASSWORD,
};