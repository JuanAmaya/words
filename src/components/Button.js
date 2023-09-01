import Link from "next/link";
import WordTyping from "./ui/WordTyping";

export default function Button({ btnName, title, pageUrl }) {
    return (
        <Link
            className={`border-2 border-mainText px-12 py-2 rounded-full uppercase text-mainText text-2xl transition-colors text-center 
            ${btnName}`}
            href={pageUrl}
        >
            <WordTyping>
                {title}
            </WordTyping>
        </Link>
    );
};