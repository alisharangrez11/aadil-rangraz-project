import React from 'react'
import {EducationCardData, CertificateCardData} from '../data/DataEducationCard'
// import CertificateCardData  from '../data/CertificateCardData'
import EducationCard from './others/EducationCard'
import CertificatesCard from './others/CertificatesCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id='education' className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto'
        initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">Education & <span className="text-[#1a6ef4]">Certifications</span></h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-[#1a6ef4] mb-4'>Education</h3>
                    {EducationCardData.map((education, idx)=>{
                        return <EducationCard key={idx} education={education} />
                    })}
                </div>
                <div className='space-y-4'>
                    <h3 className='text-lg font-semibold text-[#1a6ef4] mb-4'>Certifications</h3>
                    {CertificateCardData.map((certified, idx)=>{
                        return <CertificatesCard key={idx} certified={certified} />
                    })}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Education