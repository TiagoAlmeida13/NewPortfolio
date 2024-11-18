import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <div className="flex items-center lg:py-2">
                    
                   <Link href="https://www.linkedin.com/in/tiago-almeida-dev/" className='underline
                    underline-offset-2 
                    ' target={"_blank"}>Tiago Machado</Link>
                </div>
                <Link href="https://twitter.com/tyygo" target={"_blank"} className='underline
                    underline-offset-2 
                    '>Me siga no Twitter</Link>
            </Layout>
        </footer>
    )
}

export default Footer
