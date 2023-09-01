"use client";
import { useState } from "react";
import Paragraph from "./Paragraph";
import { motion } from "framer-motion";

export default function ShowDefinition({ definition }) {
    const speechButtons = {
        visible: {
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1,
            },
        },
    };

    const speechButtonAni = {
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

    const [selectedDef, setSelectedDef] = useState(0);

    return (
        <div className="flex flex-col gap-4 mt-4">
            <div>
                {definition.meanings !== undefined &&
                    <div className="flex flex-col gap-4">
                        <Paragraph desc={definition.phonetic}>
                            PHONETIC
                        </Paragraph>

                        <div>
                            <Paragraph>
                                Part  &nbsp; of  &nbsp; Speech
                            </Paragraph>

                            <motion.div
                                className="flex flex-wrap gap-4"
                                variants={speechButtons}
                                initial="hidden"
                                animate="visible"
                            >
                                {definition.meanings.map((meaning, i) => (
                                    <motion.button
                                        key={i}
                                        onClick={() => setSelectedDef(i)}
                                        className={`border-2 border-mainText text-mainText uppercase font-bold w-fit px-4 py-2 rounded-lg transition-colors
                                    hover:bg-creditGreen 
                                    focus:bg-creditGreen 
                                    active:bg-creditGreenAct
                                    ${selectedDef === i ? "optionSelected" : ""}`}
                                        variants={speechButtonAni}
                                    >
                                        {meaning.partOfSpeech}
                                    </motion.button>
                                ))}
                            </motion.div>

                        </div>
                        <Paragraph desc={definition.meanings[selectedDef].definitions[0].definition}>
                            Definition
                        </Paragraph>
                        {definition.meanings[selectedDef].synonyms.length > 0 &&
                            <div className="capitalize">
                                <Paragraph>
                                    Synonysm
                                </Paragraph>

                                {definition.meanings[selectedDef].synonyms.map((synonysm, i) => (
                                    <div key={i}>
                                        <Paragraph desc={synonysm} key={i} />
                                    </div>
                                ))}
                            </div>

                        }
                        {definition.meanings[selectedDef].antonyms.length > 0 &&
                            <div className="capitalize">
                                <Paragraph>
                                    Antonysm
                                </Paragraph>
                                {definition.meanings[selectedDef].antonyms.map((synonysm, i) => (
                                    <div key={i}>
                                        <Paragraph desc={synonysm} key={i} />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}