import React from 'react'

const Rev = () => {
  return (
    <div className='flex p-10 border rounded-lg w-[48%] gap-[50px] bg-[#f3f3f3;] flex-col'>
      <div className="flex items-center justify-between">
        <img src="https://cdn.prod.website-files.com/6657fc984ee5909e258777fa/66dcb93f06db0a58c1aef5aa_n2y-logo.svg" className='w-[50px]' alt="" />
        <svg xmlns="http://www.w3.org/2000/svg" width="10%" viewBox="0 0 39 28" fill="none" class="quote-icon"><path d="M8.13825 27.3229C3.71169 27.3229 0.284668 23.753 0.284668 19.1837C0.284668 13.1864 7.70988 2.76255 9.28059 0.90625H14.4211L11.8509 12.0441C14.4211 13.3292 16.2774 16.0422 16.2774 19.1837C16.2774 23.6103 12.7076 27.3229 8.13825 27.3229ZM30.2711 27.3229C25.8445 27.3229 22.4175 23.753 22.4175 19.1837C22.4175 13.1864 29.8427 2.76255 31.2706 0.90625H36.554L33.9837 12.0441C36.554 13.3292 38.4103 16.0422 38.4103 19.1837C38.4103 23.6103 34.8404 27.3229 30.2711 27.3229Z" fill="currentColor" fill-opacity="0.1"></path></svg>
      </div>
      <div className="flex items-center justify-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam quisquam consequuntur quas. Officia, voluptas. Id, ea quia quos repellendus amet repudiandae
      </div>
      <div className="flex items-center justify-center gap-4">
        <img src="https://cdn.prod.website-files.com/6657fc984ee5909e258777fa/66dcb794dc52e5c257331c6e_1689017977084.jpg" alt="" className='w-[50px]' />
        <div className="flex flex-col">
            <b>vinay kumar</b>
            <span>CPO - Expana</span>
        </div>
      </div>
    </div>
  )
}

export default Rev
