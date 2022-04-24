const Recipe = require('../models/recipe');
const mongoose = require('mongoose');
const getRecipes = async (req, res) => {
    try {
        await Recipe.find().then(recipe => res.json(recipe));
    } catch (error) {
        res.status(400).json(`Error ${error}`);
    }
}


const createRecipe = async (req, res) => {
    const recipe = req.body;
    const addRecipe = new Recipe(recipe);
    try {
        await addRecipe.save();
        res.status(201).json(addRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//get a specif recipe
const getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json(`Error ${error}`);
    }

}


const updateRecipe = async (req, res) => {
    const { id: _id } = req.params;
    const recipe = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No recipe with that id');
        const updatedPost = await Recipe.findByIdAndUpdate(_id, { ...recipe, _id }, { new: true });
        res.json(updatedPost);

    } catch (error) {
        res.status(400).json(`Error ${error}`);
    }
}

const deleteRecipe = async (req, res) => {
    try {
        Recipe.findByIdAndDelete(req.params.id).then(() => res.json("The recipe is deleted"));
    } catch (error) {
        res.status(400).json(`Error ${error}`);
    }
}


module.exports = { getRecipes, createRecipe, getRecipe, updateRecipe, deleteRecipe }
