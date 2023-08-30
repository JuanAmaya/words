import Backspace from "../../../public/svg/Backspace";

export default function DeleteButton({ setGuessedWord }) {
    return (
        <button className="border-2 border-mainText text-mainText p-4 rounded-full uppercase font-bold text-2xl transition-colors text-center absolute right-0 top-0
            hover:bg-mistake 
            focus:bg-mistake 
            active:bg-mistakeAct
        "
            onClick={() => setGuessedWord([])}
        >
            <Backspace />
        </button>
    );
}