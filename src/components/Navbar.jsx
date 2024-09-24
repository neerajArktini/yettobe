// "use client"
// import React, { useEffect, useState } from 'react'

// const Navbar = () => {
//   const [active, setActive] = useState(false)

//   const isActive = () =>{
//     window.scrollY > 0 ? setActive(true) : setActive(false)
//   }

//   useEffect(()=>{
//     window.addEventListener("scroll", isActive)

//     return () =>{
//       window.removeEventListener("scroll",isActive)
//     }
//   },[])
//   return (
//     <div className='pt-2 bg-transparent sticky top-0 pl-2 flex items-center justify-between'>
//       <div className={`flex bg-[white] px-5 ${active ? 'px-5' : 'px-2'} gap-5 border rounded-lg py-2`}>
//         <div className={`flex w-[40px] items-center justify-center`}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="90%" viewBox="0 0 30 30" fill="none" class="hero-logo_svg"><g clip-path="url(#clip0_336_118)"><path d="M29.2134 0H18.8764C18.442 0 18.0898 0.352136 18.0898 0.786517V11.1236C18.0898 11.558 18.442 11.9101 18.8764 11.9101H29.2134C29.6478 11.9101 30 11.558 30 11.1236V0.786517C30 0.352136 29.6478 0 29.2134 0Z" fill="currentColor"></path><path d="M11.977 6.84169V17.1529C11.977 17.5878 12.3287 17.9394 12.7636 17.9394H23.1872C23.622 17.9394 23.9737 18.2911 23.9737 18.726V28.9248C23.9737 29.3597 23.622 29.7114 23.1872 29.7114H16.1377C13.849 29.7114 10.1051 29.7114 7.81637 29.7114H0.87929C0.444459 29.7114 0.0927734 29.3597 0.0927734 28.9248V22.2125C0.0927734 19.9237 0.0927734 16.1799 0.0927734 13.8911V6.84169C0.0927734 6.40686 0.444459 6.05518 0.87929 6.05518H11.1905C11.6254 6.05518 11.977 6.40686 11.977 6.84169Z" fill="currentColor"></path></g><defs><clipPath id="clip0_336_118"><rect width="30" height="30" fill="currentColor"></rect></clipPath></defs></svg>
//       </div>
//       {
//         !active &&
//         <div className="flex items-center gap-5 text-lg text-[grey] font-light py-2 px-2">
//         <span className=''>Companies</span>
//         <span>Candidate</span>
//         <span>About</span>
//         <span>Blogs</span>
//         <span>Contact</span>
//     </div>
//       }
//       </div>
//       <button className='bg-[black] text-[white] py-3 px-4 rounded-lg'>Get in touch</button>
//     </div>
//   )
// }

// export default Navbar


"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  const isActive = () => {
    const currentScrollY = window.scrollY;

    // Determine if the user is scrolling up or down
    if (currentScrollY < lastScrollY) {
      setActive(true); // Scrolling up
    } else if (currentScrollY > lastScrollY) {
      setActive(false); // Scrolling down
    }

    setLastScrollY(currentScrollY); // Update last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, [lastScrollY]); // Add lastScrollY as a dependency

  return (
    <div className="pt-2 bg-transparent sticky top-0 pl-2 flex items-center justify-between">
      <div className={`flex bg-[white] px-5 ${active ? 'px-5' : 'px-2'} gap-5 border rounded-lg py-2`}>
        <div className={`flex w-[40px] items-center justify-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90%"
            viewBox="0 0 30 30"
            fill="none"
            className="hero-logo_svg"
          >
            <g clipPath="url(#clip0_336_118)">
              <path
                d="M29.2134 0H18.8764C18.442 0 18.0898 0.352136 18.0898 0.786517V11.1236C18.0898 11.558 18.442 11.9101 18.8764 11.9101H29.2134C29.6478 11.9101 30 11.558 30 11.1236V0.786517C30 0.352136 29.6478 0 29.2134 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.977 6.84169V17.1529C11.977 17.5878 12.3287 17.9394 12.7636 17.9394H23.1872C23.622 17.9394 23.9737 18.2911 23.9737 18.726V28.9248C23.9737 29.3597 23.622 29.7114 23.1872 29.7114H16.1377C13.849 29.7114 10.1051 29.7114 7.81637 29.7114H0.87929C0.444459 29.7114 0.0927734 29.3597 0.0927734 28.9248V22.2125C0.0927734 19.9237 0.0927734 16.1799 0.0927734 13.8911V6.84169C0.0927734 6.40686 0.444459 6.05518 0.87929 6.05518H11.1905C11.6254 6.05518 11.977 6.40686 11.977 6.84169Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_336_118">
                <rect width="30" height="30" fill="currentColor"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        {
          active && (
            <div className="flex items-center gap-5 text-lg text-[grey] font-light py-2 px-2">
              <span>Companies</span>
              <span>Candidate</span>
              <span>About</span>
              <span>Blogs</span>
              <span>Contact</span>
            </div>
          )
        }
      </div>
      <button className="bg-[black] text-[white] py-3 px-4 rounded-lg">
        Get in touch
      </button>
    </div>
  );
};

export default Navbar;
