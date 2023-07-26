"use client";

import { useState } from "react";
import WordButton from "./WordButton";
import WordDefinition from "./WordDefinition";
import Paragraph from "./Paragraph";

export default function ShowWords({ letterWords, selectedLetter }) {
    const [wordSelected, setWordSelected] = useState("");
    const [showDefinition, setShowDefinition] = useState(false);

    return (
        <div className="mx-8">
            <div className="h-24 flex justify-center relative -z-10 -top-1">
                <span className="text-9xl font-bold text-dict">{selectedLetter}</span>
            </div>
            <span className="uppercase font-bold mx-auto flex justify-center w-max bg-darkBlue-600 py-2 px-4 rounded-lg mb-4">{letterWords.length} Found</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {letterWords.length > 0 &&
                    letterWords.map((word, i) => (
                        <WordButton word={word} key={i} setShowDefinition={setShowDefinition} setWordSelected={setWordSelected} />
                    ))
                }
            </div>

            {letterWords.length === 0 &&
                <div>
                    {/* <h3 className="uppercase font-bold text-4xl text-center mb-4">None :&#40;</h3>
                    <div className="flex flex-col gap-3">
                        <Paragraph subtitle={"Phonetics"} desc={"/nɒn/"} />
                        <Paragraph subtitle={"Definition"} desc={"Not any of a given number or group."} />
                    </div> */}
                    <div className="flex justify-center mt-28 rotate-90">
                        <span className="text-9xl text-dict font-bold">:&#40;</span>
                    </div>
                </div>
            }
            {showDefinition &&
                <WordDefinition word={wordSelected} setShowDefinition={setShowDefinition} />
            }
        </div>
    );
}