// components / footer.tsx
// --> COMPONENT <-

// Node Modules Imports

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl px-5 mx-auto xl:px-16">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Created with Love by Me in <span className="inline lg:hidden">&nbsp;</span> <span className="text-green-600">Portland, Oregon</span>
          </h3>
          <div className="flex flex-row flex-wrap justify-center items-center gap-x-3 gap-y-4 lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/joseph-butterfield-853aaa90/"
              className="rounded-sm bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors whitespace-nowrap"
            >
              Go to Linkedin
            </a>
            <a
              href="https://github.com/raleigh9123"
              className="font-bold hover:underline whitespace-nowrap"
              target="_blank"
            >
              See my GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
