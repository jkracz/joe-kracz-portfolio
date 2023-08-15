import joeGlobe from "./../../public/joe-globe.svg";
import Image from "next/image";

function HeroSection() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className=" flex-auto">
                <h1 className="font-rubik text-7xl font-semibold italic">Hi,</h1>
                <h1 className="font-rubik text-7xl font-semibold italic">
                    I'm <span className="text-growth">Joe Kracz</span>
                </h1>
                <h3 className="font-rubik text-3xl font-semibold">
                    A <span className="text-growth">Product Engineer</span> based in Sunnyvale, CA
                </h3>
            </div>
            <div className="flex-auto">
                <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" width={450} height={750} />
            </div>
        </div>
    );
}

export default HeroSection;
