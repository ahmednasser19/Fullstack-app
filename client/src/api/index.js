import axios from 'axios';

const url = 'http://localhost:5001/recipes';

export const fetchRecipes = () => axios.get(url);