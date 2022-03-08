export default function PostTitle({ children }) {
  return (
    <h3 className="text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none mb-8 text-center md:text-left">
      {children}
    </h3>
  )
}
