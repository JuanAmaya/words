import Link from "next/link";

export default function Button({ btnName, title, pageUrl }) {
    return (
        <Link
            className={`bg-dsButton p-4 rounded-md uppercase font-bold text-2xl transition-colors text-center
            ${btnName}`}
            href={pageUrl}
        >
            {title}
        </Link>
    );
};