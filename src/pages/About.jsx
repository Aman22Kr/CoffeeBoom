import { Instagram, Youtube, Music2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SafeImg from '../components/SafeImg.jsx'
import { img } from '../utils/img.js'
import { SETTINGS } from '../settings.js'

export default function About() {
  return (
    <>
      <PageHero title="About us" image={img('2023/03/IMG_5752-2048x3072.jpg')} />
      <section className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_320px]">
        <div className="max-w-prose space-y-4 leading-relaxed text-latte">
          <p>{SETTINGS.brand} is a paw, pet and people friendly café and pet spa, built for families whose pets are family too.</p>
          <p>Find us online:</p>
          <ul className="flex flex-wrap gap-3">
            {[[Instagram, 'Instagram'], [Youtube, 'YouTube'], [Music2, 'Spotify']].map(([Icon, label]) => (
              <li key={label}>
                <a href="#/about-us" className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-boom hover:text-boom">
                  <Icon size={16} /> {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-latte/70">Social links are placeholders in this demo.</p>
        </div>
        <SafeImg src={img('2023/03/IMG_5752-200x300.jpg')} className="w-full rounded object-cover" />
      </section>
    </>
  )
}
