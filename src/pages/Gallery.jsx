import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SafeImg from '../components/SafeImg.jsx'
import { GALLERY } from '../data/gallery.js'
import { img } from '../utils/img.js'

export default function Gallery() {
  const [idx, setIdx] = useState(null)
  const close = () => setIdx(null)
  const step = useCallback((d) => setIdx((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)), [])

  useEffect(() => {
    if (idx === null) return
    const onKey = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [idx, step])

  return (
    <>
      <PageHero title="Gallery" image={img('2023/09/IMG_0053-2048x2048.jpg')} />
      <section className="mx-auto max-w-page px-4 py-10 sm:px-6">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {GALLERY.map((g, i) => (
            <li key={g.id}>
              <button onClick={() => setIdx(i)} className="block w-full overflow-hidden rounded" aria-label={`Open photo ${i + 1}`}>
                <SafeImg src={g.thumb} className="aspect-square w-full object-cover transition duration-300 hover:scale-105" />
              </button>
            </li>
          ))}
        </ul>
      </section>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button aria-label="Close" onClick={close} className="absolute right-4 top-4"><X /></button>
          <button aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }} className="absolute left-3"><ChevronLeft size={32} /></button>
          <SafeImg src={GALLERY[idx].full} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded object-contain" loading="eager" />
          <button aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }} className="absolute right-3"><ChevronRight size={32} /></button>
        </div>
      )}
    </>
  )
}
