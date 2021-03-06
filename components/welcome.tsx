// pages / welcome2.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Component Imports
import Section from './layout/section'
import ProfilePicture from '../public/profile-picture.JPG'


export default function Welcome() {
  return (
    <Section ID="welcome">
      <div className="hidden bg-theme-dark -z-10 backdrop-blur-3xl lg:inline absolute -mt-4 w-1/2 right-0 h-full" />
      <div className="block relative md:space-y-8 md:mb-8 lg:flex lg:items-center lg:-my-4 max-w-7xl mx-auto">
        <div className="hidden md:block h-2" />
        {/* // Header text */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.15, duration: 0.3 } }}
          className="lg:w-1/2 lg:mb-8"
        >
          <div className="space-y-4 px-6 sm:px-8 md:px-16 lg:max-w-2xl lg:mx-auto lg:space-y-2 xl:space-y-8">
            <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold lg:font-black leading-8 tracking-tightest">Joseph Butterfield<span className="sr-only">'s Portfolio and Resume Site</span></h1>
            <p className="text-white text-xl md:text-3xl lg:text-4xl font-bold lg:font-black leading-7 lg:leading-10 tracking-tighter">
              <span className="text-cyan-400">Full-Stack</span> web developer specializing in
              <span className="text-green-500"> JavaScript</span> and modern
              <span className="text-yellow-400"> front-end development</span>
            </p>
            {/* // Description */}
            <p className="text-sm md:text-base leading-6">My goal is to help clients take their business to the web by automating repetitive workflows, integrating 3rd party services, and marketing their platforms to reach a global audience.</p>
            {/* Buttons */}
            <ul className="flex flex-wrap text-center items-center gap-4 py-4">
              <li className="flex-full sm:flex-1 sm:order-last">
                <Link href="/resume.pdf">
                  <a className="block py-2 px-3 sm:px-8 text-sm md:text-base bg-blue-500 rounded-sm hover:bg-white hover:text-black hover:scale-105 transition-all duration-200" target="_blank">Resum??</a>
                </Link>
              </li>
              <li className="flex-1">
                <Link href="https://github.com/raleigh9123">
                  <a className="block py-2 border rounded-sm text-sm md:text-base hover:no-underline hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-200" target="_blank">Github</a>
                </Link>
              </li>
              <li className="flex-1">
                <Link href="https://www.linkedin.com/in/joseph-butterfield-853aaa90/">
                  <a className="block py-2 border rounded-sm text-sm md:text-base hover:no-underline hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-200" target="_blank">Linkedin</a>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
        {/* // Image */}
        <div className="px-6 sm:px-8 md:px-16 mb-4 lg:m-0 lg:p-0 relative overflow-hidden lg:w-1/2 lg:py-16 lg:pl-16">
          <div className="relative rounded-xl md:shadow-sm md:shadow-gray-900 md:flex md:items-center md:justify-between lg:flex lg:flex-wrap lg:flex-col lg:items-center lg:mx-auto lg:w-96 lg:h-full">
            <motion.div
              className="relative md:w-2/5 lg:w-96 py-32 md:py-36 lg:py-40 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3 } }}
            >
              <Image
                src={ProfilePicture}
                alt="Profile picture of Joseph Butterfield"
                layout="fill"
                objectFit="cover"
                objectPosition="50% 40%"
                className="rounded-tl-xl rounded-tr-xl md:rounded-bl-xl md:rounded-tl-xl md:rounded-tr-none lg:rounded-bl-none lg:rounded-tr-xl"
                quality={96}
                priority
              />
            </motion.div>
            <motion.code
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.3 } }}
              className="rounded-bl-xl rounded-br-xl md:rounded-tr-xl md:rounded-bl-none lg:rounded-bl-xl lg:rounded-br-xl lg:rounded-tr-none bg-gray-800 sm:flex-half lg:flex-full self-stretch grid grid-rows-doubleAuto p-4 space-y-2 md:px-8 text-sm lg:text-base"
            >
              <span className="">// employment-status.js</span>
              <span className="self-center">
                <span className="text-yellow-300">let</span>
                <span className="text-blue-500">{' '}employmentInfo</span>
                <span className="text-yellow-300 opacity-50"> = </span>
                <span className="text-yellow-300">{`{`}</span>
                <span className="block text-green-500">&emsp;seekingEmployment: <span className="text-cyan-400"> true</span><span className="text-gray-400">,</span></span>
                <span className="block text-green-500">&emsp;location: <span className="text-violet-500"> [<span className="text-gray-200">'Portland, OR', 'Seattle, WA', 'Remote'</span>],</span></span>
                <span className="block text-green-500">&emsp;roles: <span className="text-violet-500"> [<span className="text-gray-200">'Full-Stack', 'Front-End'</span>],</span></span>
                <span className="block text-green-500">&emsp;technologies: <span className="text-violet-500"> [<span className="text-gray-200">'JavaScript', 'TypeScript', 'Node', 'React'</span>]</span></span>
                <span className="text-yellow-300">{`}`}</span>
                <br />
              </span>
            </motion.code>
          </div>
        </div>
      </div>
    </Section>
  )
}
