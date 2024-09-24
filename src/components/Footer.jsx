import React from 'react'

const Footer = () => {
  return (
    <div className="flex gap-[30px] md:mt-[130px] w-[98%] bg-[white] p-20 rounded-lg">
    <div className="flex flex-[2] flex-col justify-between">
        <div>
        <p className='text-[60px]'>Yet to be</p>
        <p className='text-3xl'>Building the design team of tomorrow</p>
        </div>
    <div className="flex gap-[50px] mt-[50px] items-center">
        <div className="flex flex-col gap-3">
            <span className='text-sm text-[grey]'>CONTACT</span>
            <span className='text-[grey] text-lg'>Email us</span>
        </div>
        <div className="flex flex-col gap-3">
            <span className='text-sm text-[grey]'>SOCIAL</span>
            <span className='text-[grey] text-lg'>LinkedIn</span>
        </div>
        <div className="flex flex-col gap-3">
            <span className='text-sm text-[grey]'>LEGAL</span>
            <span className='text-[grey] text-lg'>Policy request</span>
        </div>
    </div>
    <p className='text-[grey] mt-[50px]'>
        63-66 Hatton Gardens. Fifth Floor, Suite 23, London, England, EC1N 8LE
        </p>
    </div>
    <div className="flex flex-1 items-center justify-center relative h-[400px]">
        <img src="https://cdn.prod.website-files.com/6657fc984ee5909e258777eb/66d6b8d7377a44df6b23f718_footer%20img.png" alt="" className='h-[100%] w-[70%]' />
        <div className="absolute w-[100%] h-[100%] flex items-center justify-center">
            <button className="py-3 mt-auto mb-[10%] px-4 bg-[black] text-[white] rounded-lg hover:bg-[white] hover:border hover:text-[black]">Speak to jack</button>
        </div>
    </div>
  </div>
  )
}

export default Footer
