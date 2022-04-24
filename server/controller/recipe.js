const Recipe = require('../models/recipe');

const getRecipe = async (req, res) => {
    Recipe.find().then(recipe => res.json(recipe)).catch(err => res.status(400).res.json(`Error ${err}`))
}


module.exports = getRecipe;