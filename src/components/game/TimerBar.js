"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TimerBar({ setMistake, score }) {
    const timerAni = {
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

    const [gameTimer, setGameTimer] = useState(10);

    useEffect(() => {
        const intervalTimer = setInterval(() => {
            setGameTimer(prev => prev - 1);
        }, 1000);

        if (gameTimer <= 0) {
            setMistake(prev => prev + 1);
            setGameTimer(10);
        }

        return () => clearInterval(intervalTimer);
    }, [gameTimer]);

    useEffect(() => {
        setGameTimer(10);
    }, [score]);

    return (
        <motion.div
            className="flex gap-2 h-4 my-8"
            variants={timerAni}
            initial="hidden"
            animate="visible"
        >
            {[...Array(gameTimer)].map((e, i) => (
                <div className="w-6 h-4 bg-mainText rounded-full" key={i} />
            ))}
        </motion.div>
    );
}