import { ChevronRightIcon } from '@heroicons/react/20/solid'
import dem from '../assets/dem.png'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-2">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
         <div>Dysle<span class=" text-blue-700">X</span>ia <br /></div> 
         <div className="text-lg leading-10 mt-2">Unleashing Learning Potential</div>
           
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Dyslexia is not a barrier, but a unique way of thinking. Join us. We offer tools and exercises tailored to enhance reading and cognitive skills. Our community is dedicated to empowering dyslexic individuals. Together, we redefine possibilities.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className='ml-24'>
            <img src={dem}/>
        </div>
      </div>
    </div>
  )
}
