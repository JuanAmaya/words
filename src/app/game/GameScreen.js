"use client";
import MistakesBar from "@/components/game/MistakesBar";
import OldWords from "@/components/game/OldWords";
import ScoreTable from "@/components/game/ScoreTable";
import ShowWord from "@/components/game/ShowWord";
import Keyboard from "@/components/game/Keyboard";
import SubmitButton from "@/components/game/SubmitButton";
import { useEffect, useState } from "react";
import DeleteButton from "@/components/game/DeleteButton";
import TimerBar from "@/components/game/TimerBar";

export default function GameScreen({ mistake, setMistake, setAnswer, setScore, score, setNewWordsCount }) {
    const [word, setWord] = useState('');
    const [guessedWord, setGuessedWord] = useState([]);
    const [correctWord, setCorrectWord] = useState('');

    async function getWord() {
        const res = await fetch("https://random-word-api.herokuapp.com/word?length=4");
        const data = await res.json();
        setWord(data[0]);
    }

    useEffect(() => {
        getWord();
        setCorrectWord(guessedWord);
        setGuessedWord([]);

        if (score === 0) {
            setNewWordsCount(0);
        }
    }, [score]);

    const handleGuessedLetter = (letter) => {
        if (guessedWord.length < 4) {
            setGuessedWord([...guessedWord, letter]);
        }
    };

    const handleDeletedLetter = (croppedWord) => {
        setGuessedWord(croppedWord);
    };

    return (
        <div className="flex flex-col items-center">
            <ScoreTable score={score} />

            <MistakesBar mistake={mistake} />

            <h2>{word}</h2>
            <OldWords ansWord={correctWord} />

            <ShowWord guessedWord={guessedWord} setGuessedWord={setGuessedWord} onLetterDeleted={handleDeletedLetter} />
            <TimerBar setMistake={setMistake} score={score} />

            <div className="relative flex justify-center flex-col">
                <DeleteButton setGuessedWord={setGuessedWord} />
                <Keyboard word={word} onLetterGuessed={handleGuessedLetter} guessedWord={guessedWord} />
                <SubmitButton word={word} guessedWord={guessedWord} setScore={setScore} setMistake={setMistake} setAnswer={setAnswer} setNewWordsCount={setNewWordsCount} />
            </div>
        </div>
    );
}