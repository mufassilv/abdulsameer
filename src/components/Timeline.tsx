import { Flag, Rocket } from 'lucide-react'
import { meta, phases, workingModel } from '../data/proposal'
import { Heading, Pill, Reveal, Section } from './ui'

const bar = { brand: 'bg-brand', navy: 'bg-navy', accent: 'bg-accent', muted: 'bg-slate-400' }
const TOTAL_WEEKS = meta.weeksToGoLive // kickoff → go-live

export default function Timeline() {
  let cursor = 0
  const rows = phases.map((p) => {
    const start = cursor
    const isHypercare = p.name.startsWith('Go-live')
    cursor += isHypercare ? 0 : p.weeks
    return { ...p, startWeek: start, barWeeks: isHypercare ? 0 : p.weeks, isHypercare }
  })

  return (
    <Section id="timeline" className="bg-white">
      <Heading eyebrow="Timeline" title={`Kickoff ${meta.kickoff} → UAT ${meta.uatRelease} → go-live ${meta.goLive}`} lead="Eleven weeks, six milestones, a working demo every sprint. The complete Release 1 build goes to the UAT environment on 15 January; after two weeks of your testing and our hardening, production goes live on 1 February." />

      <Reveal>
        <div className="card overflow-hidden">
          {/* week ruler */}
          <div className="hidden grid-cols-[260px_1fr] border-b border-line bg-surface text-xs text-muted md:grid">
            <div className="px-5 py-2 font-semibold uppercase tracking-wider">Phase</div>
            <div className="relative grid py-2" style={{ gridTemplateColumns: `repeat(${TOTAL_WEEKS}, 1fr)` }}>
              {Array.from({ length: TOTAL_WEEKS }, (_, i) => <div key={i} className="border-l border-line text-center">W{i + 1}</div>)}
            </div>
          </div>
          <ul className="divide-y divide-line">
            {rows.map((p) => (
              <li key={p.name} className="grid gap-3 px-5 py-4 md:grid-cols-[260px_1fr] md:gap-0 md:px-0 md:py-0">
                <div className="md:px-5 md:py-4">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-xs text-muted">{p.start} – {p.end} · {p.isHypercare ? '90 days' : `${p.weeks} wk${p.weeks > 1 ? 's' : ''}`}</p>
                </div>
                <div className="relative md:py-4">
                  <div className="relative hidden h-8 md:block">
                    {!p.isHypercare && <div
                      className={`absolute inset-y-0 rounded-md ${bar[p.color]} opacity-90`}
                      style={{ left: `${(p.startWeek / TOTAL_WEEKS) * 100}%`, width: `calc(${(p.barWeeks / TOTAL_WEEKS) * 100}% - 4px)` }}
                      aria-hidden
                    />}
                    {p.milestone && (
                      <span className="absolute top-1/2 flex -translate-y-1/2 items-center gap-1 whitespace-nowrap text-xs font-semibold text-ink-soft"
                        style={p.isHypercare ? { right: 0 } : { left: `calc(${((p.startWeek + p.barWeeks) / TOTAL_WEEKS) * 100}% + 6px)` }}>
                        {p.isHypercare ? <Rocket className="h-5 w-5 text-accent" /> : <Flag className="h-3.5 w-3.5 text-brand" />}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-1.5 md:px-0 md:pt-2">
                    {p.deliverables.map((d) => <li key={d}><Pill tone="muted">{d}</Pill></li>)}
                  </ul>
                  {p.milestone && <p className="mt-2 text-xs font-semibold text-brand md:pb-4">{p.milestone}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {workingModel.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.05}>
            <div className="card h-full p-5"><p className="font-semibold">{w.title}</p><p className="mt-1.5 text-sm text-ink-soft">{w.text}</p></div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
