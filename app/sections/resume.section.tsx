function ResumeSection() {
    return (
        <section id="resume" className="pt-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-rubik text-4xl mb-8 text-center">My Resume</h2>
                <p className="font-noto-serif text-xl mb-6">
                    Want to see my professional journey in detail? Check out my resume below.
                </p>

                <div className="flex justify-center space-x-4 text-xl font-rubik">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ocean px-6 py-2 rounded hover:bg-ocean-dark transition-colors duration-200"
                    >
                        View Resume
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-growth px-6 py-2 rounded hover:bg-growth-dark transition-colors duration-200"
                    >
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ResumeSection;
