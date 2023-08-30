"use client";
import { usePathname } from 'next/navigation';

export default function BackgroundColor({ children, classes }) {
    const pathname = usePathname();
    console.log(pathname);
    let pageBg = "bg-lightGren";
    switch (pathname) {
        case "/":
            pageBg = "bg-lightGren";
            break;

        case "/dictionary":
            pageBg = "bg-lightYellow";
            break;

        case "/game":
            pageBg = "bg-lightPurple";
            break;
    }

    return (
        <body className={`${classes} ${pageBg} transition-colors`}>
            {children}
        </body>
    );
}