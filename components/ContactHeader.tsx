import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function ContactHeader() {
  return (
    <div className=' max-screen h-full flex bg-sky-800 flex-row justify-between items-center mb-10  '>
        <div className="w-80 items-center justify-center h-full mx-10">
            <h1 className="text-3xl text-white lg:text-6xl">Contact Us</h1>
            <div className="flex flex-row py-2 items-center">
            <Link href="/"><p className="mr-1 text-base text-white lg:text-2xl">Home</p></Link>
                <IoChevronForwardOutline className="text-base text-white lg:text-2xl"/>
                <p className="ml-1 text-base text-white lg:text-2xl">Contact Us</p>
            </div>
           
        </div>
        <div>
          <Image
            src='/contacticon.png'
            alt="menu"
            width={400}
            height={400}
          // className=" inline-block cursor-pointer lg:hidden"
          />
        </div>
    </div>
  )
}
