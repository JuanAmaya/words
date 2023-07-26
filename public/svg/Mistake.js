export default function Mistake({ pathColor, menuBtn }) {
    return (
        <div className={`w-16 stroke-2 text-darkBlue-600 rounded-lg ${pathColor} ${menuBtn ? "menuBtn" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}