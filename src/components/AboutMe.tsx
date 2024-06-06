import { FaHome, FaLanguage, FaCalendarDay } from 'react-icons/fa'
import profilePicture from '/public/profile.jpeg'
import { MdWork } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import React from 'react'
import { SCREEN_SIZE_PROFILE_IMAGE_LIMIT, getWindowDimensions } from '../utils'

type InfoItem = {
    text: string
    icon: React.JSX.Element
}

export const AboutMe = () => {
    const paragraphStyle = 'opacity-70 pt-4 lg:text-xl text-xl'

    const windowDimensions = getWindowDimensions()
    const items: InfoItem[] = [
        { text: 'Trondheim, Norway', icon: <FaHome /> },
        { text: 'Norwegian, English', icon: <FaLanguage /> },
        {
            text: 'Senior IT consultant at Brilliant AS',
            icon: <MdWork />,
        },
        { text: 'kristian.kjerstad@brilliant.no', icon: <MdEmail /> },
        { text: '20th April, 1996', icon: <FaCalendarDay /> },
    ]

    return (
        <div>
            {windowDimensions.width < SCREEN_SIZE_PROFILE_IMAGE_LIMIT && (
                <img
                    className="m-auto object-fill h-76 w-96"
                    src={profilePicture}
                    alt="Profile picture"
                ></img>
            )}
            <ul className="pb-4 pt-12">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                        {item.icon}
                        <span className="ml-4 lg:text-2xl text-xl">
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
            <p className={paragraphStyle}>
                Kristian has a master's degree in Cybernetics and Robotics from
                NTNU, specializing in autonomous systems. He enjoys tackling
                technical challenges and always strives to stay updated on new
                technologies.
            </p>
            <p className={paragraphStyle}>
                Kristian is a versatile full-stack developer. He has experience
                and knowledge in various technologies, including React,
                HTML/CSS, JavaScript, TypeScript, Python, Docker and Microsoft
                Azure.{' '}
            </p>
            <p className={paragraphStyle}>
                Through previous projects, Kristian has gained considerable
                experience in building modern applications and learned how cloud
                solutions can be utilized for scalability, security, and cost
                control. Kristian strongly advocates for agile work and the
                DevOps philosophy. He has a particular interest in automation,
                ranging from CI/CD pipelines to automated testing, and
                emphasizes the importance of writing thorough documentation when
                needed.
            </p>
        </div>
    )
}
