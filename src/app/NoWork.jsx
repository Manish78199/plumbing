import Image from 'next/image'



export default function NoOfWorks(){
	return (
<section className=" bg-gray-100 text-gray-600 ">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h2 className=" font-bold text-5xl mb-2 text-sky-950">We have done numbers of works and continue ...</h2>
        <div className="leading-relaxed uppercase font-bold text-blue-700">Our completed works</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">968 +</h2>
        <p className="leading-relaxed">Connected Client</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900"> 1056 +</h2>
        <p className="leading-relaxed">Works done</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">896 +</h2>
        <p className="leading-relaxed">Happy client</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">5+ </h2>
        <p className="leading-relaxed">Year</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <Image className="object-cover object-center w-full h-full" src="/img/done.png" height={528} width={472} alt="stats"/>
    </div>
  </div>
</section>
		)
}