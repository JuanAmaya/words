export default function ResultCard({ title, subtitle, num, classColor }) {
    return (
        <div className={`flex flex-col font-bold rounded-full py-4 px-8 text-center gap-2 ${classColor}`}>
            <span className="uppercase text-2xl">{title} <br /> {subtitle}</span>
            <span className="text-4xl">{num}</span>
        </div>
    );
}