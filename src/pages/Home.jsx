import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SafeImg from '../components/SafeImg.jsx'
import { img } from '../utils/img.js'
import { SETTINGS } from '../settings.js'

const STRIP = ['2022/12/Cold-Affogato.png', '2022/12/Tea-Apple-_-Cinnamon.png', '2023/11/IMG_9072-scaled.jpg', '2023/11/IMG_6976-scaled.jpg']
const MOSAIC = ['2023/09/IMG_0503.jpg', '2023/09/IMG_0417-scaled.jpg', '2023/09/IMG_0019-scaled.jpg', '2023/09/IMG_1293.jpg']

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <SafeImg src={img('2025/06/IMG_2754-Enhanced-NR-2048x1365.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-page px-4 pb-14 sm:px-6">
          <p className="text-latte">Welcome to</p>
          <h1 className="text-5xl font-bold sm:text-8xl">{SETTINGS.brand} Cafe</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-page gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="text-boom">Discover</p>
          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">Who we are</h2>
          <p className="max-w-prose leading-relaxed text-latte">
            In a cosy nook of a mill compound, you’ll find {SETTINGS.brand}, a space that is truly for family. Born out of our founders’ love for animals, we built this community around quality family time, and that most definitely includes our precious pets. We take great pride in being a paw, pet and people friendly café and pet spa.
          </p>
          <Link to="/contact" className="mt-6 inline-block rounded-full border border-boom px-6 py-2 text-boom transition hover:bg-boom hover:text-espresso">Contact us</Link>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
          {STRIP.map((p) => <SafeImg key={p} src={img(p)} className="aspect-square w-full rounded object-cover" />)}
        </Reveal>
      </section>

      <section className="bg-roast">
        <div className="mx-auto grid max-w-page gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center">
          <Reveal className="grid grid-cols-2 gap-3 md:order-2">
            {MOSAIC.map((p) => <SafeImg key={p} src={img(p)} className="aspect-[4/5] w-full rounded object-cover" />)}
          </Reveal>
          <Reveal>
            <p className="text-boom">Explore</p>
            <h2 className="mb-5 text-4xl font-bold sm:text-5xl">Our menu</h2>
            <p className="max-w-prose leading-relaxed text-latte">
              Our Chief Pet Officer works to ensure that every furry guest feels right at home, with a specially curated pet menu, a leash-free zone, and non-slip flooring for impromptu zoomies. Our pet spa is equipped with modern machinery and trained groomers, so your pets’ pampering needs are met.
            </p>
            <Link to="/menu" className="mt-6 inline-block rounded-full bg-boom px-6 py-2 font-bold text-espresso transition hover:bg-crema">View our full menu</Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <h2 className="mb-4 text-3xl font-bold">Find us</h2>
        <div className="flex h-64 items-center justify-center rounded border border-white/10 bg-roast text-center text-latte">
          <p className="px-4">Map placeholder. Add your own embed URL here for a real location.</p>
        </div>
      </section>
    </>
  )
}
