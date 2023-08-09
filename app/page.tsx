import Image from "next/image";
import joeGlobe from "./../public/joe-globe.svg";
import cornerLogo from "./../public/corner-logo.svg";
import ghLogo from "./../public/social-icons/github.svg";
import liLogo from "./../public/social-icons/linkedin.svg";
import mailLogo from "./../public/social-icons/mail.svg";

export default function Home() {
    return (
        <div>
            <div className="font-rubik top-0 w-full bg-darkness z-50 py-2 px-60 shadow-md flex justify-between items-center">
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
                        href="#contact"
                        className="px-4 py-2 bg-growth text-white rounded hover:bg-growth-dark transition-colors duration-200"
                    >
                        Let's Connect
                    </a>
                </div>
            </div>
            <div className="mb-20 px-60 flex flex-wrap justify-center items-center">
                <div className=" flex-auto">
                    <h1 className="font-rubik text-7xl font-semibold italic">Hi,</h1>
                    <h1 className="font-rubik text-7xl font-semibold italic">
                        I'm <span className="text-growth">Joe Kracz</span>
                    </h1>
                    <h3 className="font-rubik text-3xl font-semibold">
                        A <span className="text-growth">Product Engineer</span> based in Sunnyvale, CA
                    </h3>
                </div>
                <div className=" flex-auto">
                    <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" width={450} height={750} />
                </div>
            </div>
            <section id="about" className="px-60">
                <h2 className="font-rubik text-4xl mb-6 font-semibold italic text-center">About</h2>
                <p className="text-xl mb-4">Building things that matter - that's what I'm passionate about.</p>
                <p className="text-xl mb-4">
                    With a background in software engineering, I've spent the last 4 years as a product manager,
                    immersed in the fast-paced world of fintech. I've had the privilege of working with innovative teams
                    to create empowering products that educate and equip individuals to better manage their finances.
                </p>
                <p className="text-xl mb-10">
                    Yet, amidst this fulfilling journey, I found myself missing the unique thrill of 'boots on the
                    ground' problem-solving that's central to engineering. So I decided to dive back into the world of
                    software engineering, eager to apply the strategic lens I've developed as a product manager to solve
                    technical problems.
                </p>
                <div className="flex justify-center">
                    <button className="font-rubik italic font-semibold text-2xl rounded bg-growth text-white py-2 px-20 hover:bg-growth-light hover:text-white transition-colors duration-200">
                        Let's Connect
                    </button>
                </div>
            </section>

            <div id="projects">
                <h2> Here's a showcase of my projects</h2>
            </div>
            <section className="p-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-rubik text-3xl mb-4">My Resume</h2>
                    <p className="font-noto-serif text-xl mb-6">
                        Want to see my professional journey in detail? Check out my resume below.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-ocean text-white px-6 py-2 rounded hover:bg-ocean-dark"
                        >
                            View Resume
                        </a>
                        <a
                            href="/resume.pdf"
                            download
                            className="bg-growth text-white px-6 py-2 rounded hover:bg-growth-dark"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 px-60">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-start px-8">
                    {/* Let's Connect Blurb */}
                    <div className="w-full md:w-1/3 md:pr-12 mb-12 md:mb-0 text-white">
                        <h2 className="font-rubik text-4xl mb-8">Let's Connect!</h2>
                        <p className="text-xl">
                            I'm always open to discussing product design, development work, or potential opportunities.
                            Don't hesitate to reach out!
                        </p>
                    </div>

                    {/* Connect Tiles */}
                    <div className="w-full md:w-2/3 space-y-6">
                        {/* Github Tile */}
                        <a
                            href="https://github.com/your-username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-slate-600 p-4 rounded-lg transition transform hover:scale-105 hover:bg-purple-800"
                        >
                            <Image src={ghLogo} alt="GitHub logo" className="h-8 w-8 mr-4" />
                            <h3 className="font-rubik text-xl text-white">GitHub</h3>
                        </a>

                        {/* LinkedIn Tile */}
                        <a
                            href="https://linkedin.com/in/joe-kracz-219829119/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-slate-600 p-4 rounded-lg transition transform hover:scale-105 hover:bg-blue-600"
                        >
                            <Image src={liLogo} alt="LinkedIn logo" className="h-8 w-8 mr-4" />
                            <h3 className="font-rubik text-xl text-white">LinkedIn</h3>
                        </a>

                        {/* Mail Tile */}
                        <a
                            href="mailto:joseph.kracz@gmail.com"
                            className="flex items-center bg-slate-600 p-4 rounded-lg transition transform hover:scale-105 hover:bg-yellow-500"
                        >
                            <Image src={mailLogo} alt="Email logo" className="h-8 w-8 mr-4" />
                            <h3 className="font-rubik text-xl text-white">Email</h3>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
