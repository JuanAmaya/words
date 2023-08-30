import Line from "@/components/Line";
import Button from "@/components/Button";

export default function FailedScreen({ answer, score, setPlayAgain, newWordsCount }) {
    return (
        <div className="mx-8 flex flex-col items-center">
            <div className="text-center my-12">
                <span className="text-mistake text-7xl">FAILED</span>
                <div className="mt-4 flex flex-col">
                    <span className="text-mainText text-2xl">1. The <span className="text-markWord">Word</span> was <span className="text-creditGreen">{answer}</span></span>
                    <span className="text-mainText text-2xl">2. Your <span className="text-markWord">Final Score</span> was <span className="text-creditGreen">{score}</span></span>
                </div>
            </div>

            <Line />

            <div className="flex flex-col gap-8 mt-8">
                <button
                    className={`border-2 border-mainText px-12 py-2 rounded-full uppercase text-mainText text-2xl transition-colors text-center
                    hover:bg-btnPurpleHov focus:bg-btnPurpleHov
                    active:bg-btnPurpleAct`}
                    onClick={() => setPlayAgain(true)}
                >
                    Play Again
                </button>
                <div className="relative">
                    {newWordsCount > 0 &&
                        <div className="absolute z-10 bg-creditGreen px-3 rounded-full -top-6 -right-4">
                            <span className="text-md font-bold text-mainText">+ {newWordsCount}</span>
                        </div>
                    }
                    <Button btnName={"failedBtn"} title={"Dictionary"} pageUrl={"/dictionary"} notification={newWordsCount} />
                </div>
                <Button btnName={"failedBtn"} title={"Menu"} pageUrl={"/"} />
            </div>
        </div>
    );
}