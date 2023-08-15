function AboutSection() {
    return (
        <section id="about" className="pt-24">
            <h2 className="font-rubik text-4xl mb-6 font-semibold italic text-center">About</h2>
            <p className="text-xl mb-4">Building things that matter - that's what I'm passionate about.</p>
            <p className="text-xl mb-4">
                With a background in software engineering, I've spent the last 4 years as a product manager, immersed in
                the fast-paced world of fintech. I've had the privilege of working with innovative teams to create
                empowering products that educate and equip individuals to better manage their finances.
            </p>
            <p className="text-xl mb-10">
                Yet, amidst this fulfilling journey, I found myself missing the unique thrill of 'boots on the ground'
                problem-solving that's central to engineering. So I decided to dive back into the world of software
                engineering, eager to apply the strategic lens I've developed as a product manager to solve technical
                problems.
            </p>
            <div className="flex justify-center">
                <button className="font-rubik italic font-semibold text-2xl rounded bg-growth text-white py-2 px-20 hover:bg-growth-light hover:text-white transition-colors duration-200">
                    Let's Connect
                </button>
            </div>
        </section>
    );
}

export default AboutSection;
