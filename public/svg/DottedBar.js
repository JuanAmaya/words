export default function DottedBar({ changeBG }) {
    return (
        <div className="flex justify-center gap-2 h-4 mt-8">
            {[...Array(8)].map((e, i) => (
                <div className={`min-w-full h-4 rounded-full ${changeBG ? "dottedError" : "dottedNormal"} dottedBar`} key={i} />
            ))}
        </div>
    );
}