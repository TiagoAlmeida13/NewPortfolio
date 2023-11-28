import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";



export default function Home() {
  return (
    <>
      <Head>
        <title>Tiago Machado</title>
        <meta name="description" content="Tiago Machado" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-center w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="TiagoAlmeida" className='w-full h-auto'
                priority
                sizes="(max-width:768px) 100vw,
              (max-width: 1200px) 50vw, 
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Transformando a visão em realidade com código e design." className='!text-6xl !text-left' />
              <p className='my-4 text-base font-medium'>
                Como um habilidoso desenvolvedor front-end, dedico-me a transformar ideias em aplicações web inovadoras.
                Explore meus projetos e artigos mais recentes, mostrando minha experiência em React.js e desenvolvimento web.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/TiagoAlmeida_2023.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light

                  '
                  download={true}
                >
                  Currículo <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:tyygo@live.com" target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="TiagoAlmeida" className='w-full h-auto'></Image>
        </div>
      </main>

    </>
  )
}
