"use client";

import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { DOCTORS } from "@/lib/site-data";
import { useNav } from "@/lib/nav";
import {
  Reveal,
  SectionHeading,
  StaggerGrid,
  StaggerItem,
} from "@/components/site/reveal";

export function About() {
  const nav = useNav();
  return (
    <section id="about" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="container-x">
        {/* steel-blue feature card — signature About band */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-jade-400 via-jade-500 to-jade-700 shadow-lift sm:rounded-[2.5rem]">
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 p-5 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:p-16">
            {/* copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                About Shiv Netralay · Gorakhpur
              </span>
              <h2 id="about-heading" className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ethical, Specialist-Led <span className="text-gold-400">Eye Care</span>
              </h2>
              <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-white/90">
                <p>
                  Shiv Netralay is an established ophthalmic outpatient clinic located at
                  Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India. We are
                  dedicated to accessible vision preservation for families across Gorakhpur.
                </p>
                <p>
                  Specializing in comprehensive eye examinations, glaucoma screening and medical
                  therapy, cataract evaluations, and diabetic eye monitoring, every evaluation is
                  conducted directly by an experienced ophthalmologist with an unhurried, patient-centric approach.
                </p>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Specialist-led ophthalmic evaluations",
                  "Accurate computerized diagnostic testing",
                  "Glaucoma & cataract clinical staging",
                  "Honest, transparent medical advice",
                  "Proactive early vision preservation",
                  "Gorakhnath Overbridge, Gorakhpur",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-white">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500 text-brand-900">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => nav.navigate({ view: "doctors" })}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-brand-900 shadow-lift transition hover:bg-gold-400"
                >
                  Meet Dr. Ritesh Shukla
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => nav.navigate({ view: "treatments" })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Clinical Services
                </button>
              </div>
            </div>

            {/* image composition */}
            <Reveal className="relative">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2.25rem] border border-white/25" aria-hidden="true" />
                <div className="overflow-hidden rounded-[1.75rem] shadow-lift">
                  <img
                    src="/images/clinic-interior.png"
                    alt="Shiv Netralay ophthalmic clinic at Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* stat card */}
                <div className="float-slow absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 rounded-2xl sm:rounded-3xl border border-white/60 bg-white p-3.5 sm:p-5 shadow-lift">
                  <p className="text-2xl sm:text-3xl font-extrabold text-gradient">Specialist</p>
                  <p className="mt-0.5 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.12em] text-ink-500">
                    Led Consultations
                  </p>
                </div>
                <div className="absolute -left-4 top-6 hidden items-center gap-2 rounded-full border border-white/50 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur sm:flex">
                  <MapPin className="h-4 w-4 text-jade-700" />
                  <span className="text-xs font-bold text-brand-900">Gorakhnath Overbridge, Gorakhpur</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DoctorsSection({ hideHeading = false }: { hideHeading?: boolean }) {
  const nav = useNav();
  return (
    <section id="doctors" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24" aria-labelledby={hideHeading ? undefined : "doctors-heading"}>
      <div className="container-x">
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Specialist Care"
            title={
              <span id="doctors-heading">
                Specialist-Led <span className="text-gradient">Ophthalmology</span>
              </span>
            }
            description="Direct consultations with experienced eye specialists — thorough evaluations, honest guidance, and unhurried clinical attention."
          />
        )}

        <StaggerGrid className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {DOCTORS.map((d) => (
            <StaggerItem key={d.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gold-200/60 bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-lift">
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-jade-100 shadow-soft">
                    <img
                      src={d.image}
                      alt={`Portrait of ${d.name}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-jade-800 shadow-soft backdrop-blur">
                      {d.experience}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-extrabold tracking-tight text-brand-900">{d.name}</h3>
                    <p className="mt-1 text-sm font-bold text-jade-700">{d.role}</p>
                    <p className="mt-1 text-xs font-semibold text-ink-500">{d.qualification}</p>
                    {d.affiliations && d.affiliations.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {d.affiliations.map((aff) => (
                          <span key={aff} className="rounded-full bg-jade-50 px-2.5 py-1 text-[0.68rem] font-semibold text-jade-800">
                            {aff}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink-400">Clinical Focus</p>
                  <ul className="mt-2 grid gap-1.5 text-xs font-medium text-ink-600 sm:grid-cols-2">
                    {d.expertise.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {d.timings && d.timings.length > 0 && (
                  <div className="mt-4 rounded-2xl bg-ivory-50 p-3.5 text-xs text-brand-900 border border-gold-200/50">
                    <span className="block font-bold text-jade-800">Consultation Timings:</span>
                    {d.timings.map((t) => (
                      <span key={t.days} className="mt-0.5 block text-ink-600">
                        {t.days}: <strong className="text-brand-900">{t.time}</strong>
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row flex-1 items-stretch sm:items-end gap-2.5 sm:gap-3 pt-2">
                  <button
                    onClick={() => nav.navigate({ view: "doctor", doctorId: d.id })}
                    className="flex-1 rounded-full border border-jade-200 bg-white px-4 py-2.5 text-xs font-bold text-jade-700 transition hover:border-jade-300 hover:bg-jade-50 text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() =>
                      nav.navigate({ view: "appointment", prefill: { doctorId: d.id, department: d.departments[0] } })
                    }
                    className="flex-1 rounded-full bg-gold-500 px-4 py-2.5 text-xs font-bold text-brand-900 shadow-soft transition hover:bg-gold-400 text-center"
                  >
                    Book Slot
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
