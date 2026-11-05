/**
 * Single source of truth for everything the proposal says.
 * Edit names, dates and amounts here; the components only render this file.
 */

export const meta = {
  title: 'Unified Learning, Franchise & HQ Management Platform',
  subtitle: 'Release 1 · Proposal, Scope, Timeline & Quotation',
  reference: 'PRO-2026-11-LFP-R1',
  date: '6 November 2026',
  validUntil: '6 December 2026',
  goLive: '1 February 2027',
  uatRelease: '15 January 2027',
  kickoff: '17 November 2026',
  weeksToGoLive: 11,
  client: {
    name: 'Abdul Sameer',                  // ← replace with the organisation name once known
    note: 'Multi-centre training institute (franchise model)',
  },
  preparedBy: {
    company: 'Phoenix Software',
    tagline: 'Cloud, AI and product engineering · AWS Select Tier Partner',
    email: 'mufassil@phoenixsoft.in',
    phone: '+91 84518 48548',
    website: 'www.phoenixsoft.in',
    location: 'Nagpur, India',
    gstin: 'GSTIN: 27BHGPP9396A1ZY',
    logoFull: 'brand/phoenix-logo-full.png',  // white wordmark, for dark backgrounds
    logoIcon: 'brand/phoenix-icon.png',
    awsBadge: 'brand/aws-select-tier-partner.svg',
  },
  currency: '₹',
  gstPercent: 18,
}

/* ------------------------------------------------------------------ */
/* Executive summary                                                   */
/* ------------------------------------------------------------------ */

export const summary = {
  understanding:
    'You operate a growing network of training centres run by franchise partners, with a head office that owns the curriculum, brand and commercial model. Today, learning, admissions, fee collection and reporting are spread across tools and spreadsheets, which makes centre-level oversight slow and royalty reconciliation manual. Release 1 brings student learning, centre operations and HQ control into one secure, web-based platform with strict franchise-wise data isolation.',
  outcomes: [
    { label: 'One login per role', text: 'Students, trainers, centre staff, franchise owners and HQ each get a purpose-built portal with only the screens their role needs.' },
    { label: 'Every centre, isolated', text: 'Franchise data is scoped at the API layer. A centre only ever sees its own students, fees and documents. HQ sees everything.' },
    { label: 'Royalty on autopilot', text: 'Fee receipts roll up into monthly royalty statements per franchise. No spreadsheets, no disputes.' },
    { label: 'Verifiable certificates', text: 'Every result generates a QR-coded certificate that anyone can verify on a public page.' },
  ],
  highlights: [
    { value: '3', label: 'Core modules' },
    { value: '6', label: 'User roles' },
    { value: '11', label: 'Weeks to go-live' },
    { value: 'AWS', label: 'Hosted, CI/CD, monitored' },
  ],
}

export const whyUs = [
  {
    title: 'Three live education platforms already shipped',
    text: 'We have designed, built and currently operate production education platforms with course builders, video lessons, quizzes, certificates, partner commissions and online payments (shown above). That experience means fewer unknowns and a faster, safer delivery for you.',
  },
  {
    title: 'Franchise model understood',
    text: 'Partner onboarding, approvals, commission tiers and per-partner reporting are patterns we have delivered before. Royalty reporting and centre isolation build directly on them.',
  },
  {
    title: 'AWS Select Tier Partner',
    text: 'Phoenix Software is an AWS Select Tier Partner. We design and run our platforms on AWS (Mumbai region) and work directly with the AWS partner team for architecture reviews. We will also apply for AWS partner / Activate credits on your behalf to offset early infrastructure cost (credit approval is at AWS\'s discretion).',
  },
  {
    title: 'Security as a habit, not a phase',
    text: 'Role whitelists, input sanitisation, private media delivery and audit trails are part of our standard build checklist, and we run a full security review before go-live.',
  },
]

export const platforms = [
  { name: 'Online IBS', url: 'https://onlineibs.com', icon: 'clients/onlineibs.png', iconBg: 'bg-white',
    text: 'E-learning platform for International Business School: programmes, video lessons, quizzes, certificates, online payments, agent commissions and an AI study assistant.' },
  { name: 'Enrouting Careers', url: 'https://enroutingcareers.com', icon: 'clients/enrouting.jpg', iconBg: 'bg-black',
    text: 'Career-guidance and skill-training platform with course catalogue, online enrolment, student dashboards and content management.' },
  { name: 'Aakarsh Career', url: 'https://aakarshcareer.com', icon: 'clients/aakarsh.png', iconBg: 'bg-white',
    text: 'Student-facing career and education platform with programme listings, enquiries and online admissions.' },
]

/* ------------------------------------------------------------------ */
/* Scope & requirements                                                */
/* ------------------------------------------------------------------ */

export type Requirement = { id: string; title: string; detail: string }
export type Module = {
  key: string
  name: string
  icon: 'GraduationCap' | 'Building2' | 'Settings2'
  summary: string
  requirements: Requirement[]
}

export const modules: Module[] = [
  {
    key: 'lms',
    name: 'Student Portal & LMS',
    icon: 'GraduationCap',
    summary: 'Everything a learner and trainer need: enrolment, content, attendance, assessment and certification.',
    requirements: [
      { id: 'SP-01', title: 'Student registration & profiles', detail: 'Self-registration via the website or walk-in creation by centre staff. Email/mobile verification, profile with photo, ID proof, guardian details, education history and documents. Students belong to exactly one centre.' },
      { id: 'SP-02', title: 'Course & batch management', detail: 'HQ defines courses (modules, lessons, duration, fee structure). Centres create batches against courses with schedule, trainer, capacity and start/end dates. Students are enrolled into batches.' },
      { id: 'SP-03', title: 'Learning content: videos & PDFs', detail: 'Lesson-wise video (streamed via CloudFront with signed URLs, not downloadable) and PDF/notes. Content is uploaded once by HQ and visible to all centres running that course. Resume-where-you-left playback.' },
      { id: 'SP-04', title: 'Attendance tracking', detail: 'Trainer marks batch attendance per session (present / absent / late) from web. Student sees attendance percentage; centre and HQ see batch and centre summaries. Configurable minimum attendance for exam eligibility.' },
      { id: 'SP-05', title: 'Progress tracking', detail: 'Per-student completion of lessons, time spent, quiz scores and overall course progress bar. Trainer view of the whole batch with at-risk indicators.' },
      { id: 'SP-06', title: 'Quizzes & exams', detail: 'Question bank per course (MCQ, multi-select, true/false, short answer). Timed lesson quizzes and batch-level exams with randomised questions, attempt limits, pass marks and auto-grading. Manual grading for short answers.' },
      { id: 'SP-07', title: 'Results', detail: 'Result sheet per exam and consolidated marksheet per student. Publish/withhold control at centre or HQ level. Re-exam workflow.' },
      { id: 'SP-08', title: 'QR-based certificates', detail: 'On passing, a branded PDF certificate is generated with a unique certificate number and QR code. A public verification page confirms name, course, centre and date. Certificates can be revoked by HQ.' },
      { id: 'SP-09', title: 'Notifications', detail: 'In-app and email notifications for enrolment, batch schedule, exam dates, results and fee dues. (SMS/WhatsApp is a Phase 2 option.)' },
    ],
  },
  {
    key: 'franchise',
    name: 'Franchise & Centre Management',
    icon: 'Building2',
    summary: 'Onboard partners, run centres day-to-day and keep HQ and franchise finances reconciled.',
    requirements: [
      { id: 'FC-01', title: 'Franchise onboarding & approvals', detail: 'Online application form on the website, document upload (KYC, agreement, premises proof), HQ review with approve/reject/request-changes, agreement dates and territory. Approved franchise gets a centre record and owner login.' },
      { id: 'FC-02', title: 'Centre operations dashboard', detail: 'For the centre manager/owner: today\'s batches, enquiries to follow up, pending fees, upcoming exams, trainer schedule, compliance alerts and month-to-date collections.' },
      { id: 'FC-03', title: 'Walk-in admissions', detail: 'Counter-style admission in under two minutes: capture enquiry → convert to student → select course/batch → fee plan → print receipt. Enquiry pipeline with follow-up reminders and conversion tracking.' },
      { id: 'FC-04', title: 'Trainer assignments', detail: 'Centre maintains its trainer roster (HQ-certified trainers flagged). Assign trainers to batches with clash detection; trainer portal shows timetable, attendance marking and assessment grading.' },
      { id: 'FC-05', title: 'Compliance document management', detail: 'Per-centre document register (agreement, licences, trainer certifications, inspection reports) with expiry dates, reminders 30/15/7 days before expiry and HQ compliance status view across all centres.' },
      { id: 'FC-06', title: 'Fee collection & receipts (offline)', detail: 'Fee plans (one-time, instalment), discounts with approval, cash / UPI / bank transfer / cheque recording at the counter, auto-numbered GST-ready receipts (PDF), dues ledger per student, defaulter list and reminders.' },
      { id: 'FC-07', title: 'Online fee payment (payment gateway)', detail: 'Payment gateway integration (Razorpay / PayU / Stripe, as you prefer) so students and parents can pay fees and instalments online from the portal or a payment link. Webhook-verified confirmation, automatic receipt, refund recording and reconciliation into the same dues ledger and royalty figures as offline collections. Gateway charges are borne by the client.' },
      { id: 'FC-08', title: 'Royalty reporting', detail: 'HQ configures royalty rules per franchise (percentage of collections and/or per-enrolment). Monthly statement auto-generated from receipts, HQ marks settlements, franchise sees its statement and history. Export to Excel/PDF.' },
      { id: 'FC-09', title: 'Franchise-wise data isolation', detail: 'Every record is tagged with its centre. API-level scoping guarantees a centre can never read or write another centre\'s data, including via search, exports and reports.' },
    ],
  },
  {
    key: 'hq',
    name: 'HQ Administration & Website',
    icon: 'Settings2',
    summary: 'Public presence, master data, user governance and the reports leadership needs.',
    requirements: [
      { id: 'HQ-01', title: 'Public website', detail: 'Responsive marketing site managed from the admin: home, about, courses catalogue, centre locator, franchise opportunity page, gallery, testimonials, blog/news, contact. SEO-friendly, fast, brand-consistent.' },
      { id: 'HQ-02', title: 'Enquiry management', detail: 'Course and franchise enquiries from the website routed to the right centre (by city/pin code) or to HQ. Status pipeline, assignment, notes and conversion reporting.' },
      { id: 'HQ-03', title: 'User & role management', detail: 'Create/disable users, assign roles and centres, reset passwords, force logout. Role permissions matrix is configurable by Super Admin.' },
      { id: 'HQ-04', title: 'Course, batch & centre management', detail: 'Master data for courses, pricing, certificate templates, centres (address, contact, status, royalty rule) and global batch visibility with filters.' },
      { id: 'HQ-05', title: 'Operational dashboards', detail: 'Network-wide KPIs: enrolments, active students, collections vs. royalty, attendance, exam pass rates, enquiry conversion, centre leaderboard and compliance health. Filter by centre, course, date range.' },
      { id: 'HQ-06', title: 'Reports & exports', detail: 'Admissions, fee collection & dues, royalty statements, attendance, results, certificates issued, compliance expiry, enquiry funnel and user activity. All exportable to Excel/CSV/PDF.' },
      { id: 'HQ-07', title: 'Search', detail: 'Global search across students, receipts, certificates, batches and documents, respecting each user\'s data scope.' },
      { id: 'HQ-08', title: 'Audit logs', detail: 'Who did what, when, from where, for all create/update/delete actions on students, fees, results, certificates, users and settings. Searchable, exportable, retained 12 months.' },
    ],
  },
]

export const platformFeatures = [
  { title: 'Role-based access control', text: 'Six roles with a configurable permission matrix enforced on every API route.' },
  { title: 'Secure authentication', text: 'Email/mobile + password, OTP verification, password policy, session expiry, optional 2FA for HQ roles.' },
  { title: 'Franchise-wise data isolation', text: 'Centre scoping at the data-access layer, verified by automated tests.' },
  { title: 'Audit logs', text: 'Immutable activity trail with actor, action, entity, before/after and IP.' },
  { title: 'Document management', text: 'Versioned uploads to S3 with private signed access, expiry tracking and categories.' },
  { title: 'Search & reporting', text: 'Indexed global search plus scheduled and on-demand reports with exports.' },
]

export const technicalDeliverables = [
  { title: 'AWS-hosted solution', text: 'Mumbai (ap-south-1) region. Compute on EC2/ECS, MongoDB Atlas on AWS, S3 + CloudFront for media, SES for email, Route 53 + ACM for domains and TLS. Separate UAT and production environments.' },
  { title: 'AWS partner support & credits', text: 'As an AWS Select Tier Partner we engage the AWS partner team directly for a Well-Architected review, and we will apply for AWS partner / Activate credits for your account to reduce launch-phase infrastructure bills.' },
  { title: 'CI/CD pipeline', text: 'GitHub Actions: lint, type-check, test, build and deploy to staging on every merge; tagged releases to production with one-click rollback.' },
  { title: 'Security & backup strategy', text: 'OWASP-aligned review, rate limiting, security headers, encrypted storage, daily database snapshots (30-day retention), S3 versioning and a documented restore procedure.' },
  { title: 'Monitoring & logging', text: 'CloudWatch metrics and alarms, centralised application logs, uptime checks and error tracking with alerts to email/Slack.' },
  { title: 'Documentation, training & handover', text: 'Admin and centre user guides, API and deployment documentation, two recorded training sessions, and full source code transfer to your GitHub organisation.' },
]

export const outOfScope = [
  'Corporate / B2B workshops',
  'Placement & employer management',
  'E-commerce & online store',
  'Mobile apps (Android / iOS)',
]

/* ------------------------------------------------------------------ */
/* Roles                                                               */
/* ------------------------------------------------------------------ */

export const roles = ['Student', 'Trainer', 'Centre Staff', 'Franchise Owner', 'HQ Admin', 'Super Admin'] as const
export type Role = (typeof roles)[number]

// 2 = full, 1 = own-centre / own-records only, 0 = none
export const permissionMatrix: { area: string; levels: Record<Role, 0 | 1 | 2> }[] = [
  { area: 'Learning content & quizzes', levels: { Student: 1, Trainer: 1, 'Centre Staff': 0, 'Franchise Owner': 0, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Attendance & progress', levels: { Student: 1, Trainer: 1, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Admissions & student records', levels: { Student: 1, Trainer: 0, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Fees, receipts & dues', levels: { Student: 1, Trainer: 0, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Exams, results & certificates', levels: { Student: 1, Trainer: 1, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Trainer roster & batches', levels: { Student: 0, Trainer: 1, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Compliance documents', levels: { Student: 0, Trainer: 0, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Royalty statements', levels: { Student: 0, Trainer: 0, 'Centre Staff': 0, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Courses, centres & master data', levels: { Student: 0, Trainer: 0, 'Centre Staff': 0, 'Franchise Owner': 0, 'HQ Admin': 2, 'Super Admin': 2 } },
  { area: 'Users, roles & audit logs', levels: { Student: 0, Trainer: 0, 'Centre Staff': 0, 'Franchise Owner': 0, 'HQ Admin': 1, 'Super Admin': 2 } },
  { area: 'Website content & enquiries', levels: { Student: 0, Trainer: 0, 'Centre Staff': 1, 'Franchise Owner': 1, 'HQ Admin': 2, 'Super Admin': 2 } },
]

/* ------------------------------------------------------------------ */
/* Technology                                                          */
/* ------------------------------------------------------------------ */

export const techStack = [
  { layer: 'Frontend', items: ['React 19 + TypeScript', 'Tailwind CSS', 'Responsive, accessible UI', 'Single build, role-based portals'] },
  { layer: 'Backend API', items: ['Node.js (Express) REST API', 'JWT auth + RBAC middleware', 'Centre-scoping middleware', 'Background job scheduler'] },
  { layer: 'Data', items: ['MongoDB Atlas (AWS Mumbai)', 'Indexed search', 'Audit log collection', 'Daily snapshots, 30-day retention'] },
  { layer: 'Media & documents', items: ['S3 private buckets', 'CloudFront signed URLs', 'Video transcoding on upload', 'PDF generation (receipts, certificates)'] },
  { layer: 'Platform & DevOps', items: ['EC2 / ECS with Docker', 'GitHub Actions CI/CD', 'Staging + production', 'CloudWatch, uptime & error alerts'] },
  { layer: 'Security', items: ['TLS everywhere (ACM)', 'Rate limiting, Helmet headers', 'Encrypted at rest & in transit', 'Pre-launch security review'] },
]

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export type Phase = {
  name: string
  start: string
  end: string
  weeks: number
  color: 'brand' | 'navy' | 'accent' | 'muted'
  deliverables: string[]
  milestone?: string
}

// 11 weeks from kickoff (17 Nov 2026) → UAT release (15 Jan 2027) → go-live (1 Feb 2027)
export const phases: Phase[] = [
  { name: 'Discovery & Design', start: '17 Nov', end: '20 Nov', weeks: 1, color: 'navy',
    deliverables: ['Requirement workshops & sign-off', 'Data model & role matrix', 'UX wireframes & design system', 'AWS account, domains, repos'],
    milestone: 'M1 · Signed-off scope & designs' },
  { name: 'Sprint 1 · Platform core & website', start: '23 Nov', end: '4 Dec', weeks: 2, color: 'brand',
    deliverables: ['Auth, RBAC, centre isolation', 'Audit log & document store', 'Public website & enquiries', 'HQ user / course / centre masters'],
    milestone: 'M2 · Staging live, website demo' },
  { name: 'Sprint 2 · Student Portal & LMS', start: '7 Dec', end: '18 Dec', weeks: 2, color: 'brand',
    deliverables: ['Registration & profiles', 'Batches & enrolment', 'Video / PDF learning', 'Attendance & progress'],
    milestone: 'M3 · LMS demo' },
  { name: 'Sprint 3 · Assessment & Centre ops', start: '21 Dec', end: '1 Jan', weeks: 2, color: 'brand',
    deliverables: ['Quizzes, exams & results', 'QR certificates & verification', 'Franchise onboarding & approvals', 'Walk-in admissions, trainer assignment'],
    milestone: 'M4 · Centre ops demo' },
  { name: 'Sprint 4 · Finance, HQ & reports', start: '4 Jan', end: '15 Jan', weeks: 2, color: 'brand',
    deliverables: ['Fees, receipts & dues', 'Payment gateway', 'Royalty statements', 'Compliance register', 'HQ dashboards, reports, search'],
    milestone: 'M5 · UAT release · 15 January 2027' },
  { name: 'UAT, hardening & training', start: '18 Jan', end: '29 Jan', weeks: 2, color: 'accent',
    deliverables: ['Client UAT on the UAT environment', 'Security & performance review', 'Backups, monitoring, runbooks', 'Documentation & training sessions'],
    milestone: 'M6 · UAT sign-off' },
  { name: 'Go-live & hypercare', start: '1 Feb', end: '1 May', weeks: 13, color: 'muted',
    deliverables: ['Production go-live on 1 Feb 2027', '90 days of included post-launch support', 'Source code & credentials handover'],
    milestone: 'Go-live · 1 February 2027' },
]

export const workingModel = [
  { title: 'Fixed scope, fixed price', text: 'Release 1 scope in this document is delivered at the quoted price. Changes go through a short change-request note with cost and schedule impact.' },
  { title: 'Fortnightly demos', text: 'Every sprint ends with a working demo on staging. You see real progress, not status slides.' },
  { title: 'Weekly status report', text: 'Progress, risks and decisions needed from your side, every Friday.' },
  { title: 'Dedicated team', text: '1 project lead / architect, 2 full-stack engineers, 1 UI/UX designer (part-time), 1 QA engineer (part-time).' },
]

/* ------------------------------------------------------------------ */
/* Quotation                                                           */
/* ------------------------------------------------------------------ */

export type PriceLine = { item: string; includes: string; amount: number }

export const priceLines: PriceLine[] = [
  { item: 'Discovery, UX & design system', includes: 'Workshops, wireframes, UI design for all portals, data model', amount: 50000 },
  { item: 'Platform core', includes: 'Auth, RBAC, centre isolation, audit logs, document management, search, notifications', amount: 90000 },
  { item: 'Public website & enquiry management', includes: 'CMS-driven site, centre locator, franchise application, enquiry routing', amount: 60000 },
  { item: 'Student Portal & LMS', includes: 'SP-01 to SP-09: profiles, batches, content, attendance, progress, quizzes, results, certificates', amount: 190000 },
  { item: 'Franchise & Centre Management', includes: 'FC-01 to FC-09: onboarding, centre dashboard, admissions, trainers, compliance, offline fees + payment gateway, royalty', amount: 190000 },
  { item: 'HQ Administration, dashboards & reports', includes: 'HQ-03 to HQ-08: masters, users, KPIs, reports & exports', amount: 100000 },
  { item: 'AWS infrastructure, CI/CD, security & monitoring', includes: 'UAT + production environments, pipelines, backups, alarms, security review', amount: 60000 },
  { item: 'QA, UAT support, documentation, training & handover', includes: 'Test cycles, UAT fixes, user guides, 2 training sessions, source transfer', amount: 60000 },
]

export const paymentSchedule = [
  { stage: 'On acceptance & kickoff', percent: 30 },
  { stage: 'Milestone M2 · platform core & website demo', percent: 20 },
  { stage: 'Milestone M5 · UAT release (15 Jan 2027)', percent: 20 },
  { stage: 'Milestone M6 · UAT sign-off', percent: 20 },
  { stage: 'Go-live & handover', percent: 10 },
]

export const support = {
  includedMonths: 3,
  amcPercentPerYear: 18,
  amcIncludes: [
    'Bug fixes & security patches',
    'AWS infrastructure management & cost review',
    'Monthly backup restore test',
    'Up to 16 hours/month of minor enhancements',
    'Email & phone support, 1 business-day response',
  ],
}

export const awsRunningCost = [
  { item: 'API compute (EC2 t3.medium, 1–2 instances)', monthly: '₹3,000 – 6,000' },
  { item: 'MongoDB Atlas M10 (Mumbai) with backups', monthly: '₹5,000 – 6,000' },
  { item: 'S3 storage + CloudFront video delivery', monthly: '₹3,000 – 10,000 (usage based)' },
  { item: 'SES email, Route 53, CloudWatch, misc.', monthly: '₹1,500 – 2,500' },
]

/* ------------------------------------------------------------------ */
/* Phase 2 suggestions (NOT part of this quotation)                    */
/* ------------------------------------------------------------------ */

export type Suggestion = { title: string; value: string; effort: 'S' | 'M' | 'L'; group: 'Your roadmap' | 'AI & content studio' | 'Our suggestions' }

export const phase2: Suggestion[] = [
  { group: 'Your roadmap', title: 'Corporate / B2B workshops', value: 'Company accounts, bulk enrolments, custom batches and invoicing for corporate clients.', effort: 'M' },
  { group: 'Your roadmap', title: 'Placement & employer management', value: 'Employer directory, job postings, student applications and placement reporting per centre.', effort: 'M' },
  { group: 'Your roadmap', title: 'E-commerce & online store', value: 'Sell self-paced courses, books and kits online with cart, coupons and order management.', effort: 'M' },
  { group: 'Your roadmap', title: 'Mobile apps (Android / iOS)', value: 'Native learner app with offline video, push notifications and biometric login, reusing the same API.', effort: 'L' },

  { group: 'AI & content studio', title: 'AI learning assistant ("Ask AI")', value: 'Students ask questions inside any lesson and get answers grounded in your own videos and PDFs, with a link to the exact moment or page. Already live on a platform we operate.', effort: 'M' },
  { group: 'AI & content studio', title: 'Auto transcripts, captions & summaries', value: 'Every uploaded video is transcribed automatically; subtitles, searchable transcripts and a lesson summary appear without trainer effort.', effort: 'S' },
  { group: 'AI & content studio', title: 'AI quiz & question-bank generation', value: 'Generate MCQs and short-answer questions from a lesson\'s transcript or PDF for trainer review, cutting question-bank creation time dramatically.', effort: 'S' },
  { group: 'AI & content studio', title: 'AI doubt-solving with images', value: 'Students photograph a problem or a page; a vision-capable model explains it in the context of the course.', effort: 'S' },
  { group: 'AI & content studio', title: 'AI assistant on the public website', value: 'Visitors ask about courses, fees and centres and get accurate answers from live platform data, with the enquiry captured for follow-up.', effort: 'S' },
  { group: 'AI & content studio', title: 'In-app video creation tool', value: 'Trainers record screen + camera, trim, add slides and captions, and publish straight into a lesson. No separate editing software, consistent branding, AI-generated title and summary.', effort: 'M' },
  { group: 'Our suggestions', title: 'EMI & buy-now-pay-later for fees', value: 'No-cost EMI and BNPL options at checkout through the gateway, with instalment tracking in the dues ledger.', effort: 'S' },
  { group: 'Our suggestions', title: 'WhatsApp & SMS notifications', value: 'Fee reminders, batch alerts, results and OTPs on WhatsApp Business API and SMS.', effort: 'S' },
  { group: 'Our suggestions', title: 'Live classes', value: 'Scheduled live sessions (Zoom / Google Meet / AWS IVS) with auto-attendance and recordings in the LMS.', effort: 'M' },
  { group: 'Our suggestions', title: 'Proctored online exams', value: 'Webcam snapshots, tab-switch detection and identity checks for exams taken outside the centre.', effort: 'M' },
  { group: 'Our suggestions', title: 'Parent portal', value: 'Guardians see attendance, progress, results and fee dues for their ward.', effort: 'S' },
  { group: 'Our suggestions', title: 'QR / biometric attendance kiosk', value: 'Tablet at the centre door: students scan their ID QR; attendance is marked without the trainer.', effort: 'S' },
  { group: 'Our suggestions', title: 'Franchise lead CRM & marketing automation', value: 'Nurture franchise and course leads with sequences, campaigns and source-wise ROI.', effort: 'M' },
  { group: 'Our suggestions', title: 'Gamification & leaderboards', value: 'Badges, streaks and centre leaderboards to lift completion rates.', effort: 'S' },
  { group: 'Our suggestions', title: 'Advanced BI & forecasting', value: 'Self-service dashboards (Metabase / Power BI) on a reporting replica, with enrolment and revenue forecasts.', effort: 'M' },
  { group: 'Our suggestions', title: 'Multi-language & PWA', value: 'Regional-language UI for students and an installable offline-capable web app.', effort: 'M' },
]

/* ------------------------------------------------------------------ */
/* Assumptions, responsibilities & terms                               */
/* ------------------------------------------------------------------ */

export const assumptions = [
  'Kickoff on or before 17 November 2026 with the advance received; the 15 January 2027 UAT release and 1 February 2027 go-live move day-for-day with any delay in kickoff or sign-offs.',
  'Requirement sign-off at the end of Discovery (M1) freezes Release 1 scope. Later additions are handled as change requests.',
  'Client provides course content (videos, PDFs, question banks), branding assets, legal/policy text and sample data by the start of Sprint 2.',
  'Client provides the AWS account (billing in client\'s name), domain names, and email sending domain. We set everything up inside them.',
  'Client provides the payment gateway merchant account (Razorpay / PayU / Stripe) with KYC completed before Sprint 4; gateway charges and settlements are between the client and the gateway.',
  'Notifications in Release 1 are in-app and email. SMS / WhatsApp are Phase 2 options.',
  'UAT feedback is consolidated by a single client point of contact and returned within 3 working days of each milestone.',
  'Video content is standard-definition to 1080p; total media storage up to 500 GB is sized in the running-cost estimate.',
]

export const scopeNote = {
  title: 'What this price covers, and what it does not',
  points: [
    'This quotation is for the design and development of Release 1 only, as listed in the scope section above.',
    'Phase 2 items, and anything else outside the numbered requirements, are not included in this cost and will be quoted separately.',
    'All infrastructure and third-party costs are paid directly by the client: AWS, MongoDB Atlas, domains, SSL, email / SMS / WhatsApp providers, payment gateway charges, licences and any other subscriptions. Phoenix Software is not responsible for any third-party payment.',
  ],
}

export const terms = [
  `All amounts are in Indian Rupees and exclusive of GST (${meta.gstPercent}% applicable).`,
  'This is a development-only engagement. Infrastructure, hosting and all third-party services are contracted and paid for by the client in the client\'s own accounts; Phoenix Software is not responsible for any third-party payment.',
  'Payments are due within 7 days of each milestone invoice.',
  'Source code, design files and infrastructure credentials are transferred to the client on final payment; the client holds full ownership.',
  'Three months of post-go-live support are included; optional AMC thereafter at the rate quoted.',
  'This proposal is valid for 30 days from the date of issue.',
]
