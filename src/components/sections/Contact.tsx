import { Mail, MapPin } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { contactEmail, nextSteps, offices, serviceOptions } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const field =
  'mt-2 h-12 w-full rounded-[3px] border border-line bg-white px-4 py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-steel/60 focus:border-cobalt focus:ring-2 focus:ring-cobalt/15'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const office = offices[0]

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      <div className="drawing-grid absolute inset-0" aria-hidden />
      <Container className="section-pad relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <p className="tag flex items-center gap-3 text-brand-200">
              <span className="h-px w-8 bg-brand-200" aria-hidden />
              Contact
            </p>
            <h2 className="display mt-5 text-[2.2rem] leading-[1.08] sm:text-[3rem] lg:text-[3.4rem]">
              Let’s trace one signal through your plant.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-[1.7] text-white/75">
              Tell us about a line, a site or an Oracle landscape. We will come back with how we would
              connect it, what it would take, and what it would be worth.
            </p>

            <ol className="mt-10 space-y-5 border-t border-white/15 pt-8">
              {nextSteps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="font-mono text-sm text-amber">{i + 1}</span>
                  <span className="text-white/85">{s}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10 space-y-4 border-t border-white/15 pt-8 text-[0.95rem]">
              <p className="flex items-center gap-3">
                <Mail size={17} className="shrink-0 text-brand-200" aria-hidden />
                <a href={`mailto:${contactEmail}`} className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                  {contactEmail}
                </a>
              </p>
              <p className="flex max-w-md items-start gap-3 leading-relaxed text-white/75">
                <MapPin size={17} className="mt-1 shrink-0 text-brand-200" aria-hidden />
                <span>{office.address}</span>
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[4px] bg-white p-7 text-ink shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] sm:p-10"
          >
            <p className="display text-2xl">Request a consultation</p>
            <p className="mt-2 text-[0.95rem] text-steel">All fields marked * are required.</p>
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
                rows={4}
                required
                className={`${field} h-auto resize-y`}
                placeholder="Plant type, current systems (PLC, SCADA, MES, Oracle version), timeline…"
              />
            </div>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit">Request consultation</Button>
              {submitted && (
                <p className="text-[0.95rem] font-medium text-cobalt" role="status">
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
