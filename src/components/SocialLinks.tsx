import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

export const SocialLinks = () => {
    const iconSize = 50

    return (
        <div className="flex flew-row gap-4 justify-center mb-8">
            <a
                href="https://www.linkedin.com/in/kristian-kjerstad-2a7845138/"
                target="_blank"
                className="LinkedIn"
            >
                <FaLinkedin size={iconSize} />
            </a>
            <a
                href="https://github.com/KristianKjerstad"
                target="_blank"
                className="Github"
            >
                <FaGithub size={iconSize} />
            </a>
            <a href="https://vg.no" target="_blank" className="Homepage">
                <TbWorld size={iconSize} />
            </a>
        </div>
    )
}
