import { CircleCheck, Mail, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { contactEmail, nextSteps, offices, serviceOptions } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const field =
  'mt-2 h-12 w-full rounded-xl border border-line bg-porcelain/50 px-4 py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-steel/60 focus:border-cobalt focus:bg-white focus:ring-4 focus:ring-cobalt/15'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const office = offices[0]

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-porcelain">
      <Container className="relative">
        <div className="grid overflow-hidden rounded-[32px] border border-line bg-white shadow-[0_50px_100px_-60px_rgb(10_22_40/0.45)] lg:grid-cols-[1fr_1.2fr]">
          {/* Info side */}
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-brand-50/50 to-white p-7 sm:p-10 lg:p-12">
            <div className="drawing-grid absolute inset-0" aria-hidden />
            <div className="relative">
              <p className="tag flex items-center gap-3 text-cobalt">
                <span className="h-px w-8 bg-cobalt" aria-hidden />
                Contact
              </p>
              <h2 className="display mt-5 text-[2.1rem] leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
                Tell us what you want to build.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-[1.7] text-steel">
                A plant, a product or an Oracle project. We will come back with how we would build it, how long
                it would take, and what it would cost.
              </p>

              <h3 className="mt-10 text-[0.9rem] font-semibold text-ink">What happens next</h3>
              <ol className="relative mt-5 space-y-6">
                <span className="absolute bottom-3 left-[0.9rem] top-3 w-px bg-brand-200" aria-hidden />
                {nextSteps.map((s, i) => (
                  <li key={s} className="relative flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalt text-[0.8rem] font-semibold text-white ring-4 ring-brand-50">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-[1.6] text-ink">{s}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-10 grid gap-3">
                <a
                  href={`mailto:${contactEmail}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-brand-200"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                    <Mail size={18} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] text-steel">Email us</span>
                    <span className="font-semibold text-ink">{contactEmail}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-cobalt">
                    <MapPin size={18} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[0.8rem] text-steel">{office.hours}</span>
                    <span className="block text-[0.92rem] leading-relaxed text-ink">{office.address}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <form onSubmit={onSubmit} className="p-7 text-ink sm:p-10 lg:p-12">
            <p className="display text-2xl">Request a consultation</p>
            <p className="mt-2 text-[0.95rem] text-steel">Fields marked * are required.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name *" id="name" autoComplete="name" required />
              <Field label="Work email *" id="email" type="email" autoComplete="email" required />
              <Field label="Company *" id="company" autoComplete="organization" required />
              <Field label="Job title" id="title" autoComplete="organization-title" />
              <Field label="Phone" id="phone" type="tel" autoComplete="tel" />
              <div>
                <label htmlFor="service" className="text-[0.9rem] font-medium">
                  Area of interest *
                </label>
                <select id="service" name="service" className={field} defaultValue="" required>
                  <option value="" disabled>
                    Select one
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-[0.9rem] font-medium">
                What are you trying to solve? *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${field} h-auto resize-y`}
                placeholder="What you want to build, the systems you use today, and your timeline"
              />
            </div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" className="rounded-xl sm:px-8">
                Request consultation
                <Send size={15} aria-hidden />
              </Button>
              {submitted && (
                <p className="flex items-center gap-2 text-[0.95rem] font-medium text-cobalt" role="status">
                  <CircleCheck size={17} aria-hidden />
                  Request received. A consultant will reply within one business day.
                </p>
              )}
            </div>
          </form>
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
  autoComplete,
}: {
  label: string
  id: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[0.9rem] font-medium">
        {label}
      </label>
      <input id={id} name={id} type={type} required={required} autoComplete={autoComplete} className={field} />
    </div>
  )
}
