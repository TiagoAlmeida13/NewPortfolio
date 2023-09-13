import React from "react";
import { motion } from "framer-motion"


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer
        '
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer absolute 
                '
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-10vw" y="2vw" />
                <Skill name="CSS" x="-3vw" y="-10vw" />
                <Skill name="Javascript" x="20vw" y="6vw" />
                <Skill name="ReactJS" x="-8vw" y="12vw" />
                <Skill name="NextJS" x="20vw" y="15vw" />
                <Skill name="Tailwind" x="12vw" y="-12vw" />
                <Skill name="Web Design" x="15vw" y="-5vw" />
                <Skill name="Git" x="-10vw" y="-20vw" />
                <Skill name="Material-UI" x="-27vw" y="18vw" />

            </div>
        </>
    )
}

export default Skills