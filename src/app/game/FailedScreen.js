import Line from "@/components/Line";
import Button from "@/components/Button";
import PlayAgainButton from "@/components/ui/PlayAgainButton";
import ShowWordCount from "@/components/ui/ShowWordCount";
import WordTyping from "@/components/ui/WordTyping";

export default function FailedScreen({ answer, score, setPlayAgain, newWordsCount }) {
    return (
        <div className="mx-8 flex flex-col items-center">
            <div className="text-center my-12">
                <h2 className="text-mistake text-7xl">
                    <WordTyping activeLine={true}>
                        FAILED
                    </WordTyping>
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                    <span className="text-mainText text-2xl flex">
                        <WordTyping>
                            1. The &nbsp;
                        </WordTyping>
                        <span className="bg-markWord">
                            <WordTyping>
                                Word
                            </WordTyping>
                        </span>
                        <WordTyping>
                            &nbsp; was &nbsp;
                        </WordTyping>
                        <span className="bg-creditGreen">
                            <WordTyping>
                                {answer}
                            </WordTyping>
                        </span>
                    </span>
                    <span className="text-mainText text-2xl flex">
                        <WordTyping>
                            2. Your &nbsp;
                        </WordTyping>
                        <span className="bg-markWord">
                            <WordTyping>
                                Final Score
                            </WordTyping>
                        </span>
                        <WordTyping>
                            &nbsp; was &nbsp;
                        </WordTyping>
                        <span className="bg-creditGreen">
                            <WordTyping>
                                {score.toString()}
                            </WordTyping>
                        </span>
                    </span>
                </div>
            </div>

            <Line />

            <div className="flex flex-col gap-8 mt-8">
                <PlayAgainButton setPlayAgain={setPlayAgain}>
                    Play&nbsp;Again
                </PlayAgainButton>
                <div className="relative">
                    {newWordsCount > 0 &&
                        <ShowWordCount newWordsCount={newWordsCount} />
                    }
                    <div className="flex">
                        <Button btnName={"failedBtn"} title={"Dictionary"} pageUrl={"/dictionary"} notification={newWordsCount} />
                    </div>
                </div>
                <Button btnName={"failedBtn"} title={"Menu"} pageUrl={"/"} />
            </div>
        </div>
    );
};