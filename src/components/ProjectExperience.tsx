import ProjectCard from './ProjectCard'
import LanNaProjectImage from '../assets/lan-na-project.jpeg'
import CalvinStudioProject from '../assets/cs-project.jpeg'

export type Project = {
    name: string
    imageSource: string
    skills: string[]
    link: string
}

export const ProjectExperience = () => {
    const projects: Project[] = [
        {
            name: 'Website for Lan Na',
            skills: ['Web hosting', 'Wordpress', 'Design'],
            imageSource: LanNaProjectImage,
            link: '',
        },
        {
            name: 'Website for Calvin Studio',
            skills: ['Web hosting', 'Wordpress', 'Design'],
            imageSource: CalvinStudioProject,
            link: 'https://calvinstudio.no',
        },
    ]

    return (
        <div>
            {projects.map((project) => {
                return (
                    <ProjectCard
                        link={project.link}
                        name={project.name}
                        skills={project.skills}
                        imageSource={project.imageSource}
                    />
                )
            })}
        </div>
    )
}
