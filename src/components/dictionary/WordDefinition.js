"use client";
import { useEffect, useState } from "react";
import Mistake from "../../../public/svg/Mistake";
import NoDefinition from "./NoDefinition";
import ShowDefinition from "./ShowDefinition";
import Line from "../Line";
import WordTyping from "../ui/WordTyping";
import { motion } from "framer-motion";

export default function WordDefinition({ word, setShowDefinition }) {
    const closeButtonAni = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.7,
            },
        },
    };

    const sideBarAni = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    const [definition, setDefinition] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const fetchDefinition = async (word) => {
        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await res.json();
            if (data.title !== undefined) {
                setDefinition(data);
                setNotFound(true);
            } else {
                setDefinition(data[0]);
                setNotFound(false);
            }
            console.log(data[0]);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchDefinition(word);
    }, [word]);

    return (
        <motion.div
            variants={sideBarAni}
            initial="hidden"
            animate="visible"
        >
            <div
                onClick={() => setShowDefinition(false)}
                className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm"
            >
            </div>
            <div className="fixed z-20 top-0 left-0">
                <div className="w-screen md:max-w-screen-sm bg-lightYellow rounded-lg p-8 h-screen overflow-y-scroll">
                    <div className="relative py-4">
                        <motion.button
                            onClick={() => setShowDefinition(false)}
                            className="absolute top-3 border-2 border-mainText rounded-lg"
                            variants={closeButtonAni}
                        >
                            <Mistake dictBtn={true} />
                        </motion.button>
                        <h2 className="text-4xl uppercase font-bold text-center text-mainText pl-12">
                            <WordTyping activeLine={true}>
                                {word}
                            </WordTyping>
                        </h2>
                    </div>
                    <Line />

                    {notFound &&
                        <NoDefinition definition={definition} />
                    }


                    {!notFound &&
                        <ShowDefinition definition={definition} />
                    }
                </div>
            </div>
        </motion.div>
    );
}