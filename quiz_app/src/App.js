import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress  }  from '@material-ui/core';

import StartPage from './quizPages/StartPage';
import QuestionPage from './quizPages/QuestionPage';
import SummeryPage from './quizPages/SummeryPage';
import useQuizHook from './quizHook';


const useStyles = makeStyles(theme => ({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        width: '90vw',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#d6cbd3'
    },
    buttonStyle: {
        width: '200px',
        height: '50px',
        border: '2px solid black',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#d6cbd3'
    },
    loaderContainer: {
        width: '90vw',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#d6cbd3'
    }
}));


function App() {

    const classes = useStyles();

    const {
        questionsData,
        questionIndex,
        pageIndicator,
        userScore,
        onNextClicked,
        onPrevClicked,
        onQuestionAnswered,
        ansMap
    } = useQuizHook();


    return (
        <div className={classes.container}>
            {questionsData ? 
                <>
                {pageIndicator === 0 && <StartPage />}
                {pageIndicator === 1 && <QuestionPage question={questionsData[questionIndex - 1]} ans={ansMap.get(questionsData[questionIndex - 1].id)} onQuestionAnswered={onQuestionAnswered} />}
                {pageIndicator === 2 && <SummeryPage score={userScore} />}
                <div className={classes.buttonsContainer}>
                    {questionIndex > 0 && <div className={classes.buttonStyle} onClick={onPrevClicked}>
                        Prev
                    </div>}
                    {questionIndex < 6 && <div className={classes.buttonStyle} onClick={onNextClicked}>
                        {questionIndex === 5 ? 'Submit' : 'Next'}
                    </div>}
                </div>
                </> 
                : 
                <div className={classes.loaderContainer}>
                    <div>Loading...</div>
                    <CircularProgress size={50} />
                </div>
            }
        </div>
    );
}

export default App;
