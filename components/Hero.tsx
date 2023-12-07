import Image from "next/image"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

        <div className="hero-map"/>


        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">

            {/* Image */}

            <h1 className="bold-52 lg:bold-88">Expert in visa documentation</h1>
            <p className="regular-20 mt-6 text-gray-50 xl:max-w-[520px]">
                 We are your one-stop destination for all your immigration and visa needs.
{/*                  
                 We have in-depth knowledge of the complex immigration systems, regulations, and processes of various countries. */}
            </p>
            <div className="my-11 flex flex-wrap gap-5">

            <div className="flex flex-col w-full gap-3 sm:flex-row">

                <Button
                    type="button"
                    title="Download App"
                    variant="btn_blue"
                />
                <Button
                    type="button"
                    title="Apply Now!"
                    // variant="btn_dark_blue_outline"
                    variant="btn_white_blue"
                />
            </div>

            </div>
            

        </div>

        <div className="flex flex-1 items-end mb-0">

            <div className=" z-20 ">
            <Image
                src='/hero.png'
                alt="menu"
                width={400}
                height={252}
                // className=" inline-block cursor-pointer lg:hidden"
              />
            </div>

        </div>
       
    </section>
  )
}

export default Hero