import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function TitleHeader() {
  return (
    <div className=' max-screen h-full flex bg-sky-800 flex-row justify-between items-center mb-10  '>
        <div className="w-80 items-center justify-center h-full mx-5 lg:mx-10">
            <h1 className="text-3xl text-white lg:text-6xl">About Us</h1>
            <div className="flex flex-row py-2 items-center">
                <Link href="/"><p className="mr-1 text-base text-white lg:text-2xl">Home</p></Link>
                <IoChevronForwardOutline className="text-base text-white lg:text-2xl"/>
                <p className="ml-1 text-base text-white lg:text-2xl">About Us</p>
            </div>
           
        </div>
        <div>
          <Image
            src='/hero.png'
            alt="menu"
            width={600}
            height={600}
            // className="lg: w-[600px] lg: h-[600px] w-[300px] h-[300px]"
          />
        </div>
    </div>
  )
}
