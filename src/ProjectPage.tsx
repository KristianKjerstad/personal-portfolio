import { useParams } from 'react-router-dom'
import { Header } from './components/Header'
import projects from './data/project-data.json'
import { Project } from './components/ProjectExperience'

const getProjectData = (
    projectName: string | undefined,
    projects: Project[]
) => {
    if (!projectName) {
        return null
    }
    const project = projects.filter((project) => {
        return project.name === projectName
    })[0]
    return project
}

const formatDescription = (description: string | undefined): string[] => {
    if (!description) {
        return []
    }
    // split on new line characted
    return description.split('\n')
}

export const ProjectPage = () => {
    const { projectName } = useParams()
    const project: Project | null = getProjectData(projectName, projects)

    if (project === null) {
        return (
            <div className="p-4 pl-8 pr-8 pb-12">
                <Header />
                Loading project...
            </div>
        )
    }

    return (
        <div className="">
            <Header />
            <div className="text-center pt-8 pl-8 pr-8 lg:pl-40 lg:pr-40 xl:pl-60 xl:pr-60">
                <h1 className="text-6xl pb-8 font-semibold">{projectName}</h1>
                <p className='pb-16 text-xl'>{project.date}</p>
                <a
                    href={project.link}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    <img
                        className="m-auto lg:object-fill lg:h-3/4 lg:w-3/4"
                        src={project.imageSource}
                        alt="Project picture"
                    ></img>
                </a>

                <div className="pt-12 text-xl font-bold color-yellow">
                    <p>{project.skills.join(' | ')}</p>
                </div>
                <h2 className="pt-6 text-2xl font-semibold">Role: {project.roles}</h2>
                <p className="pt-16 text-xl color-yellow text-left">
                    {formatDescription(project.description).map(
                        (paragraph: string) => {
                            return (
                                <div>
                                    <p className="pb-6">{paragraph}</p>
                                    <div></div>
                                </div>
                            )
                        }
                    )}
                </p>
                <div className='pb-24'></div>
            </div>
        </div>
    )
}
