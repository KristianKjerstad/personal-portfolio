import { FaHome, FaLanguage, FaCalendarDay } from 'react-icons/fa'
import profilePicture from '../assets/profile.jpeg'
import { MdWork } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
export const AboutMe = () => {
    const paragraphStyle = 'opacity-70 pt-4'
    const items = [
        { id: 1, text: 'Trondheim, Norway', icon: <FaHome /> },
        { id: 2, text: 'Norwegian, English', icon: <FaLanguage /> },
        {
            id: 3,
            text: 'Senior IT consultant at Brilliant AS',
            icon: <MdWork />,
        },
        { id: 4, text: 'kristian@example.no', icon: <MdEmail /> },
        { id: 5, text: '20th April, 1996', icon: <FaCalendarDay /> },
    ]

    return (
        <div>
            {' '}
            <img src={profilePicture}></img>
            <h2 className="text-4xl pt-16 pb-2">
                Hi there! I'm Kristian Kjerstad
            </h2>
            <h3 className="text-4xl">Web developer</h3>
            <ul className="pb-4 pt-4">
                {items.map((item) => (
                    <li key={item.id} className="flex items-center mb-2">
                        {item.icon}
                        <span className="ml-4">{item.text}</span>
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
