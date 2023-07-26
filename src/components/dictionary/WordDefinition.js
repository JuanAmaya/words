"use client";
import { useEffect, useState } from "react";
import Mistake from "../../../public/svg/Mistake";
import NoDefinition from "./NoDefinition";
import DottedBar from "../../../public/svg/DottedBar";
import ShowDefinition from "./ShowDefinition";

export default function WordDefinition({ word, setShowDefinition }) {
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
        <div>
            <div
                onClick={() => setShowDefinition(false)}
                className="fixed inset-0 bg-black/50 z-10 backdrop-blur-sm"
            >
            </div>
            <div className="fixed z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="w-full bg-darkBlue-900 rounded-lg p-8">
                    <div className="relative py-4">
                        <button
                            onClick={() => setShowDefinition(false)}
                            className="absolute top-3"
                        >
                            <Mistake menuBtn={true} />
                        </button>
                        <h2 className="text-4xl uppercase font-bold text-center">{word}</h2>
                        <DottedBar changeBG={notFound} />
                    </div>

                    {notFound &&
                        <NoDefinition definition={definition} />
                    }


                    {!notFound &&
                        <ShowDefinition definition={definition} />
                    }
                </div>
            </div>
        </div>
    );
}