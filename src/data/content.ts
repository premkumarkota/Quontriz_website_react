import {
  Brain,
  Cloud,
  Cpu,
  Layers,
  LineChart,
  Package,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import erpDesk from '../assets/media/erp-desk.jpg'
import fieldErp from '../assets/media/field-erp.jpg'
import gachibowli from '../assets/media/gachibowli.jpg'
import mobileApp from '../assets/media/mobile-app.jpg'
import wafer from '../assets/media/wafer.jpg'
import warehouse from '../assets/media/warehouse.jpg'

export const navLinks = [
  { label: 'Studio', href: '#about' },
  { label: 'Work', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Notes', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: 1, suffix: '', label: 'Hyderabad HQ' },
  { value: 100, suffix: '%', label: 'Mobile-First Delivery' },
  { value: 8, suffix: '', label: 'Core Services' },
  { value: 100, suffix: '%', label: 'Founder-Led' },
]

export const missionPoints = [
  'Deliver high-quality mobile app solutions for iOS and Android.',
  'Stay close to real customer workflows, not slide decks.',
  'Ship small, learn fast, and grow with our partners.',
  'Keep consulting honest, hands-on, and founder-led.',
]

export const coreValues = [
  {
    title: 'Honesty',
    description: 'We’re early. We say what we can deliver today — and what we’re still building.',
  },
  {
    title: 'Speed',
    description: 'We move quickly: short loops, clear demos, and real feedback.',
  },
  {
    title: 'Craft',
    description: 'Every app feature should feel useful, clear, and worth someone’s time.',
  },
  {
    title: 'Partnership',
    description: 'Customers and partners shape the roadmap with us.',
  },
]

export const services: {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}[] = [
  {
    icon: Smartphone,
    title: 'Mobile App Solutions',
    description:
      'End-to-end mobile app design and development for iOS and Android — from idea to launch and ongoing support.',
    points: ['Flutter / native-ready delivery', 'Customer & field apps', 'App Store & Play Store release'],
  },
  {
    icon: Workflow,
    title: 'Custom App Engineering',
    description:
      'Full-stack builds with Flutter frontends and robust backends — owned platforms without third-party lock-in.',
    points: ['Mobile + web admin panels', 'REST APIs & integrations', 'Secure cloud backends'],
  },
  {
    icon: Cloud,
    title: 'Oracle Fusion Cloud Advisory',
    description:
      'Hands-on guidance for teams exploring Fusion Cloud — assessments, roadmaps, and implementation support.',
    points: ['Discovery workshops', 'Cloud readiness reviews', 'Pilot-friendly engagements'],
  },
  {
    icon: Layers,
    title: 'Oracle EBS Support & Modernization',
    description:
      'Practical help for EBS landscapes — from health checks to upgrade planning and custom development.',
    points: ['Health checks', 'Upgrade planning', 'Forms / PL/SQL support'],
  },
  {
    icon: Cpu,
    title: 'Semiconductor & High-Tech Consulting',
    description:
      'Consulting for fab-adjacent and electronics manufacturers modernizing planning and supply chain processes.',
    points: ['Process discovery', 'ERP fit assessment', 'Integration scoping'],
  },
  {
    icon: Sparkles,
    title: 'Digital Transformation Starters',
    description:
      'Short, focused engagements to map automation opportunities, data gaps, and a realistic 90-day plan.',
    points: ['90-day roadmaps', 'Automation candidates', 'Legacy system review'],
  },
  {
    icon: Package,
    title: 'UI/UX for Mobile',
    description:
      'Clean, conversion-focused mobile experiences — wireframes, prototypes, and production-ready UI systems.',
    points: ['User flows', 'Design systems', 'Handoff-ready screens'],
  },
  {
    icon: Brain,
    title: 'AI Features in Apps',
    description:
      'Practical AI add-ons scoped to real user workflows — planners, assistants, and intelligent automation.',
    points: ['Use-case workshops', 'Prototype demos', 'Production-ready features'],
  },
]

export const industries = [
  {
    name: 'Retail & Distribution',
    description: 'Customer and ops mobile apps for branches and field teams.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Education & EdTech',
    description: 'Learning and engagement apps for students and teachers.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Healthcare',
    description: 'Secure mobile experiences for care and operations teams.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Semiconductor',
    description: 'Where our Oracle practice goes deep.',
    image: wafer,
  },
  {
    name: 'Electronics Manufacturing',
    description: 'OEM / EMS process complexity.',
    image: fieldErp,
  },
  {
    name: 'High-Tech Manufacturing',
    description: 'Product + process heavy environments.',
    image:
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Automotive Components',
    description: 'Quality and traceability pressure.',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Industrial Manufacturing',
    description: 'ERP modernization journeys.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Logistics',
    description: 'Tracking, scheduling, and field workforce apps.',
    image: warehouse,
  },
]

export const whyChooseUs = [
  {
    icon: Smartphone,
    title: 'Mobile App Specialists',
    description: 'We provide mobile app solutions — built for real users, real devices, and real business outcomes.',
  },
  {
    icon: Rocket,
    title: 'Focused Delivery',
    description: 'Based in Hyderabad — focused on shipping apps and partnering closely with customers.',
  },
  {
    icon: Users,
    title: 'Founder-Led Delivery',
    description: 'You work directly with the people building the company and your solution.',
  },
  {
    icon: LineChart,
    title: 'Full-Stack Ownership',
    description: 'From Flutter apps to FastAPI backends — we own the loop end to end.',
  },
  {
    icon: Sparkles,
    title: 'Build-With-You Mindset',
    description: 'Partners influence roadmap priorities and get white-glove attention.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description: 'We treat access, data, and production systems carefully from day one.',
  },
]

export const trustPoints = [
  { label: 'Mobile App Solutions' },
  { label: 'Hyderabad HQ · Gachibowli' },
  { label: 'Flutter + FastAPI Stack' },
  { label: 'Founder-Led Engagements' },
  { label: 'Agile Delivery' },
  { label: 'Partner Friendly' },
  { label: 'Honest Roadmaps' },
  { label: 'End-to-End Ownership' },
]

export const processSteps = [
  { step: '01', title: 'Discovery', description: 'A short call to understand your goals and users.' },
  { step: '02', title: 'Scoping', description: 'Define a small, useful first engagement or MVP.' },
  { step: '03', title: 'Design', description: 'Sketch the approach with clear success criteria.' },
  { step: '04', title: 'Build', description: 'Ship mobile app features or consulting deliverables.' },
  { step: '05', title: 'Validate', description: 'Test with real users and refine quickly.' },
  { step: '06', title: 'Launch', description: 'Go live in a controlled, low-risk way.' },
  { step: '07', title: 'Iterate', description: 'Keep improving with feedback as we grow together.' },
]

export const technologies = [
  'Flutter',
  'Flutter Web',
  'FastAPI',
  'Python',
  'PostgreSQL',
  'REST APIs',
  'AI & Machine Learning',
  'Oracle Fusion Cloud ERP',
  'Oracle E-Business Suite',
  'Oracle Integration Cloud',
  'Oracle Visual Builder',
  'Oracle APEX',
  'Oracle Database',
  'PL/SQL',
  'BI Publisher',
  'Oracle Analytics',
  'Docker',
  'React',
]

export const testimonials = [
  {
    name: 'Venkata Sai Reddy',
    company: 'Sri Lakshmi Retail',
    position: 'Operations Manager',
    rating: 5,
    quote:
      'QUONTRIZ delivered a clean mobile app for our branch team. Clear communication, fast iterations, and a launch we could trust.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lakshmi Priya',
    company: 'Andhra Learning Circle',
    position: 'Academic Coordinator',
    rating: 5,
    quote:
      'They understood our mobile-first needs quickly and built an app experience our users actually enjoy using.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Srinivas Naidu',
    company: 'Vizag Ops Collective',
    position: 'Branch Head',
    rating: 5,
    quote:
      'Full-stack ownership from app to backend made delivery simple. Clear ownership, clear timelines, solid result.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
]

export const statistics = [
  { value: 100, suffix: '%', label: 'Mobile-First Focus' },
  { value: 8, suffix: '', label: 'Services Offered' },
  { value: 9, suffix: '', label: 'Industries We’re Targeting' },
  { value: 1, suffix: '', label: 'HQ · Gachibowli' },
  { value: 100, suffix: '%', label: 'Founder-Led' },
  { value: 24, suffix: '/7', label: 'Support Mindset' },
]

export const careers = [
  {
    position: 'Founding Flutter Engineer',
    location: 'Hyderabad / Hybrid',
    experience: '2–5 years',
    type: 'Full-time',
  },
  {
    position: 'Founding Backend Engineer (FastAPI)',
    location: 'Hyderabad / Hybrid',
    experience: '3–6 years',
    type: 'Full-time',
  },
  {
    position: 'Oracle Functional Consultant (Early Team)',
    location: 'Hyderabad / Remote',
    experience: '4–8 years',
    type: 'Full-time / Contract',
  },
  {
    position: 'Product Designer (Founding)',
    location: 'Hyderabad / Remote',
    experience: '2–5 years',
    type: 'Contract → Full-time',
  },
]

export const blogPosts = [
  {
    title: 'Why We Started QUONTRIZ Technologies',
    category: 'Company',
    date: 'Jul 17, 2026',
    readingTime: '4 min read',
    image: gachibowli,
  },
  {
    title: 'How We Approach Mobile App Solutions',
    category: 'Mobile',
    date: 'Jul 24, 2026',
    readingTime: '5 min read',
    image: mobileApp,
  },
  {
    title: 'Flutter for Enterprise-Ready Mobile Delivery',
    category: 'Engineering',
    date: 'Jul 30, 2026',
    readingTime: '4 min read',
    image: erpDesk,
  },
]

export const offices = [
  {
    city: 'Hyderabad',
    address:
      'Innov8 Vasavi Gachibowli, Vasavi’s Shalom Sky City, 7th Floor, Tower-1, Unit No-701 to 710, SY.NO. 17, Gachibowli Village, Kondapur, Serilingampally Mandal, Rangareddy District, Telangana 500081',
    hours: 'Mon–Fri, 9:00 AM – 6:30 PM IST',
  },
]

export const contactEmail = 'support@quontriz.com'

export const serviceOptions = [
  'Mobile App Solutions',
  'Custom App Engineering',
  'Oracle Fusion Cloud Advisory',
  'Oracle EBS Support',
  'UI/UX for Mobile',
  'Digital Transformation Starter',
  'Other',
]
