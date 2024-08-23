import { Header } from './components/Header'
import './styles/App.css'
import { SectionDivider } from './components/SectionDivider'
import { AboutMe } from './components/AboutMe'
import { ProjectExperience } from './components/ProjectExperience'
import { SocialLinks } from './components/SocialLinks'
import { Link } from 'react-router-dom'
import profilePicture from '/public/profilev2.webp'
import { Skills } from './components/Skills'
import { Resume } from './components/Resume'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

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

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div id="home" className="">
            <Header />
            <div className="grid grid-cols-2 lg:pr-0">
                <div className="grid-cols-1 pt-24 pl-4 md:pl-20 lg:pl-60"  >
                    <div>
                        <h3 className="text-3xl pb-4 color-yellow" data-aos="fade-down">
                            Hello, I'm
                        </h3>

                        <h1 className="text-8xl pb-7 pr-32 font-semibold" data-aos="fade-down" data-aos-delay={100}>
                            Kristian Kjerstad
                        </h1>
                        <h2 className="text-4xl pb-8 opacity-70" data-aos="fade-down" data-aos-delay={200}>
                            Fullstack Developer
                        </h2>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={300}>
                        <ButtonMailto

                            email="kristian.kjerstad@brilliant.no"
                            label="Contact me"
                        />
                    </div>
                </div>
                <div className="grid-cols-2 lg:-mb-12 xl:-mt-12 flex justify-end" data-aos="fade-left" data-aos-delay={400}>
                    <img
                        className='h-0 w-0 lg:h-[100%] lg:max-h-[850px] lg:max-w-[400px] lg:w-[100%] lg:object-cover xl:h-[100%] xl:max-h-[850px] xl:max-w-[4000px] xl:w-[100%] xl:object-cover'
                        src={profilePicture}
                        alt="profile picture"
                    />
                </div>
            </div>
            <div className='p-4 pl-8 pr-8 pb-12 lg:pl-40 lg:pr-40 xl:pl-60 xl:pr-60 '>
                <div id="about-me"></div>
                <SectionDivider title="About me" />
                <div >
                    <AboutMe />
                </div>
                <div id="skills"></div>
                <SectionDivider title="Skills" />
                {/* <div className="opacity-10 -mb-96">
                <TextShpere />
            </div> */}
                <Skills />
                <SectionDivider title="Résumé" />
                <Resume />
                <div id="project-experience"></div>
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
        </div>
    )
}

export default App
