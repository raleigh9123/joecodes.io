// components / header.tsx
// --> COMPONENT <-

// Node Modules Imports
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="sticky border-b border-gray-700 top-0 bg-black z-50">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 lg:px-12 py-7">
          <Link href="/">
            <a className="block text-lg font-bold sm:px-3 hover:text-emerald-400">joecodes.io</a>
          </Link>
          <nav className="">
            <Link href="/resume.pdf">
              <a className="px-3 sm:px-8 sm:mr-8 py-2 md:m-0 font-semibold text-yellow-400 hover:bg-white rounded-sm hover:text-black transition-colors duration-300" target="_blank">Resumé</a>
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
