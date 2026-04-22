import React from 'react'
import { ContactInfoData } from '../../data/DataContactInfo'
import ContactInfoCard from './ContactInfoCard'

const ContactInfo = () => {
  return (
    <div className='space-y-6'>
        <div className='p-6 space-y-4 border border-[#364563] rounded-xl hover:border-[#1a6ef4]/24 hover:shadow-lg hover:shadow-[#1a6ef4]/10'>
            {ContactInfoData.map((contactInfo, idx)=>{
                return <ContactInfoCard key={idx} contactInfo={contactInfo} />
            })}
        </div>
        <a href='/Aadil_Rangraz_CV.pdf' download='Aadil_Rangraz_CV.pdf' className="flex items-center justify-center gap-2 w-full px-8 py-3 rounded-lg border border-[#1a6ef4]/40 text-white font-medium hover:bg-[#1a6ef4]/10 transition-all">📄 Download CV</a>
    </div>
  )
}

export default ContactInfo