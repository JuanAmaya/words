export default function ScoreTable({ score }) {
    return (
        <div className="flex flex-col text-center mt-12">
            <span
                className="uppercase text-darkBlue-600 font-bold text-2xl"
            >
                Score
            </span>
            <span className="text-white font-bold text-4xl">
                {score}
            </span>
        </div>
    );
}