import '../styles/ProjectCard.css'
import { Project } from './ProjectExperience'

const ProjectCard = (props: Project) => {
    const { projectName, imageSrc, skills, link } = props
    return (
        <div className="card">
            <div className="image-container">
                <img src={imageSrc} alt="Project" className="image" />
            </div>
            <h3 className="text-2xl pt-2">{projectName}</h3>
            <div className="skills-container ">
                <p>{skills.join(' | ')}</p>
            </div>
            <div className="button-container">
                <button
                    className="mb-4"
                    onClick={() => {
                        window.open(link, '_blank')
                    }}
                >
                    Link
                </button>
            </div>
        </div>
    )
}

export default ProjectCard
