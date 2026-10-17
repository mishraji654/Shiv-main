"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { JOURNEY, TECHNOLOGY } from "@/lib/site-data";
import {
  Reveal,
  SectionHeading,
  StaggerGrid,
  StaggerItem,
} from "@/components/site/reveal";
import {
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const STEP_ICONS: Record<string, LucideIcon> = {
  calendar: CalendarCheck,
  doctor: UserRound,
  scan: ClipboardList,
  heart: HeartPulse,
};

/** Horizontal scrolling technology cards with arrow controls */
export function Technology() {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateArrows();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 420), behavior: "smooth" });
  };

  return (
    <section id="technology" className="relative overflow-hidden scroll-mt-24 bg-brand-950 py-16 sm:py-20 lg:py-24" aria-labelledby="tech-heading">
      {/* cyan/mint glow + slow optical rings */}
      <div className="pointer-events-none absolute -left-32 top-4 h-[26rem] w-[26rem] rounded-full bg-jade-500/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" aria-hidden="true" />
      <svg
        className="ring-spin pointer-events-none absolute -right-44 -top-44 h-[34rem] w-[34rem] text-jade-400 opacity-20"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {[35, 62, 89].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 7" />
        ))}
      </svg>
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-jade-700/60 bg-jade-900/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-jade-300">
                Facilities & Technology
              </span>
              <h2 id="tech-heading" className="text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Technology That Supports{" "}
                <span className="text-gradient">Better Eye Care</span>
              </h2>
              <p className="text-base leading-relaxed text-jade-100/75 sm:text-lg">
                Precise diagnosis is the first act of good treatment. Our
                diagnostic suite is designed to measure carefully and explain
                clearly.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition enabled:hover:bg-white/15 disabled:opacity-30"
              aria-label="Scroll technology list left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition enabled:hover:bg-white/15 disabled:opacity-30"
              aria-label="Scroll technology list right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            ref={scroller}
            className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            role="list"
            aria-label="Technology and facilities"
          >
            {TECHNOLOGY.map((t) => (
              <article
                key={t.name}
                role="listitem"
                className="group w-[84vw] max-w-[21.5rem] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-gold-400/50 hover:shadow-[0_0_44px_rgba(247,213,84,0.16)] sm:w-[21.5rem]"
              >
                <div className="relative h-52 overflow-hidden bg-jade-50">
                  <img
                    src={t.image}
                    alt={t.subtitle}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-jade-300">
                    {t.name}
                  </p>
                  <h3 className="mt-1.5 text-lg font-extrabold tracking-tight text-white">
                    {t.subtitle}
                  </h3>
                  <div className="mt-3.5 space-y-2 border-t border-white/10 pt-3 text-xs">
                    {t.evaluates && (
                      <div className="rounded-xl bg-white/[0.05] p-2.5">
                        <span className="font-bold text-gold-400">What It Evaluates: </span>
                        <span className="text-jade-100/90">{t.evaluates}</span>
                      </div>
                    )}
                    {t.patientValue && (
                      <p className="leading-relaxed text-jade-100/80">
                        <strong className="text-white">Patient Value: </strong>
                        {t.patientValue}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* dots indicator */}
        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-8 bg-jade-400" : "w-1.5 bg-white/20"}`} />
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/[0.04] p-4 text-center">
          <p className="text-xs font-medium text-jade-200/90">
            <strong className="text-gold-400">Note on Advanced Equipment:</strong> In-house availability of OCT, Perimetry (Field Test), YAG Laser, and Optical Biometry is [EQUIPMENT DETAILS TO BE CONFIRMED] prior to site launch.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="journey-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Journey"
          title={
            <span id="journey-heading">
              Step-by-Step <span className="text-gradient">Clinic Experience</span>
            </span>
          }
          description="A clear, structured seven-step journey from initial request to accurate diagnosis and long-term follow-up care."
        />

        <div className="relative mt-14">
          <StaggerGrid className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {JOURNEY.map((step) => {
              const Icon = STEP_ICONS[step.icon] ?? STEP_ICONS.calendar;
              return (
                <StaggerItem key={step.step} className="relative">
                  <div className="group flex h-full flex-col rounded-3xl border border-gold-200/50 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-jade-300 hover:shadow-lift">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-jade-50 text-jade-700 shadow-soft">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-gold-500 to-brand-800 text-xs font-black text-white shadow-soft">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-extrabold tracking-tight text-brand-900">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-500">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
