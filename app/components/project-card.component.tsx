import { ProjectCardPropsType } from "../types";

function ProjectCard({ project }: ProjectCardPropsType) {
    return (
        <div className="rounded shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-rubik text-xl mb-4">{project.title}</h3>
                <p className="font-noto-serif text-base mb-6">{project.description}</p>
                <div className="flex space-x-4">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ocean hover:underline"
                        >
                            Live URL
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ocean hover:underline"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
