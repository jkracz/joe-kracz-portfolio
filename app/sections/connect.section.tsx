import ghLogo from "./../../public/icons/github.svg";
import liLogo from "./../../public/icons/linkedin.svg";
import mailLogo from "./../../public/icons/mail.svg";

import Image from "next/image";

function ConnectSection() {
    return (
        <section id="connect" className="pt-24">
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
                        href="https://github.com/jkracz"
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
    );
}

export default ConnectSection;
