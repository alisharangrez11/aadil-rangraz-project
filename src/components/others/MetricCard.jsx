import { motion } from 'framer-motion';
import React from 'react'
import CountUp from "react-countup";

const MetricCard = (props) => {
  return (
    <motion.div className='bg-[#19243899] p-6 md:p-8 text-center border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}>
        <div className='text-3xl md:text-4xl font-bold text-[#1a6ef4] mb-2'>
            <span><CountUp end={props.item.title} prefix={props.item.prefix} suffix={props.item.suffix} duration={2} /></span>
        </div>
        <div className='text-sm text-[#8596ad]'>{props.item.value}</div>
    </motion.div>
  )
}

export default MetricCard