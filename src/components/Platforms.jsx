import React from 'react'
import PlatformData from '../data/DataPlatform'
import PlatformCard from './others/PlatformCard'
import { motion } from 'framer-motion'

const Platforms = () => {
  return (
    <section className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">Platforms I <span className="text-[#1a6ef4]">Work With  </span></h2>
            <div className='flex flex-wrap justify-center gap-4'>
                {PlatformData.map((platform, idx)=>{
                    return <PlatformCard key={idx} platform={platform} />
                })}
            </div>
        </motion.div>
    </section>
  )
}

export default Platforms