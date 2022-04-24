import React from 'react';
import Recipe from './Recipe/Recipe';
import useStyles from './styles';
import { useSelector } from 'react-redux';

export default function Recipes() {
    const classes = useStyles();
    const recipes = useSelector((state) => state.recipes);
    console.log(recipes);
    return (
        <>
            <h1><Recipe /></h1>
            <h1><Recipe /></h1>
        </>
    )
}
