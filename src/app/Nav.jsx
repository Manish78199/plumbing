
import Link from "next/link"
import Image from "next/image"
export default function
    Nav() {
    return (
        <div className="">
           
                <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <Image src="/img/logo/logo-png2.png" width={100} height="30"/>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                     <h1 className="text-xl font-bold text-blue-700 me-3">+91 73105 73878</h1>
                        <Link className="mr-5 text-gray-600 rounded-md px-3 py-2 text-2sm   hover:bg-gray-200 " href="/#service">Service</Link>
                        <Link className="mr-5 text-gray-600 rounded-md px-3 py-2 text-2sm   hover:bg-gray-200 " href="/#howto">How to</Link>
                        <Link className="mr-5 text-gray-600 rounded-md px-3 py-2 text-2sm   hover:bg-gray-200 " href="/#contact">Contact us</Link>
                      
                    </nav>
           
                </div>
         
        </div>
    )
}
