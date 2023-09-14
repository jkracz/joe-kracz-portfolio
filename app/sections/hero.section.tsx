import joeGlobe from "./../../public/joe-globe.svg";
import Image from "next/image";

function HeroSection() {
    return (
        <div id="hero" className="flex flex-wrap justify-center items-center font-rubik font-semibold">
            <div className=" flex-auto">
                <h1 className="text-3xl 2xl:text-6xl italic">Hi,</h1>
                <h1 className="text-3xl 2xl:text-6xl italic">
                    I'm <span className="text-growth">Joe Kracz</span>
                </h1>
                <h3 className="text-lg xl:text-2xl">
                    A <span className="text-growth">Product Engineer</span> based in Sunnyvale, CA
                </h3>
            </div>
            <div className="flex justify-center w-full md:w-1/2 2xl:max-w-lg">
                <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" className="w-full md:w-1/2  2xl:w-full" />
            </div>
        </div>
    );
}

export default HeroSection;

// w-full md:w-auto xl:w-full
