
import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import Link from 'next/link'

export default function AboutUs() {

  return (
    <>

<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                    Welcome to Grouping Web, a leading website development and digital marketing company dedicated to helping businesses thrive in the digital landscape. We are passionate about crafting exceptional online experiences and implementing strategic digital marketing strategies that drive tangible results.
                       </p><br></br>
                       <p className="font-normal text-base leading-6 text-gray-600 ">At Grouping Web, we understand that a strong online presence is crucial in today's competitive market. That's why we offer comprehensive website development solutions that go beyond aesthetics. Our talented team of designers, developers, and user experience experts work together to create websites that are visually stunning, user-friendly, and optimized for performance across all devices.
</p><br></br>
<p className="font-normal text-base leading-6 text-gray-600 ">In addition to website development, we specialize in digital marketing strategies that help businesses reach their target audiences and achieve their marketing goals. Our team of digital marketing experts is well-versed in the latest techniques and trends, ensuring that our strategies are always innovative and effective. 
</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Team</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At Grouping Web, we are proud of our exceptional team of talented professionals who are dedicated to delivering outstanding website development and digital marketing services. With a diverse range of skills and expertise, our team is passionate about helping businesses thrive in the digital world. </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-1 shadow-lg rounded-md">
                    <div className=" p-2 pb-3 flex justify-center flex-col items-center">
                            <img className='w-fit h-fit md:block hidden' src="/ceo2.jpg" alt="CTO" />
                            <img className="md:hidden block" src="/ceo2.jpg" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Anuj</p>
                            <p className="font-medium text-l leading-5 text-gray-800 mt-4">CEO</p>
                        </div>
                        <div className=" p-2 pb-3 flex justify-center flex-col items-center">
                            <img className='w-fit h-fit md:block hidden' src="/cto.jpg" alt="CTO" />
                            <img className="md:hidden block" src="/cto.jpg" alt="Alexa featured Img" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Abhishek</p>
                            <p className="font-medium text-l leading-5 text-gray-800 mt-4">CTO</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
