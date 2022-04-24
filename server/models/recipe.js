const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: String,
    recipe: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;