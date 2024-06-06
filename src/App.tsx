import { Header } from './components/Header'
import './styles/App.css'
import { SectionDivider } from './components/SectionDivider'
import { AboutMe } from './components/AboutMe'
import TextShpere from './components/TextSphere'
import { ProjectExperience } from './components/ProjectExperience'
import { SocialLinks } from './components/SocialLinks'
import { Link } from 'react-router-dom'
import { SCREEN_SIZE_PROFILE_IMAGE_LIMIT, getWindowDimensions } from './utils'
import profilePicture from '/public/profile.jpeg'

const ButtonMailto = ({ email, label }: { email: string; label: string }) => {
    return (
        <Link
            to="#"
            onClick={(e) => {
                window.location.href = `mailto:${email}`
                e.preventDefault()
            }}
        >
            <button>{label}</button>
        </Link>
    )
}

function App() {
    const windowDimensions = getWindowDimensions()

    return (
        <div id="home" className="p-4 pl-8 pr-8 pb-12">
            <Header />
            <div className="flex">
                <div>
                    <h3 className="text-3xl pb-2 color-yellow">Hello, I'm</h3>

                    <h1 className="text-8xl pb-4 font-semibold">
                        Kristian Kjerstad
                    </h1>
                    <h2 className="text-4xl pb-4 opacity-70">Web developer</h2>
                </div>
                {windowDimensions.width > SCREEN_SIZE_PROFILE_IMAGE_LIMIT && (
                    <img
                        className="ml-auto align-centers object-fill h-64 w-62"
                        src={profilePicture}
                    ></img>
                )}
            </div>
            <ButtonMailto
                email="kristian.kjerstad@brilliant.no"
                label="Contact me"
            />
            <div id="about-me"></div>
            <SectionDivider title="About me" />
            <AboutMe />
            <div id="skills"></div>
            <SectionDivider title="Skills" />
            <TextShpere />

            <SectionDivider title="Project Experience" />
            <ProjectExperience />
            <div id="Social"></div>
            <SectionDivider title="Social channels" />
            <SocialLinks />

            <p className="opacity-60 text-center pt-8">
                Copyright @ {new Date().getFullYear()}. Design by Kristian
                Kjerstad
            </p>
        </div>
    )
}

export default App
