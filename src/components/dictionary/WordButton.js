export default function WordButton({ word, setShowDefinition, setWordSelected }) {
    const handleWordDefinition = () => {
        setWordSelected(word);
        setShowDefinition(true);
    };

    return (
        <button
            className="bg-darkBlue-600 rounded-lg p-4 transition-colors
            hover:bg-dict hover:text-btnText
            focus:bg-dict focus:text-btnText
            active:bg-dictActive"
            onClick={handleWordDefinition}
        >
            <span className="uppercase text-2xl font-bold">{word}</span>
        </button>
    );
}