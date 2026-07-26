'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Contact() {
  const { t } = useLanguage()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Simulate submission; wire to an email/API service when available.
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 6000)
  }

  const phoneNumbers = [
    t.contact.phoneValue,
    t.contact.phoneValue2,
    t.contact.phoneValue3,
    t.contact.phoneValue4,
  ]

  const info = [
    { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
    {
      icon: Phone,
      label: t.contact.phone,
      phones: phoneNumbers,
      ltr: true,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: t.contact.emailValue,
      href: `mailto:${t.contact.emailValue}`,
      ltr: true,
    },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
  ]

  const fieldClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.07]'

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionHeading tag={t.contact.tag} title={t.contact.title} subtitle={t.contact.subtitle} />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-3xl glass-gold p-8">
              <h3 className="font-serif text-2xl font-bold">{t.contact.info}</h3>
              <div className="flex flex-col gap-5">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl glass">
                      <item.icon className="h-5 w-5 text-gold" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-foreground/50">
                        {item.label}
                      </p>
                      {'phones' in item && item.phones ? (
                        <div className="mt-0.5 flex flex-col gap-1">
                          {item.phones.map((phone) => (
                            <a
                              key={phone}
                              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                              dir="ltr"
                              className="w-fit text-sm font-medium text-foreground/90 transition-colors hover:text-gold rtl:self-end"
                            >
                              <bdi>{phone}</bdi>
                            </a>
                          ))}
                        </div>
                      ) : 'href' in item && item.href ? (
                        <a
                          href={item.href}
                          dir={'ltr' in item && item.ltr ? 'ltr' : undefined}
                          className="mt-0.5 block w-fit text-sm font-medium text-foreground/90 transition-colors hover:text-gold rtl:ms-auto"
                        >
                          <bdi>{item.value}</bdi>
                        </a>
                      ) : (
                        <p
                          className="mt-0.5 text-sm font-medium text-foreground/90"
                          dir={'ltr' in item && item.ltr ? 'ltr' : undefined}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-3xl glass p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder={t.contact.name} className={fieldClass} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  className={fieldClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="phone" placeholder={t.contact.phone} className={fieldClass} />
                <select
                  required
                  name="service"
                  defaultValue=""
                  className={fieldClass + ' appearance-none'}
                >
                  <option value="" disabled className="bg-card">
                    {t.contact.service}
                  </option>
                  {t.sectors.items.map((sector) => (
                    <option key={sector} value={sector} className="bg-card">
                      {sector}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                required
                name="message"
                rows={5}
                placeholder={t.contact.message}
                className={fieldClass + ' resize-none'}
              />

              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] shadow-[0_20px_50px_-15px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {sending ? t.contact.sending : t.contact.send}
                {!sending && (
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 flip-rtl" />
                )}
              </button>

              {sent && (
                <p className="flex items-center gap-2 rounded-xl glass-gold px-4 py-3 text-sm text-gold-soft">
                  <CheckCircle2 className="h-5 w-5" />
                  {t.contact.success}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
