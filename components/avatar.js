export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-16 h-16 rounded-full mr-6" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
