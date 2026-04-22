import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
     <section className='relative hero min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#141d2e] to-[#192438]'>
            <div className='left absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl bg-[#1a6ef44d] opacity-40'></div>
            <div className='right absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl bg-[#1a6ef44d] opacity-40'></div>
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#1a6ef4]'>Aadil Rangraz</h1>
                <div className='mb-6'>
                    <span className='text-lg md:text-2xl font-medium text-[#1a6ef4]'>
                        <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Performance Marketing Expert',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Director of E-commerce & Brand Strategy',
                            1000,
                            'Business & Data Analyst',
                            1000,
                            'AI/LLM Evaluator',
                            1000
                          ]}
                          wrapper="span"
                          speed={50}
                        //   style={{ fontSize: '18px', display: 'inline-block' }}
                          repeat={Infinity}
                        />
                    </span>
                </div>
                <p className="text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed text-[#8596ad]">8+ Years&nbsp;|&nbsp;₹60 Cr GMV&nbsp;|&nbsp;20x ROAS&nbsp;|&nbsp;Myntra • Flipkart • Ajio • Amazon • Nykaa</p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a href='#experience' className="px-8 py-3 rounded-lg bg-[#1a6ef4] text-white font-medium hover:bg-[#1a6ef4]/90 transition-all hover:shadow-lg hover:shadow-[#1a6ef4]/25 cursor-pointer ">View My Work</a>
                  <a href='/Aadil_Rangraz_CV.pdf' download='Aadil_Rangraz_CV.pdf' className="px-8 py-3 rounded-lg text-white border border-[#1a6ef4]/40 font-medium hover:bg-[#1a6ef4]/10 transition-all cursor-pointer">Download CV</a>
              </div>
            </div>
            <motion.div className='mouse absolute bottom-8 left-1/2 -translate-x-1/2' 
            animate={{y: [0, 10, 0]}} transition={{duration: 1.5, repeat: Infinity}}>
               <div className='w-6 h-10 rounded-full border-2 border-[#8596ad]/30 flex justify-center pt-2'>
                 <div className='w-1 h-2 rounded-full bg-[#1a6ef4]'></div>
               </div>
            </motion.div>
        </div>
     </section>   
  )
}

export default Hero