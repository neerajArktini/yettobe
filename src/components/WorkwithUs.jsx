import React from 'react'
import Footer from './Footer'
import "./styles/main.css"

const data = [
    {
        title:"Design Specialist",
    },
    {
        title:"Global Network"
    },
    {
        title:"Result Driven"
    },
    {
        title:"People First"
    }
]

const WorkwithUs = () => {
  return (
    <div className='flex flex-col items-center px-14 pt-14 justify-left min-h-screen gap-[50px]'>
      <div style={{lineHeight:"60px"}} className='text-[60px] text-left flex w-[100%] justify-start'>why work with us ?</div>
      <div className="flex items-center justify-around">
        {
            data.map((d,i)=>{
                return (
                    <div className="flex parent flex-col h-[340px] rounded-lg items-center justify-center gap-[50px] bg-[white] w-[24%]" key={i}>
                        <span className='text-3xl title'>{d.title}</span>
                        <p className='px-10 desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quam.</p>
                    </div>
                )
            })
        }
      </div>
      <Footer />
    </div>
  )
}

export default WorkwithUs
