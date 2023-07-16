import "./globals.css";

import { notoSerif } from "./fonts";

export const metadata = {
    title: "Joe Kracz",
    description:
        "Learn more about how Joe Kracz uses his product management and engineering skillsets to build products that matter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={notoSerif.className}>{children}</body>
        </html>
    );
}
