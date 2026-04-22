import React from 'react'
import SubSkillsCard from './SubSkillsCard'
import { motion } from 'framer-motion'

const SkillsCard = ({item}) => {
    
  return (
    <motion.div className='p-6 md:p-8 border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}>
        <h3 className='text-lg font-semibold mb-4 text-[#1a6ef4]'>{item.title}</h3>
        <div className='flex flex-wrap gap-2'>
            {Object.values(item.Skills).map((skill, idx)=>{
                return <SubSkillsCard key={idx} skill={skill}/>
            })}
        </div>
    </motion.div>
  )
}

export default SkillsCard