import { motion } from 'framer-motion'
import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen bg-[#141d2e] flex items-center justify-center'>
        <motion.div
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 1}}
        viewport={{once: true}} className="relative flex items-center justify-center">
            <motion.div
            animate={{rotate: 360}}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear'}} className='h-24 w-24 border-2 border-[#1a6ef4]/30 rounded-full flex items-center justify-center  border-t-2 border-t-[#1a6ef4]'/>
            <div className='absolute flex items-center justify-center'>
                <span className='text-[#1a6ef4] text-2xl font-bold text-center'>AR</span>
            </div>

        </motion.div>
    </div>
  )
}

export default Loader