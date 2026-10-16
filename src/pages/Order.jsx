import { Link } from 'react-router-dom'
export default function Order() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
      <h1 className="mb-4 text-4xl font-bold">Order now</h1>
      <p className="mb-6 text-latte">The original site sends this button to a separate ordering service. This demo has no ordering backend, so no real orders can be placed.</p>
      <Link to="/menu" className="rounded-full bg-boom px-6 py-2 font-bold text-espresso">Browse the menu</Link>
    </section>
  )
}
