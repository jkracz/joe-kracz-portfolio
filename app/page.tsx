import Image from "next/image";
import joeGlobe from "./../public/joe-globe.svg";
import cornerLogo from "./../public/corner-logo.svg";

export default function Home() {
    return (
        <div>
            <div className="font-rubik top-0 w-full bg-darkness z-50 py-2 px-4 shadow-md flex justify-between items-center">
                <Image src={cornerLogo} alt="Joe Kracz name logo" />
                <div className="space-x-4">
                    <a href="#about" className="text-white hover:text-growth transition-colors duration-200">
                        About
                    </a>
                    <a href="#projects" className="text-white hover:text-growth transition-colors duration-200">
                        Projects
                    </a>
                    <a href="#resume" className="text-white hover:text-growth transition-colors duration-200">
                        Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-growth text-white rounded hover:bg-growth-dark transition-colors duration-200"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="justify-center">
                    <h1 className="font-rubik text-6xl font-semibold italic">
                        Hi, I'm <span className="text-growth">Joe Kracz</span>
                    </h1>
                    <h3 className="font-rubik text-3xl font-semibold">
                        A <span className="text-growth">Product Engineer</span> based in Sunnyvale, CA
                    </h3>
                </div>
                <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" />
            </div>
            <section id="about" className="px-60">
                <h2 className="font-rubik text-5xl mb-6 font-semibold italic text-center">ABOUT</h2>
                <p className="text-2xl mb-4">Building things that matter - that's what I'm passionate about.</p>
                <p className="text-2xl mb-4">
                    With a background in software engineering, I've spent the last 4 years as a product manager,
                    immersed in the fast-paced world of fintech. I've had the privilege of working with innovative teams
                    to create empowering products that educate and equip individuals to better manage their finances.
                </p>
                <p className="text-2xl mb-6">
                    Yet, amidst this fulfilling journey, I found myself missing the unique thrill of 'boots on the
                    ground' problem-solving that's central to engineering. So, here I am, poised to dive back into the
                    world of software engineering, eager to apply the strategic lens I've developed as a product manager
                    to solve intricate technical problems.
                </p>
                <div className="flex justify-center">
                    <button className="font-rubik italic font-semibold text-2xl rounded bg-growth text-white py-2 px-20 hover:bg-growth-light hover:text-white transition-colors duration-200">
                        LET'S CONNECT
                    </button>
                </div>
            </section>

            <div id="projects">
                <h2> Here's a showcase of my projects</h2>
            </div>
            <div id="resume">
                <h2>Resume</h2>
                <span>Download here</span>
            </div>
            <div id="contact">
                <h2>Let's Connect</h2>
                {/* some linkouts to email, github, linkedin, etc */}
            </div>
        </div>
    );
}
