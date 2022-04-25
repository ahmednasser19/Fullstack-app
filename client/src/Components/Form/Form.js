import React, { useState } from 'react'
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { createRecipe } from '../../actions/recipes';
import { useDispatch } from 'react-redux';
export default function Form() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [recipeData, setRecipeData] = useState({
        creator: '',
        title: '',
        recipe: '',
        selectedFile: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRecipe(recipeData));
    }
    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Recipe</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={recipeData.creator} onChange={(e) => setRecipeData({ ...recipeData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({ ...recipeData, title: e.target.value })} />
                <TextField name="recipe" inputProps={{ style: { height: "60px" } }} variant="outlined" label="Recipe" fullWidth value={recipeData.recipe} onChange={(e) => setRecipeData({ ...recipeData, recipe: e.target.value })} />

                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setRecipeData({ ...recipeData, selectedFile: base64 })}
                    />
                </div>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type='submit' fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth  >Clear</Button>

            </form>

        </Paper>
    )
}
