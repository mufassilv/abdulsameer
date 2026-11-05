import { motion, useReducedMotion } from 'motion/react'
import { CalendarCheck, Clock3, IndianRupee, ShieldCheck } from 'lucide-react'
import { meta, modules, priceLines } from '../data/proposal'
import { lakh } from './ui'

export default function Hero() {
  const reduce = useReducedMotion()
  const total = priceLines.reduce((s, l) => s + l.amount, 0)
  const fade = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <div id="top" className="relative overflow-hidden bg-navy text-white">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
      <div className="absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" aria-hidden />

      <div className="container-x relative pt-24 pb-20 sm:pt-28 sm:pb-28">
        <motion.div {...fade(0)} className="flex flex-wrap items-center justify-between gap-4">
          <img src={meta.preparedBy.logoFull} alt={meta.preparedBy.company} className="h-14 w-auto sm:h-16" />
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-2 pr-5 pl-2 backdrop-blur-sm">
            <img src={meta.preparedBy.awsBadge} alt="AWS Partner" className="h-14 w-14 rounded-xl bg-white p-1" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">We are an</p>
              <p className="font-display text-base font-bold leading-tight text-white">AWS Select Tier Partner</p>
              <p className="text-xs text-slate-300">Architecture reviews & credits with the AWS team</p>
            </div>
          </div>
        </motion.div>
        <motion.p {...fade(0.04)} className="eyebrow mt-8 !text-teal-300">
          <span className="h-px w-6 bg-teal-300" /> Proposal · {meta.date}
        </motion.p>
        <motion.h1 {...fade(0.08)} className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
          {meta.title}
        </motion.h1>
        <motion.p {...fade(0.16)} className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
          {meta.subtitle}. One secure platform for student learning, franchise operations and head-office oversight, on UAT by <strong className="font-semibold text-white">{meta.uatRelease}</strong> and live by <strong className="font-semibold text-white">{meta.goLive}</strong>.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: CalendarCheck, label: 'Go-live target', value: meta.goLive },
            { icon: Clock3, label: 'Delivery window', value: `${meta.weeksToGoLive} weeks from kickoff` },
            { icon: IndianRupee, label: 'Release 1 investment', value: `${lakh(total)} + GST` },
            { icon: ShieldCheck, label: 'Included support', value: '90 days hypercare' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                <Icon className="h-4 w-4 text-teal-300" /> {label}
              </div>
              <p className="mt-2 font-display text-xl font-bold">{value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div {...fade(0.32)} className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Prepared for</p>
            <p className="mt-1 font-display text-lg font-bold">{meta.client.name}</p>
            <p className="text-sm text-slate-300">{meta.client.note}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Prepared by</p>
            <p className="mt-1 font-display text-lg font-bold">{meta.preparedBy.company}</p>
            <p className="text-sm text-slate-300">{meta.preparedBy.tagline}</p>
            <p className="mt-1 text-sm text-slate-300">{meta.preparedBy.website} · <span className="font-mono text-xs">{meta.preparedBy.gstin}</span></p>
          </div>
        </motion.div>

        <motion.div {...fade(0.4)} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
          <span>Reference <span className="font-mono text-slate-200">{meta.reference}</span></span>
          <span>Valid until <span className="text-slate-200">{meta.validUntil}</span></span>
          <span>{modules.length} modules · 6 roles · AWS Mumbai</span>
        </motion.div>
      </div>
    </div>
  )
}
