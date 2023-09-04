import Image from "next/image"

export default function Service (){
	return (
// 		<section className="text-gray-600 bg-gray-100 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap w-full mb-20">
//       <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//         <h1 className="text-4xl md:text-5xl font-medium title-font mb-2 text-gray-900">Our services</h1>
//         <div className="h-1 w-20 bg-indigo-500 rounded"></div>
//       </div>
//       <p className="lg:w-1/2 w-full leading-relaxed text-black-500 shadow-md bg-white p-3 rounded-lg">your trusted partner for top-notch plumbing solutions. With our " free 1-year guarantee "of " maintenanace and repairing " , we specialize in seamless plumbing services, including plumbing repairing , installation, tunkey fiting, toilet seat fitting,faucet replacement , sink installatioin and repair and all plumbing service with comprehensive kitchen solutions etc. Experience reliability and excellence with every job we undertake.</p>
//     </div>
//     <div className="flex flex-wrap -m-4">
//       <div className="xl:w-1/4 md:w-1/2 p-4 ">
//         <div className="bg-gray-100 p-6 rounded-lg bg-white shadow-md">
//           <Image className="h-40 rounded w-full object-cover object-center mb-6" src="/img/service/general.png" alt="Plumbing installation"  width={238} height={160}/>
//           {/*<h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>*/}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Plumbing installation</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg bg-white shadow-md">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimg.com/721x401" alt="Diverter installation"  width={238} height={160}/>
//           {/*<h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>*/}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Diverter installation</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg bg-white shadow-md">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimg.com/722x402" alt="content" />
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg bg-white shadow-md">
//           <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimg.com/723x403" alt="content" />
//           <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

 <section className=" " id="service">
      <div className=" lg:py-24 md:py-10 p-8 px-5">
         <h3 className=" font-bold text-center text-blue-700">PLUMBING SERVICE</h3>

         <h2 className="text-5xl mt-3 text-sky-950 text-center font-bold">Our Plumbing Services</h2>

         <div className=" lg:px-24 md:px-10 px-2 mt-20 flex flex-col md:flex-wrap lg:flex-row">
            
            <div className=" lg:w-1/3 md:2/3 w-1/1 p-3 mt-8 lg:mt-0">
           
              <div className="bg-white rounded-3xl p-10  shadow-lg">
                <div  className="bg-gray-200  bg-center bg-no-repeat bg-contain bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/general.png')] w-24 h-24"  ></div>
               
                <h2 className="text-2xl mt-8">General plumbing</h2>
                 <p className="text-gray-600 mt-3">General plumbing includes maintenanace , repairing , installation, tunkey fiting, toilet seat fitting,faucet replacement , sink installatioin and repair and all plumbing.</p>
              </div>
            </div>

             <div className="lg:w-1/3 md:2/3 w-1/1 p-3 mt-8 lg:mt-0 ">
              <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-lg ">
               <div  className="bg-gray-200   bg-center bg-no-repeat bg-contain bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/repaire.png')] w-24 h-24"  ></div>
               
                 <h2 className="text-2xl mt-8">Plumbing repairing</h2>
                 <p className=" mt-3">

               Experience hassle-free plumbing repairs with our skilled team, resolving issues promptly for a seamless home environment. Trust us for efficient solutions that stand the test of time.
                 </p>
              </div>
            </div>

             <div className="lg:w-1/3 mt-8 lg:mt-0 md:2/3 w-1/1 p-3">
              <div className="bg-white rounded-3xl p-10 shadow-lg">
               <div  className="bg-gray-200  bg-center bg-no-repeat bg-contain bg-[length:65px_65px] border border-slate-100  -mt-20 rounded-full absolute bg-[url('/img/service/fixure.png')] w-24 h-24" ></div>
               
                 <h2 className="text-2xl mt-8">Plumbing fixture</h2>
                 <p className="text-gray-400 mt-3">

             n  Upgrade your home with our premium plumbing fixtures, enhancing both functionality and aesthetics. Discover a wide range of options that blend style and durability seamlessly.
                 </p>
              </div>
            </div>
         </div> 
     </div>
 </section>

		)
}