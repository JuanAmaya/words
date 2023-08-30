"use client";
import { useEffect, useState } from "react";

export default function Alphabet({ wordsArr, setLetterWords, setSelectedLetter, setShowLetterPage, letterWords }) {
    const [alphabet, setAlphabet] = useState([
        {
            "letter": "A",
            "length": 0,
        },
        {
            "letter": "B",
            "length": 0,
        },
        {
            "letter": "C",
            "length": 0,
        },
        {
            "letter": "D",
            "length": 0,
        }, {
            "letter": "E",
            "length": 0,
        },
        {
            "letter": "F",
            "length": 0,
        },
        {
            "letter": "G",
            "length": 0,
        },
        {
            "letter": "H",
            "length": 0,
        },
        {
            "letter": "I",
            "length": 0,
        },
        {
            "letter": "J",
            "length": 0,
        },
        {
            "letter": "K",
            "length": 0,
        },
        {
            "letter": "L",
            "length": 0,
        }, {
            "letter": "M",
            "length": 0,
        },
        {
            "letter": "N",
            "length": 0,
        },
        {
            "letter": "O",
            "length": 0,
        },
        {
            "letter": "Q",
            "length": 0,
        },
        {
            "letter": "R",
            "length": 0,
        },
        {
            "letter": "S",
            "length": 0,
        },
        {
            "letter": "T",
            "length": 0,
        },
        {
            "letter": "U",
            "length": 0,
        }, {
            "letter": "V",
            "length": 0,
        },
        {
            "letter": "W",
            "length": 0,
        },
        {
            "letter": "X",
            "length": 0,
        },
        {
            "letter": "Y",
            "length": 0,
        },
        {
            "letter": "Z",
            "length": 0,
        },
    ]);

    const handleFirstLetter = (letter) => {
        setSelectedLetter(letter);
        const filteredWords = wordsArr.filter((word) => word[0] === letter.toLowerCase());
        setLetterWords(filteredWords);
        setShowLetterPage(true);
    };

    useEffect(() => {
        if (alphabet.length > 0 && wordsArr.length > 0) {
            setAlphabet(prevState => {
                const newState = prevState.map((obj) => {
                    let filteredWords = wordsArr.filter((word) => word[0] === obj.letter.toLowerCase());
                    return { ...obj, length: filteredWords.length };
                });

                return newState;
            });
        }
    }, [wordsArr]);

    return (
        <div className="grid grid-cols-alphabet gap-4 mx-4 relative">
            {alphabet.length > 0 && alphabet.map((alp, i) => (
                <button
                    key={i}
                    onClick={() => handleFirstLetter(alp.letter)}
                    className="border-mainText border-2 text-mainText p-8 rounded-lg relative w-full h-20 flex justify-center items-center uppercase gap-8 transition-colors
                    hover:bg-dict
                    focus:bg-dict
                    active:bg-dictActive"
                >
                    <span className="text-6xl">
                        {alp.letter}
                    </span>
                    <div className="flex flex-col text-xl">
                        <span>{alp.length}</span>
                        <span className="uppercase">Found</span>
                    </div>
                    <div className={`w-full h-2 absolute bottom-0 rounded-b-lg border-mainText border-t-2 ${alp.length > 0 ? "bg-creditGreen" : "bg-mistake"}`} />
                </button>
            ))}
        </div>
    );
}