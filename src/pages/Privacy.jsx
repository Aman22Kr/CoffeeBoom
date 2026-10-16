import { SETTINGS } from '../settings.js'
const SECTIONS = [
  ['Information we collect', 'This demo collects nothing on a server. If you type into the contact form, a draft is kept in your own browser so it survives a refresh.'],
  ['How we use your information', 'Saved items, recent searches and form drafts are used only to remember your choices on this device.'],
  ['Cookies and local storage', 'We use your browser’s localStorage, not cookies. It is specific to this browser and device, does not sync, and is not an account.'],
  ['Data security', 'Do not enter passwords or payment details. The demo never asks for them and never stores them.'],
  ['Your rights', 'Clear the site data in your browser settings at any time to remove everything stored here.'],
  ['Changes to this policy', 'This is sample text for a demonstration site and may change.'],
]
export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="mb-6 text-4xl font-bold">Privacy policy</h1>
      <p className="mb-8 text-latte">At {SETTINGS.brand}, we keep this demo simple and private. This is placeholder policy text, not legal advice.</p>
      {SECTIONS.map(([h, p]) => (
        <div key={h} className="mb-6"><h2 className="mb-1 text-xl font-bold">{h}</h2><p className="text-latte">{p}</p></div>
      ))}
    </section>
  )
}
