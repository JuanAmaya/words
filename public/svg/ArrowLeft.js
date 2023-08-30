export default function ArrowLeft({ btnName }) {
    return (
        <div className={`absolute border-mainText border-2 p-2 rounded-lg w-max ${btnName} transition-colors text-mainText`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </div>
    );
}