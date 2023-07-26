"use client";

import { useEffect, useState } from "react";
import DottedBar from "../../../public/svg/DottedBar";
import Alphabet from "@/components/dictionary/Alphabet";
import ArrowLeft from "../../../public/svg/ArrowLeft";
import Link from "next/link";
import LetterPage from "./LetterPage";

export default function Dictionary() {
    const [wordsArr, setWordsArr] = useState([]);
    const [letterWords, setLetterWords] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState("A");
    const [showLetterPage, setShowLetterPage] = useState(false);

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem("dictionary"));
        console.log(arr);
        setWordsArr(arr);
    }, []);

    return (
        <div className="max-w-screen-lg mx-auto mb-8">
            <main>
                {!showLetterPage &&
                    <>
                        <div className="uppercase mt-12 font-bold text-center flex flex-col gap-2 mb-4 relative mx-4">
                            <Link href={"/"}>
                                <ArrowLeft />
                            </Link>
                            <h2 className="text-3xl text-dict">Dictionary</h2>
                            <div className="flex flex-col">
                                <span className="text-4xl">{wordsArr.length}</span>
                                <span className="text-2xl">Words</span>
                            </div>
                            <DottedBar />
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