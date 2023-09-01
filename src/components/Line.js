"use client";
import { motion } from "framer-motion";

export default function Line() {
    const lineAni = {
        hidden: {
            width: 0,
        },
        visible: {
            width: "100%",
            transition: {
                duration: .5,
            },
        },
    };

    return (
        <motion.div
            className="bg-mainText h-0.5 w-full rounded-md mx-auto"
            variants={lineAni}
            initial="hidden"
            animate="visible"
        />
    );
}