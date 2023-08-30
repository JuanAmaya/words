"use client";
import { useEffect, useState } from "react";

export default function Keyboard({ word, onLetterGuessed, guessedWord }) {
    const [keyboardLetters, setKeyboardLetters] = useState([]);
    const [resetWord, setResetWord] = useState(false);

    useEffect(() => {
        if (word) {
            let wordLetter = word.split('');
            const shuffledLetters = wordLetter.sort((a, b) => 0.5 - Math.random());
            setKeyboardLetters(shuffledLetters);
        }
    }, [word]);

    const handleLetter = (e, letter, i) => {
        onLetterGuessed(letter);
        e.target.classList.add("unavailableWord");
    };

    useEffect(() => {
        if (guessedWord.length === 0) {
            const letters = document.getElementsByClassName("unavailableWord");
            while (letters.length) {
                letters[0].classList.remove("unavailableWord");
            }
        }
    }, [guessedWord]);

    return (
        <div className="grid gap-y-5 gap-x-3 lettersLayout">
            {
                keyboardLetters.map((letter, i) =>
                    <button
                        className={`border-2 border-mainText text-mainText p-4 rounded-full relative w-20 h-20 flex justify-center items-center letter${i + 1}
                        hover:bg-submit 
                        focus:bg-submit 
                        active:bg-submitAct
                        `}
                        onClick={(e) => handleLetter(e, letter, i)}
                        key={i}
                    >
                        <span className="text-4xl uppercase font-bold">
                            {letter}
                        </span>
                    </button>
                )
            }
        </div>
    );
}