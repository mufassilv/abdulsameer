import { CheckCircle2, ExternalLink, Sparkles } from 'lucide-react'
import { platforms, summary, whyUs } from '../data/proposal'
import { Heading, Reveal, Section } from './ui'

export default function Summary() {
  return (
    <Section id="summary">
      <Heading eyebrow="Executive summary" title="What we understood, and what Release 1 delivers" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card p-7">
            <h3 className="text-lg font-bold">Our understanding of your need</h3>
            <p className="mt-3 text-ink-soft">{summary.understanding}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {summary.outcomes.map((o) => (
                <li key={o.label} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-semibold">{o.label}</p>
                    <p className="text-sm text-ink-soft">{o.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="grid h-full grid-cols-2 gap-3">
            {summary.highlights.map((h) => (
              <div key={h.label} className="card flex flex-col justify-center p-5">
                <p className="font-display text-4xl font-extrabold text-brand">{h.value}</p>
                <p className="mt-1 text-sm font-medium text-ink-soft">{h.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <p className="eyebrow"><Sparkles className="h-4 w-4" /> Why us</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {platforms.map((pl, i) => (
            <Reveal key={pl.name} delay={i * 0.05}>
              <a href={pl.url} target="_blank" rel="noreferrer" className="card group flex h-full gap-4 p-5 transition-shadow duration-200 hover:shadow-(--shadow-lift)">
                <span className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-line ${pl.iconBg}`}>
                  <img src={pl.icon} alt={`${pl.name} logo`} className="h-full w-full object-contain p-1" />
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 font-bold group-hover:text-brand">{pl.name} <ExternalLink className="h-3.5 w-3.5 text-muted" /></p>
                  <p className="truncate text-xs font-medium text-brand">{pl.url.replace('https://', '')}</p>
                  <p className="mt-1.5 text-sm text-ink-soft">{pl.text}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="card h-full p-6 transition-shadow duration-200 hover:shadow-(--shadow-lift)">
                <h3 className="font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
