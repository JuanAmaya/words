"use client";
import { motion } from "framer-motion";

export default function ShowWordCount({ newWordsCount }) {
    const showCount = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.4,
                duration: .5,
            },
        },
    };

    return (
        <motion.div
            className="absolute z-10 bg-creditGreen px-3 rounded-full -top-6 -right-4"
            variants={showCount}
            initial="hidden"
            animate="visible"
        >
            <span className="text-md font-bold text-mainText">+ {newWordsCount}</span>
        </motion.div>
    );
}