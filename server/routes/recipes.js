const express = require('express');
const router = express.Router();
const { getRecipes, createRecipe, getRecipe, updateRecipe, deleteRecipe } = require('../controller/recipe.js');

router.get('/', getRecipes);
router.post('/create', createRecipe);
router.get('/:id', getRecipe);
router.put('/update/:id', updateRecipe);
router.delete('/:id', deleteRecipe);

module.exports = router;