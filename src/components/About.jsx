import React from 'react'
import Logo from '../assets/Aadil_logo.jpeg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
     <section id='about' className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            {/* <div className='w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center bg-[#1a6ef4]'>
                <span className='text-5xl md:w-6xl font-bold text-white text-center'>AR</span>
            </div> */}

            <div className='w-55 h-55 md:w-65 md:h-59 rounded-full'>
                <img className='object-cover rounded-full w-55 h-55 md:w-65 md:h-59' src={Logo} alt="" />
            </div>

            <div className='w-[90%]'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>About <span className='text-[#1a6ef4]'>Me</span></h2>
                <p className='leading-relaxed mb-4 text-[#8596ad]'>I'm an E-commerce professional with 8+ years of experience scaling fashion brands across India's leading marketplaces and international platforms. Currently serving as Director of E-commerce &amp; Brand Strategy at Nehamta | Gouriwala Textile Pvt. Ltd., I have spearheaded brand growth from zero to ₹60 Cr annual GMV across Myntra, Flipkart, Ajio, Nykaa, Amazon India, and internationally via Amazon.com USA (FBA), Etsy &amp; eBay.</p>
                <p className='leading-relaxed text-[#8596ad]'>Coming from a family with deep roots in fabric dyeing and traditional textile techniques, I bring a unique edge — combining heritage knowledge with modern data-driven e-commerce strategy.</p>
            </div>
        </motion.div>
     </section>
    </> 
  )
}

export default About