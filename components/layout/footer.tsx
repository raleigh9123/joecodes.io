// components / footer.tsx
// --> COMPONENT <-

// Node Modules Imports

export default function Footer() {
  return (
    <footer className="">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Created with Love by Me in <span className="text-green-600">Portland, Oregon</span>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/joseph-butterfield-853aaa90/"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Go to Linkedin
            </a>
            <a
              href="https://github.com/raleigh9123"
              className="mx-3 font-bold hover:underline"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
