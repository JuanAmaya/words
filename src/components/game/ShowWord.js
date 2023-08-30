export default function ShowWord({ guessedWord, setGuessedWord, onLetterDeleted }) {
    // El state si cambia pero no se actualiza automaticamente

    const handleRemove = (i) => {
        guessedWord.splice(i, 1);
        let croppedWord = guessedWord;
        onLetterDeleted(croppedWord);
    };

    return (
        <div className="flex gap-2">
            {
                guessedWord.map((letter, i) => <div
                    key={i}
                    className="p-4 rounded-full relative w-20 h-20 flex justify-center items-center border-2 border-mainText text-mainText"
                    onClick={() => handleRemove(i)}
                >
                    <span className="text-4xl uppercase font-bold">
                        {letter}
                    </span>
                </div>)
            }
            {
                [...Array(4 - guessedWord.length)].map((e, i) => <div
                    key={i}
                    className="w-20 h-20 border-white border-4 rounded-full">
                </div>
                )
            }
        </div>
    );
}