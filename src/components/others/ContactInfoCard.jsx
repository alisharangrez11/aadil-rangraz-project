import React from 'react'

const ContactInfoCard = ({contactInfo}) => {
  return (
    <div className='flex items-center gap-3'>
        <span className="text-lg">{contactInfo.icon}</span>
        {contactInfo.type == 'link' ? <a href={contactInfo.href} target='_blank' className='text-sm text-[#8596ad] hover:text-[#1a6ef4]'>{contactInfo.tag}</a> : <span className='text-sm text-[#8596ad]'>{contactInfo.tag}</span>}
    </div>
  )
}

export default ContactInfoCard