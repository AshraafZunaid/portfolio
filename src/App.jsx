import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  BrainCircuit,
  Briefcase,
  CloudCog,
  Container,
  Download,
  ExternalLink,
  Gauge,
  GitBranchPlus,
  Github,
  LayoutDashboard,
  LineChart,
  Mail,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from 'lucide-react'

const metrics = [
  { value: '10+', label: 'Years of experience' },
  { value: '100+', label: 'Applications enabled through CI/CD' },
  { value: '30%', label: 'Azure cost reduction delivered' },
  { value: '$70K', label: 'Savings identified across subscriptions' },
  { value: '60%', label: 'Manual effort reduced by automation' },
  { value: '99.9%', label: 'AKS workload uptime enabled' },
]

const specializations = [
  {
    icon: CloudCog,
    title: 'Cloud Architecture & Platform Engineering',
    description:
      'Azure-first platform thinking covering landing patterns, governance, PaaS design, subscription hygiene, and scalable engineering foundations.',
  },
  {
    icon: GitBranchPlus,
    title: 'DevOps Architecture & CI/CD Standards',
    description:
      'Branching strategies, release patterns, and enterprise CI/CD blueprints for IIS-hosted apps, Azure PaaS solutions, and containerized platforms.',
  },
  {
    icon: Wrench,
    title: 'Automation & Self-Healing',
    description:
      'PowerShell, Python, Azure Automation, and REST-driven engineering automation that reduces repetitive effort and improves operational resilience.',
  },
  {
    icon: Container,
    title: 'Containers, AKS & Modernization',
    description:
      'Application modernization through Docker, Kubernetes, AKS adoption, and deployment models built for reliability, scale, and faster releases.',
  },
  {
    icon: LayoutDashboard,
    title: 'Observability, Telemetry & Quality',
    description:
      'New Relic browser monitoring, dashboards, telemetry design, SonarQube governance, quality gates, and enterprise-wide developer visibility.',
  },
  {
    icon: BrainCircuit,
    title: 'Engineering Enablement & Transformation',
    description:
      'ADO to GitHub migration, GitHub organization setup, MCP server enablement, standards evangelism, and mentoring teams on modern engineering practices.',
  },
]

const impactCards = [
  {
    title: 'Enterprise CI/CD Architecture',
    text: 'Designed and implemented branching strategies and CI/CD ecosystems for IIS-hosted applications, Azure PaaS services, and container-based solutions.',
    tags: ['Azure DevOps', 'GitHub Actions', 'Release Standards'],
  },
  {
    title: 'Cloud Cost Optimization',
    text: 'Drove right-sizing, governance, and subscription visibility initiatives to reduce spend, identify waste, and improve platform accountability.',
    tags: ['Azure Governance', 'Optimization', 'FinOps Mindset'],
  },
  {
    title: 'GitHub Transformation',
    text: 'Supported ADO to GitHub migration programs, shaped engineering workflow transitions, and helped establish GitHub organization structure and standards.',
    tags: ['GitHub Migration', 'Org Setup', 'Workflow Design'],
  },
  {
    title: 'Observability Modernization',
    text: 'Implemented New Relic integrations, browser monitoring, dashboards, and telemetry foundations for application health and user-experience visibility.',
    tags: ['New Relic', 'Dashboards', 'Telemetry'],
  },
  {
    title: 'Quality Gate Governance',
    text: 'Led SonarQube integration, administration, upgrades, and quality gate setup to elevate code quality and enterprise-wide engineering discipline.',
    tags: ['SonarQube', 'Governance', 'Code Quality'],
  },
  {
    title: 'AI Productivity Enablement',
    text: 'Enabled MCP server usage across the organization and educated teams on practical adoption patterns within day-to-day engineering work areas.',
    tags: ['MCP', 'Enablement', 'Developer Productivity'],
  },
]

const timeline = [
  {
    period: 'Apr 2025 – Apr 2026',
    role: 'Azure DevOps Architect Focus',
    org: 'Providence',
    bullets: [
      'Architected branching models and CI/CD patterns for IIS, Azure PaaS, and container-based application landscapes.',
      'Led SonarQube integration, administration, upgrade planning, and quality gate implementation.',
      'Rolled out New Relic browser monitoring, dashboards, and telemetry-aligned observability patterns.',
      'Supported GitHub migration, GitHub organization setup, and MCP enablement across engineering teams.',
    ],
  },
  {
    period: 'Nov 2020 – Apr 2025',
    role: 'Lead Cloud Engineer',
    org: 'Providence',
    bullets: [
      'Reduced Azure infrastructure costs by 20% and identified $50K savings across 80 subscriptions.',
      'Designed CI/CD pipelines for 40+ applications and improved deployment efficiency with automation at scale.',
      'Led containerization and AKS adoption while driving security, quality, and governance standards.',
      'Mentored engineers and established DevOps practices, branching strategies, and enterprise platform standards.',
    ],
  },
  {
    period: 'Jun 2020 – Nov 2020',
    role: 'Infra Technology Specialist',
    org: 'Cognizant',
    bullets: [
      'Built automation and self-healing flows for SCCM client issues, deployments, patching, and distribution point recovery.',
    ],
  },
  {
    period: 'Mar 2019 – May 2020',
    role: 'DevOps Engineer',
    org: 'PrimeSoft IP Solutions',
    bullets: [
      'Onboarded 500+ Azure VMs using ARM templates and developed self-healing monitoring and reporting automation.',
    ],
  },
  {
    period: 'Feb 2018 – Mar 2019',
    role: 'Senior Software Engineer',
    org: 'Mindtree',
    bullets: [
      'Specialized in Intune, Conditional Access, compliance, enrollment, hybrid SCCM integration, and enterprise device management.',
    ],
  },
  {
    period: 'Aug 2015 – Feb 2018',
    role: 'Software Engineer',
    org: 'Tech Mahindra',
    bullets: [
      'Managed SCCM and SCOM infrastructure, patching, monitoring, OSD deployments, and reporting for large enterprise environments.',
    ],
  },
]

const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    items: ['Azure', 'IaaS', 'PaaS', 'SaaS', 'ARM Templates', 'Terraform'],
  },
  {
    title: 'DevOps & Source Control',
    items: ['Azure DevOps', 'GitHub Actions', 'GitHub', 'Git', 'Jenkins', 'ArgoCD'],
  },
  {
    title: 'Automation & Scripting',
    items: ['PowerShell', 'Python', 'Azure CLI', 'REST APIs', 'Azure Automation', 'Logic Apps'],
  },
  {
    title: 'Containers & Platforms',
    items: ['Docker', 'Kubernetes', 'AKS', 'App Services', 'Container Delivery'],
  },
  {
    title: 'Observability & Reporting',
    items: ['New Relic', 'Azure Monitor', 'Log Analytics', 'Splunk', 'Power BI', 'SCOM'],
  },
  {
    title: 'Security & Quality',
    items: ['SonarQube', 'Checkmarx', 'RBAC', 'Azure Policies', 'Key Vault', 'Conditional Access'],
  },
]

const certifications = [
  'Microsoft Certified Azure Solutions Architect',
  'AZ-900',
  'AZ-303',
  'AZ-304',
]

const navItems = [
  ['Home', '#home'],
  ['Expertise', '#expertise'],
  ['Impact', '#impact'],
  ['Journey', '#journey'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <span className="badge">{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </motion.div>
  )
}

function App() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.10),transparent_20%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)] opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-cyan-200">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-glow">
              <CloudCog size={18} />
            </div>
            AZM
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-300 transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <a
            href="mailto:ashraafzunaid@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            Let&apos;s Connect <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="section-shell pt-14 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <span className="badge">
                <Sparkles size={14} /> Cloud Architect
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                Ashraaf Zunaid Mohammad
              </h1>
              <p className="mt-5 text-xl font-semibold text-cyan-200 md:text-2xl">
                Lead Cloud Engineer | Azure DevOps Architect | Cloud Automation SME
              </p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Designing scalable cloud platforms, CI/CD ecosystems, automation frameworks, and governance models that improve speed, quality, cost efficiency, and operational reliability.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#impact"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-1px]"
                >
                  View Impact <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:ashraafzunaid@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me <Mail size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40"
                >
                  Resume & Links <Download size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="panel relative overflow-hidden p-6 shadow-glow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.12),transparent_30%)]" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Platform Snapshot</p>
                      <p className="mt-2 text-lg font-semibold text-white">Azure-first engineering leadership</p>
                    </div>
                    <BadgeCheck className="text-cyan-300" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      ['Azure Governance', Gauge],
                      ['CI/CD Strategy', GitBranchPlus],
                      ['Containers & AKS', Container],
                      ['Quality Gates', ShieldCheck],
                      ['New Relic Telemetry', LineChart],
                      ['Automation at Scale', TerminalSquare],
                    ].map(([label, Icon], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 * index + 0.2 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <Icon className="mb-3 text-cyan-300" size={20} />
                        <p className="text-sm font-medium text-white">{label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 p-5">
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Current Focus</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Branching strategy design, CI/CD architecture, SonarQube governance, New Relic observability,
                      GitHub transformation, MCP enablement, and cloud cost optimization.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="panel p-5"
              >
                <p className="text-2xl font-extrabold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell pt-8">
          <div className="panel grid gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-10">
            <div>
              <span className="badge">About</span>
              <h2 className="mt-5 text-3xl font-bold text-white">A platform-minded engineer who turns cloud strategy into delivery systems.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I bring 10+ years of experience across cloud engineering, DevOps, infrastructure automation, MDM,
                SCCM, and enterprise platform operations. My focus is on building delivery models that are scalable,
                governed, observable, and practical for real teams to operate.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-300">
                From Azure optimization and CI/CD modernization to GitHub migration, SonarQube quality governance,
                New Relic telemetry, and MCP enablement, my work centers on helping organizations ship faster while
                improving reliability, quality, cost control, and engineering maturity.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ['Cloud', 'Azure architecture, PaaS, containers, governance, optimization'],
                ['DevOps', 'Branching strategies, CI/CD, release models, migration patterns'],
                ['Automation', 'PowerShell, Python, Azure Automation, self-healing flows'],
                ['Quality & Observability', 'SonarQube, New Relic, dashboards, telemetry, standards'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section-shell">
          <SectionHeader
            eyebrow="Expertise"
            title="What I specialize in"
            description=""
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {specializations.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel h-full p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="impact" className="section-shell">
          <SectionHeader
            eyebrow="Impact"
            title="Signature work that should stand out"
            description=""
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {impactCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel p-6"
              >
                <div className="flex items-center justify-between">
                  <Briefcase className="text-cyan-300" size={20} />
                  <ExternalLink className="text-slate-500" size={16} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="journey" className="section-shell">
          <SectionHeader
            eyebrow="Journey"
            title="Career timeline"
            description=""
          />
          <div className="relative mt-12 space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/10 md:before:left-1/2">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.org}-${item.period}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${index % 2 === 0 ? '' : ''}`}
              >
                <div className={`md:${index % 2 === 0 ? 'pr-10 text-left' : 'col-start-2 pl-10 text-left'}`}>
                  <div className="panel ml-12 p-6 md:ml-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.period}</p>
                    <h3 className="mt-3 text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-slate-400">{item.org}</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 top-10 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-300 md:left-1/2 md:-ml-2" />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader
            eyebrow="Skills"
            title="Technical landscape"
            description=""
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="panel p-6"
              >
                <div className="flex items-center gap-3">
                  <Blocks className="text-cyan-300" size={20} />
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-shell pt-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel p-8">
              <span className="badge">Certifications</span>
              <h2 className="mt-5 text-3xl font-bold text-white">Credentials that reinforce the platform story</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span key={cert} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="panel p-8">
              <span className="badge">Focus Areas</span>
              <h2 className="mt-5 text-3xl font-bold text-white">What this design is optimized to communicate</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ['Architecture', 'Platform thinking, Azure design, standards and governance'],
                  ['Delivery', 'CI/CD architecture for enterprise app landscapes'],
                  ['Automation', 'PowerShell, Python, runbooks, self-healing and APIs'],
                  ['Observability', 'New Relic dashboards, browser telemetry, monitoring'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="panel relative overflow-hidden p-8 md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.10),transparent_26%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="badge">Contact</span>
                <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                  Open to Cloud Architecture, DevOps Leadership, Platform Engineering, and Automation Transformation opportunities.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  ['Email', 'ashraafzunaid@gmail.com', 'mailto:ashraafzunaid@gmail.com', Mail],
                  ['GitHub', 'Coming', 'https://github.com/', Github],
                  ['LinkedIn', 'Ashraaf Zunaid Mohammad', 'https://in.linkedin.com/in/ashraaf-zunaid-52725b17b', MonitorSmartphone],
                ].map(([label, value, href, Icon]) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-300/30 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="text-cyan-300" size={20} />
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{label}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{value}</p>
                  </a>
                ))}
                <a
                  href="#home"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
                >
                  Back to Top <BarChart3 size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

export default App
