export default function Mistake({ pathColor, dictBtn }) {
    return (
        <div className={`w-16 stroke-2 text-mainText rounded-lg ${pathColor} ${dictBtn ? "dictBtn" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}