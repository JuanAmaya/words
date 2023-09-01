"use client";
import WordTyping from "../ui/WordTyping";
import { motion } from "framer-motion";

export default function Paragraph({ children, desc }) {

    const descAni = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="text-xl flex flex-col">
            <span className="uppercase font-bold text-black flex justify-start">
                {children &&
                    <WordTyping>
                        {children}
                    </WordTyping>
                }
            </span>
            <motion.span
                className="text-mainText"
                variants={descAni}
                initial="hidden"
                animate="visible"
            >
                {desc}
            </motion.span>
        </div>
    );
}