'use client'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const router = useRouter(); 

  // const pathname = usePathname()

  const handleSmallerScreen = () => {
    setMenu(!menu)
  }

  return (
    <div>
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href='/'>
          <Image 
            src='/logo.png'
            alt=""
            width={220}
            height={140}
          />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
          {
            NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key}
                className= {`
                  inline-block after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#FF0000] after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 pb-0
                ${
                  usePathname() === link.href
                    ? "border-b-2 border-b-[#FF0000] pb-0" 
                    : ""
                }`}
                
              >
                {link.label}
              </Link>
            ))
          }
        </ul>
        <div className=" lg:flexCenter hidden">
          <Button
            type = 'button'
            title = 'Login'
            icon = '/user.svg'
            variant = 'btn_dark_green'
          />
           {/* <Button
            type = 'button'
            title = 'Register'
            icon = '/user.svg'
            variant = 'btn_white_blue'
          /> */}

        </div>

        {/* SMALL SCREEN NAVIGATION AND ICONS*/}


          {/* ICONS */}

            <div onClick={handleSmallerScreen} className=" inline-block cursor-pointer lg:hidden">
              
            {
              menu 
              ?
              <Image
                src='/close.png'
                alt="menu"
                width={24}
                height={24}
                // className=" inline-block cursor-pointer lg:hidden"
              />
              :
              <Image
                src='/menu.svg'
                alt="menu"
                width={24}
                height={24}
                // className=" inline-block cursor-pointer lg:hidden"
              />
    
    
            }
            </div>
         
          {/* END ICONS */}

          {/* SMALL SCREEN NAVIGATIONS */}

          <div className={
            menu 
            ? 
            'absolute top-[100px] right-0 left-0 bottom-0 flex bg-slate-600 w-full h-screen  ease-in duration-300' 
            : 
            'absolute top-[100px] left-[-100%] right-0 flex  w-full h-screen   ease-in duration-300 justify-center items-center'
            }>

              <div className="w-full justify-center items-center">

                <ul className=" uppercase font-bold pt-10 mt-4">

                {
                  NAV_LINKS.map((link) => (
                    <Link 
                      href={link.href} 
                      key={link.key}
                      onClick={handleSmallerScreen}
                      
                        className= {`
                        text-white 
                        flexCenter 
                         py-3 text-xl 
                      ${
                        usePathname() === link.href
                          ? " text-[#FF0000] " 
                          : ""
                      }`}
                    >

                      {link.label}
                    </Link>
                  ))
                }

                </ul>

                <div className=" flex mt-20 justify-center items-center">
                <Link href='/login' onClick={handleSmallerScreen}>
                  <Button
                    type = 'button'
                    title = 'Login'
                    icon = '/user.svg'
                    variant = 'btn_dark_green'
                  />
                </Link> 
              
                {/* <Button
                  type = 'button'
                  title = 'Register'
                  icon = '/user.svg'
                  variant = 'btn_white_blue'
                /> */}

              </div>

              </div>
          
          </div>

          {/* END SMALL SCREEN NAVIGATION */}


        {/* END SMALL SCREEN NAVIGATION AND ICONS*/}
       
    </nav>
    </div>
  )
}

export default Navbar