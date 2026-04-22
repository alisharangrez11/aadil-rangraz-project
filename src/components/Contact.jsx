import React from 'react'
import ContactForm from './others/ContactForm'
import ContactInfo from './others/ContactInfo'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id='contact' className='py-28 px-8 bg-linear-to-br from-[#141d2e] to-[#192438]'>
        <motion.div className='max-w-6xl mx-auto'
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        viewport={{once: true}}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-white">Get In <span className="text-[#1a6ef4]">Touch</span></h2>
            <div className='grid md:grid-cols-2 gap-10'>
                <ContactForm />
                <ContactInfo />
            </div>
        </motion.div>
    </section>
  )
}

export default Contact