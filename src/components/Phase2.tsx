import { Lightbulb, Map, Sparkles } from 'lucide-react'
import { phase2 } from '../data/proposal'
import { Pill, Reveal, Section } from './ui'

const effortLabel = { S: 'Small · 2–3 wks', M: 'Medium · 4–6 wks', L: 'Large · 8+ wks' }

export default function Phase2() {
  const groups = ['Your roadmap', 'AI & content studio', 'Our suggestions'] as const
  const icon = { 'Your roadmap': <Map className="h-4 w-4 text-teal-300" />, 'AI & content studio': <Sparkles className="h-4 w-4 text-amber-300" />, 'Our suggestions': <Lightbulb className="h-4 w-4 text-amber-300" /> }
  return (
    <Section id="phase2" className="bg-navy text-white">
      <div className="max-w-3xl">
        <p className="eyebrow !text-teal-300"><span className="h-px w-6 bg-teal-300" /> Phase 2 and beyond</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Where the platform can go next</h2>
        <p className="mt-4 text-lg text-slate-300">
          Everything below is <strong className="text-white">not included in the Release 1 cost</strong>. It is shared so Release 1 is designed with these in mind, and so we can plan Phase 2 together once the platform is live. Each item would be scoped and priced separately.
        </p>
      </div>

      {groups.map((g) => (
        <div key={g} className="mt-12">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
            {icon[g]} {g}
            {g === 'AI & content studio' && <span className="ml-1 normal-case tracking-normal text-slate-500">· capabilities we already run in production, highlighted for you</span>}
            {g === 'Our suggestions' && <span className="ml-1 normal-case tracking-normal text-slate-500">· optional ideas from our side</span>}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {phase2.filter((p) => p.group === g).map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i, 5) * 0.04}>
                <div className={`h-full rounded-2xl border p-5 transition-colors duration-200 ${g === 'AI & content studio' ? 'border-amber-300/30 bg-gradient-to-br from-amber-300/10 to-white/5 hover:border-amber-300/60' : 'border-white/10 bg-white/5 hover:border-teal-300/40 hover:bg-white/10'}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{p.title}</h3>
                    <Pill tone={p.effort === 'L' ? 'accent' : 'brand'}>{effortLabel[p.effort]}</Pill>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{p.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
      <p className="mt-8 text-xs text-slate-500">Effort tags are indicative only and assume Release 1 is live. Not a commitment and not included in the Release 1 price.</p>
    </Section>
  )
}
