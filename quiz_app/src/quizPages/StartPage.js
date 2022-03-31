import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, }  from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    container: {
        width: '90vw',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#d6cbd3'
    },
    title: {
        textAlign: 'center',
        fontSize: '40px',
    },
    instructions: {
        textAlign: 'center',
        fontSize: '26px',
    },
    goodLuckText: {
        textAlign: 'center',
        fontSize: '40px',
    }
}));

export default function StartPage() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Typography className={classes.title}>
                Welcome to the Quiz app
            </Typography>
            <Typography className={classes.instructions}>
                The examiner contains 5 questions and each question is worth 20 points
            </Typography>
            <Typography className={classes.goodLuckText}>
                Good Luck
            </Typography>
        </div>
    )
}
