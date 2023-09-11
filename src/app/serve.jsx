import Image from "next/image"

export default function Serve(){
	return (
         <section className=" bg-gray-100">
                <div className="container px-5  mx-auto flex flex-wrap">
                    
               <div className="lg:w-1/2 sm:w-1/3 py-24 w-full px-4 rounded-lg overflow-hidden mt-6 sm:mt-0">
              <div className="w-full sm:p-4  mb-6">
                  <div className="uppercase mt-3 font-bold text-blue-700">What we offer</div>

                     <h2 className=" font-bold text-5xl  text-sky-950">We are serve our work quickly at low price.</h2>
                  </div>
     

                  <ul className=" text-black-1000 ms-6 text-base p-5 row-gap-8 list-image-[url(/img/dot.png)] ">
                      <li className="mt-2">Affordable cost</li>
 <li className="mt-3">Expert and experienced plumbers</li>
  <li className="mt-3">1056 + projects done</li>

 <li className="mt-3">Advance tools and technique</li>

 <li className="mt-3">1 year free guarentee</li>


                 </ul>
             </div>
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 contents-center items-center sm:pr-10">
      

                        <Image className="object-cover object-center " src="/img/plumber-serve.png" height={508} width={450} alt="plumbing service offer" />
  
                    </div>
             </div>
       </section>


		)
}