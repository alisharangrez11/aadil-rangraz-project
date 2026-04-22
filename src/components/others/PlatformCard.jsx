import { motion } from 'framer-motion'
import React from 'react'

const PlatformCard = ({platform}) => {
  return (
    <motion.div className='px-6 py-3 text-sm font-medium text-white border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'
    initial={{opacity: 0, scale: 0}}
    whileInView={{opacity: 1, scale: 1}}
    transition={{duration: 0.5}}
    viewport={{once: true}}>{platform}</motion.div>
  )
}

export default PlatformCard