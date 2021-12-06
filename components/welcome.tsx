// pages / index.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Component Imports
import ProfilePicture from '../public/profile-picture.JPG'


export default function Welcome() {
  return (
    <section
      id="welcome"
      className="block border-b my-4 px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12"
    >
      <div className="h-7"/>
      {/* // Header text */}
      <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity: 1, transition: { delay: 0.15, duration: 0.3}}}
        className="lg:w-1/2 lg:mb-8"
      >
        <div className="lg:max-w-lg lg:mx-auto lg:space-y-4">
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold lg:font-black leading-8 tracking-tightest">Joseph Butterfield<span className="sr-only">'s Portfolio and Resume Site</span></h1>
          <p className="text-white text-xl md:text-3xl lg:text-4xl font-bold lg:font-black leading-7 lg:leading-10 tracking-tighter">
            <span className="text-cyan-400">Full-Stack</span> web developer specializing in&nbsp;
            <span className="text-green-500">JavaScript</span> and modern&nbsp;
            <span className="text-yellow-400">front-end development</span>
          </p>
          {/* // Description */}
          {/* Text */}
          <p className="text-sm md:text-base">My goal is to help clients take their business to the web by automating repetitive workflows, integrating web services, and marketing their platforms to reach a global audience. See my work below.</p>
          {/* Buttons */}
          <ul className="flex flex-wrap text-center items-center gap-4 py-4">
            <li className="flex-full sm:flex-1 sm:order-last">
              <Link href="/resume.pdf">
                <a className="block py-2 px-3 sm:px-8 text-sm md:text-base bg-blue-500 rounded-sm hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-200" target="_blank">Resumé</a>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="https://github.com/raleigh9123">
                <a className="block py-2 border rounded-sm text-sm md:text-base transform hover:no-underline hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-200" target="_blank">Github</a>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="https://www.linkedin.com/in/joseph-butterfield-853aaa90/">
                <a className="block py-2 border rounded-sm text-sm md:text-base transform hover:no-underline hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-200" target="_blank">Linkedin</a>
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
      {/* // Image */}
      <div className="bg-blue-500 lg:bg-transparent relative p-4 sm:p-8 -mx-6 sm:-mx-8 md:p-10 lg:p-8 mt-6 lg:mt-0 lg:w-1/2 lg:max-h-xl overflow-hidden lg:rounded-l-2xl">
        <div className="hidden lg:inline absolute w-full h-full -mx-8 -my-8" />
        <div className="relative flex flex-wrap lg:flex-nowrap lg:flex-col items-center bg-gray-800 rounded-xl lg:w-96 lg:mx-auto">
          <motion.div
            className="flex-full sm:flex-half lg:flex-full lg:w-96 lg:max-h-80 overflow-hidden"
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1, transition: { delay: 0.15, duration: 0.3 }}}
            >
            <Image
              src={ProfilePicture}
              alt="Profile picture of Joseph Butterfield"
              layout="responsive"
              objectPosition="50% 50%"
              className="rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none lg:rounded-bl-none lg:rounded-tr-xl"
              quality={96}
              priority
            />
          </motion.div>
          <motion.code
            initial={{opacity:0}}
            animate={{opacity:1, transition: { delay: 0.3, duration: 0.3 }}}
            className="flex-full sm:flex-half lg:flex-full self-stretch grid grid-rows-doubleAuto p-4 text-sm lg:text-base"
          >
            <span className="">// employment-status.js</span>
            <span className="self-center">
              <span className="text-yellow-300">let</span>
              <span className="text-blue-500">{' '}employmentInfo</span>
              <span className="text-yellow-300 opacity-50"> = </span>
              <span className="text-yellow-300">{`{`}</span>
              <span className="block text-green-500">&emsp;status: <span className="text-gray-300">'Pursuing full-time role',</span></span>
              <span className="block text-green-500">&emsp;roles: <span className="text-gray-300"> ['Full-Stack', 'Front-End'],</span></span>
              <span className="block text-green-500">&emsp;experience: <span className="text-gray-300"> ['junior', 'mid'],</span></span>
              <span className="block text-green-500">&emsp;technologies: <span className="text-gray-300"> ['JavaScript', 'TypeScript', 'Node', 'React']</span></span>
              <span className="text-yellow-300">{`}`}</span>
              <br />
            </span>
          </motion.code>
        </div>
      </div>

    </section>
  )
}
