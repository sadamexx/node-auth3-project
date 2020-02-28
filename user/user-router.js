const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



router.get('/', (req,res) => {
    res.send({ user: "router is running"})
})

module.exports = router;