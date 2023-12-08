import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from '@/components/TransitionEffect';
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/hidden-show-input-cover-image.jpg";
import project2 from "../../public/images/projects/netflix-clone.jpg";
import project3 from "../../public/images/projects/portfolio-next.jpg";
import project4 from "../../public/images/projects/portfolio-javascript.jpg";
import project5 from "../../public/images/projects/tic-tac-toe.jpg";
import project6 from "../../public/images/projects/todo-list.jpg";
import { motion } from "framer-motion"

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl
            '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />
            <Link
                href={link}
                target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10' > <GithubIcon /> </Link>
                    <Link href={link} target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
                        font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    > Visite o projeto. </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link
                    href={link}
                    target="_blank"
                    className='hover:underline underline-offset-2'
                >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    > Visite
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6' >
                        <GithubIcon />{" "}
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Tiago Machado | Projetos</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="A imaginação supera o conhecimento"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-col-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Portfólio em NextJS, Tailwind CSS e framer motion."
                                img={project3}
                                summary="Projeto criado com intuito de estudar e aprimorar os conhecimentos em NextJS, 
                                Tailwind CSS e framer motion."
                                link="https://new-portfolio-jz4ytevpn-tiagoalmeida13.vercel.app/"
                                github="https://github.com/TiagoAlmeida13/NewPortfolio"
                                type="Projeto para estudo"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Input animado para estudo CSS e JS"
                                img={project1}
                                summary="Projeto realizado para estudo de animação em CSS e manipulação de DOM com JS."
                                link="https://tiagoalmeida13.github.io/Animated-show-hidden-input-password/"
                                github="https://github.com/TiagoAlmeida13/Animated-show-hidden-input-password"
                                type="Projeto para estudo"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Projeto clonando a interface da Netflix"
                                img={project2}
                                summary="Projeto clonando a interface da Netflix, totalmente responsivo. Próxima feature será adicionar a troca do catalogo através de API e trailers dos respectivos filmes."
                                link="https://tiagoalmeida13.github.io/Interface-Netflix"
                                github="https://github.com/TiagoAlmeida13/Interface-Netflix"
                                type="Projeto para estudo"

                            />
                        </div>

                        <div className='col-span-12 '>
                            <FeaturedProject
                                title="Portfólio feito com HTML, CSS e Javascript (antigo)"
                                img={project4}
                                summary="Foi criado com intuito de aprimorar os conhecimentos em HTML, CSS e Javascript."
                                link="https://tiagoalmeida13.github.io/portfolio/"
                                github="https://github.com/TiagoAlmeida13/portfolio"
                                type="Projeto para estudo"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Jogo da velha, tic tac toe"
                                img={project5}
                                summary="O bom e velho jogo da velha, criado com Javascript."
                                link="https://tiagoalmeida13.github.io/tic-tac-toe/"
                                github="https://github.com/TiagoAlmeida13/tic-tac-toe"
                                type="Projeto para estudo"

                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="To-do List com ReactJS"
                                img={project6}
                                summary="Projeto criado em ReactJs para estudo."
                                link="https://to-do-list-pi-sooty.vercel.app/"
                                github="https://github.com/TiagoAlmeida13/to-do-list"
                                type="Projeto de estudo"

                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;