"use client"
import Image from "next/image"
export default function Contact() {
  return (
    <section className=" bg-gray-100  " id="service">
      <div className=" p-8 px-5 ">

        <h1 className="text-5xl mt-3 text-sky-950 text-center font-bold">Contact us</h1>

        <div className=" lg:px-24 md:px-10 px-2 mt-20 flex flex-col md:flex-wrap lg:flex-row">

          <div className=" lg:w-1/3 md:2/3 w-1/1 p-3 lg:mt-0">

            <div className="bg-white  p-5  rounded-md">

              <h2 className="text-2xl  ">Call us</h2>
              <div className=" mt-3 flex items-center gap-x-1 content-center"><img src="/img/contact/call.png" width="25" height="25" /><a href="tel:+7310573878">73105 73878</a> </div>
            </div>
          </div>

          <div className=" lg:w-1/3 md:2/3 w-1/1 p-3 lg:mt-0">

            <div className="bg-white  p-5 rounded-md ">

              <h2 className="text-2xl  ">Message us</h2>
              <div className=" mt-3 flex items-center gap-x-1 content-center"><img src="/img/contact/whatsapp.png" width="25" height="25" /> 73105 73878</div>

            </div>
          </div>


          <div className=" lg:w-1/3 md:2/3 w-1/1 p-3 lg:mt-0">

            <div className="bg-white  p-5 rounded-md ">

              <h2 className="text-2xl  ">Mail us</h2>
              <div className=" mt-3 flex items-center gap-x-1 content-center break-all"><a href="mailto:+Contact.GreenLinePlumbing@gmail.com"><img src="/img/contact/email.png" width="25" height="25" /> Contact.GreenLinePlumbing@gmail.com</a> </div>
            </div>
          </div>

        </div>
      </div>

      <div className=" lg:px-24 md:px-10 px-2  flex flex-col justify-center  md:flex-wrap lg:flex-row">

        <div className=" p-3 sm:flex ">

          {/*<h2 className="text-2xl  ">Follow us on: </h2>*/}
          <div className=" mt-3 flex gap-x-4 items-center justify-center">
            <img src="/img/contact/facebook.png" width="30" height="30" alt="facebook" />
            <img src="/img/contact/whatsapp.png" width="30" height="30" alt="whatsapp" />
            <img src="/img/contact/instagram.png" width="30" height="30" alt="instagram" />
            <img src="/img/contact/google.png" width="30" height="30" alt="google" /> 
            </div>
        </div>

      </div>
      <div className="text-center mt-8 py-3 bg-gray-900 text-white">All Right Reserved @ 2023 </div>
    </section>)
}