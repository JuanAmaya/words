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
import { motion } from "framer-motion";

export default function GameScreen({ mistake, setMistake, setAnswer, setScore, score, setNewWordsCount }) {
    const keyboardAni = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            },
        },
    };

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

            <OldWords ansWord={correctWord} />

            <ShowWord guessedWord={guessedWord} setGuessedWord={setGuessedWord} onLetterDeleted={handleDeletedLetter} />
            <TimerBar setMistake={setMistake} score={score} />

            <motion.div
                className="relative flex justify-center flex-col"
                variants={keyboardAni}
                initial="hidden"
                animate="visible"
            >
                <DeleteButton setGuessedWord={setGuessedWord} />
                <Keyboard word={word} onLetterGuessed={handleGuessedLetter} guessedWord={guessedWord} />
                <SubmitButton word={word} guessedWord={guessedWord} setScore={setScore} setMistake={setMistake} setAnswer={setAnswer} setNewWordsCount={setNewWordsCount} />
            </motion.div>
        </div>
    );
}