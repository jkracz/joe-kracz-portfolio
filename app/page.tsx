import ProjectsSection from "./sections/projects.section";
import AboutSection from "./sections/about.section";
import ResumeSection from "./sections/resume.section";
import ConnectSection from "./sections/connect.section";
import HeroSection from "./sections/hero.section";

import { ProjectType } from "./types";

const projects: Array<ProjectType> = require("./../public/projects.json");

export default function Home() {
    return (
        <div className="pt-24 px-10 md:px-20 lg:px-30 xl:px-60">
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ProjectsSection projects={projects}></ProjectsSection>
            <ResumeSection></ResumeSection>
            <ConnectSection></ConnectSection>
        </div>
    );
}
