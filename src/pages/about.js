import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref} />;
};
const about = () => {
    return (
        <>
            <Head>
                <title>Tiago Almeida | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="A paixão alimenta o propósito!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Olá, sou o Tiago.</h2>
                            <p className='font-medium'>
                                Desenvolvedor Front-end com experiência em Desenvolvimento de aplicações com React JS, Hooks, Styled-components,
                                configuração de URA, Genesys Cloud e Controle de versionamento GIT/ SVN e atendimento ao cliente.
                            </p>
                            <p className="my-4 font-medium">
                                Formado em Análise e Desenvolvimento de Sistemas pela FIAP.
                            </p>
                            <p className=' my-4 font-medium'>
                                Acredito que design é mais do que apenas fazer as coisas parecerem bonitas é resolver problemas e
                                criando experiências intuitivas e agradáveis ​para os usuários.
                            </p>
                            <p className='font-medium'>
                                Esteja eu trabalhando em um site, aplicativo móvel ou
                                outro produto digital, trago meu compromisso com a excelência em design e o pensamento centrado no usuário para
                                cada projeto em que trabalho. Estou ansioso pela oportunidade de trazer minhas habilidades e paixão para seu próximo projeto.
                            </p>
                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8
                        '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark ' />
                            <Image src={profilePic} alt="TiagoAlmeida" className='w-full h-auto rounded-2xl' />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between'>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={30} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Projetos completos</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Anos de experiência</h2>
                            </div>
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about