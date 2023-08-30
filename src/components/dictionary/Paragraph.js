export default function Paragraph({ subtitle, desc }) {
    return (
        <div className="text-xl flex flex-col">
            <span className="uppercase font-bold text-black">{subtitle}</span>
            <span className="text-mainText">{desc}</span>
        </div>
    );
}