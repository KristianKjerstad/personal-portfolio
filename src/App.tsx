import { Header } from './components/Header'
import './styles/App.css'
import { SectionDivider } from './components/SectionDivider'
import { AboutMe } from './components/AboutMe'
import TextShpere from './components/TextSphere'
import { ProjectExperience } from './components/ProjectExperience'
import { SocialLinks } from './components/SocialLinks'

function App() {
    return (
        <div id="home" className="p-4">
            <Header />
            <h3 className="text-3xl pb-2 color-yellow">Hello, I'm</h3>

            <h1 className="text-8xl pb-4 font-semibold">Kristian Kjerstad</h1>
            <h2 className="text-4xl pb-4 opacity-70">Web developer</h2>
            <button>Contact</button>
            <SectionDivider title="About me" />
            <div id="about-me"></div>
            <AboutMe />
            <SectionDivider title="Skills" />
            <div id="skills"></div>
            <TextShpere />

            <SectionDivider title="Project Experience" />
            <ProjectExperience />

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
