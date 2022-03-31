import { useState, useEffect } from 'react';

import QuestionsDataJson from './data/questionData.json';

const scoreMap = new Map([
    ["1", 0],
    ["2", 0],
    ["3", 0],
    ["4", 0],
    ["5", 0],
]);

const ansMap = new Map([
    ["1", 0],
    ["2", 0],
    ["3", 0],
    ["4", 0],
    ["5", 0],
]);

const useQuizHook = () => {

    const [questionsData, setQuestionsData] = useState(undefined);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [pageIndicator, setPageIndicator] = useState(0);
    const [userScore, setUserScore] = useState(0);

    useEffect(() => {
        setQuestionsData(QuestionsDataJson.questions);
    }, []);

    const changePageIndicator = (index) => {
        switch (index) {
            case 0:
                setPageIndicator(0);
                break;
            case 6:
                setPageIndicator(2);
                break;
            default:
                setPageIndicator(1);
        }
    }

    const onNextClicked = () => {
        const qIndex = questionIndex + 1;
        changePageIndicator(qIndex);
        setQuestionIndex(qIndex);
    }

    const onPrevClicked = () => {
        const qIndex = questionIndex - 1;
        changePageIndicator(qIndex);
        setQuestionIndex(qIndex);
    }

    const calculateScore = () => {
        let userScore = 0;
        scoreMap.forEach((value, key) => {
            userScore += value;
        });
        setUserScore(userScore);
    }

    const onQuestionAnswered = (qId, ans, isCorrect) => {
        scoreMap.set(qId, isCorrect ? 20 : 0);
        ansMap.set(qId, ans);
        calculateScore();
    };


    return {questionsData, questionIndex, pageIndicator, userScore, onNextClicked, onPrevClicked, onQuestionAnswered, ansMap};
}

export default useQuizHook;
