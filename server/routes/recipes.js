const express = require('express');
const router = express.Router();
const getRecipe = require('../controller/recipe')

router.get('/', getRecipe);

module.exports = router;