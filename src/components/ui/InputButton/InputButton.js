import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const InputButton = ({text, disabled}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button type="submit" disabled={disabled} color="primary">{text}</Button>

        </div>
    );
};
export default InputButton
