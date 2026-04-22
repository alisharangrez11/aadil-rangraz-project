import React, { useEffect, useState } from 'react'
import Logo from '../assets/Aadil_logo.jpeg'
// import ToggleButton from './ToggleButton'

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        return ()=> 
            window.removeEventListener('scroll', handleScroll)
    }, [])
    
    

  return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full ${scrolled ? "backdrop-blur-xl bg-[#19243899]/.6 border rounded-xl border-[#364563] shadow-sm" : "bg-transparent"}`}>
            <div className='max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16'>
                <img className='w-12 h-12 rounded-full object-cover' src={Logo} alt="" />
                <div className="hidden md:flex items-center gap-8">
                    <a className='text-sm text-[#8596ad] hover:text-white relative group' href="#about">About
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6ef4] transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a className='text-sm text-[#8596ad] hover:text-white relative group' href="#skills">Expertise
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6ef4] transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a className='text-sm text-[#8596ad] hover:text-white relative group' href="#experience">Experience
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6ef4] transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a className='text-sm text-[#8596ad] hover:text-white relative group' href="#education">Education
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6ef4] transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a className='text-sm text-[#8596ad] hover:text-white relative group' href="#contact">Contact
                        <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a6ef4] transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href='/Aadil_Rangraz_CV.pdf' download='Aadil_Rangraz_CV.pdf' className="text-sm px-4 py-2 rounded-lg bg-[#1a6ef4] text-white hover:bg-[#1a6ef4]/90 transition-colors cursor-pointer">Download CV</a>
                </div>
                {/* <ToggleButton /> */}
                <button onClick={toggleMenu} className='md:hidden flex flex-col gap-1.5 p-2'>
                    <span className='block w-6 h-0.5 bg-white transition-all'></span>
                    <span className='block w-6 h-0.5 bg-white transition-all'></span>
                    <span className='block w-6 h-0.5 bg-white transition-all'></span>
                </button>
            </div>
            {isOpen && (<div className='md:hidden border-t backdrop-blur-xl bg-[#19243899]/.6 border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'>
                <div className='flex flex-col p-4 gap-4'>
                    <a className='text-sm text-[#8596ad] hover:text-white' href="#about">About</a>
                    <a className='text-sm text-[#8596ad] hover:text-white' href="#skills">Expertis</a>
                    <a className='text-sm text-[#8596ad] hover:text-white' href="#experience">Experience</a>
                    <a className='text-sm text-[#8596ad] hover:text-white' href="#education">Education</a>
                    <a className='text-sm text-[#8596ad] hover:text-white' href="#contact">Contact</a>
                    <a href='/Aadil_Rangraz_CV.pdf' download='Aadil_Rangraz_CV.pdf' className="text-sm px-4 py-2 rounded-lg bg-[#1a6ef4] text-white hover:bg-[#1a6ef4]/90 text-center  cursor-pointer">Download CV</a>
                </div>
            </div>)}
        </nav>
  )
}

export default Navbar