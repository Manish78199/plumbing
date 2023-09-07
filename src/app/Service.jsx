import Image from "next/image"

export default function Service (){
	return (


 <section className=" " id="service">
      <div className=" lg:py-24 md:py-10 p-8 px-5">
         <h3 className=" font-bold text-center text-blue-700">PLUMBING SERVICE</h3>

         <h2 className="text-5xl mt-3 text-sky-950 text-center font-bold">Our Plumbing Services</h2>

         <div className=" lg:px-24 md:px-10 px-2 mt-20 flex flex-col md:flex-wrap lg:flex-row">
            
            <div className=" lg:w-1/3 md:2/3 w-1/1 p-3 mt-8 lg:mt-0">
           
              <div className="bg-white rounded-3xl p-10  shadow-lg">
                <div  className="bg-gray-200  bg-center bg-no-repeat  bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/general.png')] w-24 h-24"  ></div>
               
                <h2 className="text-2xl mt-8">General plumbing</h2>
                 <p className="text-gray-600 mt-3">General plumbing includes maintenanace , repairing , installation, tunkey fiting, toilet seat fitting,faucet replacement , sink installatioin and repair and all plumbing.</p>
              </div>
            </div>

             <div className="lg:w-1/3 md:2/3 w-1/1 p-3 mt-8 lg:mt-0 ">
              <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-lg ">
               <div  className="bg-gray-200   bg-center bg-no-repeat  bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/repaire.png')] w-24 h-24"  ></div>
               
                 <h2 className="text-2xl mt-8">Plumbing repairing</h2>
                 <p className=" mt-3">

               Experience hassle-free plumbing repairs with our skilled team, resolving issues promptly for a seamless home environment. Trust us for efficient solutions that stand the test of time.
                 </p>
              </div>
            </div>

             <div className="lg:w-1/3 mt-8 lg:mt-0 md:2/3 w-1/1 p-3">
              <div className="bg-white rounded-3xl p-10 shadow-lg">
               <div  className="bg-gray-200  bg-center bg-no-repeat  bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/fixure.png')] w-24 h-24" ></div>
               
                 <h2 className="text-2xl mt-8">Plumbing fixture</h2>
                 <p className="text-gray-400 mt-3">

              Upgrade your home with our premium plumbing fixtures, enhancing both functionality and aesthetics. Discover a wide range of options that blend style and durability seamlessly.
                 </p>
              </div>
            </div>
         </div> 
     </div>
 </section>

		)
}