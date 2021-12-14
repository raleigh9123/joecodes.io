// pages / work.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CodeIcon, ExternalLinkIcon, LogoutIcon } from '@heroicons/react/solid'


// Utilities Imports
import { WorkData } from '../pages'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Work(props) {
  const { allJobs, allProjects }: WorkData = props.data
  // activeTab is an array of the the current array of posts and the index [currentPosts, index]
  const [[posts, activeTab], setActiveArray] = useState([allJobs, 'Live Work'])

  const parent = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.01,
        duration: 0.05,
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.1
      }
    }
  }
  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <section id="work" className="grid justify-items-start border-b">

      <div className="px-6 my-6 mx-auto md:my-12 lg:mt-10 md:px-16 lg:px-16 py-4 space-y-4 max-w-7xl w-full">
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
                      <Link href={`/jobs/${slug}`}>
                        <a
                          className="inline-block text-center flex-1 md:flex-none border rounded-sm font-semibold px-3 sm:px-8 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500"
                        >Summary <LogoutCustomIcon />
                        </a>
                      </Link>
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
                      <div className="flex flex-wrap gap-2 my-2 md:my-0 md:gap-x-4 overflow-hidden ">
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
                            className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap" target="_blank"
                          >Demo <ExternalLinkIcon className="inline h-5 w-5" />
                          </a>
                        </Link>
                        <Link href={`/jobs/${slug}`}>
                          <a
                            className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                          >Summary <LogoutCustomIcon />
                          </a>
                        </Link>
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
        <p className="border-r-2 border-l-2 px-2 md:px-8 w-full border-green-600 lg:w-3/4 text-sm md:text-base">
          The&nbsp;<a target="_blank" className="underline" href="https://teamtreehouse.com/">Treehouse</a>&nbsp;Full Stack JavaScript Techdegree is a fully remote online bootcamp providing a comprehensive education in the basics of the JavaScript language and its use in front end user experience and back end application development with Node and Express. Learn more about the&nbsp;<a target="_blank" className="underline" href="https://teamtreehouse.com/techdegree/full-stack-javascript">FSJS Techdegree here</a>, or view select projects from the program below.
        </p>
        <div className="grid grid-flow-row gap-y-4 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map(({ title, subline, excerpt, type, technologies, slug, githubURL, demoURL, coverImage }, index) => (
            <div key={`project-${index}`} className="relative p-4 rounded-2xl border border-green-500">
              <div className="before:bg-green-900 before:-z-10 before:opacity-5 before:absolute before:inset-0 before:rounded-2xl">
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
                <div className="flex flex-col gap-y-2 md:gap-y-4">
                  {/* Title and Subline */}
                  <h4 className="text-xl mt-2 md:mt-4 text-green-500 font-semibold">{title}</h4>
                  <p className="">{subline}</p>
                  {/* Links */}
                  <div className="flex flex-wrap gap-2 my-2 md:my-0 md:gap-x-4 overflow-hidden ">
                    {githubURL && (
                      <Link href={githubURL}>
                        <a
                          className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
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
                    <Link href={`/jobs/${slug}`}>
                      <a
                        className="inline-block text-center flex-1 border rounded-sm font-semibold px-2 sm:px-6 py-2 transition-colors duration-200 border-white hover:border-blue-500 hover:cursor-pointer hover:no-underline hover:text-blue-500 whitespace-nowrap"
                      >Summary <LogoutCustomIcon />
                      </a>
                    </Link>
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
    </section >
  )
}


export function LogoutCustomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="relative inline h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
  )
}

export function TailwindIcon() {
  return (
    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#fff" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" /></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs></svg>
  )
}

export function PrismaIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">\
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.209637 19.5075C-0.0659575 19.0728 -0.0701211 18.5191 0.198904 18.0802L10.3282 1.55731C10.8916 0.638316 12.252 0.718671 12.7033 1.69759L21.9569 21.7708C22.3002 22.5156 21.905 23.3919 21.1194 23.6276L6.72474 27.946C6.14558 28.1197 5.52155 27.8869 5.19781 27.3762L0.209637 19.5075ZM11.4969 6.38848C11.5945 5.90241 12.2605 5.83232 12.4572 6.28741L18.8402 21.0573C18.9603 21.3354 18.8108 21.6561 18.5205 21.7427L8.57492 24.7116C8.20935 24.8207 7.85916 24.5013 7.93428 24.1272L11.4969 6.38848ZM48.4948 21.6373H51.3226V11.2722H48.4948V21.6373ZM48.3744 8.59301C48.3744 7.67245 48.8878 7.21184 49.9137 7.21184C50.9394 7.21184 51.4527 7.67245 51.4527 8.59301C51.4527 9.03201 51.3244 9.37345 51.068 9.61767C50.8114 9.86189 50.4267 9.98367 49.9137 9.98367C48.8878 9.98367 48.3744 9.52011 48.3744 8.59301ZM87.1709 16.8352L86.0768 16.8722C85.2548 16.8971 84.6429 17.0457 84.2412 17.3174C83.8392 17.5895 83.6386 18.0033 83.6386 18.5598C83.6386 19.3569 84.0959 19.7557 85.0106 19.7557C85.6656 19.7557 86.1897 19.5674 86.5819 19.19C86.9744 18.8132 87.1709 18.3126 87.1709 17.688V16.8352ZM88.0053 21.6377L87.4583 20.2284H87.384C86.908 20.8281 86.4182 21.2439 85.9144 21.4757C85.4109 21.7074 84.7542 21.823 83.9446 21.823C82.9491 21.823 82.1661 21.5388 81.5941 20.9702C81.0226 20.4019 80.7368 19.592 80.7368 18.5411C80.7368 17.4412 81.1214 16.63 81.8907 16.1075C82.6607 15.5853 83.8209 15.2963 85.3723 15.2406L87.1709 15.185V14.7306C87.1709 13.6801 86.633 13.1546 85.5576 13.1546C84.7293 13.1546 83.7558 13.4047 82.6371 13.9056L81.7009 11.9957C82.8938 11.3718 84.2167 11.0592 85.6689 11.0592C87.0596 11.0592 88.1258 11.3623 88.8676 11.9679C89.6091 12.5736 89.98 13.4948 89.98 14.7306V21.6377H88.0053ZM72.4802 21.6377H69.6524V15.5836C69.6524 14.8359 69.527 14.2752 69.2772 13.901C69.0265 13.5271 68.6326 13.3399 68.0948 13.3399C67.3719 13.3399 66.8465 13.606 66.5188 14.1373C66.1911 14.669 66.0275 15.5437 66.0275 16.7612V21.6377H63.1996V11.2725H65.3599L65.74 12.5984H65.8978C66.1757 12.1227 66.5778 11.7502 67.1029 11.4814C67.6283 11.2123 68.231 11.0778 68.9109 11.0778C70.4623 11.0778 71.5128 11.5848 72.0631 12.5984H72.3132C72.5915 12.1162 73.001 11.7423 73.5419 11.4765C74.0827 11.2107 74.6929 11.0778 75.3728 11.0778C76.5471 11.0778 77.4359 11.3793 78.0382 11.9819C78.6409 12.5846 78.9421 13.5504 78.9421 14.8788V21.6377H76.1051V15.5836C76.1051 14.8359 75.9798 14.2752 75.73 13.901C75.4792 13.5271 75.0854 13.3399 74.5475 13.3399C73.8555 13.3399 73.3379 13.5874 72.9945 14.0817C72.6517 14.5763 72.4802 15.361 72.4802 16.4364V21.6377ZM60.17 20.9887C60.9088 20.4325 61.2781 19.6229 61.2781 18.5596C61.2781 18.047 61.1887 17.6047 61.0093 17.2338C60.8299 16.8629 60.5517 16.5355 60.1749 16.251C59.7981 15.9669 59.2046 15.6611 58.3946 15.3334C57.4862 14.9687 56.8976 14.6934 56.6285 14.5081C56.3601 14.3228 56.2252 14.1035 56.2252 13.8498C56.2252 13.3987 56.6426 13.1731 57.477 13.1731C57.9465 13.1731 58.4071 13.2445 58.8582 13.3862C59.3093 13.5286 59.7948 13.7106 60.314 13.9333L61.1668 11.8938C59.9863 11.35 58.7718 11.078 57.5232 11.078C56.2127 11.078 55.2009 11.3297 54.4872 11.8335C53.7729 12.3373 53.416 13.0497 53.416 13.9703C53.416 14.5081 53.5012 14.9612 53.6714 15.3288C53.841 15.6965 54.113 16.0225 54.4872 16.3067C54.8607 16.5912 55.4467 16.9002 56.2438 17.2338C56.8 17.4688 57.2453 17.6744 57.5788 17.8505C57.9128 18.0267 58.1475 18.1845 58.2837 18.3233C58.4195 18.4624 58.4876 18.6431 58.4876 18.8657C58.4876 19.4589 57.9743 19.7555 56.9483 19.7555C56.4478 19.7555 55.8684 19.672 55.2103 19.5054C54.5517 19.3384 53.9601 19.1315 53.4347 18.884V21.2205C53.8983 21.4182 54.3959 21.5681 54.9275 21.6703C55.4591 21.7721 56.1014 21.8231 56.8557 21.8231C58.3266 21.8231 59.4314 21.5449 60.17 20.9887ZM46.9948 11.1612C46.7414 11.1056 46.4232 11.0778 46.0398 11.0778C45.3969 11.0778 44.8021 11.2555 44.2554 11.611C43.708 11.9666 43.2739 12.4347 42.9524 13.0154H42.8136L42.3962 11.2725H40.2546V21.6377H43.0824V16.3624C43.0824 15.528 43.3341 14.8788 43.8376 14.4153C44.3418 13.9517 45.0446 13.7199 45.9472 13.7199C46.2749 13.7199 46.5528 13.751 46.7817 13.8126L46.9948 11.1612ZM31.9317 14.4616H32.8774C33.7613 14.4616 34.4223 14.2871 34.8613 13.9378C35.3003 13.5888 35.5196 13.0801 35.5196 12.4126C35.5196 11.7392 35.3356 11.2416 34.968 10.9201C34.6 10.5986 34.0239 10.4379 33.2388 10.4379H31.9317V14.4616ZM38.4214 12.3108C38.4214 13.7696 37.9657 14.8852 37.0537 15.6575C36.1423 16.4304 34.8459 16.8164 33.1649 16.8164H31.9317V21.6375H29.0577V8.0832H33.3872C35.0315 8.0832 36.2814 8.43708 37.1375 9.14485C37.9936 9.85262 38.4214 10.9081 38.4214 12.3108Z" fill="#F7FAFC">
      </path>
    </svg>
  )
}
