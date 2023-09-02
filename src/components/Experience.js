import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between>">

        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className="capitalize font-bold text-2xl">
                {position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className="text-primary capitalize"
                >@{company}</a></h3>
            <span className="capitalize font-medium text-dark/75 ">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experiência</h2>

            <div ref={ref} className="w-[75%] mx-auto relative">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details
                        position="Monitor de WebSite" company="Iguatemi S.A"
                        companyLink="http://www.iguatemi365.com.br"
                        time="mai de 2022 - jul de 2023" address="São Paulo, Brasil"
                        work="Monitoramento do desempenho do site/E-commerce do Shopping Iguatemi,
                        acompanhamento e ajustes dos pedidos através do sistema web de e-commerce - Magento/VTEX"
                    />
                    <Details
                        position="Desenvolvedor de front-end júnior" company="LikeWater Communication Solutions"
                        companyLink="https://likewatercs.com/"
                        time="jun de 2021 - nov de 2021" address="São Paulo, Brasil"
                        work="Desenvolvimento de aplicações com React JS, Hooks, configuração de URA, Genesys Cloud, componentização.
                        Controle de versionamento GIT."
                    />
                    <Details
                        position="Desenvolvedor de front-end" company="Dminer Software e Soluções Ltda"
                        companyLink="http://www.dminer.com.br/"
                        time="jul de 2020 - mar de 2021" address="São Paulo, Brasil"
                        work="Desenvolvimento de telas de login e de painéis gráficos com atualização de dados em tempo real através de API com HTML, CSS3 e Javascript, responsivos, 
                        animações em 3D na transição dos gráficos utilizando Three.JS e desenvolvimento de uma aplicação em Vue.js para cadastro e consulta de dados de segmentos de mercado, utilizando vuex, vue-router e bootstrap4.
                        Controle de versionamento SVN."
                    />
                    <Details
                        position="Assistente jurídico sênior" company="Toledo Piza"
                        companyLink="https://www.toledopizaadvogados.com.br/"
                        time="abr de 2010 - jun de 2019" address="São Paulo, Brasil"
                        work="
                        Elaboração de intimações e de toda documentação necessária para intimação, 
                        consolidação de imóveis, conferência de documentação, acompanhamento do andamento 
                        dos processos juntos aos cartórios."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience