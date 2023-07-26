import ArrowUp from "../../../public/svg/ArrowUp";

export default function SubmitButton({ word, guessedWord, setScore, setMistake, setAnswer, setNewWordsCount }) {
    const handleSubmit = () => {
        if (guessedWord.length < 4) {
            console.log("NOT ENOUGH");
        } else {
            const joinedAnswer = guessedWord.join("");

            if (word === joinedAnswer) {
                if (localStorage.getItem("dictionary") === null) {
                    localStorage.setItem("dictionary", JSON.stringify([joinedAnswer]));
                } else {
                    const currentWords = JSON.parse(localStorage.getItem("dictionary"));
                    for (let i = 0; i < currentWords.length; i++) {
                        if (currentWords[i] === joinedAnswer) {
                            return;
                        }
                    }

                    console.log("palabras", currentWords);
                    localStorage.setItem("dictionary", JSON.stringify([...currentWords, joinedAnswer]));
                    setNewWordsCount(prev => prev + 1);
                }

                setScore(prev => prev + 1);
                console.log("CORRECT");
            } else {
                setMistake(prev => prev + 1);
                setAnswer(word);
                console.log("INCORRECT");
            }
        }
    };

    return (
        <button className="bg-dsButton p-4 rounded-full uppercase font-bold text-2xl transition-colors text-center mt-12 mx-auto
            hover:bg-creditGreen hover:text-dsButton
            focus:bg-creditGreen focus:text-dsButton
            active:bg-creditGreenAct
        "
            onClick={handleSubmit}
        >
            <ArrowUp />
        </button>
    );
}