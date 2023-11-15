import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4
        flex items-center justify-center overflow-hidden
        '>
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link href="mailto:tyygo@live.com" className='flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
                text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
                font-semibold hover:bg-light hover:text-dark first-letter:
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light

                '>
                    Contato
                </Link>
            </div>


        </div>
    )
}

export default HireMe