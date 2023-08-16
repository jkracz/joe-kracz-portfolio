import "./globals.css";
import Navbar from "./components/navbar.component";

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
        <html lang="en" className="scroll-smooth">
            <body className={`${rubik.variable} ${noto_serif.variable} bg-darkness text-white scroll-smooth`}>
                <Navbar></Navbar>
                {children}
                <footer className="font-rubik font-semibold text-slate-300 pt-20 pb-10 flex justify-center">
                    2023 Joe Kracz. All rights reserved.
                </footer>
            </body>
        </html>
    );
}
