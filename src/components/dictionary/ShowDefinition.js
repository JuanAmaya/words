"use client";
import { useState } from "react";
import Paragraph from "./Paragraph";

export default function ShowDefinition({ definition }) {
    const [selectedDef, setSelectedDef] = useState(0);

    return (
        <div className="flex flex-col gap-4">
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
                                        className={`bg-darkBlue-600 uppercase font-bold w-fit px-4 py-2 rounded-lg transition-colors
                                    hover:bg-creditGreen hover:text-btnText
                                    focus:bg-creditGreen focus:text-btnText
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
                            <Paragraph subtitle={"Synonysm"} desc={definition.meanings[selectedDef].synonyms} />
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