"use client";
import { motion } from "framer-motion";

export default function ShowWord({ guessedWord, setGuessedWord, onLetterDeleted }) {
    const allCircles = {
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };

    const circlesAni = {
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

    const handleRemove = (i) => {
        guessedWord.splice(i, 1);
        let croppedWord = guessedWord;
        onLetterDeleted(croppedWord);
    };

    return (
        <motion.div
            className="flex gap-2"
            variants={allCircles}
            initial="hidden"
            animate="visible"
        >
            {
                guessedWord.map((letter, i) => <motion.div
                    key={i}
                    className="p-4 rounded-full relative w-20 h-20 flex justify-center items-center border-2 border-mainText text-mainText"
                    onClick={() => handleRemove(i)}
                    variants={circlesAni}
                >
                    <span className="text-4xl uppercase font-bold">
                        {letter}
                    </span>
                </motion.div>)
            }
            {
                [...Array(4 - guessedWord.length)].map((e, i) => <motion.div
                    key={i}
                    className="w-20 h-20 border-white border-4 rounded-full"
                    variants={circlesAni}
                >
                </motion.div>
                )
            }
        </motion.div >
    );
}