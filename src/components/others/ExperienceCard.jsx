import React from 'react'
import SubExperienceCard from './SubExperienceCard'
import { motion } from 'framer-motion'

const ExperienceCard = ({experience}) => {
  return (
    <motion.div className='relative pl-12 md:pl-16'
    initial={{opacity: 0, x: -100}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
    >
        <div className='absolute left-2.5 md:left-2 top-2 w-3 h-3 rounded-full bg-[#1a6ef4] border-2 border-[#141d2e]'></div>
        <div className='p-6 border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'>
            <span className='text-xs text-[#1a6ef4] font-medium'>{experience.time}</span>
            <h3 className='text-lg font-semibold mt-1 text-white'>{experience.work}</h3>
            <p className='text-sm text-[#8596ad] mb-3'>{experience.tag}</p>
            <ul className='space-y-1.5'>
                {Object.values(experience.list).map((list, idx)=>{
                    return <SubExperienceCard key={idx} list={list}/>
                })}
            </ul>
        </div>
    </motion.div>
  )
}

export default ExperienceCard