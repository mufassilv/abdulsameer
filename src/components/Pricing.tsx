import { AlertTriangle, Cloud, LifeBuoy, ReceiptText } from 'lucide-react'
import { awsRunningCost, meta, paymentSchedule, priceLines, scopeNote, support } from '../data/proposal'
import { Heading, Reveal, Section, inr, lakh } from './ui'

export default function Pricing() {
  const total = priceLines.reduce((s, l) => s + l.amount, 0)
  const gst = Math.round(total * meta.gstPercent / 100)
  const amcYear = Math.round(total * support.amcPercentPerYear / 100)

  return (
    <Section id="quotation" className="print-break">
      <Heading eyebrow="Quotation" title="Release 1 investment" lead="Fixed price for the scope defined above. Module-wise so you can see where the effort goes." />

      <Reveal>
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-left text-xs uppercase tracking-wider text-muted">
                <th className="px-5 py-3 font-semibold">#</th>
                <th className="px-5 py-3 font-semibold">Work package</th>
                <th className="hidden px-5 py-3 font-semibold md:table-cell">Includes</th>
                <th className="px-5 py-3 text-right font-semibold">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {priceLines.map((l, i) => (
                <tr key={l.item} className="transition-colors duration-150 hover:bg-brand-tint/60">
                  <td className="px-5 py-3.5 font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</td>
                  <td className="px-5 py-3.5 font-semibold">{l.item}<p className="mt-0.5 text-xs font-normal text-muted md:hidden">{l.includes}</p></td>
                  <td className="hidden px-5 py-3.5 text-ink-soft md:table-cell">{l.includes}</td>
                  <td className="px-5 py-3.5 text-right font-mono font-semibold whitespace-nowrap">{l.amount.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-navy bg-surface">
                <td colSpan={3} className="px-5 py-3 text-right font-semibold">Release 1 total (excl. GST)</td>
                <td className="px-5 py-3 text-right font-mono text-lg font-bold whitespace-nowrap">{inr(total)}</td>
              </tr>
              <tr className="text-ink-soft">
                <td colSpan={3} className="px-5 py-2 text-right">GST @ {meta.gstPercent}%</td>
                <td className="px-5 py-2 text-right font-mono whitespace-nowrap">{inr(gst)}</td>
              </tr>
              <tr className="bg-navy text-white">
                <td colSpan={3} className="px-5 py-3 text-right font-semibold">Total payable</td>
                <td className="px-5 py-3 text-right font-mono text-lg font-bold whitespace-nowrap">{inr(total + gst)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="flex gap-4 rounded-2xl border border-accent/40 bg-accent-soft p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
          <div>
            <p className="font-semibold text-amber-900">{scopeNote.title}</p>
            <ul className="mt-2 space-y-1.5 text-sm text-amber-950/90">
              {scopeNote.points.map((pt) => <li key={pt} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{pt}</li>)}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Reveal>
          <div className="card h-full p-6">
            <p className="eyebrow"><ReceiptText className="h-4 w-4" /> Payment schedule</p>
            <ul className="mt-4 space-y-3">
              {paymentSchedule.map((p) => (
                <li key={p.stage} className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-ink-soft">{p.stage}</span>
                  <span className="shrink-0 font-mono font-semibold">{p.percent}% · {lakh(total * p.percent / 100)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Milestone invoices are raised on demo / sign-off; GST extra.</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card h-full border-brand/30 bg-brand-tint p-6">
            <p className="eyebrow"><LifeBuoy className="h-4 w-4" /> Support & AMC</p>
            <p className="mt-4 font-display text-3xl font-extrabold text-brand-deep">{support.includedMonths} months <span className="text-base font-semibold text-ink-soft">included after go-live</span></p>
            <p className="mt-3 text-sm text-ink-soft">Optional annual maintenance thereafter at {support.amcPercentPerYear}% of project value:</p>
            <p className="font-display text-xl font-bold">{lakh(amcYear)} / year <span className="text-sm font-medium text-muted">≈ {inr(Math.round(amcYear / 12))} / month</span></p>
            <ul className="mt-3 space-y-1 text-sm text-ink-soft">
              {support.amcIncludes.map((s) => <li key={s} className="flex gap-2"><span className="text-brand">✓</span>{s}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card h-full p-6">
            <p className="eyebrow"><Cloud className="h-4 w-4" /> AWS running cost (indicative)</p>
            <ul className="mt-4 space-y-3">
              {awsRunningCost.map((c) => (
                <li key={c.item} className="text-sm"><p className="text-ink-soft">{c.item}</p><p className="font-mono font-semibold">{c.monthly}</p></li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Roughly ₹13k–25k per month at launch, billed by AWS directly to your account and not part of this quotation. Grows with video storage and viewing hours. We will apply for AWS partner credits to offset the first months.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
