"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WordTyping({ children, activeLine }) {
    const lineTick = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatDelay: .75
            }
        }
    };

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
                duration: 1
            },
        },
    };

    const [desactivateLine, setDesactiveLine] = useState(false);

    useEffect(() => {
        let timerLength = children.length * 150;
        const timer = setTimeout(() => {
            setDesactiveLine(true);
        }, timerLength);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.span
            className="flex justify-center"
            variants={fullWord}
            initial="hidden"
            animate="visible"
        >
            {[...children].map((letter, i) => (
                <motion.span variants={letterAni} key={i}>
                    {letter}
                </motion.span>
            ))}
            {!desactivateLine &&
                <motion.span
                    variants={lineTick}
                    initial="hidden"
                    animate="visible"
                >|
                </motion.span>
            }
            {(activeLine && desactivateLine) && <motion.span
                variants={lineTick}
                initial="hidden"
                animate="visible"
            >|
            </motion.span>}
        </motion.span>
    );
}