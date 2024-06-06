import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'

export const SocialLinks = () => {
    const iconSize = 50

    return (
        <div className="flex flew-row gap-4 justify-center mb-8">
            <a
                href="https://www.linkedin.com/in/kristian-kjerstad-2a7845138/"
                target="_blank"
                className="LinkedIn"
                aria-label="Linkedin"
            >
                <FaLinkedin size={iconSize} />
            </a>
            <a
                href="https://github.com/KristianKjerstad"
                target="_blank"
                className="Github"
                aria-label="Github"
            >
                <FaGithub size={iconSize} />
            </a>
            <a
                href="https://kristiankjerstad.github.io/personal-portfolio/"
                target="_blank"
                className="Homepage"
                aria-label="Homepage"
            >
                <TbWorld size={iconSize} />
            </a>
            <a
                href="https://www.instagram.com/kristian.kjerstad/"
                target="_blank"
                className="Instagram"
                aria-label="Instagram"
            >
                <FaInstagram size={iconSize} />
            </a>
        </div>
    )
}
