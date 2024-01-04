import Image from "next/image";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function TitleHeader() {
  return (
    <div className=' max-screen h-full flex bg-sky-800 flex-row justify-between items-center mb-10  '>
        <div className="w-80 items-center justify-center h-full mx-10">
            <h1 className="text-6xl text-white">About Us</h1>
            <div className="flex flex-row py-2 items-center">
                <Link href="/"><p className="mr-2 text-2xl text-white">Home</p></Link>
                <IoChevronForwardOutline className="text-xl text-white"/>
                <p className="ml-2 text-2xl text-white">About Us</p>
            </div>
           
        </div>
        <div>
          <Image
            src='/hero.png'
            alt="menu"
            width={600}
            height={600}
          // className=" inline-block cursor-pointer lg:hidden"
          />
        </div>
    </div>
  )
}
