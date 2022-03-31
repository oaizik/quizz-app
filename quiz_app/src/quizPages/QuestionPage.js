import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, RadioGroup, FormControlLabel, FormControl }  from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    container: {
        width: '90vw',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#d6cbd3'
    },
    title: {
        height: '100px',
        textAlign: 'center',
        fontSize: '40px',
        margin: '100px 0 100px 0'
    },
    radios: {
        height: '20vh',
        display: 'flex',
        textAlign: 'center',
        fontSize: '26px',
    }
}));

export default function QuestionPage({ question, onQuestionAnswered, ans = 0 }) {

    const classes = useStyles();

    const [ansVal, setAnsVal] = useState(ans);

    const onAnswer = (e) => {
        setAnsVal(e.target.value);
        onQuestionAnswered(question.id, e.target.value, e.target.value === question.ans);
    }

    useEffect(() => {
        setAnsVal(ans);
    }, [ans]);

    return (
        <div className={classes.container}>
            <FormControl component="fieldset">
                <div className={classes.title} component="legend">
                    {question.title}
                </div>
                <RadioGroup className={classes.radios} name="radio-buttons-group" value={ansVal} onChange={onAnswer}>
                    <FormControlLabel value="1" control={<Radio />} label={`${question.answers.a_1}`} />
                    <FormControlLabel value="2" control={<Radio />} label={`${question.answers.a_2}`} />
                    <FormControlLabel value="3" control={<Radio />} label={`${question.answers.a_3}`} />
                    <FormControlLabel value="4" control={<Radio />} label={`${question.answers.a_4}`} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}
