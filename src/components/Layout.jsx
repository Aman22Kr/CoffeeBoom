import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { Menu as MenuIcon, X, Instagram, Youtube } from 'lucide-react'
import AdSlot from './AdSlot.jsx'
import { SETTINGS } from '../settings.js'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about-us', label: 'About us' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact us' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  const link = ({ isActive }) =>
    `px-1 py-2 text-sm tracking-wide transition-colors hover:text-boom ${isActive ? 'text-boom' : 'text-crema'}`

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-boom focus:px-3 focus:py-2 focus:text-espresso">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-espresso/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
          <Link to="/" className="font-display text-2xl font-bold text-crema">{SETTINGS.brand}</Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {LINKS.map((l) => <NavLink key={l.to} {...l} className={link}>{l.label}</NavLink>)}
            <Link to="/order" className="rounded-full bg-boom px-5 py-2 text-sm font-bold text-espresso transition hover:bg-crema">Order now</Link>
          </nav>
          <button className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 md:hidden" aria-label="Mobile">
            {LINKS.map((l) => <NavLink key={l.to} {...l} className={link}>{l.label}</NavLink>)}
            <Link to="/order" className="mt-2 rounded-full bg-boom px-5 py-2 text-center text-sm font-bold text-espresso">Order now</Link>
          </nav>
        )}
      </header>

      <main id="content" className="flex-1"><Outlet /></main>

      <AdSlot />
      <footer className="border-t border-white/10 bg-roast">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-4 py-8 text-sm text-latte sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <p className="font-display text-lg text-crema">{SETTINGS.brand}</p>
            <p>A paw, pet and people friendly café. Demo site — sample content.</p>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-boom">Privacy policy</Link>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:text-boom"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/" aria-label="YouTube" className="hover:text-boom"><Youtube size={18} /></a>
          </div>
        </div>
        <p className="border-t border-white/5 py-3 text-center text-xs text-latte/60">© {new Date().getFullYear()} {SETTINGS.brand}. Recreated for demonstration.</p>
      </footer>
    </div>
  )
}
