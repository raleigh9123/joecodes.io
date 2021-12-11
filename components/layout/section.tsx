// components / section.tsx
// --> COMPONENT <-

export default function Section({ children, ID }) {
  return (
    <section id={ID} className="py-4 border-b">
      {children}
    </section>
  )
}
