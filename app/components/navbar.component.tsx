"use client";

import { useState } from "react";
import Image from "next/image";
import hamburgerMenu from "./../../public/icons/hamburger-menu.svg";
import xIcon from "./../../public/icons/x-icon.svg";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="font-rubik px-10 md:px-20 lg:px-30 xl:px-60 py-4 shadow-md fixed w-full z-50 top-0 bg-darkness">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src="/corner-logo.svg" alt="Logo" className="h-12 md:h-16" />
                    </a>
                    <div className="flex items-center space-x-5 text-xl">
                        <a href="#about" className="hidden lg:block hover:text-growth transition-colors duration-200">
                            About
                        </a>
                        <a
                            href="#projects"
                            className="hidden lg:block hover:text-growth transition-colors duration-200"
                        >
                            Projects
                        </a>
                        <a href="#resume" className="hidden lg:block hover:text-growth transition-colors duration-200">
                            Resume
                        </a>
                        {/* CTA Button */}
                        <a
                            href="#connect"
                            className="hidden lg:block px-4 py-2 mr-4 bg-growth rounded hover:bg-growth-dark transition-colors duration-200"
                        >
                            Let's Connect
                        </a>

                        {/* Hamburger Icon */}
                        <div onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden cursor-pointer z-60">
                            {!menuOpen ? (
                                <Image
                                    src={hamburgerMenu}
                                    alt="hamburger menu icon"
                                    className="h-8 w-8 md:h-12 md:w-12"
                                />
                            ) : (
                                <Image src={xIcon} alt="x icon menu" className="h-8 w-8" />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="fixed inset-0 bg-darkness z-40 flex justify-center items-center">
                    <div className="flex flex-col space-y-10 text-4xl md:text-5xl">
                        <a href="#about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                        <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                        <a href="#resume" onClick={() => setMenuOpen(false)}>
                            Resume
                        </a>
                        <a
                            href="#connect"
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-2 mr-4 bg-growth rounded hover:bg-growth-dark transition-colors duration-200"
                        >
                            Let's Connect
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
