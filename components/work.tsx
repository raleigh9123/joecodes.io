// pages / index.tsx
// --> PAGE <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


// Utilities Imports
import { WorkData } from '../pages'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Work(props) {
  const { allJobs, allProjects }: WorkData = props.data
  // activeTab is an array of the the current array of posts and the index [currentPosts, index]
  const [ [posts, activeTab], setActiveArray ] = useState([allJobs, 'Live Work'])

  const parent = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.01,
        duration:0.05,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration:0.1,
        staggerChildren: 0.1
      }
    }
  }
  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.section
        id="work"
        key="work"
        className="grid justify-items-start border-b"
        transition={{layout: { duration: 0.4 }}}
        layout
        >
        <div className="px-6 my-6 lg:mt-10 md:px-8 lg:px-16 py-4 space-y-4 max-w-7xl mx-auto">
          <div className="flex space-y-4 flex-col md:flex-row md:space-y-0">
            {/* Work Section -- Heading */}
            <motion.h2 layout className="text-3xl md:text-4xl lg:text-5xl font-bold leading-7 tracking-tightest">Projects</motion.h2>

            {/* Tab Buttons */}
            <motion.div key="buttons" layout className="text-center space-x-6 mx-auto">
              <button
                onClick={() => setActiveArray([allJobs, 'Live Work'])}
                className={classNames(
                'border px-3 sm:px-8 py-2 text-md transition-colors duration-300',
                activeTab === 'Live Work' ? 'bg-violet-600 cursor-default '
                : 'border-white hover:bg-white hover:text-black'
                )}
              >Live Work</button>
              <button
                onClick={() => setActiveArray([allProjects, 'Treehouse-Projects'])}
                className={classNames(
                'border px-3 sm:px-8 py-2 text-md transition-colors duration-300',
                activeTab === 'Treehouse-Projects' ? 'bg-green-600 cursor-default'
                : 'border-white hover:bg-white hover:text-black'
                )}
              >TreeHouse</button>
            </motion.div>
          </div>
          {/* Tab Panels */}
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTab === 'Live Work' ? 'Live Work' : 'Treehouse-Projects'}
              layout
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={parent}
              className={classNames(activeTab === 'Live Work'
                ? "gap-8"
                : "lg:grid-cols-2 gap-x-8 xl:gap-x-24"
                ,"sm:mb-0 sm:grid gap-y-2 md:gap-y-4 xl:gap-y-12 lg:col-span-2"
              )}
            >

              {activeTab === 'Live Work' ? (
                <motion.div
                  key='live-work-header-text'
                  className="lg:col-span-2"
                  variants={child}
                  layout
                  >
                  <p className="border-r-2 border-l-2 px-8 w-full border-violet-600 lg:w-3/4 text-sm md:text-base">
                    <span className="block pb-2">My work is divided into live projects, and projects that I completed for my Treehouse Techdegree.</span>
                    The summary desccription for this website, <span className="text-blue-500 underline">joecodes.io</span>, is listed below under the "Live Work" tab of this section. Follow the Github link to see the code.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key='treehouse-header-text'
                  className="lg:col-span-2"
                  variants={child}
                  layout
                  >
                  <p className="border-r-2 border-l-2 px-8 w-full border-green-600 lg:w-3/4 text-sm md:text-base">
                    The&nbsp;
                    <Link href="https://teamtreehouse.com/">
                      <a target="_blank" className="underline">Treehouse</a>
                    </Link>
                    &nbsp;Full Stack JavaScript Techdegree is a fully remote online bootcamp providing a comprehensive education in the basics of the JavaScript language and its use in front end user experience and back end application development with Node and Express. Learn more about the&nbsp;
                    <Link href="https://teamtreehouse.com/techdegree/full-stack-javascript">
                      <a target="_blank" className="underline">FSJS Techdegree here</a>
                    </Link>, or view select projects from the program below.
                  </p>
                </motion.div>
              ) }
              {posts.map(({ title, subline, excerpt, type, technologies, slug, githubURL, demoURL, projectCompleted, coverImage }, index) => {
                return (
                  <motion.div
                    key={`${slug}`}
                    variants={child}
                    className={classNames(activeTab === 'Live Work'
                      ? "lg:col-span-2"
                      : "gap-x-8"
                      ,"border flex flex-col rounded-sm space-y-1 col-auto")}
                    >
                    {activeTab === 'Treehouse-Projects' && (
                      <div>
                        {/* Title, Category, Subline, and Links */}
                        <div className="relative h-56">
                          <div className="relative py-8 px-6 space-y-6">
                              <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold">{title}</h4>
                            <div className="flex items-center">
                              <h5 className="font-normal leading-6">{subline}</h5>
                              <p className={classNames(
                                type === 'Full-Stack' && 'bg-green-600',
                                type === 'Back-End' && 'bg-violet-600',
                                type === 'Front-End' && 'bg-cyan-500',
                                "font-semibold px-3 py-1 ml-auto rounded-xl text-white"
                              )}>{type}</p>
                            </div>
                            <div className="flex items-center justify-between space-x-4">
                              <Link href={githubURL}>
                                <a
                                  className="border font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:bg-white hover:text-black hover:no-underline"
                                  >Github
                                </a>
                              </Link>
                              {demoURL && (
                                <Link href={demoURL ? demoURL: '/'}>
                                  <a
                                    className="border font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:bg-white hover:text-black"
                                    target="_blank"
                                    >Demo
                                  </a>
                                </Link>
                              )}
                              <Link href={`/projects/${slug}`}>
                                <a
                                  className="border font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:bg-white hover:text-black hover:no-underline"
                                  >Summary <LogoutCustomIcon/>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* Image */}
                        <div className="relative md:w-3/4 md:mx-auto h-56 lg:h-44 xl:h-56">
                          <div className="h-56 lg:h-44 xl:h-56 opacity-70 relative">
                            <Image
                              src={coverImage.url}
                              alt={subline}
                              layout="fill"
                              objectFit="cover"
                              className=""
                              objectPosition="0% 0%"
                              placeholder="blur"
                              blurDataURL={coverImage.blurDataURL}
                            />
                          </div>
                        </div>
                        {/* Overview and Other Tech */}
                        <div className="flex flex-1 flex-wrap justify-between flex-col py-8 px-6">
                          <div className="space-y-4">
                            <h5 className="text-lg font-semibold">Overview</h5>
                            <p className="mb-4">{excerpt}</p>
                          </div>
                          <div className="space-y-4 mt-4">
                            <h5 className="sr-only">Technologies</h5>
                            <ul className="flex flex-wrap space-x-2">
                              {technologies.map((tech, index) => <li key={`${tech}-${index}`} className="rounded-xl bg-white text-black p-1 my-1 text-sm">{tech}</li> )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeTab === 'Live Work' && (
                      <div className="grid lg:grid-cols-2 gap-y-8 lg:gap-y-0">
                        {/* Title Subline and Links */}
                        <div className="lg:col-span-2 p-2 sm:px-4 lg:p-8 lg:pb-0 flex flex-col space-y-4 lg:space-y-0 lg:flex-row">
                          <div className="flex flex-col mb-2 lg:mb-0">
                            {title === 'Persist App' ? (
                              <h4 className="text-xl font-semibold">{title}&nbsp;
                                <Link href="https://persistenceathletics.com/"><a className="underline" target="_blank">
                                  by Persistence Athletics
                                </a></Link>
                              </h4>
                            ) : (
                              <h4 className="text-xl font-semibold">{title}</h4>
                            )}
                            <h5 className="font-normal leading-6">{subline}</h5>
                          </div>
                          <div className="flex items-center justify-center lg:justify-end lg:ml-auto space-x-12">
                            {demoURL && (
                              <Link href={demoURL}>
                                <a
                                  className="border rounded-md font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:bg-white hover:text-black"
                                  target="_blank"
                                  >Live URL
                                </a>
                              </Link>
                            )}
                            <Link href={`/jobs/${slug}`}>
                              <a
                                className="border rounded-md font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:bg-white hover:text-black hover:no-underline"
                                >Summary <LogoutCustomIcon/>
                              </a>
                            </Link>
                          </div>
                        </div>
                        {/* Overview, Excerpt, and Status */}
                        <div className="p-2 sm:px-8 lg:p-8 space-y-4 lg:pb-8">
                          <h5 className="text-lg font-semibold">Overview</h5>
                          <p className="">{excerpt}</p>
                          { projectCompleted.isComplete
                            ? <p className="font-semibold ml-auto ">Status: <span className="font-extralight">Completed {projectCompleted?.completionDate!}</span></p>
                            : <p className="font-semibold ml-auto ">Project Under Construction</p>}
                        </div>
                          {/* Image and Tech */}
                        <div className="row-start-2 lg:col-start-2 h-auto flex items-center flex-col">
                          <div className="h-72 sm:px-8 md:px-16 lg:px-0 w-full lg:mt-8 lg:w-4/5 lg:h-4/5 mx-auto">
                            <div className="relative h-full">
                              <Image
                                src={coverImage.url}
                                alt={subline}
                                layout="fill"
                                objectFit="cover"
                                className="lg:rounded-xl"
                                objectPosition="0% 0%"
                                placeholder="blur"
                                blurDataURL={coverImage.blurDataURL}
                                priority
                              />
                            </div>
                          </div>
                          <div className="p-2 sm:p-8">
                            <h5 className="sr-only">Technologies</h5>
                            <ul className="flex flex-wrap justify-center md:justify-start space-x-1 space-y-1 md:space-x-4">
                              {technologies.map((tech, index) => <li key={`${tech}-${index}`} className="rounded-xl bg-white text-black p-1 my-1 text-sm">{tech}</li> )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

        </div>
      </motion.section>
    </AnimatePresence>
  )
}


export function LogoutCustomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}
