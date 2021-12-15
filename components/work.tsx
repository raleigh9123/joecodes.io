// pages / work.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'
import { CodeIcon, ExternalLinkIcon } from '@heroicons/react/solid'

import { LogoutCustomIcon, TailwindIcon, PrismaIcon } from '../lib/svgs'

// Component Imports
import Section from './layout/section'

// Utilities Imports
import { WorkData } from '../pages'

export default function Work(props) {
  const { allJobs, allProjects }: WorkData = props.data

  return (
    <Section ID="work">

      <div className="px-6 mx-auto md:my-12 lg:mt-10 md:px-16 lg:px-16 py-4 space-y-4 max-w-7xl w-full">
        {/* Jobs */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-right font-bold tracking-tightest">Projects</h2>
        <div className="flex flex-col flex-wrap w-full gap-y-4 md:flex-row md:gap-x-4 lg:gap-8 overflow-hidden">
          {allJobs.map(({ title, subline, excerpt, slug, githubURL, demoURL, coverImage }, index) => (
            <>
              {index === 0 && (
                <div key={`work-${index}`} className="sm:flex-1 md:flex-[1_0_100%] flex flex-col md:flex-row md:gap-x-8">
                  <div className="relative md:w-1/2 opacity-90 py-24 rounded-2xl shadow shadow-gray-900">
                    <Image
                      alt={subline}
                      src={coverImage.url}
                      className="rounded-2xl"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="0% 0%"
                      placeholder="blur"
                      blurDataURL={coverImage.blurDataURL}
                      priority
                    />
                  </div>
                  <div className="md:w-1/2 flex md:text-right flex-col gap-y-2 md:gap-y-4">
                    {/* Heading  */}
                    <h4 className="relative text-2xl md:text-2xl mt-2 md:mt-0 text-violet-500 font-semibold">
                      {title}<br />
                      <span className="text-xl"><Link href="https://persistenceathletics.com/"><a className="underline" target="_blank">by <span className="italic">Persistence Athletics</span></a></Link></span>
                    </h4>
                    {/* Links */}
                    <div className="flex gap-x-2 my-2 md:my-0 md:gap-x-4 md:ml-auto">
                      <Link href={demoURL}>
                        <a
                          className="inline-block text-center flex-1 md:flex-none border rounded-sm font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500" target="_blank"
                        >Demo <ExternalLinkIcon className="inline h-5 w-5" />
                        </a>
                      </Link>
                      {/* <Link href={`/jobs/${slug}`}>
                        <a
                          className="inline-block text-center flex-1 md:flex-none border rounded-sm font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500"
                        >Summary <LogoutCustomIcon />
                        </a>
                      </Link> */}
                    </div>
                    {/* Excerpt */}
                    <div className="p-2 py-4 md:p-4 border rounded-xl border-violet-500">
                      <p className="relative md:text-center">{excerpt}</p>
                    </div>
                    {/* Add Tech Icons Here */}
                  </div>
                </div>
              )}
              {index !== 0 && (
                <div key={`work-${index}`} className="relative md:w-1/2 md:flex-1 p-4 rounded-2xl border border-violet-400">
                  <div className="before:bg-violet-900 before:-z-10 before:opacity-5 before:absolute before:inset-0 before:rounded-2xl">
                    {/* Image Component */}
                    <div className="relative w-full opacity-90 py-24 rounded-2xl shadow shadow-gray-900">
                      <Image
                        alt={subline}
                        src={coverImage.url}
                        className="rounded-2xl"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="0% 0%"
                        placeholder="blur"
                        blurDataURL={coverImage.blurDataURL}
                      />
                    </div>
                    <div className="flex flex-col gap-y-2 md:gap-y-4">
                      {/* Title and Subline */}
                      <h4 className="text-xl mt-2 md:mt-4 text-violet-500 font-semibold">{title}</h4>
                      <p className="">{subline}</p>
                      {/* Links */}
                      <div className="flex flex-wrap gap-2 my-2 md:my-0 md:gap-x-4 overflow-hidden">
                        {githubURL && (
                          <Link href={githubURL}>
                            <a
                              className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                              target="_blank"
                            >Github <CodeIcon className="relative inline h-5 w-5 hover:cursor-pointer" />
                            </a>
                          </Link>
                        )}
                        <Link href={demoURL}>
                          <a
                            className="inline-block text-center flex-[0_1_50%] border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap" target="_blank"
                          >Demo <ExternalLinkIcon className="inline h-5 w-5" />
                          </a>
                        </Link>
                        {/* <Link href={`/jobs/${slug}`}>
                          <a
                            className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                          >Summary <LogoutCustomIcon />
                          </a>
                        </Link> */}
                      </div>
                      {/* <div>
                          <p>Prisma<PrismaIcon /></p>
                          <p>TailWind <TailwindIcon /></p>
                        </div> */}
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Treehouse Projects */}
        <h3 className="lg:mt-12 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tightest">Treehouse</h3>
        <p className="border-r-2 border-l-2 px-2 md:px-8 w-full border-green-500 lg:w-3/4 text-sm md:text-base">
          The&nbsp;<a target="_blank" className="underline" href="https://teamtreehouse.com/">Treehouse</a>&nbsp;Full Stack JavaScript Techdegree is a fully remote online bootcamp providing a comprehensive education in the basics of the JavaScript language and its use in front end user experience and back end application development with Node and Express. Learn more about the&nbsp;<a target="_blank" className="underline" href="https://teamtreehouse.com/techdegree/full-stack-javascript">FSJS Techdegree here</a>, or view select projects from the program below.
        </p>
        <div className="grid grid-flow-row gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map(({ title, subline, excerpt, type, technologies, slug, githubURL, demoURL, coverImage }, index) => (
            <div key={`project-${index}`} className="relative p-4 rounded-2xl border border-green-500">
              <div className="flex flex-col h-full justify-start before:bg-green-900 before:-z-10 before:opacity-5 before:absolute before:inset-0 before:rounded-2xl">
                {/* Image Component */}
                <div className="relative w-full opacity-90 py-24 rounded-2xl shadow shadow-gray-900">
                  <Image
                    alt={subline}
                    src={coverImage.url}
                    className="rounded-2xl"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="50% 0%"
                    placeholder="blur"
                    blurDataURL={coverImage.blurDataURL}
                  />
                </div>
                <div className="flex flex-col gap-y-2 md:gap-y-4 h-full">
                  {/* Title and Subline */}
                  <h4 className="text-xl mt-2 md:mt-4 text-green-500 font-semibold">{title}</h4>
                  <p className="">{subline}</p>
                  {/* Links */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 my-2 md:my-0 md:gap-x-4 overflow-hidden">
                      {githubURL && (
                        <Link href={githubURL}>
                          <a
                            className="inline-block text-center flex-1 md:flex-[0_0_46.5%] border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                            target="_blank"
                          >Github <CodeIcon className="relative inline h-5 w-5 hover:cursor-pointer" />
                          </a>
                        </Link>
                      )}
                      {demoURL && (
                        <Link href={demoURL}>
                          <a
                            className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap" target="_blank"
                          >Demo <ExternalLinkIcon className="inline h-5 w-5" />
                          </a>
                        </Link>
                      )}
                      {/* <Link href={`/projects/${slug}`}>
                        <a
                          className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                        >Summary <LogoutCustomIcon />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                  {/* <div>
                            <p>Prisma<PrismaIcon /></p>
                            <p>TailWind <TailwindIcon /></p>
                          </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section >
  )
}
