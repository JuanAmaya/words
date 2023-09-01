"use client";

import { useState } from "react";
import WordButton from "./WordButton";
import WordDefinition from "./WordDefinition";
import Line from "../Line";
import { motion } from "framer-motion";
import WordTyping from "../ui/WordTyping";

export default function ShowWords({ letterWords, selectedLetter }) {
    const letterAni = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        },
    };

    const completeWordArr = {
        visible: {
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.05,
            },
        },
    };

    const WordArrAni = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    const [wordSelected, setWordSelected] = useState("");
    const [showDefinition, setShowDefinition] = useState(false);

    return (
        <div className="mx-8">
            <div className="h-24 flex justify-center relative -z-10 -top-1">
                <motion.span
                    className="text-9xl font-bold text-mainText"
                    variants={letterAni}
                    initial="hidden"
                    animate="visible"
                >
                    {selectedLetter}
                </motion.span>
            </div>
            <span className="uppercase font-bold mx-auto flex justify-center w-max border-2 border-mainText bg-lightYellow text-mainText py-2 px-4 rounded-full mb-4"
            >
                <WordTyping>
                    {letterWords.length.toString()}
                </WordTyping>
                <WordTyping>
                    &nbsp; Found
                </WordTyping>
            </span>
            <Line />
            <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4"
                variants={completeWordArr}
                initial="hidden"
                animate="visible"
            >
                {letterWords.length > 0 &&
                    letterWords.map((word, i) => (
                        <WordButton word={word} key={i} setShowDefinition={setShowDefinition} setWordSelected={setWordSelected} variants={WordArrAni} />
                    ))
                }
            </motion.div>

            {letterWords.length === 0 &&
                <div>
                    <motion.div
                        className="flex justify-center mt-28 rotate-90"
                        variants={WordArrAni}
                        initial="hidden"
                        animate="visible"
                    >
                        <span className="text-9xl text-mainText font-bold">:&#40;</span>
                    </motion.div>
                </div>
            }
            {showDefinition &&
                <WordDefinition word={wordSelected} setShowDefinition={setShowDefinition} />
            }
        </div>
    );
}