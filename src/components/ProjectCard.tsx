import { Badge } from '@mantine/core'
import '../styles/ProjectCard.css'
import { Project } from './ProjectExperience'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props: Project) => {
    const {
        name: projectName,
        imageSource: imageSrc,
        skills,
        description,
    } = props
    const navigate = useNavigate()

    return (
        <div className=''>
            <div
                className="card cursor-pointer main-container"
                onClick={() => {
                    navigate(`/projects/${projectName}`)
                }}
            >
                <div className="image-container ">
                    <img src={imageSrc} alt="Project" className="image" />
                </div>
                <h3 className="text-2xl pt-2">{projectName}</h3>
                <div className="skills-container ">
                    <Badge color="gray">{skills.join(' | ')}</Badge>
                </div>
                {description && (
                    <p className="pb-12 pl-4 pr-4 pt-2">
                        {description.substring(0, 100)}...
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
