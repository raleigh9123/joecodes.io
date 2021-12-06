// components / layout.tsx
// --> COMPONENT <-

// Node Modules Imports
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
