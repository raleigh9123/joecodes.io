// pages / index.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'
import Image from 'next/image'

import ProfilePicture2 from '../public/profile-picture-2.jpg'

export default function About() {
  return (
    <div id="about" className="grid justify-items-center border-b">
      {/* // Wrapper */}
      <div className="py-24 md:py-40 px-16 md:px-8 lg:px-16 max-w-7xl">
        <div className="space-y-8">
          <div className="flex">
            <h2 className="ml-auto border-b border-r rounded-br-md pr-2 pb-1 shadow-white-right text-4xl font-semibold">About Me</h2>
          </div>
          <div className="inline-block w-80 mr-8 mb-4 border border-white shadow-white-right float-left rounded-xl">
            <Image
              src={ProfilePicture2}
              alt="Second profile picture of Joseph Butterfield"
              layout="responsive"
              quality={15}
              className="rounded-xl"
              placeholder="blur"
            />
          </div>
          <p><span className="text-cyan-400 font-semibold">I'm a native to Portland, OR</span> and I grew up weightlifting, hiking, running, and playing board games with friends. Oh, and drinking alot of coffee.</p>
          <p><span className="text-yellow-300 font-semibold">Fitness has always been a part of my life.</span>I have been actively involved in the CrossFit community for over 8 years, and I love handstands and cleans almost as much as I love Portland's burger week or beach days. These days, I mostly do quick, high-intensity workouts, or short lifting sessions.</p>
          <p><span className="text-violet-500 font-semibold">I like building computers.. and playing video games!</span> I built my first PC when I was 13 years old with random parts I collected from Craigslist. I remember plugging in 128MB and 256MB RAM sticks to the same motherboard, booting it up, and thinking something smelled weird after getting Windows up and running. One of the memory sticks was actually smoking! I built my dream PC recently. After experiencing only the MacOS for about a decade, I was rudely reminded how awful the Windows UI is. I thoroughly enjoyed CyberPunk and the Witcher 3 and my favorite types of games are real-time strategy games with friends or a whole weekend playing a single game of Civ VI.</p>
          <p><span className="text-green-600 font-semibold">I am always learning.</span> My current job allows me plenty of time to listen to audiobooks and podcasts. I am currently listening to Dune. My favorite podcast on all things tech is 'Syntax' with <Link href="https://wesbos.com/"><a className="italic text-blue-500 hover:text-white">Wes Bos</a></Link> and <Link href="https://leveluptutorials.com/"><a className="italic text-blue-500 hover:text-white">Scott Tolinski</a></Link>. I have picked up quite a few web dev tricks from listening to their show and doing their courses and I highly recommend, just about all of their courses. My current learning priorities are to better utilize and master Typescript in my applications, build more performant APIs, and better integrate 3rd party services (such as billing, communications, and scheduling). Right now, I am most excited to develop with the <Link href="https://blitzjs.com/"><a className="italic text-blue-500 hover:text-white">Blitz.js</a></Link> full-stack framework! and if you're a fan of Ruby on Rails, but work in Javascript land now, you should be too.</p>
        </div>
      </div>
    </div>
  )
}
