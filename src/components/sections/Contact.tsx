import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Clock3, Mail, MapPin } from 'lucide-react'
import { contactEmail, offices, serviceOptions } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the founders"
          description="Ask about mobile app solutions or consulting help — we typically reply within one business day."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8 dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
              <Field label="Company" id="company" />
              <Field label="Phone" id="phone" type="tel" />
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  placeholder="Share your project goals, timeline, and current Oracle landscape..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit">Send Message</Button>
              {submitted && (
                <p className="text-sm font-medium text-brand-700 dark:text-brand-300" role="status">
                  Thank you — we’ll be in touch shortly.
                </p>
              )}
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <div
              className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-brand-50 p-6 dark:border-white/10 dark:from-brand-900 dark:to-brand-800"
              role="img"
              aria-label="Map placeholder for QUONTRIZ Hyderabad office"
            >
              <div className="text-center">
                <MapPin className="mx-auto text-brand-600 dark:text-brand-300" size={28} />
                <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Innov8 Vasavi · Gachibowli
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Hyderabad, Telangana 500081
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/5">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Email</p>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-slate-600 hover:text-brand-700 dark:text-slate-300"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Office</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Innov8 Vasavi Gachibowli, Hyderabad
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock3 className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-300" size={18} />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Business Hours</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Mon–Fri · 9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {offices.map((office) => (
                <address
                  key={office.city}
                  className="not-italic rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-display font-bold text-slate-900 dark:text-white">
                    {office.city} HQ
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {office.address}
                  </p>
                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{office.hours}</p>
                </address>
              ))}
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  required,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  )
}
