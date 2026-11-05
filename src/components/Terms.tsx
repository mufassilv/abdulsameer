import { ClipboardList, FileCheck2, Mail, MapPin, Phone, Globe } from 'lucide-react'
import { assumptions, meta, scopeNote, terms } from '../data/proposal'
import { Heading, Reveal, Section } from './ui'

export default function Terms() {
  return (
    <>
      <Section id="terms">
        <Heading eyebrow="Assumptions & terms" title="What this proposal relies on" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-6">
              <p className="eyebrow"><ClipboardList className="h-4 w-4" /> Assumptions & client responsibilities</p>
              <ol className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {assumptions.map((a, i) => (
                  <li key={i} className="flex gap-3"><span className="font-mono text-xs font-semibold text-brand">{String(i + 1).padStart(2, '0')}</span><span>{a}</span></li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="card h-full p-6">
              <p className="eyebrow"><FileCheck2 className="h-4 w-4" /> Commercial terms</p>
              <div className="mt-4 rounded-xl border border-accent/40 bg-accent-soft p-4 text-sm">
                <p className="font-semibold text-amber-900">{scopeNote.title}</p>
                <ul className="mt-2 space-y-1.5 text-amber-950/90">
                  {scopeNote.points.map((pt) => <li key={pt} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{pt}</li>)}
                </ul>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {terms.map((t, i) => <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span>{t}</span></li>)}
              </ul>
              <div className="mt-6 rounded-xl bg-surface p-4 text-sm">
                <p className="font-semibold">Next steps</p>
                <ol className="mt-2 list-decimal space-y-1 pl-5 text-ink-soft">
                  <li>Walk-through call to answer questions and tune scope.</li>
                  <li>Sign acceptance and release the kickoff payment.</li>
                  <li>Discovery workshops start the following Monday.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="bg-navy text-white">
        <div className="container-x py-14">
          {/* CTA row */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-gradient-to-r from-brand/30 to-transparent p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-2xl font-bold">Ready when you are.</p>
              <p className="mt-1 max-w-lg text-slate-300">Accept by {meta.validUntil} and we start Discovery on {meta.kickoff}, with the complete Release 1 on UAT by {meta.uatRelease} and live on {meta.goLive}.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={`mailto:${meta.preparedBy.email}?subject=${encodeURIComponent(`Proposal ${meta.reference} – ${meta.title}`)}`} className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-brand-deep"><Mail className="h-4 w-4" /> Email us</a>
              <a href={`tel:${meta.preparedBy.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10"><Phone className="h-4 w-4" /> Call</a>
            </div>
          </div>

          {/* columns */}
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <img src={meta.preparedBy.logoFull} alt={meta.preparedBy.company} className="h-12 w-auto" />
              <p className="mt-4 max-w-xs text-sm text-slate-300">{meta.preparedBy.tagline.split(' · ')[0]}. We design, build and operate production platforms for education, healthcare and logistics businesses.</p>
              <div className="mt-5 flex items-center gap-3">
                <img src={meta.preparedBy.awsBadge} alt="AWS Partner" className="h-12 w-12 rounded-lg bg-white p-1" />
                <div className="text-xs leading-tight">
                  <p className="font-semibold text-white">AWS Select Tier Partner</p>
                  <p className="text-slate-400">Built and hosted on AWS</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href={`mailto:${meta.preparedBy.email}`} className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"><Mail className="h-4 w-4 text-teal-300" />{meta.preparedBy.email}</a></li>
                <li><a href={`tel:${meta.preparedBy.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"><Phone className="h-4 w-4 text-teal-300" />{meta.preparedBy.phone}</a></li>
                <li><a href={`https://${meta.preparedBy.website.replace(/^www\./, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"><Globe className="h-4 w-4 text-teal-300" />{meta.preparedBy.website}</a></li>
                <li className="flex items-center gap-3 text-slate-300"><MapPin className="h-4 w-4 text-teal-300" />{meta.preparedBy.location}</li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">This proposal</p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2.5 text-sm">
                <dt className="text-slate-400">Reference</dt><dd className="font-mono text-slate-200">{meta.reference}</dd>
                <dt className="text-slate-400">Issued</dt><dd className="text-slate-200">{meta.date}</dd>
                <dt className="text-slate-400">Valid until</dt><dd className="text-slate-200">{meta.validUntil}</dd>
                <dt className="text-slate-400">Prepared for</dt><dd className="text-slate-200">{meta.client.name}</dd>
                <dt className="text-slate-400">GSTIN</dt><dd className="font-mono text-slate-200">{meta.preparedBy.gstin.replace('GSTIN: ', '')}</dd>
              </dl>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {meta.preparedBy.company}. All rights reserved.</span>
            <span>Confidential. Prepared exclusively for {meta.client.name}; not for redistribution.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
