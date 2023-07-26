export default function Paragraph({ subtitle, desc }) {
    return (
        <div className="text-xl flex flex-col">
            <span className="uppercase text-dict font-bold">{subtitle}</span>
            <span>{desc}</span>
        </div>
    );
}