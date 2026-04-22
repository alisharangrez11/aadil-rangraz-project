import React from 'react'
import MetricCardData from '../data/DataMetricCard'
import MetricCard from './others/MetricCard'
import { motion } from 'framer-motion'

const Metrics = () => { 
  return (
    <section className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            <h2 className='text-3xl md:text-4xl font-bold mb-14 text-center text-white'>Key <span className='text-[#1a6ef4]'>Metrics</span></h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {MetricCardData.map((item, idx)=>{
                    return <MetricCard key={idx} item={item}/>
                })}
            </div>
        </motion.div>
    </section>
  )
}

export default Metrics