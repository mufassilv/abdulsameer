import { Check, Minus, Circle, Globe, Monitor, Cpu, Database, HardDrive, Mail, Activity, GitBranch, Users } from 'lucide-react'
import { permissionMatrix, roles, techStack } from '../data/proposal'
import { Heading, Reveal, Section } from './ui'

function Level({ v }: { v: 0 | 1 | 2 }) {
  if (v === 2) return <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-brand text-white" title="Full access"><Check className="h-3.5 w-3.5" /></span>
  if (v === 1) return <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-brand-soft text-brand-deep" title="Own centre / own records"><Circle className="h-3 w-3 fill-current" /></span>
  return <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-400" title="No access"><Minus className="h-3.5 w-3.5" /></span>
}

const Box = ({ icon: Icon, title, sub, tone = 'light' }: { icon: typeof Globe; title: string; sub: string; tone?: 'light' | 'dark' | 'brand' }) => {
  const t = { light: 'bg-white border-line text-ink', dark: 'bg-navy border-navy text-white', brand: 'bg-brand border-brand text-white' }[tone]
  return (
    <div className={`flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 shadow-(--shadow-card) ${t}`}>
      <Icon className="h-5 w-5 shrink-0 opacity-80" />
      <div className="min-w-0"><p className="text-sm font-semibold leading-tight">{title}</p><p className="text-xs leading-snug opacity-70">{sub}</p></div>
    </div>
  )
}

const Arrow = () => <div className="mx-auto h-6 w-px bg-slate-300" aria-hidden />

export default function Solution() {
  return (
    <Section id="solution">
      <Heading eyebrow="Proposed solution" title="Architecture, roles and technology" lead="A single React application serves every portal; a Node.js API enforces roles and centre isolation; AWS provides storage, delivery, email and monitoring." />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* architecture */}
        <Reveal className="lg:col-span-3">
          <div className="card p-6">
            <p className="text-sm font-semibold text-muted">High-level architecture · AWS ap-south-1 (Mumbai)</p>
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['Students', 'Trainers & centres', 'Franchise owners', 'HQ admins'].map((u) => (
                  <div key={u} className="flex min-w-0 items-center justify-center gap-2 rounded-lg bg-surface px-2 py-2 text-center text-xs font-semibold text-ink-soft"><Users className="h-3.5 w-3.5 shrink-0" /><span className="leading-tight">{u}</span></div>
                ))}
              </div>
              <Arrow />
              <Box icon={Globe} title="Route 53 · CloudFront · ACM" sub="Custom domains, TLS, CDN edge caching, WAF-ready" tone="dark" />
              <Arrow />
              <div className="grid gap-3 sm:grid-cols-2">
                <Box icon={Monitor} title="React web app" sub="Static build on S3 + CloudFront · role-based portals" />
                <Box icon={Cpu} title="Node.js API" sub="EC2 / ECS (Docker) · RBAC + centre scoping · jobs" tone="brand" />
              </div>
              <Arrow />
              <div className="grid gap-3 sm:grid-cols-3">
                <Box icon={Database} title="MongoDB Atlas" sub="Private VPC peering · daily snapshots" />
                <Box icon={HardDrive} title="S3 media & docs" sub="Private · signed URLs · transcoding" />
                <Box icon={Mail} title="Amazon SES" sub="Transactional email + OTP" />
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Box icon={Activity} title="CloudWatch · uptime · error tracking" sub="Alarms to email / Slack" />
                <Box icon={GitBranch} title="GitHub Actions CI/CD" sub="Staging on merge · tagged production releases · rollback" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* stack */}
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="grid gap-3">
            {techStack.map((s) => (
              <div key={s.layer} className="card p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand">{s.layer}</p>
                <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-soft">
                  {s.items.map((i) => <li key={i} className="before:mr-1.5 before:text-slate-300 before:content-['•']">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* permission matrix */}
      <Reveal className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold">Roles & access matrix</h3>
            <p className="text-sm text-ink-soft">Final permissions are confirmed in Discovery and remain editable by the Super Admin.</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-soft">
            <span className="inline-flex items-center gap-1.5"><Level v={2} /> Full / all centres</span>
            <span className="inline-flex items-center gap-1.5"><Level v={1} /> Own centre / own records</span>
            <span className="inline-flex items-center gap-1.5"><Level v={0} /> None</span>
          </div>
        </div>
        {/* phones: one card per area */}
        <div className="mt-4 grid gap-3 md:hidden print:hidden">
          {permissionMatrix.map((row) => (
            <div key={row.area} className="card p-4">
              <p className="font-semibold">{row.area}</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
                {roles.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-xs text-ink-soft"><Level v={row.levels[r]} /><span className="leading-tight">{r}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* tablet and up: full table */}
        <div className="mt-4 hidden overflow-x-auto rounded-2xl border border-line bg-paper md:block print:block">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="bg-surface text-left text-xs uppercase tracking-wider text-muted">
                <th className="px-4 py-3 font-semibold">Area</th>
                {roles.map((r) => <th key={r} className="px-3 py-3 text-center font-semibold">{r}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {permissionMatrix.map((row) => (
                <tr key={row.area} className="transition-colors duration-150 hover:bg-brand-tint/60">
                  <td className="px-4 py-2.5 font-medium">{row.area}</td>
                  {roles.map((r) => <td key={r} className="px-3 py-2.5 text-center"><Level v={row.levels[r]} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
