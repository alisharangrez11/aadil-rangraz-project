import React from 'react'

const SubExperienceCard = ({list}) => {
  return (
    <li className='text-sm text-[#8596ad] flex items-start gap-2'>
        <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a6ef4]/60 shrink-0'></span>
        {list}
    </li>
  )
}

export default SubExperienceCard