import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Heart, X, Clock } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { MENU, ALL_ITEMS } from '../data/menu.js'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { img } from '../utils/img.js'

export default function Menu() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const cat = params.get('cat') || 'all'
  const sort = params.get('sort') || 'menu'
  const onlyFavs = params.get('fav') === '1'
  const [favs, setFavs] = useLocalStorage('favourites', [])
  const [history, setHistory] = useLocalStorage('search-history', [])
  const [showHistory, setShowHistory] = useState(false)

  const update = (patch) => {
    const next = new URLSearchParams(params)
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)))
    setParams(next, { replace: true })
  }
  const remember = (term) => {
    const t = term.trim()
    if (t.length < 2) return
    setHistory((h) => [t, ...h.filter((x) => x !== t)].slice(0, 6))
  }
  const toggleFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    let list = ALL_ITEMS.filter((i) =>
      (cat === 'all' || i.category === cat) &&
      (!onlyFavs || favs.includes(i.id)) &&
      (!term || i.name.toLowerCase().includes(term) || i.desc.toLowerCase().includes(term)))
    if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [q, cat, sort, onlyFavs, favs])

  const grouped = MENU.map((s) => ({ ...s, items: results.filter((i) => i.category === s.id) })).filter((s) => s.items.length)

  return (
    <>
      <PageHero title="The menu" image={img('2023/09/IMG_0457-2048x2048.jpg')} />
      <section className="mx-auto max-w-page px-4 py-10 sm:px-6">
        <div className="sticky top-16 z-30 -mx-4 space-y-3 border-b border-white/10 bg-espresso/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-3 text-latte" />
            <input
              type="search" value={q} placeholder="Search the menu"
              aria-label="Search the menu"
              onChange={(e) => update({ q: e.target.value })}
              onFocus={() => setShowHistory(true)}
              onBlur={() => { remember(q); setTimeout(() => setShowHistory(false), 150) }}
              className="w-full rounded-full border border-white/15 bg-roast py-2 pl-9 pr-4 text-crema placeholder:text-latte/60"
            />
            {showHistory && !q && history.length > 0 && (
              <div className="absolute z-10 mt-1 w-full rounded border border-white/10 bg-roast p-2 text-sm">
                <div className="mb-1 flex items-center justify-between text-latte"><span className="flex items-center gap-1"><Clock size={12} /> Recent searches</span>
                  <button onMouseDown={() => setHistory([])} className="text-xs underline">Clear</button></div>
                {history.map((h) => <button key={h} onMouseDown={() => update({ q: h })} className="block w-full rounded px-2 py-1 text-left hover:bg-white/5">{h}</button>)}
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select aria-label="Category" value={cat} onChange={(e) => update({ cat: e.target.value === 'all' ? '' : e.target.value })} className="rounded border border-white/15 bg-roast px-3 py-1.5 text-sm">
              <option value="all">All categories</option>
              {MENU.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
            <select aria-label="Sort" value={sort} onChange={(e) => update({ sort: e.target.value === 'menu' ? '' : e.target.value })} className="rounded border border-white/15 bg-roast px-3 py-1.5 text-sm">
              <option value="menu">Menu order</option>
              <option value="az">A to Z</option>
            </select>
            <button onClick={() => update({ fav: onlyFavs ? '' : '1' })} aria-pressed={onlyFavs}
              className={`flex items-center gap-1 rounded border px-3 py-1.5 text-sm ${onlyFavs ? 'border-boom text-boom' : 'border-white/15'}`}>
              <Heart size={14} /> Saved ({favs.length})
            </button>
            {(q || cat !== 'all' || onlyFavs || sort !== 'menu') && (
              <button onClick={() => setParams({}, { replace: true })} className="flex items-center gap-1 text-sm text-latte underline"><X size={14} /> Reset</button>
            )}
          </div>
        </div>

        {grouped.length === 0 ? (
          <p className="py-16 text-center text-latte">
            {onlyFavs && !favs.length ? 'No saved items yet. Tap the heart on any item to save it.' : 'No menu items match. Try a different word or reset the filters.'}
          </p>
        ) : (
          grouped.map((s) => (
            <div key={s.id} className="mt-10">
              <h2 className="mb-4 border-b border-white/10 pb-2 text-2xl font-bold uppercase tracking-wide">{s.title}</h2>
              <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                {s.items.map((i) => (
                  <li key={i.id} className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-body text-base font-bold uppercase">{i.name}</h3>
                      {i.desc && <p className="text-sm text-latte">{i.desc}</p>}
                    </div>
                    <button onClick={() => toggleFav(i.id)} aria-label={favs.includes(i.id) ? `Remove ${i.name} from saved` : `Save ${i.name}`} aria-pressed={favs.includes(i.id)}
                      className={`mt-1 shrink-0 transition hover:text-boom ${favs.includes(i.id) ? 'text-boom' : 'text-latte/60'}`}>
                      <Heart size={18} fill={favs.includes(i.id) ? 'currentColor' : 'none'} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
        <p className="mt-12 text-xs text-latte/60">Saved items and recent searches are stored in this browser only (localStorage). They don’t sync across devices.</p>
      </section>
    </>
  )
}
