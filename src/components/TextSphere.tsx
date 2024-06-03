import { useEffect } from 'react'
import '../styles/TextSphere.css'

// Importing TagCloud package
import TagCloud from 'TagCloud'

const texts = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Git',
    'Python',
    'Django',
    'FastAPI',
    'VS Code',
    'Authentication',
    'DevOps',
    'CI/CD',
    'Databases',
    'Azure',
]

const TextShpere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
        const container = document.querySelector('.tagcloud') as any

        const options: any = {
            radius: 300,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            keep: true,
        }

        TagCloud(container, texts, options)
    }, [])

    return (
        <>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
        </>
    )
}

export default TextShpere
