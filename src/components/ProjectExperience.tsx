import ProjectCard from './ProjectCard'
import projects from '../data/project-data.json'

export type Project = {
    name: string
    imageSource: string
    skills: string[]
    description?: string
    link: string
}

export const ProjectExperience = () => {
    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {projects.map((project) => {
                return (
                    <div className="flex justify-center">
                        <ProjectCard
                            key={project.name}
                            link={project.link}
                            name={project.name}
                            skills={project.skills}
                            imageSource={project.imageSource}
                        />
                    </div>
                )
            })}
        </div>
    )
}
