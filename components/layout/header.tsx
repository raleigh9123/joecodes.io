// components / header.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-6 lg:px-12 py-7">
          <Link href="/">
            <a className="block text-lg font-bold sm:px-3 hover:text-emerald-400">joecodes.io</a>
          </Link>
          <nav className="">
            <Link href="/resume.pdf">
              <a className="px-3 sm:px-8 sm:mr-8 py-2 font-semibold text-gray-300 hover:bg-white rounded-sm hover:text-black transition-colors duration-300" target="_blank">Resumé</a>
            </Link>
          </nav>
      </header>
    </>
  )
}
