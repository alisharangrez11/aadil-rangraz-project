import React from 'react'
import SkillsCardData from '../data/DataSkillsCard'
import SkillsCard from './others/SkillsCard'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id='skills' className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">My <span className="text-[#1a6ef4]">Expertise</span></h2>
            <div className='grid md:grid-cols-2 gap-6'>
                {SkillsCardData.map((item, idx)=>{
                    return <SkillsCard key={idx} item={item} />
                })}
            </div>
        </motion.div>
    </section>
  )
}

export default Skills