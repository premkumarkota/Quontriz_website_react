import { Database, Factory, Smartphone, Sparkles } from 'lucide-react'
import erpDesk from '../assets/media/erp-desk.jpg'
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

export const heroServices = [
  {
    icon: Database,
    title: 'Oracle ERP',
    body: 'Fusion Cloud and E-Business Suite implementation, upgrades and support.',
    href: '#service-oracle',
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    body: 'PLC, SCADA, MES and IIoT that connect your shop floor to your business.',
    href: '#service-automation',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Products',
    body: 'Apps, portals and platforms, designed and engineered end to end.',
    href: '#service-engineering',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    body: 'Forecasting, vision, document AI and bots that remove manual work.',
    href: '#service-ai',
  },
]

export const gaps = [
  {
    title: 'Downtime lives on clipboards',
    body: 'Stoppage reasons are written by hand and keyed in a shift later. Maintenance plans against memory, not machine history.',
  },
  {
    title: 'ERP learns the truth too late',
    body: 'Production, scrap and consumption post in end-of-day batches. Inventory, costing and ATP are always a few hours wrong.',
  },
  {
    title: 'Quality has no genealogy',
    body: 'When a lot fails, tracing it back to the machine, the recipe and the supplier reel takes days of spreadsheet work.',
  },
]

export type Practice = {
  id: string
  name: string
  short: string
  levels: Level[]
  summary: string
  capabilities: { title: string; body: string }[]
  image: string
}

export const practices: Practice[] = [
  {
    id: 'automation',
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
    before: 'Reason written on paper, keyed next shift, often guessed.',
    after: 'Captured from PLC state, coded by the operator in two taps, costed in Oracle.',
  },
  {
    topic: 'Maintenance',
    before: 'Calendar-based PMs regardless of machine condition.',
    after: 'Condition triggers create work orders and reserve spares automatically.',
  },
  {
    topic: 'Inventory',
    before: 'Consumption backflushed at day end; stock accuracy drifts.',
    after: 'Material movements post as they happen, from scale, scanner or MES.',
  },
  {
    topic: 'Quality',
    before: 'Lot trace takes days across spreadsheets and emails.',
    after: 'Full genealogy from finished good to machine, recipe and supplier lot in seconds.',
  },
  {
    topic: 'Month-end',
    before: 'Production variances reconciled by hand before close.',
    after: 'Actual costs flow from the floor; finance reviews exceptions only.',
  },
]

export const industries = [
  {
    name: 'Semiconductor & Electronics',
    useCase: 'Wafer and reel genealogy, stocker automation, SMT line OEE, EMS costing in Oracle.',
    image: media.wafer,
  },
  {
    name: 'Automotive & Components',
    useCase: 'Part-level traceability, error-proofing, PPAP records and JIT/JIS sequencing.',
    image: media.autoLine,
  },
  {
    name: 'Pharma & Life Sciences',
    useCase: 'Electronic batch records, GMP-compliant MES and serialization linked to ERP lots.',
  },
  {
    name: 'Industrial Machinery',
    useCase: 'Engineer-to-order planning, connected-product service and field maintenance apps.',
    image: media.robotArm,
  },
  {
    name: 'Chemicals & Process',
    useCase: 'Recipe management, tank and silo inventory, batch genealogy and yield tracking.',
  },
  {
    name: 'FMCG & Food',
    useCase: 'High-speed line OEE, weight control, shelf-life and recall readiness.',
  },
  {
    name: 'Logistics & Warehousing',
    useCase: 'WMS to ERP integration, automated storage, handheld picking and dock scheduling.',
    image: media.warehouse,
  },
  {
    name: 'Energy & Utilities',
    useCase: 'Asset condition monitoring, work management and regulatory reporting.',
  },
  {
    name: 'Metals & Mining',
    useCase: 'Heat and coil tracking, weighbridge integration and energy per tonne.',
  },
  {
    name: 'Retail & Distribution',
    useCase: 'Branch and field apps, dark-store fulfilment and inventory visibility.',
  },
]

export const phases = [
  {
    name: 'Assess',
    duration: '2–4 weeks',
    body: 'Walk the floor, map systems level by level, and baseline the KPIs that matter.',
    deliverables: ['Current-state ISA-95 map', 'Gap and risk register', 'Prioritized business case'],
  },
  {
    name: 'Architect',
    duration: '3–6 weeks',
    body: 'Design the target data flows from sensor to ledger, and a phased roadmap to get there.',
    deliverables: ['Target architecture', 'Integration and security design', 'Release plan with owners'],
  },
  {
    name: 'Implement',
    duration: 'Phased releases',
    body: 'Deliver in production-ready increments, starting with a single line or site as the pilot.',
    deliverables: ['Configured systems and integrations', 'Tested cutover', 'Trained super-users'],
  },
  {
    name: 'Run & improve',
    duration: 'Ongoing',
    body: 'Support the live estate, measure against the baseline and roll out to the next line.',
    deliverables: ['SLA-backed support', 'Quarterly value review', 'Continuous improvement backlog'],
  },
]

export const engagements = [
  {
    name: 'Readiness assessment',
    body: 'Fixed-fee, fixed-scope review of one site. Ends with a roadmap you own, whoever you choose to build it.',
  },
  {
    name: 'Transformation program',
    body: 'Multi-phase delivery of automation, MES or Oracle scope, with a named program lead and milestone-based billing.',
  },
  {
    name: 'Managed services',
    body: 'Monthly retainer for application, integration and OT support with defined service levels.',
  },
  {
    name: 'Specialist augmentation',
    body: 'Oracle functional and technical consultants, automation engineers or Flutter developers inside your team.',
  },
]

export const platforms: { layer: string; items: string[] }[] = [
  {
    layer: 'Enterprise',
    items: ['Oracle Fusion Cloud SCM', 'Oracle Manufacturing', 'Oracle Maintenance', 'Oracle Quality', 'E-Business Suite 12.2', 'Oracle Integration Cloud', 'APEX', 'Visual Builder', 'OTBI & BI Publisher'],
  },
  {
    layer: 'Operations & Data',
    items: ['MES / MOM platforms', 'Process historians', 'Ignition', 'Kepware', 'PostgreSQL', 'Time-series databases', 'Python', 'FastAPI'],
  },
  {
    layer: 'Control & Connectivity',
    items: ['Siemens S7 / TIA Portal', 'Rockwell Logix', 'Schneider & ABB controllers', 'OPC UA', 'MQTT / Sparkplug B', 'Modbus TCP', 'Edge gateways'],
  },
  {
    layer: 'Apps & AI',
    items: ['Flutter', 'React', 'Computer vision', 'Forecasting models', 'RPA platforms', 'LLM copilots', 'Docker'],
  },
]

export const differentiators = [
  {
    title: 'One team from PLC to P&L',
    body: 'Automation engineers and Oracle consultants plan together, so integrations are designed once, not argued over twice.',
  },
  {
    title: 'Oracle-native manufacturing depth',
    body: 'We configure Fusion and EBS the way plants actually run: routings, resources, WIP, costing and maintenance.',
  },
  {
    title: 'Senior people on the work',
    body: 'The consultants you meet in the assessment are the ones who design and deliver it.',
  },
  {
    title: 'Security designed in',
    body: 'Connecting the floor to the cloud is done with segmentation, least privilege and IEC 62443 principles from day one.',
  },
  {
    title: 'Vendor-neutral on the floor',
    body: 'We work with the PLCs, SCADA and MES you already own and recommend change only where it pays back.',
  },
  {
    title: 'Hyderabad delivery, global hours',
    body: 'Delivery from Gachibowli with overlap for India, Middle East, Europe and US time zones.',
  },
]

export const insights = [
  {
    category: 'Architecture',
    title: 'ISA-95 in practice: where your MES ends and Oracle begins',
    summary: 'A pragmatic split of responsibilities that keeps both systems simple.',
    readingTime: '7 min read',
    image: media.opsRoom,
  },
  {
    category: 'Oracle ERP',
    title: 'EBS 12.2 or Fusion Cloud? A decision framework for manufacturers',
    summary: 'Five questions that decide whether to upgrade, migrate or run both for a while.',
    readingTime: '9 min read',
    image: media.erpDesk,
  },
  {
    category: 'Automation',
    title: 'Lights-out readiness: five checks before you remove the night shift',
    summary: 'What has to be true in control, MES and ERP before a shift runs unmanned.',
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
