import { useState } from 'react'
import { Building2, GraduationCap, Settings2, Lock, Server, XCircle, ChevronDown, ArrowRight, Layers } from 'lucide-react'
import { modules, outOfScope, platformFeatures, technicalDeliverables } from '../data/proposal'
import { Heading, Pill, Reveal, Section } from './ui'

const icons = { GraduationCap, Building2, Settings2 }

export default function Scope() {
  const [active, setActive] = useState(modules[0].key)
  const [expanded, setExpanded] = useState<string | null>(null)
  const mod = modules.find((m) => m.key === active)!
  const Icon = icons[mod.icon]
  const totalReqs = modules.reduce((n, m) => n + m.requirements.length, 0)
  const activeIdx = modules.findIndex((m) => m.key === active)
  const next = modules[(activeIdx + 1) % modules.length]

  return (
    <Section id="scope" className="bg-white">
      <Heading
        eyebrow="Scope & requirements"
        title="Release 1 scope, requirement by requirement"
        lead="Each numbered requirement below is a deliverable. These IDs will be used in the sign-off document, sprint plans and UAT checklist so there is no ambiguity about what is included."
      />

      {/* module switcher */}
      <div className="no-print rounded-2xl border border-brand/30 bg-brand-tint p-4 sm:p-5">
        <p className="flex items-center gap-2 font-semibold text-brand-deep">
          <Layers className="h-5 w-5" /> Release 1 has {modules.length} modules and {totalReqs} requirements. Select a module to see its requirements:
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3" role="tablist" aria-label="Modules">
          {modules.map((m, idx) => {
            const I = icons[m.icon]
            const on = m.key === active
            return (
              <button key={m.key} role="tab" aria-selected={on} type="button" onClick={() => setActive(m.key)}
                className={`cursor-pointer rounded-xl border p-4 text-left transition-all duration-200 ${on ? 'border-brand bg-brand text-white shadow-(--shadow-lift)' : 'border-line bg-white text-ink hover:border-brand/50 hover:shadow-(--shadow-card)'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${on ? 'text-teal-100' : 'text-brand'}`}>Module {idx + 1} of {modules.length}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${on ? 'bg-white/20 text-white' : 'bg-brand-soft text-brand-deep'}`}>{m.requirements.length} requirements</span>
                </div>
                <div className="mt-2 flex items-center gap-2 font-display text-base font-bold">
                  <I className="h-5 w-5 shrink-0" /> {m.name}
                </div>
                <p className={`mt-1 text-xs ${on ? 'text-teal-50/90' : 'text-ink-soft'}`}>{on ? 'Currently viewing' : 'Click to view'}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* screen view: active module; print view: all modules */}
      {modules.map((m) => {
        const I = icons[m.icon]
        const visible = m.key === active
        return (
          <div key={m.key} className={`${visible ? 'block' : 'hidden'} print:block print:mt-8`}>
            <div className="mt-6 flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand"><I className="h-6 w-6" /></span>
              <div>
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-ink-soft">{m.summary}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {m.requirements.map((r, i) => {
                const open = expanded === r.id
                return (
                  <Reveal key={r.id} delay={Math.min(i, 6) * 0.04}>
                    <button type="button" onClick={() => setExpanded(open ? null : r.id)} aria-expanded={open}
                      className="card group w-full cursor-pointer p-5 text-left transition-shadow duration-200 hover:shadow-(--shadow-lift)">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 whitespace-nowrap font-mono text-xs font-semibold text-brand">{r.id}</span>
                          <span className="font-semibold">{r.title}</span>
                        </div>
                        <ChevronDown className={`no-print h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                      </div>
                      <p className={`mt-2 text-sm text-ink-soft print:block ${open ? 'block' : 'line-clamp-2 print:line-clamp-none'}`}>{r.detail}</p>
                    </button>
                  </Reveal>
                )
              })}
            </div>
          </div>
        )
      })}
      <div className="no-print mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3">
        <p className="text-sm text-ink-soft">Showing <strong className="text-ink">{mod.name}</strong> <Icon className="inline h-3.5 w-3.5" /> (module {activeIdx + 1} of {modules.length}) · click a card to expand the full requirement.</p>
        <button type="button" onClick={() => { setActive(next.key); document.getElementById('scope')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-deep">
          {activeIdx === modules.length - 1 ? 'Back to' : 'Next module:'} {next.name} <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* cross-cutting */}
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow"><Lock className="h-4 w-4" /> Key platform features</p>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-paper">
            {platformFeatures.map((f) => (
              <li key={f.title} className="flex gap-4 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
                <div><p className="font-semibold">{f.title}</p><p className="text-sm text-ink-soft">{f.text}</p></div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow"><Server className="h-4 w-4" /> Technical deliverables</p>
          <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-paper">
            {technicalDeliverables.map((f) => (
              <li key={f.title} className="flex gap-4 p-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div><p className="font-semibold">{f.title}</p><p className="text-sm text-ink-soft">{f.text}</p></div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-surface p-5">
          <span className="inline-flex items-center gap-2 font-semibold text-ink-soft"><XCircle className="h-5 w-5 text-slate-400" /> Out of scope for Release 1 (as per your brief):</span>
          {outOfScope.map((o) => <Pill key={o} tone="muted">{o}</Pill>)}
        </div>
      </Reveal>
    </Section>
  )
}
