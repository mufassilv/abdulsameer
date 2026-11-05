import { useEffect, useState } from 'react'
import { Printer, Menu, X } from 'lucide-react'
import { meta } from '../data/proposal'

const links = [
  ['summary', 'Summary'],
  ['scope', 'Scope'],
  ['solution', 'Solution'],
  ['timeline', 'Timeline'],
  ['quotation', 'Quotation'],
  ['phase2', 'Phase 2'],
  ['terms', 'Terms'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'bg-white/85 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className={`flex items-center gap-2 font-display text-sm font-bold ${solid ? 'text-ink' : 'text-white'}`}>
          <img src={meta.preparedBy.logoIcon} alt="" className="h-9 w-9 object-contain" />
          <span className="hidden whitespace-nowrap sm:inline">{meta.preparedBy.company}</span>
          <span className="hidden font-mono text-[11px] font-medium opacity-60 xl:inline">{meta.reference}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${solid ? 'text-ink-soft hover:bg-slate-100 hover:text-ink' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
              {label}
            </a>
          ))}
          <button type="button" onClick={() => window.print()} className="ml-2 inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-deep">
            <Printer className="h-4 w-4" /> Save PDF
          </button>
        </nav>

        <button type="button" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className={`grid h-11 w-11 cursor-pointer place-items-center rounded-lg md:hidden ${solid ? 'text-ink' : 'text-white'}`}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-4 py-3 md:hidden">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-slate-100">{label}</a>
          ))}
          <button type="button" onClick={() => window.print()} className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand px-3 py-3 font-semibold text-white"><Printer className="h-4 w-4" /> Save as PDF</button>
        </div>
      )}
    </header>
  )
}
