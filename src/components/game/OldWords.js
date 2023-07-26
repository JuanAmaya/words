"use client";

import { useEffect, useState } from "react";

export default function OldWords({ ansWord }) {
    const [listWords, setListWords] = useState([]);

    useEffect(() => {
        if (ansWord === '') return;

        if (listWords.length > 2) {
            listWords.pop();
            console.log("pop");
        }
        setListWords([ansWord, ...listWords]);
        console.log(listWords);
        console.log(listWords.length);
    }, [ansWord]);

    return (
        <div className="flex flex-col-reverse font-bold text-center my-4 leading-none uppercase h-12">
            {
                listWords.map((word, i) => (
                    <span className={`word${i + 1}`} key={i}>
                        {word}
                    </span>
                ))
            }
        </div>
    );
}