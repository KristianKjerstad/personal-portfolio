import ProjectCard from "./ProjectCard"
import LanNaProjectImage from "../assets/lan-na-project.jpeg"
import CalvinStudioProject from "../assets/cs-project.jpeg"

export type Project = {
    projectName: string
    imageSrc: string
    skills: string[]
    link: string
}


export const ProjectExperience = () => {

    const projects: Project[] = [
        {"projectName": "Website for Lan Na",
        "skills": ["Web hosting", "Wordpress", "Design"],
    "imageSrc": LanNaProjectImage, 
"link": ""},
{"projectName": "Website for Calvin Studio",
"skills": ["Web hosting", "Wordpress", "Design"],
"imageSrc": CalvinStudioProject, 
"link": "https://calvinstudio.no"},
    ]

    return <div>
        {projects.map((project) => {
                return <ProjectCard link={project.link} projectName={project.projectName} skills={project.skills} imageSrc={project.imageSrc} />
        })}
    </div>
}