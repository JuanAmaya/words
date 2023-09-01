"use client";
import { motion } from "framer-motion";

export default function PlayAgainButton({ children, setPlayAgain }) {
    const fullWord = {
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    };

    const letterAni = {
        hidden: {
            display: "none",
        },
        visible: {
            display: "block",
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.button
            className={`border-2 border-mainText px-12 py-2 rounded-full uppercase text-mainText text-2xl transition-colors text-center flex
                    hover:bg-btnPurpleHov focus:bg-btnPurpleHov
                    active:bg-btnPurpleAct`}
            onClick={() => setPlayAgain(true)}
            variants={fullWord}
            initial="hidden"
            animate="visible"
        >
            {[...children].map((letter, i) => (
                <motion.span variants={letterAni} key={i}>
                    {letter}
                </motion.span>
            ))}
        </motion.button>
    );
}