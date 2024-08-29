import ProjectCard from './ProjectCard'
import products from '../data/products-data.json'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export type Product = {
    name: string
    imageSource: string
    skills: string[]
    date: string
    year: string
    roles: string[]
    description?: string
    link: string
}

export const Products = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const delay_start = 0


    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {products.map((products, index) => {
                console.log(index)
                return (
                    <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay_start + (25 * index)}>
                        <ProjectCard
                            key={products.name}
                            link={products.link}
                            name={products.name}
                            skills={products.skills}
                            imageSource={products.imageSource}
                            description={products.description}
                            date={products.date}
                            year={products.year}
                            roles={products.roles}
                        />
                    </div>
                )
            })}
        </div>
    )
}
