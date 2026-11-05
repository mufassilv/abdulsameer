import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

export function Section({ id, children, className = '' }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  )
}

export function Heading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">
        <span className="h-px w-6 bg-brand" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-ink-soft">{lead}</p>}
    </div>
  )
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`min-w-0 ${className}`}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Pill({ children, tone = 'brand' }: { children: ReactNode; tone?: 'brand' | 'accent' | 'navy' | 'muted' }) {
  const tones = {
    brand: 'bg-brand-soft text-brand-deep',
    accent: 'bg-accent-soft text-amber-800',
    navy: 'bg-navy text-white',
    muted: 'bg-slate-100 text-slate-600',
  }
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>
}

export const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`
export const lakh = (n: number) => `₹${(n / 100000).toFixed(2)} L`
