import { Progress } from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const skills = [
    { name: 'React', percentage: 86 },
    { name: 'Typescript', percentage: 77 },
    { name: 'Python', percentage: 90 },
    { name: 'Microsoft Azure', percentage: 69 },
    { name: 'Django', percentage: 65 },
    { name: 'Databases (SQL and NoSQL)', percentage: 63 },
    { name: 'CI/CD', percentage: 80 },
    { name: 'Vue', percentage: 50 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'FastAPI', percentage: 85 },
    { name: 'CSS and HTML', percentage: 74 },
]

// 'HTML',
// 'CSS',
// 'JavaScript',
// 'TypeScript',
// 'React',
// 'Vue',
// 'Git',
// 'Python',
// 'Django',
// 'FastAPI',
// 'VS Code',
// 'Authentication',
// 'DevOps',
// 'CI/CD',
// 'Databases',
// 'Azure',
// ]

export const Skills = () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const skillsToMap = useMemo(() => {
        if (isExpanded) {
            return skills
        } else {
            return skills.slice(0, 5)
        }
    }, [isExpanded])

    return (
        <div className="w-3/4 lg:w-1/2 xl:w-1/3 mx-auto ">
            {/* <h2 className="text-center">
                Some of the skills that I have in web development.
            </h2> */}
            {skillsToMap.map((skill) => {
                return (
                    <div className="pb-4 text-xl" data-aos="fade-up">
                        <p>{skill.name}</p>
                        <Progress
                            color="yellow"
                            value={skill.percentage}
                            size="sm"
                            transitionDuration={200}
                            striped
                            animated
                        />
                    </div>
                )
            })}
            <div className="flex justify-center items-center pt-6">
                <button
                    className=""
                    onClick={() => {
                        setIsExpanded(!isExpanded)
                    }}
                >
                    {isExpanded ? 'View less' : 'View more'}
                </button>
            </div>
        </div>
    )
}
