import Image from 'next/image'
import Link from "next/link"


import HowTo from "./HowTo"
import Service from "./Service"
import NoOfWork from "./NoWork"
import WorlGal from "./Workgallery"
import Testimonial from "./Testimonial"
import Contact from "./Contact"
import Serve from "./serve.jsx"

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font" >


        <div className="container mx-auto flex px-5 pb-3 md:mb-0 md:flex-row  flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-2/3 w-5/6 mb-10 md:mb-0">
            <Image className="object-contain object-center rounded" alt="hero" src="/img/worker.png" width={450} height={540} alt="near me plumbers" />
          </div>
          <div className="lg:flex-grow md:w-1/3 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  xm:pb-5">
            <h1 className="title-font text-5xl md:text-6xl mb-4  font-bold text-sky-950">Professional <br className='none md:block'/>
              <span className="text-blue-500" >Plumbing</span > Service <br />
              + 1 Year <span className="text-blue-600">Guarantee</span>
              <span className="text-red-700"> free</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              your trusted partner for top-notch plumbing solutions. we are giving  <span className="font-bold text-blue-700"> " free 1-year guarantee " </span>
              for all our work. call now to grab this great opportunity.
            
            </p>
            <div className="flex justify-center items-center mt-4">
              <Link className="inline-flex rounded-full text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg" href="tel:7310573878">Get Now</Link>
              {/*<button className="ml-4 inline-flex rounded-full text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Message</button>*/}
            </div>
          </div>
        </div>

      </section>


      <HowTo />
      <Service />
      <Serve />
      <WorlGal />
      <NoOfWork />
      <Testimonial />
      <Contact />
    </>
  )
}
