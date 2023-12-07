import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {

  let currentYear = new Date().getFullYear()

  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center  gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
              <Image 
                src='/logo.png' 
                alt=''
                width={100}
                height={80}
              />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            
            {
              FOOTER_LINKS.map((columns) => (
                <FooterColumn title={columns.title} key={columns.title}>
                    <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                      {
                        columns.links.map((link) => (
                          <Link href='/' key={link}>
                            {link}
                          </Link>
                        ))
                      }
                    </ul>
                </FooterColumn>
              ))
            }
          </div>
          <div className='flex flex-col gap-5'>

              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {
                  FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                      <p className='whitespace-nowrap'>
                        {link.label}
                      </p>
                      <p className='whitespace-nowrap medium-14 text-blue-70 '>
                        {link.value}
                      </p>
                    </Link>
                  ))
                }
              </FooterColumn>
            
          </div>
          <div className='flex flex-col gap-5'>

                <FooterColumn title={SOCIALS.title}>
                  <ul className='regular-14 flex gap-4 text-gray-30'>
                    {
                      SOCIALS.links.map((link) => (
                        <Link href='/' key={link.id}>
                          <Image
                            src={link.value} alt='logo' width={24} height={24}
                          />
                        </Link>
                      ))
                    }
                  </ul>
                </FooterColumn>

          </div>
        </div>
        <div className='border bg-gray-20'/>

        {/* <p className="text-align: center"> Copyright &copy; {currentYear} Your Name All Rights Reserved</p> */}
      
        <p className='regular-14 w-full text-center text-gray-30'>Copyright &copy; {currentYear} Visadoc | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnprops = {
  title : string;
  children : React.ReactNode;
}


const FooterColumn = ({title, children} : FooterColumnprops) => {

  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
          {children}
    </div>
  )

}

export default Footer