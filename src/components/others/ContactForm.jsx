import React, { useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('submit')
    }
    
  return (
    <form onSubmit={(e)=>{
        handleSubmit(e)
    }} className='space-y-4'>
        <input onChange={(e)=>{
            setName(e.target.value)
        }}
        value={name} type="text" placeholder='Your Name' required className='w-full px-4 py-3 rounded-lg bg-[#212d45] border border-[#2d3953] text-white placeholder:text-[#8596ad] focus:outline-none focus:border-[#1a6ef4] text-sm' />
        <input 
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
        value={email} type="email" placeholder='Your Email' required className='w-full px-4 py-3 rounded-lg bg-[#212d45] border border-[#2d3953] text-white placeholder:text-[#8596ad] focus:outline-none focus:border-[#1a6ef4] text-sm' />
        <textarea 
        onChange={(e)=>{
            setMessage(e.target.value)
        }}
        value={message} placeholder='Your Message' rows={5} className='w-full px-4 py-3 rounded-lg bg-[#212d45] border border-[#2d3953] text-white placeholder:text-[#8596ad] focus:outline-none focus:border-[#1a6ef4] text-sm resize-none'></textarea>
        <button className='w-full px-8 py-3 rounded-lg bg-[#1a6ef4] text-white font-medium transition-all hover:bg-[#1a6ef4]/90 hover:shadow-lg text-sm hover:shadow-[#1a6ef4]/25 cursor-pointer'>Send Message</button>
    </form>
  )
}

export default ContactForm