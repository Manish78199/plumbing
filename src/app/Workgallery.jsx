import Image from "next/image"

export default function WorkGal(){
	return (

        <section className=" body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="  text-5xl  font-bold  mb-4 text-sky-950">Our works gallery</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-blue-700 uppercase font-bold">we have done several work , solve many plumbing problem. this is our work gallery </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="plumbing-cpvc-fiting" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gallery/cpvc-fiting.jpg" width={350} height={200}/>

          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CPVC FITINGS</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Hotel Plumbing Installation</h1>
            <p className="leading-relaxed">Experience hassle-free CPVC installation by experts, enhancing your plumbing system's durability and efficiency.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="plumbing-water-leak" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gallery/water-leak-detection.jpg" width={350} height={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">WATER LEAK DETECTION</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Home</h1>
            <p className="leading-relaxed">We quickly spot water leaks and provide practical solutions to protect your property and save water.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="plumbing-toilet-installation" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gallery/plumbing-toilet.jpg" width={350} height={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MULTIPLE TOILET INSTALLATION</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Restaurent</h1>
            <p className="leading-relaxed">Seamless installation of multiple toilets for added convenience and functionality in your space.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="plumbig-bathroom-fiting" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gallery/plumbing-modern-bathroom.jpg" width={350} height={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MODERN BATHROOM WITH TOILET</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Resort</h1>
            <p className="leading-relaxed">Modern bathroom and toilet installation that combines style and functionality for a luxurious experience.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="plumbing-kitchen-sink-installation" className="absolute inset-0 w-full h-full object-cover object-center" src="/img/gallery/plumbing-kitchen.jpg" width={350} height={200}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">MODERN KITCHEN</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Modern House</h1>
            <p className="leading-relaxed">Elevate your kitchen with a modern sink installation, merging style and practicality for a contemporary culinary experience."





</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


		)
}