import "./globals.css";
import Navbar from "./navbar";

import { Noto_Serif, Rubik } from "next/font/google";

const noto_serif = Noto_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-noto-serif",
});

const rubik = Rubik({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-rubik",
});

export const metadata = {
    title: "Joe Kracz",
    description:
        "Learn more about how Joe Kracz uses his product management and engineering skillsets to build products that matter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${rubik.variable} ${noto_serif.variable} bg-darkness text-white`}>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}
