import { useState } from 'react'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { img } from '../utils/img.js'

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [draft, setDraft] = useLocalStorage('contact-draft', EMPTY)
  const [sent, setSent] = useLocalStorage('contact-last', null)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const f = { ...EMPTY, ...draft }

  const set = (k) => (e) => { setDone(false); setDraft({ ...f, [k]: e.target.value }) }
  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!f.name.trim()) err.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Enter a valid email address.'
    setErrors(err)
    if (Object.keys(err).length) return
    setSent({ name: f.name, at: new Date().toISOString() })
    setDraft(EMPTY)
    setDone(true)
  }

  const info = [
    [Phone, 'Phone number', '+00 00000 00000 (placeholder)'],
    [Mail, 'Email', 'hello@coffeboom.example'],
    [Clock, 'Cafe timings', '7:00 AM to 12:00 AM, Monday to Sunday'],
    [MapPin, 'Find us', 'Sample address, Your City 000000'],
  ]
  return (
    <>
      <PageHero title="Get in touch" image={img('2022/12/zanes-cafe.jpg')} />
      <section className="mx-auto grid max-w-page gap-12 px-4 py-12 sm:px-6 md:grid-cols-2">
        <dl className="space-y-6">
          {info.map(([Icon, label, val]) => (
            <div key={label} className="flex gap-4">
              <Icon className="mt-1 shrink-0 text-boom" size={20} />
              <div><dt className="text-sm uppercase tracking-wide text-latte">{label}</dt><dd className="text-lg">{val}</dd></div>
            </div>
          ))}
        </dl>
        <form onSubmit={submit} noValidate className="space-y-4">
          <h2 className="text-2xl font-bold">Get in touch with us</h2>
          {[['name', 'Name', 'text'], ['email', 'Email', 'email']].map(([k, label, type]) => (
            <label key={k} className="block">
              <span className="text-sm text-latte">{label}</span>
              <input type={type} value={f[k]} onChange={set(k)} aria-invalid={!!errors[k]} className="mt-1 w-full rounded border border-white/15 bg-roast px-3 py-2" />
              {errors[k] && <span role="alert" className="text-sm text-boom">{errors[k]}</span>}
            </label>
          ))}
          <label className="block">
            <span className="text-sm text-latte">Your message (optional)</span>
            <textarea rows={4} value={f.message} onChange={set('message')} className="mt-1 w-full rounded border border-white/15 bg-roast px-3 py-2" />
          </label>
          <button className="rounded-full bg-boom px-6 py-2 font-bold text-espresso transition hover:bg-crema">Save message</button>
          {done && <p role="status" className="text-sm text-latte">Saved in this browser as a demo. Nothing was sent to a server.</p>}
          {!done && sent && <p className="text-xs text-latte/60">Last demo message saved {new Date(sent.at).toLocaleString()}.</p>}
        </form>
      </section>
    </>
  )
}
