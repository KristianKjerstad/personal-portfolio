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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

const TextShpere = () => {
    const windowDimensions = getWindowDimensions()
    const textRadius = windowDimensions.width > 400 ? 300 : 150

    console.log(windowDimensions)
    // Animation settings for Text Cloud
    useEffect(() => {
        const container = document.querySelector('.tagcloud') as any

        const options: any = {
            radius: textRadius,
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
