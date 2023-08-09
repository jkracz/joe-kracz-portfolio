"use client";

import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="px-60 py-4 shadow-md fixed w-full z-50 top-0">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/corner-logo.svg" alt="Logo" className="h-12" />

                    <div className="flex items-center">
                        {/* CTA Button */}
                        <a
                            href="#connect"
                            className="px-4 py-2 mr-4 bg-growth text-white rounded hover:bg-growth-dark transition-colors duration-200"
                        >
                            Let's Connect
                        </a>

                        {/* Hamburger Icon */}
                        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer z-60">
                            {menuOpen ? <div>X</div> : <div>MENU</div>}
                        </div>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-40 flex justify-center items-center">
                    <div className="flex flex-col space-y-6 text-white text-2xl">
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;

{
    /* <div className="font-rubik top-0 w-full bg-darkness z-50 py-2 px-60 shadow-md flex justify-between items-center">
                <Image src={cornerLogo} alt="Joe Kracz name logo" height={65} />
                <div className="space-x-4">
                    <a href="#about" className="text-white hover:text-growth transition-colors duration-200">
                        About
                    </a>
                    <a href="#projects" className="text-white hover:text-growth transition-colors duration-200">
                        Portfolio
                    </a>
                    <a href="#resume" className="text-white hover:text-growth transition-colors duration-200">
                        Resume
                    </a>
                    <a
                        href="#connect"
                        className="px-4 py-2 bg-growth text-white rounded hover:bg-growth-dark transition-colors duration-200"
                    >
                        Let's Connect
                    </a>
                </div>
            </div> */
}
