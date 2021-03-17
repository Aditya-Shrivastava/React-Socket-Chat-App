const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.send('Server is up and running');
});

module.exports = router;
