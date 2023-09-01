"use client";
import { motion } from "framer-motion";

export default function WordButton({ word, setShowDefinition, setWordSelected, variants }) {
    const handleWordDefinition = () => {
        setWordSelected(word);
        setShowDefinition(true);
    };

    return (
        <motion.button
            className="border-2 border-mainText text-mainText rounded-lg p-4 transition-colors
            hover:bg-dict 
            focus:bg-dict
            active:bg-dictActive"
            onClick={handleWordDefinition}
            variants={variants}
        >
            <span className="uppercase text-2xl font-bold">{word}</span>
        </motion.button>
    );
}