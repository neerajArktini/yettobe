import React from 'react'
import Rev from './Rev'

const Testimonials = () => {
  return (
    <div className='flex h-[500px] bg-[white] px-14 py-14'>
        <div style={{lineHeight:"60px"}} className="flex-1 text-[60px]">
        Trusted by product & design leaders
        </div>
        <div className="flex-1 flex gap-4">
            <Rev />
            <Rev />
        </div>
    </div>
  )
}

export default Testimonials
