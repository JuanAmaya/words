import ShowWords from "@/components/dictionary/ShowWords";
import WordButton from "@/components/dictionary/WordButton";
import ArrowLeft from "../../../public/svg/ArrowLeft";

export default function LetterPage({ selectedLetter, letterWords, setShowLetterPage, setShowDefinition, setWordSelected }) {
    return (
        <>
            <div>
                <button onClick={() => setShowLetterPage(false)}>
                    <ArrowLeft />
                </button>
            </div>
            <div>
                <ShowWords letterWords={letterWords} selectedLetter={selectedLetter} />
            </div>
        </>
    );
}