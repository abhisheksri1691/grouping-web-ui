import React from "react";
import { Fragment, useState } from 'react'
import { Popover, Transition,Disclosure } from '@headlessui/react'
import { ChevronDownIcon ,PlayCircleIcon,PhoneIcon} from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  CursorArrowRaysIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'



const services = [
  {
    name: 'Web Developemnt',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/web-development',
    icon: ChartBarIcon,
  },
  {
    name: 'Mobile App Developemnt',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: 'mobile-development',
    icon: ChartBarIcon,
  },
  {
    name: 'SEO',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/seo',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Social Media Marketing', description: "Your customers' data will be safe and secure.", 
  href: '/digital-marketing', icon: ShieldCheckIcon },
  // {
  //   name: 'SEO Link Building',
  //   description: "Connect with third-party tools that you're already using.",
  //   href: '#',
  //   icon: Squares2X2Icon,
  // },
  {
    name: 'Marketing Analysis',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '/marketing-analysis',
    icon: ArrowPathIcon,
  },
]

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-xs right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Menu</header>
          <div>
				<ul className="">
                <li><a href="/" className="block text-sm px-2 py-4 font-semibold hover:bg-teal-700 transition duration-300">Home</a></li>
					<li><a href="/about-us" className="block text-sm px-2 py-4 font-semibold hover:bg-teal-700 transition duration-300">About</a></li>
          <Popover className="relative px-2 py-4">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </Popover.Panel>
      </Transition>
    </Popover>
					<li><a href="/contact" className="block text-sm px-2 py-4 font-semibold hover:bg-teal-700 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
      
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
