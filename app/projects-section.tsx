import ProjectCard from "./components/project-card";
import { ProjectSectionPropsType } from "./types";

function ProjectsSection({ projects }: ProjectSectionPropsType) {
    return (
        <section id="projects" className="pt-24">
            <h2 className="font-rubik text-4xl mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <a
                    href="https://github.com/jkracz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-growth text-white rounded hover:bg-growth-dark transition-colors duration-200"
                >
                    See more projects on GitHub
                </a>
            </div>
        </section>
    );
}

export default ProjectsSection;
