import { Header } from './components/Header'
import './styles/App.css'
import { SectionDivider } from './components/SectionDivider'
import { AboutMe } from './components/AboutMe'
import TextShpere from './components/TextSphere'
import { ProjectExperience } from './components/ProjectExperience'
import { SocialLinks } from './components/SocialLinks'
import { Link } from 'react-router-dom'
import { SCREEN_SIZE_PROFILE_IMAGE_LIMIT, getWindowDimensions } from './utils'
import profilePicture from '/public/profile.webp'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'

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
    return (
        <div id="home" className="p-4 pl-8 pr-8 pb-12 lg:pl-28 lg:pr-28 ">
            <Header />
            <div className="grid grid-cols-2 lg:pr-0">
                <div className="grid-cols-1 ">
                    <div>
                        <h3 className="text-3xl pb-2 color-yellow">
                            Hello, I'm
                        </h3>

                        <h1 className="text-8xl pb-4 pr-32 font-semibold">
                            Kristian Kjerstad
                        </h1>
                        <h2 className="text-4xl pb-4 opacity-70">
                            Web developer
                        </h2>
                    </div>
                    <ButtonMailto
                        email="kristian.kjerstad@brilliant.no"
                        label="Contact me"
                    />
                </div>
                <div className="grid-cols-2">
                    <img
                        className="opacity-80 h-0 lg:h-full "
                        src={profilePicture}
                        alt="profile picture"
                    ></img>
                </div>
            </div>
            <div id="about-me"></div>
            <SectionDivider title="About me" />
            <AboutMe />

            <div id="skills"></div>
            <SectionDivider title="Skills" />
            <div className="opacity-10 -mb-96">
                <TextShpere />
            </div>
            <Skills />
            <SectionDivider title="Résumé" />
            <Resume />
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
