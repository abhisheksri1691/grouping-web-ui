import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function MobileDev() {
  return (
    <div className="relative isolate  mt-5 overflow-hidden bg-white px-6 py-19 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Mobile Application Development</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mobile App Development Services</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              We are a professional mobile app development company based in India, and we make excellent apps that 
              work reliably on all kinds of handheld gadgets. From initial concept to final release, we offer 
              comprehensive app development services tailored to your unique needs and designed to put the spotlight 
              on your company.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-10 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/mobiledev.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              India-Based Mobile App Developer Dedicated to Keeping Your Brand in The Thoughts of Customers
Hire the best mobile app development company in India for comprehensive assistance from ideation to the launch of your unique app. We are committed to maintaining abreast of developments in the mobile app development business to provide our clients with the very best services.

              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">	Native apps</strong> Your mobile app should be the best on a specific type of device. 
                    Take advantage of our services for developing secure and reliable native mobile apps in India
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">	Hybrid mobile apps</strong> With our hybrid app services, you can make your mobile app accessible to users on all major platforms. 
                    Our result-oriented methodology allows our cross-platform services to thrive in various settings.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">	Mobile web apps</strong> Get all the benefits of a native app in a mobile browser-based app and stay in constant contact with your users. 
                    Your custom web app is developed using advanced programming languages, tools, and frameworks.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
              Hire Top-Notch App Developers to Expand Your Company's Reach
When developing mobile device apps, our team has all it takes to create advanced marketing solutions. Our mobile app development agency can help you to build a global brand and expand your business. 

              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Experience With Leading Frameworks for Creating Mobile Apps</h2>
              <p className="mt-6">
              	Front end development
With our front-end mobile development services, we create a user-friendly interface that impresses. Create a helpful program that people will want to download.
	Backend development
Our backend app development services allow us to monitor and control the application in real time. We guarantee all the backend standards using advanced techniques to ensure the app runs smoothly in the background.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
