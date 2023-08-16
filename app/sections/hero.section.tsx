import joeGlobe from "./../../public/joe-globe.svg";
import Image from "next/image";

function HeroSection() {
    return (
        <div className="flex flex-wrap justify-center items-center font-rubik font-semibold">
            <div className=" flex-auto">
                <h1 className="text-5xl md:text-7xl italic">Hi,</h1>
                <h1 className="text-5xl md:text-7xl italic">
                    I'm <span className="text-growth">Joe Kracz</span>
                </h1>
                <h3 className="text-lg lg:text-4xl">
                    A <span className="text-growth">Product Engineer</span> based in Sunnyvale, CA
                </h3>
            </div>
            <div className="flex-auto">
                <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" className="w-full" />
            </div>
        </div>
    );
}

export default HeroSection;
