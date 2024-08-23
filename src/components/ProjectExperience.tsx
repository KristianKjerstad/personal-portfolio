import ProjectCard from './ProjectCard'
import projects from '../data/project-data.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export type Project = {
    name: string
    imageSource: string
    skills: string[]
    date: string
    year: string
    roles: string[]
    description?: string
    link: string
}

export const ProjectExperience = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const delay_start = 0


    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {projects.map((project, index) => {
                console.log(index)
                return (
                    <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay_start + (100 * index)}>
                        <ProjectCard
                            key={project.name}
                            link={project.link}
                            name={project.name}
                            skills={project.skills}
                            imageSource={project.imageSource}
                            description={project.description}
                            date={project.date}
                            year={project.year}
                            roles={project.roles}
                        />
                    </div>
                )
            })}
        </div>
    )
}
