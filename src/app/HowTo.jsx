
export default function Howto(){
  return (
<section className="text-gray-600 body-font bg-gray-100" id="howto">
  <div className="container px-5 py-24 mx-auto">
   <h3 className=" font-bold text-center text-blue-700 uppercase">Working manner</h3>

    <h2 className="text-5xl  font-bold mt-3  text-center text-sky-950 pb-20 uppercase">
    how we work ?
    </h2>
    <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
     

      <div className="p-4 md:w-1/3 flex bg-yellow-500 ">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          {/*<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>*/}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Quality work</h2>
          <p className="leading-relaxed text-base text-white">
          Experience superior quality work in every plumbing project we undertake, ensuring lasting reliability and satisfaction. Trust our skilled team for top-notch solutions that exceed your expectations.
         </p>
         
        </div>
      </div>

      <div className="p-4 md:w-1/3 flex  bg-white">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        {/*  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>*/}
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Skilled and experienced</h2>
          <p className="leading-relaxed text-base ">
         Benefit from our seasoned plumbing experts, bringing years of skill and experience to every project. Your plumbing needs are in capable hands for efficient and reliable solutions.
        </p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex bg-blue-500">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0 bg-center bg-no-repeat bg-contain  bg-[url('/img/howTo/100.png')]">
        
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">100% satisfaction</h2>
          <p className="leading-relaxed text-base text-white">
          Achieve 100% satisfaction with our plumbing services, delivering results that surpass expectations. Trust us for a seamless and contented experience with your plumbing needs.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>

)
}