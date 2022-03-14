export default function PostTitle({ children }) {
  return (
    <h3 className="text-4xl md:text-7xl lg:text-6xl tracking-tighter leading-tight md:leading-none mb-5 text-center md:text-left">
      {children}
    </h3>
  )
}
