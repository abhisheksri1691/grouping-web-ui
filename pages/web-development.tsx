import { CloudArrowUpIcon, LockClosedIcon,ShieldCheckIcon ,DevicePhoneMobileIcon,WindowIcon } from '@heroicons/react/20/solid'

export default function WebDev() {
  return (
    <div className="relative isolate overflow-hidden mt-5 bg-white px-6 py-19 sm:py-25 lg:overflow-visible lg:px-0">
      
      <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Website Development</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <p className="mt-6 text-xl leading-7 text-gray-700">
                Welcome to Grouping Web, the premier Web Design & Development Company in India. Our goal is to provide you with a seamless online experience by designing and developing W3C standard websites that work flawlessly on all devices.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-7 -mt-12 p-5 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-full lg:max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/webdev.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                At Grouping Web, we go the extra mile to support our clients 24/7. We provide continuous consultation and assistance to help you stay ahead of the competition in the ever-evolving digital landscape.
.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <WindowIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Responsive Websites:</strong> We create websites that adapt seamlessly to different screen sizes, ensuring a great user experience across all devices.

                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Security.</strong> We develop more secure and reliable web application.
        
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">CMS-Based Websites: </strong> We build websites on content management systems, allowing you to easily update and manage your site's content.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Mobile-first website design:</strong> We prioritize mobile usability to ensure your website looks and functions beautifully on smartphones and tablets.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our skilled developers can customize and optimize your Shopify store to meet your unique business needs.
 We offer custom Wordpress development services, tailoring the platform to suit your specific requirements.

              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Choose Grouping Web for Web Design and Development Services?</h2>
              <p className="mt-6">
                Professional and Creative Team: Our team consists of experienced professionals who bring creativity and expertise to every project.
Project Management System with Full Plan: We follow a systematic approach to project management, ensuring clear communication and timely delivery.
Personalized and Consulting Approach: We understand your unique requirements and offer personalized solutions along with expert consulting.
Experience Team in the Industry: With years of experience, we have honed our skills to deliver top-notch web design and development services.
Creativity: We believe in creating visually appealing and innovative websites that captivate your audience.
User Interests: We prioritize the user experience, creating websites that are intuitive, user-friendly, and conversion-focused.
Choose Grouping Web as your trusted partner for all your web design and development needs. We guarantee exceptional results that will take your online presence to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
