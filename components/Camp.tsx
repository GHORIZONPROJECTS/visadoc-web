import Image from "next/image"
import bg from '../../visadocweb/public/canada.jpg'

const Camp = () => {


  return (
      <section className="py-24 bg-gray-200">
        <div className="containers">
          <div className=" lg:px-12 md:px-8 px-2  ">
              <h1 className="uppercase font-bold text-center mb-4 text-blue-900 roboto md:text-4xl text-3xl lg:text-6xl px leading-24 ">Let Us Be Your Compass in the World of Immigration</h1>
              <h4 className="text-center mt-3 text-xl text-gray-50 ">We have in-depth knowledge of the complex immigration systems, regulations, and processes of various countries.</h4>
              <h2 className="arima text-center font-semibold text-3xl mt-5 mb-5">Choose your country to travel</h2>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 text-center">
            <div className=" bg-[#f4f5f8] shadow-md rounded-t-[50px] ">
              <div className="relative">
                <Image src={bg} alt="background" className="countries"/> 
              </div>
            </div>
            <div>Personalized Guidance and Support</div>
            <div>Ongoing Follow-Up and Assistance</div>
            <div>Initial Consultation and Assessment</div>
          </div>
          
        </div>
        
      </section>

    // <section className="border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
    //     <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
    //         <CampItem/>
    //     </div>
    // </section>
  )
}

export default Camp