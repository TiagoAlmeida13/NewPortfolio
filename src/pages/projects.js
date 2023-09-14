import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const projects = () => {
    return (
        <>
            <Head>
                <title>Tiago Machado | Projetos</title>
                <meta name="description" content="any description" />
            </Head>

            <main>
                <Layout>
                    <AnimatedText text="A imaginação supera o conhecimento!" />
                </Layout>
            </main>
        </>
    )
}

export default projects;