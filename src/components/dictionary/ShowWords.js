"use client";

import { useState } from "react";
import WordButton from "./WordButton";
import WordDefinition from "./WordDefinition";
import Line from "../Line";

export default function ShowWords({ letterWords, selectedLetter }) {
    const [wordSelected, setWordSelected] = useState("");
    const [showDefinition, setShowDefinition] = useState(false);

    return (
        <div className="mx-8">
            <div className="h-24 flex justify-center relative -z-10 -top-1">
                <span className="text-9xl font-bold text-mainText">{selectedLetter}</span>
            </div>
            <span className="uppercase font-bold mx-auto flex justify-center w-max border-2 border-mainText bg-lightYellow text-mainText py-2 px-4 rounded-full mb-4">{letterWords.length} Found</span>
            <Line />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {letterWords.length > 0 &&
                    letterWords.map((word, i) => (
                        <WordButton word={word} key={i} setShowDefinition={setShowDefinition} setWordSelected={setWordSelected} />
                    ))
                }
            </div>

            {letterWords.length === 0 &&
                <div>
                    <div className="flex justify-center mt-28 rotate-90">
                        <span className="text-9xl text-mainText font-bold">:&#40;</span>
                    </div>
                </div>
            }
            {showDefinition &&
                <WordDefinition word={wordSelected} setShowDefinition={setShowDefinition} />
            }
        </div>
    );
}