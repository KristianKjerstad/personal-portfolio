import '../styles/ProjectCard.css'
import { Project } from './ProjectExperience'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props: Project) => {
    const { name: projectName, imageSource: imageSrc, skills, link } = props
    const navigate = useNavigate()

    return (
        <div
            className="card cursor-pointer"
            onClick={() => {
                console.log('test')
                navigate(`/projects/${projectName}`)
            }}
        >
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
