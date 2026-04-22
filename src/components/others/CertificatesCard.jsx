import { motion } from 'framer-motion'
import React from 'react'

const CertificatesCard = ({certified}) => {
  return (
    <motion.div className='p-5 border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}>
        <h4 className='font-semibold text-sm text-white'>{certified.skill}</h4>
        <p className='text-sm text-[#8596ad] mt-1'>{certified.place}</p>
        <p className='text-xs text-[#1a6ef4] mt-1'>{certified.year}</p>
    </motion.div>
  )
}

export default CertificatesCard