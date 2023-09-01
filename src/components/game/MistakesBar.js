"use client";
import Mistake from "../../../public/svg/Mistake";
import { motion } from "framer-motion";

export default function MistakesBar({ mistake }) {
    const allMistakes = {
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2,
            },
        },
    };

    const mistakesAni = {
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

    return (
        <motion.div
            className="flex"
            variants={allMistakes}
            initial="hidden"
            animate="visible"
        >
            {
                [...Array(mistake)].map((e, i) =>
                    <motion.div
                        variants={mistakesAni}
                    >
                        <Mistake key={i} pathColor={"mistakeMade"} />
                    </motion.div>
                )
            }
            {
                [...Array(3 - mistake)].map((e, i) =>
                    <motion.div
                        variants={mistakesAni}
                    >
                        <Mistake key={i} />
                    </motion.div>
                )
            }
        </motion.div>
    );
}