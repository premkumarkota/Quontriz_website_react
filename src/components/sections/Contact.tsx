import { MapPin } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import hitecNight from '../../assets/media/hitec-night.jpg'
import { contactEmail, offices, serviceOptions } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const field =
  'w-full border-0 border-b border-hairline bg-transparent px-0 py-3 text-base text-ink outline-none transition placeholder:text-ink/45 focus:border-signal'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const office = offices[0]

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.16em] text-signal">Write us</p>
            <h2 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.22] tracking-[-0.02em] text-ink sm:text-[2.25rem] lg:text-[2.55rem]">
              Talk to the founders.
            </h2>
            <p className="mt-4 max-w-md text-base leading-[1.7] text-ink sm:text-lg">
              Mobile apps or Oracle work. We typically reply within one business day.
            </p>

            <div className="mt-10 space-y-6">
              <p className="text-base text-ink">
                <a
                  href={`mailto:${contactEmail}`}
                  className="underline decoration-hairline underline-offset-4 hover:text-signal"
                >
                  {contactEmail}
                </a>
              </p>
              <p className="flex max-w-md items-start gap-3 text-base leading-relaxed text-ink">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] bg-white text-signal ring-1 ring-hairline">
                  <MapPin size={16} strokeWidth={2} aria-hidden />
                </span>
                <span>{office.address}</span>
              </p>
              <p className="font-mono text-sm uppercase tracking-[0.12em] text-ink">{office.hours}</p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-6 border border-hairline bg-white p-7 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
              <Field label="Company" id="company" />
              <Field label="Phone" id="phone" type="tel" />
            </div>
            <div>
              <label htmlFor="service" className="font-mono text-sm uppercase tracking-[0.14em] text-ink">
                Service
              </label>
              <select id="service" name="service" className={field} defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-sm uppercase tracking-[0.14em] text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`${field} resize-y`}
                placeholder="Goals, timeline, current Oracle landscape…"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" variant="invert">
                Send message
              </Button>
              {submitted && (
                <p className="text-sm text-signal" role="status">
                  Thanks — we’ll be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>

        <figure className="mt-14 lg:mt-16">
          <img
            src={hitecNight}
            alt="IT corridor at dusk, Gachibowli"
            className="aspect-[21/8] w-full object-cover"
          />
          <figcaption className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-ink">
            Innov8 Vasavi · Gachibowli · not a storefront photo
          </figcaption>
        </figure>
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
      <label htmlFor={id} className="font-mono text-sm uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <input id={id} name={id} type={type} required={required} className={field} />
    </div>
  )
}
