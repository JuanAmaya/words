"use client";
import { useState } from "react";
import Paragraph from "./Paragraph";

export default function ShowDefinition({ definition }) {
    const [selectedDef, setSelectedDef] = useState(0);

    return (
        <div className="flex flex-col gap-4 mt-4">
            {definition.title}
            {/* <Paragraph subtitle={"Phonetics"} desc={definition.phonetics} /> */}

            <div>
                {definition.meanings !== undefined &&
                    <div className="flex flex-col gap-4">
                        <div>
                            <Paragraph subtitle={"Part of Speech"} />

                            <div className="flex flex-wrap gap-4">
                                {definition.meanings.map((meaning, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDef(i)}
                                        className={`border-2 border-mainText text-mainText uppercase font-bold w-fit px-4 py-2 rounded-lg transition-colors
                                    hover:bg-creditGreen 
                                    focus:bg-creditGreen 
                                    active:bg-creditGreenAct
                                    ${selectedDef === i ? "optionSelected" : ""}`}
                                    >
                                        {meaning.partOfSpeech}
                                    </button>
                                ))}
                            </div>

                        </div>
                        <Paragraph subtitle={"Definition"} desc={definition.meanings[selectedDef].definitions[0].definition} />
                        {definition.meanings[selectedDef].synonyms.length > 0 &&
                            <div className="capitalize">
                                <Paragraph subtitle={"Synonysm"} />

                                {definition.meanings[selectedDef].synonyms.map((synonysm, i) => (
                                    <Paragraph desc={synonysm} key={i} />
                                ))}
                            </div>

                        }
                        {definition.meanings[selectedDef].antonyms.length > 0 &&
                            <Paragraph subtitle={"Antonysm"} desc={definition.meanings[selectedDef].antonysm} />
                        }
                    </div>
                }
            </div>
        </div>
    );
}