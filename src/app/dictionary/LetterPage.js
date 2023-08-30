import ShowWords from "@/components/dictionary/ShowWords";
import ArrowLeft from "../../../public/svg/ArrowLeft";

export default function LetterPage({ selectedLetter, letterWords, setShowLetterPage, setShowDefinition, setWordSelected }) {
    return (
        <>
            <div className="mx-4 mt-12">
                <button onClick={() => setShowLetterPage(false)}>
                    <ArrowLeft btnName={"dictBtn"} />
                </button>
            </div>
            <div>
                <ShowWords letterWords={letterWords} selectedLetter={selectedLetter} />
            </div>
        </>
    );
}