import ResultCard from "@/components/failed/ResultCard";
import DottedBar from "../../../public/svg/DottedBar";
import Button from "@/components/Button";

export default function FailedScreen({ answer, score, setPlayAgain, newWordsCount }) {
    return (
        <div className="mx-8 flex flex-col items-center">
            <div className=" uppercase font-bold text-center my-12">
                <span className="text-mistake text-5xl">FAILED</span>
                <div className="mt-4 flex flex-col">
                    <span className="text-darkBlue-600 text-2xl">THE WORD WAS</span>
                    <span className="text-4xl">{answer}</span>
                </div>
            </div>

            <ResultCard title={"Final"} subtitle={"Score"} num={score} classColor={"purpleCard"} />

            <DottedBar />

            <div className="flex flex-col gap-8 mt-8">
                <button
                    className="bg-dsButton p-4 rounded-md uppercase font-bold text-2xl transition-colors text-center playBtn"
                    onClick={() => setPlayAgain(true)}
                >
                    Play Again
                </button>
                <div className="relative">
                    {newWordsCount > 0 &&
                        <div className="absolute z-10 bg-creditGreen px-3 rounded-md -top-6 -right-4">
                            <span className="text-md font-bold">+ {newWordsCount}</span>
                        </div>
                    }
                    <Button btnName={"dictBtn"} title={"Dictionary"} pageUrl={"/dictionary"} notification={newWordsCount} />
                </div>
                <Button btnName={"menuBtn"} title={"Menu"} pageUrl={"/"} />
            </div>
        </div>
    );
}