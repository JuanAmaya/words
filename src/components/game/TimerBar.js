import { useEffect, useState } from "react";

export default function TimerBar({ setMistake, score }) {
    const [gameTimer, setGameTimer] = useState(10);

    useEffect(() => {
        const intervalTimer = setInterval(() => {
            setGameTimer(prev => prev - 1);
        }, 1000);

        if (gameTimer <= 0) {
            setMistake(prev => prev + 1);
            setGameTimer(10);
        }

        return () => clearInterval(intervalTimer);
    }, [gameTimer]);

    useEffect(() => {
        setGameTimer(10);
    }, [score]);

    return (
        <div className="flex gap-2 h-4 my-8">
            {[...Array(gameTimer)].map((e, i) => (
                <div className="w-6 h-4 bg-darkBlue-600 rounded-full" key={i} />
            ))}
        </div>
    );
}