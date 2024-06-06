import { Badge, Card, Image, Text } from '@mantine/core'
import '../styles/ProjectCard.css'
import { Project } from './ProjectExperience'
import { useNavigate } from 'react-router-dom'

const ProjectCard = (props: Project) => {
    const {
        name: projectName,
        imageSource: imageSrc,
        skills,
        link,
        description,
    } = props
    const navigate = useNavigate()

    return (
        <div>
            {/* <Card
                shadow="sm"
                padding="xl"
                component="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
            >
                <Card.Section>
                    <Image
                        src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                        h={160}
                        alt="No way!"
                    />
                </Card.Section>

                <Text fw={500} size="lg" mt="md">
                    You&apos;ve won a million dollars in cash!
                </Text>

                <Text mt="xs" c="dimmed" size="sm">
                    Please click anywhere on this card to claim your reward,
                    this is not a fraud, trust us
                </Text>
            </Card> */}
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
                    <Badge color="gray">{skills.join(' | ')}</Badge>
                </div>
                {description && (
                    <p className="pb-12 pl-4 pr-4 pt-2">
                        {description.substring(0, 100)}...
                    </p>
                )}
                {/* <div className="button-container pb-2 pt-4">
                    <button
                        className="mb-4"
                        onClick={() => {
                            window.open(link, '_blank')
                        }}
                    >
                        Link
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default ProjectCard
