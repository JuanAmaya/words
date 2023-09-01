import WordTyping from "../ui/WordTyping";

export default function ScoreTable({ score }) {
    return (
        <div className="flex flex-col text-center mt-12">
            <span
                className="uppercase text-black font-bold text-2xl"
            >
                <WordTyping>
                    Score
                </WordTyping>
            </span>
            <span className="text-mainText font-bold text-4xl">
                <WordTyping>
                    {score.toString()}
                </WordTyping>
            </span>
        </div>
    );
}