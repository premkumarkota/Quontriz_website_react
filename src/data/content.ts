import {
  Armchair,
  Brain,
  Cloud,
  Cpu,
  GraduationCap,
  Layers,
  LineChart,
  Package,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products', href: '#portfolio' },
  { label: 'Careers', href: '#careers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: 2, suffix: '', label: 'In-House Products' },
  { value: 4, suffix: '', label: 'Apps Across Products' },
  { value: 1, suffix: '', label: 'Hyderabad HQ' },
  { value: 100, suffix: '%', label: 'Builder Energy' },
]

export const missionPoints = [
  'Ship useful products people can buy, rent, learn, and work with — starting with LuxeHome and MyMentor.',
  'Stay close to real customer workflows, not slide decks.',
  'Ship small, learn fast, and grow with our first users and partners.',
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
    description: 'Every product feature should feel useful, clear, and worth someone’s time.',
  },
  {
    title: 'Partnership',
    description: 'Early customers and partners shape the roadmap with us.',
  },
]

export const services: {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}[] = [
  {
    icon: Armchair,
    title: 'LuxeHome',
    description:
      'A single-brand premium furniture platform to buy, rent, and refurbish furniture through one mobile ecosystem — catalog by branch, orders, monthly rentals, and at-home refurbishment.',
    points: [
      'Customer App · Technician App · Flutter Web Admin',
      'Real-time orders & rental lifecycle',
      'One FastAPI backend — full service loop owned in-house',
    ],
  },
  {
    icon: GraduationCap,
    title: 'MyMentor',
    description:
      'A student and teacher connecting app for doubt resolution, video lessons, learning content, quizzes, and AI-guided study planning.',
    points: [
      'MyMentor App for Students & Teachers',
      'Video lessons & structured content',
      'Quizzes + AI study planner',
    ],
  },
  {
    icon: Cloud,
    title: 'Oracle Fusion Cloud Advisory',
    description:
      'Hands-on guidance for teams exploring Fusion Cloud — assessments, roadmaps, and implementation support as we grow.',
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
      'Early-stage consulting for fab-adjacent and electronics manufacturers modernizing planning and supply chain processes.',
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
    icon: Workflow,
    title: 'Custom Product Engineering',
    description:
      'Flutter, FastAPI, and full-stack builds for teams that want owned platforms — the same stack we use for LuxeHome and MyMentor.',
    points: ['Mobile + web apps', 'Backend APIs', 'Admin panels'],
  },
  {
    icon: Brain,
    title: 'AI Features for Products',
    description:
      'Practical AI add-ons — like MyMentor’s study planner — scoped to real user workflows.',
    points: ['Use-case workshops', 'Prototype demos', 'Production-ready features'],
  },
]

export const industries = [
  { name: 'Furniture & Lifestyle', description: 'Buy, rent, and refurbish experiences via LuxeHome.' },
  { name: 'Education & EdTech', description: 'Student–teacher learning loops via MyMentor.' },
  { name: 'Retail & Distribution', description: 'Branch catalog, stock, and fulfillment ops.' },
  { name: 'Semiconductor', description: 'Where our Oracle practice goes deep.' },
  { name: 'Electronics Manufacturing', description: 'OEM / EMS process complexity.' },
  { name: 'High-Tech Manufacturing', description: 'Product + process heavy environments.' },
  { name: 'Automotive Components', description: 'Quality and traceability pressure.' },
  { name: 'Industrial Manufacturing', description: 'ERP modernization journeys.' },
  { name: 'Healthcare Manufacturing', description: 'Regulated production contexts.' },
]

export const portfolio = [
  {
    client: 'QUONTRIZ',
    industry: 'Furniture · In-House',
    title: 'LuxeHome',
    description:
      'A single-brand premium furniture platform that lets customers buy, rent, and refurbish furniture through one mobile app — browse by branch, place buy orders, start monthly rentals, and request at-home refurbishment with photos and issue details.',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    apps: [
      'LuxeHome Customer App',
      'LuxeHome Technician App',
      'Flutter Web Admin Panel',
    ],
    technologies: ['Flutter', 'Flutter Web', 'FastAPI', 'PostgreSQL'],
    results: [
      'Orders and rentals tracked in real time from confirmation through delivery or subscription lifecycle',
      'Refurbishment workflow: admins accept requests, schedule visits, and assign technicians by specialty and branch',
      'Technician app: job list, address & photos, one-tap maps, start/complete with before/after uploads',
      'Admin Panel (Super Admin + Branch Admin): catalog, stock, locations, workforce, and finance',
      'One FastAPI backend — no third-party vendors — full customer-to-technician loop owned in-house',
    ],
    before: 'Fragmented buy / rent / service journeys',
    after: 'One owned platform from customer to technician',
  },
  {
    client: 'QUONTRIZ',
    industry: 'EdTech · In-House',
    title: 'MyMentor',
    description:
      'A student and teacher connecting app that helps students resolve doubts, access video lessons and learning content, take quizzes, and plan studies with an AI planner.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    apps: ['MyMentor App — Students & Teachers'],
    technologies: ['Flutter', 'AI Planner', 'Video Lessons', 'Quizzes'],
    results: [
      'Connect students and teachers for doubt resolution',
      'Video lessons and structured learning content',
      'Quizzes to reinforce understanding',
      'AI planner to guide study plans',
    ],
    before: 'Scattered tutors, content, and study plans',
    after: 'One app for doubts, lessons, quizzes & planning',
  },
]

export const whyChooseUs = [
  {
    icon: Rocket,
    title: 'Brand New, Fully Focused',
    description: 'Based in Hyderabad — focused on shipping products and partnering closely with customers.',
  },
  {
    icon: Package,
    title: 'Two Real Products Already',
    description: 'LuxeHome and MyMentor are live in-house products across mobile and admin experiences.',
  },
  {
    icon: Users,
    title: 'Founder-Led Delivery',
    description: 'You work directly with the people building the company and the products.',
  },
  {
    icon: LineChart,
    title: 'Full-Stack Ownership',
    description: 'From Flutter apps to FastAPI backends — we own the loop end to end, like LuxeHome.',
  },
  {
    icon: Sparkles,
    title: 'Build-With-You Mindset',
    description: 'Early partners influence roadmap priorities and get white-glove attention.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    description: 'Even as a young company, we treat access, data, and production systems carefully.',
  },
]

export const trustPoints = [
  { label: 'LuxeHome + MyMentor' },
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
  { step: '02', title: 'Scoping', description: 'Define a small, useful first engagement or pilot.' },
  { step: '03', title: 'Design', description: 'Sketch the approach with clear success criteria.' },
  { step: '04', title: 'Build', description: 'Ship product features or consulting deliverables.' },
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
    company: 'Sri Lakshmi Furnishings',
    position: 'Operations Manager',
    rating: 5,
    quote:
      'LuxeHome’s buy–rent–refurbish flow in one app is exactly what our Guntur branch team needed. The technician assignment by specialty is very practical.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lakshmi Priya',
    company: 'Andhra Learning Circle',
    position: 'Academic Coordinator',
    rating: 5,
    quote:
      'MyMentor makes it easy for our Vijayawada students to clear doubts with teachers, watch lessons, and follow the AI study planner.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Srinivas Naidu',
    company: 'Vizag Home Styles',
    position: 'Branch Head',
    rating: 5,
    quote:
      'We liked that QUONTRIZ owns the full stack — Customer app, Technician app, Admin panel, and backend. Clear ownership, clear delivery.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
]

export const statistics = [
  { value: 2, suffix: '', label: 'In-House Products' },
  { value: 4, suffix: '', label: 'Apps Across Products' },
  { value: 8, suffix: '', label: 'Services Offered' },
  { value: 9, suffix: '', label: 'Industries We’re Targeting' },
  { value: 1, suffix: '', label: 'HQ · Gachibowli' },
  { value: 100, suffix: '%', label: 'Founder-Led' },
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
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Meet LuxeHome: Buy, Rent & Refurbish in One App',
    category: 'Products',
    date: 'Jul 24, 2026',
    readingTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Inside MyMentor: Doubts, Lessons, Quizzes & AI Planning',
    category: 'Products',
    date: 'Jul 30, 2026',
    readingTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
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
  'LuxeHome',
  'MyMentor',
  'Oracle Fusion Cloud Advisory',
  'Oracle EBS Support',
  'Custom Product Engineering',
  'Digital Transformation Starter',
  'Other',
]
