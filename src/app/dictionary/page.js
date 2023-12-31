"use client";

import { useEffect, useState } from "react";
import Alphabet from "@/components/dictionary/Alphabet";
import ArrowLeft from "../../../public/svg/ArrowLeft";
import Link from "next/link";
import LetterPage from "./LetterPage";
import Line from "@/components/Line";
import WordTyping from "@/components/ui/WordTyping";

export default function Dictionary() {
    const [wordsArr, setWordsArr] = useState([]);
    const [letterWords, setLetterWords] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState("A");
    const [showLetterPage, setShowLetterPage] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("dictionary") === null) {
            localStorage.setItem("dictionary", JSON.stringify(["welcome"]));
        } else {
            const arr = JSON.parse(localStorage.getItem("dictionary"));
            console.log(arr);
            setWordsArr(arr);
        }
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto mb-8">
            <main>
                {!showLetterPage &&
                    <>
                        <div className="uppercase mt-12 text-center flex flex-col gap-2 mb-4 relative mx-4">
                            <Link href={"/"}>
                                <ArrowLeft btnName={"dictBtn"} />
                            </Link>
                            <h2 className="text-3xl text-mainText">
                                <WordTyping activeLine={true}>DICTIONARY</WordTyping>
                            </h2>
                            <div className="flex flex-col text-mainText">
                                <span className="text-4xl">
                                    <WordTyping>
                                        {wordsArr.length.toString()}
                                    </WordTyping>
                                </span>
                                <span className="text-2xl">
                                    <WordTyping>WORDS</WordTyping>
                                </span>
                            </div>
                            <Line />
                        </div>
                        <Alphabet wordsArr={wordsArr} setLetterWords={setLetterWords} setSelectedLetter={setSelectedLetter} setShowLetterPage={setShowLetterPage} letterWords={letterWords} />
                    </>
                }
                {showLetterPage &&
                    <LetterPage selectedLetter={selectedLetter} letterWords={letterWords} setShowLetterPage={setShowLetterPage} />
                }
            </main>
        </div>
    );
}