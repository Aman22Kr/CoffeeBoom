import SafeImg from './SafeImg.jsx'
export default function PageHero({ title, image }) {
  return (
    <section className="relative h-56 overflow-hidden sm:h-72">
      {image && <SafeImg src={image} className="absolute inset-0 h-full w-full object-cover opacity-50" />}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso to-transparent" />
      <div className="relative mx-auto flex h-full max-w-page items-end px-4 pb-8 sm:px-6">
        <h1 className="text-4xl font-bold capitalize sm:text-6xl">{title}</h1>
      </div>
    </section>
  )
}
