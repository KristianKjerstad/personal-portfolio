import { useEffect } from 'react'
import '../styles/TextSphere.css'

// Importing TagCloud package
import TagCloud from 'TagCloud'
import { LARGE_SCREEN_SIZE, getWindowDimensions } from '../utils'

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
    const windowDimensions = getWindowDimensions()
    const textRadius = windowDimensions.width > LARGE_SCREEN_SIZE ? 300 : 150

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
