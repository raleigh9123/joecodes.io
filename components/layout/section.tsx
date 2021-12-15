// components / section.tsx
// --> COMPONENT <-

export default function Section({ children, ID }) {
  return (
    <section id={ID} className="py-4 relative border-b border-gray-700">
      {children}
    </section>
  )
}
