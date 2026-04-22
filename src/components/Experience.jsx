import React from 'react'
import ExperienceCardData from '../data/DataExperienceCard'
import ExperienceCard from './others/ExperienceCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section id='experience' className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-4xl mx-auto'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">Work <span className="text-[#1a6ef4]">Experience</span></h2>
            <div className='relative'>
                <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#1a6ef4] to-transparent"></div>
                <div className='space-y-10'>
                    {ExperienceCardData.map((experience, idx)=>{
                        return <ExperienceCard key={idx} experience={experience} />
                    })}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Experience