"use client";
import { useEffect, useState } from "react";
import GameScreen from "./GameScreen";
import FailedScreen from "./FailedScreen";

export default function Game() {
    const [mistake, setMistake] = useState(0);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [playAgain, setPlayAgain] = useState(false);
    const [newWordsCount, setNewWordsCount] = useState(0);

    useEffect(() => {
        if (playAgain) {
            setScore(0);
            setMistake(0);
            setPlayAgain(false);
        }
    }, [playAgain]);

    return (
        <main className="max-w-screen-lg mx-auto">
            {mistake < 3 &&
                <GameScreen setMistake={setMistake} mistake={mistake} setAnswer={setAnswer} score={score} setScore={setScore} setNewWordsCount={setNewWordsCount} />
            }
            {mistake >= 3 &&
                <FailedScreen answer={answer} score={score} setPlayAgain={setPlayAgain} newWordsCount={newWordsCount} />
            }
        </main>
    );
}