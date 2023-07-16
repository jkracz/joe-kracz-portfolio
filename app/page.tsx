import Image from "next/image";
import joeGlobe from "./../public/joe-globe.svg";
import cornerLogo from "./../public/corner-logo.svg";

export default function Home() {
    return (
        <main className="container mx-auto my-auto">
            <div>
                <Image src={cornerLogo} alt="Joe Kracz name logo" />
                <span>About</span>
                <span>Projects</span>
                <span>Resume</span>
                <span>Let's Connect</span>
            </div>
            <div>
                <h1 className="font-rubik text-xl">
                    Hi, I'm <span className="text-growth">Joe Kracz</span>
                </h1>
                <h3>A Product Engineer based in Sunnyvale, CA</h3>
                <Image src={joeGlobe} alt="Joe Kracz sitting on a globe" />
            </div>
            <div>
                <h2 className="font-rubik text-xl">About</h2>
                <p>
                    Building things that matter - that's what I'm passionate about. With a background in software
                    engineering, I've spent the last 4 years as a product manager, immersed in the fast-paced world of
                    fintech. I've had the privilege of working with innovative teams to create empowering products that
                    educate and equip individuals to better manage their finances. Yet, amidst this fulfilling journey,
                    I found myself missing the unique thrill of 'boots on the ground' problem-solving that's central to
                    engineering. So, here I am, poised to dive back into the world of software engineering, eager to
                    apply the strategic lens I've developed as a product manager to solve intricate technical problems.
                    Ready for the next exciting chapter!
                </p>
                <button>Let's Connect</button>
            </div>
            <div>
                <h2> Here's a showcase of my projects</h2>
            </div>
            <div>
                <h2>Resume</h2>
                <span>Download here</span>
            </div>
            <div>
                <h2>Let's Connect</h2>
                <button>Connect</button>
            </div>
        </main>
    );
}
