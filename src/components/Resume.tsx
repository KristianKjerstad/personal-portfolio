import { Text, Timeline } from '@mantine/core'
import '@mantine/core/styles/Timeline.css'
import { FaBriefcase, FaSchool } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export const Resume = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div className="flex justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 auto-rows-max ">
                <div className="col-span-1" data-aos="fade-right" data-aos-delay={300}>
                    <div className="pl-0 pb-2 text-2xl font-semibold flex gap-4">
                        <FaSchool className="opacity-50" />
                        <p>Education</p>
                    </div>
                    <Timeline
                        active={3}
                        bulletSize={18}
                        lineWidth={4}
                        color="gray"
                    >
                        <Timeline.Item className="">
                            <Text
                                size="xl"
                                c={'yellow'}
                                className="align-text-top"
                            >
                                Masters in Cybernetics and Robotics
                            </Text>
                            <Text size="lg" mt={4} className="">
                                Norwegian University of Science and Technology
                                (NTNU)
                            </Text>
                            <Text c="dimmed" size="m" className='pb-8'>
                                2015 - 2020
                            </Text>

                            {/* <Text mt={4}>asdf</Text> */}
                        </Timeline.Item>

                        <Timeline.Item>
                            <Text size="xl" c="yellow">
                                High School Degree
                            </Text>
                            <Text size="lg" mt={4}>
                                Spjelkavik Videregående Skole
                            </Text>
                            <Text c="dimmed" size="m">
                                2013 - 2015
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
                {/* <div className="pt-12"></div> */}
                <div className="col-span-1" data-aos="fade-left">
                    <div className="pl-0 pb-2 text-2xl flex gap-4 font-semibold">
                        <FaBriefcase className="opacity-50" />
                        <p>Work Experience</p>
                    </div>
                    <Timeline
                        active={3}
                        bulletSize={18}
                        lineWidth={4}
                        color="gray"
                    >
                        <Timeline.Item lineVariant="dashed">
                            <Text size="xl" c="yellow">
                                Brilliant AS
                            </Text>
                            <Text size="lg" mt={4}>
                                Senior IT Consultant
                            </Text>
                            <Text c="dimmed" size="m" className='pb-8'>
                                2023 - present
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Text size="xl" c="yellow">
                                Bouvet Norge AS
                            </Text>
                            <Text size="lg" mt={4}>
                                IT Consultant
                            </Text>
                            <Text c="dimmed" size="m" className='pb-8'>
                                2020 - 2023
                            </Text>
                        </Timeline.Item>

                        <Timeline.Item>
                            <Text size="xl" c="yellow">
                                TrønderEnergi AS
                            </Text>
                            <Text size="lg" mt={4}>
                                20% Part Time as Junior Machine Learning
                                Engineer
                            </Text>
                            <Text c="dimmed" size="m">
                                2019 - 2020
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
