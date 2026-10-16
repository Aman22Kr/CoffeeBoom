import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="mb-3 text-5xl font-bold">Page not found</h1>
      <p className="mb-6 text-latte">That page doesn’t exist. Try the menu or head home.</p>
      <Link to="/" className="rounded-full bg-boom px-6 py-2 font-bold text-espresso">Back to home</Link>
    </section>
  )
}
