export default function WordButton({ word, setShowDefinition, setWordSelected }) {
    const handleWordDefinition = () => {
        setWordSelected(word);
        setShowDefinition(true);
    };

    return (
        <button
            className="border-2 border-mainText text-mainText rounded-lg p-4 transition-colors
            hover:bg-dict 
            focus:bg-dict
            active:bg-dictActive"
            onClick={handleWordDefinition}
        >
            <span className="uppercase text-2xl font-bold">{word}</span>
        </button>
    );
}