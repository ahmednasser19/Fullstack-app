import axios from 'axios';

const url = 'http://localhost:5001/recipes';

export const fetchRecipes = () => axios.get(url);

export const createRecipe = (newRecipe) => axios.post(`${url}/create`, newRecipe);