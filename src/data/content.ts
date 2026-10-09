import {
  AppWindow,
  Boxes,
  Building2,
  Car,
  ClipboardCheck,
  Cog,
  Cpu,
  FlaskConical,
  Globe,
  Headset,
  Layers,
  Lock,
  Network,
  Pickaxe,
  Pill,
  Rocket,
  ShoppingBasket,
  Shuffle,
  Store,
  Truck,
  UserCheck,
  Users,
  Zap,
  CalendarCheck,
  Database,
  Factory,
  LifeBuoy,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import erpDesk from '../assets/media/erp-desk.jpg'
import heroAutomationFactory from '../assets/media/hero-automation-factory.jpg'
import heroMobileDesign from '../assets/media/hero-mobile-design.jpg'
import heroOracleTeam from '../assets/media/hero-oracle-team.jpg'
import fieldErp from '../assets/media/field-erp.jpg'
import hitecNight from '../assets/media/hitec-night.jpg'
import mobileApp from '../assets/media/mobile-app.jpg'
import opsRoom from '../assets/media/ops-room.jpg'
import wafer from '../assets/media/wafer.jpg'
import warehouse from '../assets/media/warehouse.jpg'

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

export const media = {
  opsRoom,
  fieldErp,
  hitecNight,
  wafer,
  warehouse,
  erpDesk,
  mobileApp,
  robotArm: pexels(36522025),
  motherboard: pexels(2582937),
  autoLine: unsplash('photo-1486262715619-67b85e0b08d3'),
  plant: pexels(257636),
}

/** ISA-95 levels — the spine of the whole site. */
export type Level = 'L0' | 'L1' | 'L2' | 'L3' | 'L4'

export const levels: { id: Level; name: string; system: string }[] = [
  { id: 'L4', name: 'Enterprise', system: 'Oracle Fusion Cloud · EBS' },
  { id: 'L3', name: 'Operations', system: 'MES · MOM · WMS' },
  { id: 'L2', name: 'Supervisory', system: 'SCADA · HMI · Historian' },
  { id: 'L1', name: 'Control', system: 'PLC · DCS · Robotics' },
  { id: 'L0', name: 'Field', system: 'Sensors · Drives · Vision' },
]

/** Each scenario reads bottom-up: L0 first, L4 last. */
export const scenarios: { name: string; events: Record<Level, string> }[] = [
  {
    name: 'Predictive maintenance',
    events: {
      L0: 'VIB-204 reads 11.8 mm/s RMS on CNC-07 spindle',
      L1: 'PLC derates spindle to 60% and holds next cycle',
      L2: 'Priority-2 alarm raised on Line 3 HMI',
      L3: 'Batch 4471 rerouted to CNC-09, schedule rebalanced',
      L4: 'Maintenance work order created, bearing reserved from stores',
    },
  },
  {
    name: 'Quality hold',
    events: {
      L0: 'Vision station QC-12 flags 14% solder voiding',
      L1: 'Reject gate actuated, board diverted',
      L2: 'SPC chart out of control, Cpk falls to 1.08',
      L3: 'Lot 88-2210 quarantined, genealogy traced to reel',
      L4: 'Nonconformance logged in Oracle Quality, supplier notified',
    },
  },
  {
    name: 'Material consumption',
    events: {
      L0: 'Load cell on SILO-3 reports 18.4 t',
      L1: 'Fill valve closes at setpoint',
      L2: 'Level trend written to historian',
      L3: 'Resin consumption backflushed against WO-7730',
      L4: 'On-hand updated and replenishment PO drafted',
    },
  },
]

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Approach', href: '#approach' },
  { label: 'Insights', href: '#insights' },
  { label: 'Company', href: '#company' },
]

export type HeroSlide = {
  label: string
  tag: string
  title: [string, string]
  body: string
  cta: { label: string; href: string }
  /** Photo behind the slide; slides without one show the animated brand scene. */
  image?: string
}

export const heroSlides: HeroSlide[] = [
  {
    label: 'Overview',
    tag: 'QUONTRIZ Technologies',
    title: ['We build your ideas', 'into enterprise products.'],
    body: 'From Oracle ERP to factory automation, mobile apps and AI, we design, build and support the software your business runs on.',
    cta: { label: 'Start your project', href: '#contact' },
    image: hitecNight,
  },
  {
    label: 'About us',
    tag: 'About QUONTRIZ',
    title: ['One team for your', 'factory and your Oracle.'],
    body: 'Most companies hire one partner for the factory and another for Oracle. Our engineers and Oracle consultants work as one team.',
    cta: { label: 'About QUONTRIZ', href: '#company' },
  },
  {
    label: 'Oracle ERP',
    tag: 'Oracle Fusion Cloud · E-Business Suite',
    title: ['Set up, upgrade and', 'support Oracle.'],
    body: 'We set Oracle up for the way your business works, move your data across safely and stay with you after go-live.',
    cta: { label: 'Explore Oracle ERP', href: '#service-oracle' },
    image: heroOracleTeam,
  },
  {
    label: 'Industrial Automation',
    tag: 'Machines · MES · Oracle',
    title: ['Connect your factory', 'to your business software.'],
    body: 'Machine data flows straight into your business software, so stock, costs and downtime are always up to date.',
    cta: { label: 'Explore automation', href: '#service-automation' },
    image: heroAutomationFactory,
  },
  {
    label: 'Mobile & Web',
    tag: 'iOS · Android · Web',
    title: ['Mobile apps and websites,', 'designed and built for you.'],
    body: 'Apps for your customers, your field teams and your shop floor, built to work with the systems you already use.',
    cta: { label: 'Explore mobile & web', href: '#service-engineering' },
    image: heroMobileDesign,
  },
  {
    label: 'AI Solutions',
    tag: 'Forecasting · Quality · Automation',
    title: ['Smart tools that', 'cut manual work.'],
    body: 'Forecast demand, catch quality problems early and take repetitive data entry off your team.',
    cta: { label: 'Explore AI solutions', href: '#service-ai' },
    image: wafer,
  },
]

export type Practice = {
  id: string
  name: string
  short: string
  icon: LucideIcon
  levels: Level[]
  summary: string
  capabilities: { title: string; body: string }[]
  image: string
}

export const practices: Practice[] = [
  {
    id: 'automation',
    icon: Factory,
    name: 'Industrial Automation Consulting',
    short: 'PLC, SCADA, MES and IIoT, designed to feed the business.',
    levels: ['L0', 'L1', 'L2', 'L3'],
    summary:
      'We assess, design and modernize the control and operations layers of your plant, with one rule: every signal that matters to the business must reach it, cleanly and in context.',
    capabilities: [
      {
        title: 'Automation maturity assessment',
        body: 'Audit of PLC, SCADA and network estate against ISA-95, with a costed modernization roadmap.',
      },
      {
        title: 'MES / MOM design and rollout',
        body: 'Work order execution, electronic batch records, genealogy and OEE, integrated rather than bolted on.',
      },
      {
        title: 'IIoT and edge architecture',
        body: 'Sensor retrofit, edge gateways and a unified namespace over OPC UA and MQTT.',
      },
      {
        title: 'Predictive maintenance',
        body: 'Condition monitoring on vibration, thermal and current signatures, closing the loop into maintenance planning.',
      },
      {
        title: 'OEE and line performance',
        body: 'Automatic downtime capture, reason coding and real-time dashboards per line, shift and asset.',
      },
      {
        title: 'Lights-out readiness',
        body: 'Exception handling, remote supervision and ERP transaction design for unmanned shifts and dark stores.',
      },
    ],
    image: media.fieldErp,
  },
  {
    id: 'oracle',
    icon: Database,
    name: 'Oracle ERP',
    short: 'Fusion Cloud and E-Business Suite for manufacturers.',
    levels: ['L4'],
    summary:
      'Implementation, upgrade and support for Oracle Fusion Cloud and E-Business Suite, configured by people who understand what happens on the shop floor.',
    capabilities: [
      {
        title: 'Fusion Cloud implementation',
        body: 'Manufacturing, SCM, Maintenance, Quality and Financials, delivered in phased, testable releases.',
      },
      {
        title: 'EBS to Fusion migration',
        body: 'Fit-gap, data migration, customization rationalization and parallel-run cutover planning.',
      },
      {
        title: 'EBS 12.2 support and upgrade',
        body: 'Health checks, online patching, performance tuning and Forms, OAF and PL/SQL development.',
      },
      {
        title: 'Oracle Integration Cloud',
        body: 'Event-driven integrations between Oracle, MES, WMS, PLM and third-party systems.',
      },
      {
        title: 'Extensions on APEX and VBCS',
        body: 'Purpose-built screens and workflows without touching the core, so upgrades stay clean.',
      },
      {
        title: 'Reporting and analytics',
        body: 'OTBI, BI Publisher and Oracle Analytics built around plant KPIs, not just ledger balances.',
      },
    ],
    image: media.erpDesk,
  },
  {
    id: 'ai',
    icon: Sparkles,
    name: 'AI & Intelligent Automation',
    short: 'Vision, forecasting, RPA and copilots on real operating data.',
    levels: ['L0', 'L3', 'L4'],
    summary:
      'Applied AI scoped to a single measurable decision at a time, trained on your plant and ERP data and deployed where operators actually work.',
    capabilities: [
      {
        title: 'Computer-vision inspection',
        body: 'Defect detection at line speed, with results written back to MES and Oracle Quality.',
      },
      {
        title: 'Demand and supply forecasting',
        body: 'Models that use order history, lead times and plant capacity to improve planning accuracy.',
      },
      {
        title: 'Robotic process automation',
        body: 'Bots for three-way match, GRN posting, vendor onboarding and other repetitive back-office work.',
      },
      {
        title: 'Document AI',
        body: 'Extraction from invoices, certificates of analysis and delivery notes straight into Oracle.',
      },
      {
        title: 'Operations copilots',
        body: 'Natural-language access to SOPs, machine history and ERP data for supervisors and planners.',
      },
      {
        title: 'Energy optimization',
        body: 'Load profiling and anomaly detection on utilities to cut cost per unit produced.',
      },
    ],
    image: media.opsRoom,
  },
  {
    id: 'engineering',
    icon: Smartphone,
    name: 'Digital Engineering',
    short: 'Shop-floor apps, portals and integration APIs.',
    levels: ['L2', 'L3', 'L4'],
    summary:
      'The last mile: the apps and interfaces people on the floor and in the field use to act on what the systems know.',
    capabilities: [
      {
        title: 'Shop-floor and field apps',
        body: 'Rugged-tablet and mobile apps in Flutter for maintenance, inspection, picking and cycle counts.',
      },
      {
        title: 'Supplier and customer portals',
        body: 'Self-service order status, ASN, quality certificates and returns, backed by Oracle.',
      },
      {
        title: 'Integration APIs',
        body: 'Secure REST and event APIs that expose plant and ERP data to the rest of the business.',
      },
      {
        title: 'Quality engineering',
        body: 'Automated regression suites for ERP releases and integration flows.',
      },
    ],
    image: media.warehouse,
  },
  {
    id: 'managed',
    icon: LifeBuoy,
    name: 'Managed Services',
    short: 'Run and improve Oracle, integrations and OT infrastructure.',
    levels: ['L2', 'L3', 'L4'],
    summary:
      'Application and infrastructure support under clear service levels, with a standing backlog of improvements, not just ticket closure.',
    capabilities: [
      {
        title: 'Oracle application support',
        body: 'L1 to L3 support for Fusion and EBS, including quarterly update testing.',
      },
      {
        title: 'Integration monitoring',
        body: 'Proactive monitoring of OIC and plant-to-ERP flows, with alerting before users notice.',
      },
      {
        title: 'OT/IT cybersecurity',
        body: 'Network segmentation, asset inventory and remote-access hardening aligned with IEC 62443.',
      },
      {
        title: 'Cloud and infrastructure',
        body: 'Hosting, backup and disaster recovery for plant servers, historians and integration middleware.',
      },
    ],
    image: media.plant,
  },
]

export const outcomes = [
  {
    topic: 'Downtime',
    icon: Timer,
    before: 'The reason is written on paper, typed in next shift, and often guessed.',
    after: 'Recorded automatically from the machine. The operator picks a reason in two taps.',
  },
  {
    topic: 'Maintenance',
    icon: Wrench,
    before: 'Machines are serviced on a fixed calendar, whether they need it or not.',
    after: 'Machines signal when they need service, and the job and spare parts are set up automatically.',
  },
  {
    topic: 'Inventory',
    icon: Boxes,
    before: 'Material use is entered at the end of the day, so stock numbers drift.',
    after: 'Stock updates the moment material is used, from scales, scanners or the line.',
  },
  {
    topic: 'Quality',
    icon: ShieldCheck,
    before: 'Tracing a bad batch takes days of spreadsheets and emails.',
    after: 'Trace any product back to its machine, recipe and supplier in seconds.',
  },
  {
    topic: 'Month-end',
    icon: CalendarCheck,
    before: 'Finance fixes production numbers by hand before closing the books.',
    after: 'Real costs come straight from the factory. Finance only checks the exceptions.',
  },
]

export const industries = [
  {
    name: 'Semiconductor & Electronics',
    icon: Cpu,
    useCase: 'Track every wafer and reel, keep lines running, and get accurate costs in Oracle.',
    image: media.wafer,
  },
  {
    name: 'Automotive & Components',
    icon: Car,
    useCase: 'Track every part, prevent assembly mistakes, and deliver parts in the right order.',
    image: media.autoLine,
  },
  {
    name: 'Pharma & Life Sciences',
    icon: Pill,
    useCase: 'Digital batch records, compliant production systems and product serial numbers linked to Oracle.',
  },
  {
    name: 'Industrial Machinery',
    icon: Cog,
    useCase: 'Plan custom orders, support machines in the field and give service teams mobile apps.',
    image: media.robotArm,
  },
  {
    name: 'Chemicals & Process',
    icon: FlaskConical,
    useCase: 'Manage recipes, track tank and silo stock, and measure how much each batch produces.',
  },
  {
    name: 'FMCG & Food',
    icon: ShoppingBasket,
    useCase: 'Keep fast lines running, control pack weights and be ready for recalls.',
  },
  {
    name: 'Logistics & Warehousing',
    icon: Truck,
    useCase: 'Connect your warehouse to Oracle, with handheld picking and dock scheduling.',
    image: media.warehouse,
  },
  {
    name: 'Energy & Utilities',
    icon: Zap,
    useCase: 'Watch equipment health, manage field work and produce regulatory reports.',
  },
  {
    name: 'Metals & Mining',
    icon: Pickaxe,
    useCase: 'Track every batch, connect weighbridges and measure energy used per tonne.',
  },
  {
    name: 'Retail & Distribution',
    icon: Store,
    useCase: 'Branch and field apps, fast order fulfilment and live stock levels.',
  },
]

export const phases = [
  {
    name: 'Assess',
    duration: '2–4 weeks',
    body: 'We visit your site, look at the systems you use, and measure where you are today.',
    deliverables: ['Map of your current systems', 'List of gaps and risks', 'Business case with priorities'],
  },
  {
    name: 'Design',
    duration: '3–6 weeks',
    body: 'We design how everything will connect and plan the work in stages.',
    deliverables: ['Design of the new setup', 'Connection and security plan', 'Delivery plan with owners'],
  },
  {
    name: 'Implement',
    duration: 'Phased releases',
    body: 'We build and launch in small steps, starting with one line or site.',
    deliverables: ['Working, connected systems', 'Tested go-live', 'Trained key users'],
  },
  {
    name: 'Support',
    duration: 'Ongoing',
    body: 'We support what we built, track the results and roll out to the next site.',
    deliverables: ['Support with agreed response times', 'Results review every quarter', 'Ongoing list of improvements'],
  },
]

export const engagements = [
  {
    name: 'Readiness assessment',
    icon: ClipboardCheck,
    body: 'Fixed-fee, fixed-scope review of one site. Ends with a roadmap you own, whoever you choose to build it.',
  },
  {
    name: 'Transformation program',
    icon: Rocket,
    body: 'Multi-phase delivery of automation, MES or Oracle scope, with a named program lead and milestone-based billing.',
  },
  {
    name: 'Managed services',
    icon: Headset,
    body: 'Monthly retainer for application, integration and OT support with defined service levels.',
  },
  {
    name: 'Specialist augmentation',
    icon: Users,
    body: 'Oracle functional and technical consultants, automation engineers or Flutter developers inside your team.',
  },
]

export const platforms: { layer: string; icon: LucideIcon; items: string[] }[] = [
  {
    layer: 'Enterprise',
    icon: Building2,
    items: ['Oracle Fusion Cloud SCM', 'Oracle Manufacturing', 'Oracle Maintenance', 'Oracle Quality', 'E-Business Suite 12.2', 'Oracle Integration Cloud', 'APEX', 'Visual Builder', 'OTBI & BI Publisher'],
  },
  {
    layer: 'Operations & Data',
    icon: Network,
    items: ['MES / MOM platforms', 'Process historians', 'Ignition', 'Kepware', 'PostgreSQL', 'Time-series databases', 'Python', 'FastAPI'],
  },
  {
    layer: 'Control & Connectivity',
    icon: Cpu,
    items: ['Siemens S7 / TIA Portal', 'Rockwell Logix', 'Schneider & ABB controllers', 'OPC UA', 'MQTT / Sparkplug B', 'Modbus TCP', 'Edge gateways'],
  },
  {
    layer: 'Apps & AI',
    icon: AppWindow,
    items: ['Flutter', 'React', 'Computer vision', 'Forecasting models', 'RPA platforms', 'LLM copilots', 'Docker'],
  },
]

export const differentiators = [
  {
    title: 'One team, start to finish',
    icon: Layers,
    body: 'Our automation engineers and Oracle consultants plan together, so everything is designed once and fits.',
  },
  {
    title: 'Deep Oracle experience',
    icon: Building2,
    body: 'We set up Oracle Fusion and E-Business Suite the way factories really work.',
  },
  {
    title: 'Experienced people do the work',
    icon: UserCheck,
    body: 'The people you meet at the start are the people who build it.',
  },
  {
    title: 'Secure from day one',
    icon: Lock,
    body: 'Every connection between your factory and the cloud is protected, following industry security standards.',
  },
  {
    title: 'We work with what you have',
    icon: Shuffle,
    body: 'We use the machines and systems you already own, and only suggest changes that pay off.',
  },
  {
    title: 'Based in Hyderabad, working worldwide',
    icon: Globe,
    body: 'Our team in Gachibowli works hours that overlap with India, the Middle East, Europe and the US.',
  },
]

export const insights = [
  {
    category: 'Architecture',
    title: 'Factory software or Oracle: which system should do what?',
    summary: 'A simple way to split the work so both systems stay easy to run.',
    readingTime: '7 min read',
    image: media.opsRoom,
  },
  {
    category: 'Oracle ERP',
    title: 'Should you upgrade Oracle EBS or move to Fusion Cloud?',
    summary: 'Five questions that help you decide to upgrade, move, or run both for a while.',
    readingTime: '9 min read',
    image: media.erpDesk,
  },
  {
    category: 'Automation',
    title: 'Five checks before you run a shift without staff',
    summary: 'What needs to be in place before a shift can run on its own.',
    readingTime: '6 min read',
    image: media.robotArm,
  },
]

export const offices = [
  {
    city: 'Hyderabad',
    label: 'Headquarters & delivery center',
    address:
      'Innov8 Vasavi Gachibowli, Vasavi’s Shalom Sky City, 7th Floor, Tower-1, Unit No-701 to 710, Gachibowli, Kondapur, Hyderabad, Telangana 500081',
    hours: 'Mon–Fri, 9:00 AM – 6:30 PM IST',
  },
]

export const contactEmail = 'support@quontriz.com'

export const nextSteps = [
  'A consultant replies within one business day.',
  'A 45-minute call to understand your plant, systems and goals.',
  'A written proposal with scope, timeline and fixed or capped fees.',
]

export const serviceOptions = [
  'Industrial automation consulting',
  'MES / IIoT',
  'Oracle Fusion Cloud',
  'Oracle E-Business Suite',
  'AI & intelligent automation',
  'Shop-floor & mobile apps',
  'Managed services',
  'Something else',
]
