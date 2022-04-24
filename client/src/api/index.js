import axios from 'axios';

const url = 'http://localhost:5000/recipes';

export const fetchRecipe = () => axios.get(url);