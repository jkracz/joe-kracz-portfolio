export type ProjectType = {
    id: number;
    title: string;
    description: string;
    imageUrl: string | undefined;
    liveUrl: string | undefined;
    githubUrl: string | undefined;
};

export interface ProjectCardPropsType {
    project: ProjectType;
}

export interface ProjectSectionPropsType {
    projects: Array<ProjectType>;
}
