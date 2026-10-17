"use client";

import { useState } from "react";
import { AlertCircle, ArrowRight, CalendarCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { COMMON_CONDITIONS } from "@/lib/site-data";
import { useNav } from "@/lib/nav";
import { Reveal, SectionHeading, StaggerGrid, StaggerItem } from "@/components/site/reveal";

export function CommonConditionsGuide() {
  const nav = useNav();
  const [activeId, setActiveId] = useState(COMMON_CONDITIONS[0].id);
  const activeCondition = COMMON_CONDITIONS.find((c) => c.id === activeId) ?? COMMON_CONDITIONS[0];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="conditions-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="Patient Health Guide"
          title={
            <span id="conditions-heading">
              Common Eye Conditions: <span className="text-gradient">When to Consult</span>
            </span>
          }
          description="Plain-language guidance on everyday vision changes, symptoms to monitor, and timely triggers for specialist consultation."
        />

        {/* Desktop interactive condition explorer */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-[1.1fr_1.9fr] lg:gap-8 lg:items-start">
          {/* list on the left */}
          <div className="space-y-2.5 rounded-3xl border border-gold-200/60 bg-cream p-4 shadow-soft">
            <p className="px-3 pt-2 text-xs font-extrabold uppercase tracking-wider text-ink-400">
              Select Condition
            </p>
            {COMMON_CONDITIONS.map((c) => {
              const isSelected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all ${
                    isSelected
                      ? "bg-white text-brand-900 shadow-lift border border-gold-300"
                      : "text-ink-600 hover:bg-white/60 hover:text-brand-900"
                  }`}
                >
                  <div>
                    <span className="block text-base font-extrabold">{c.name}</span>
                    <span className="block text-xs font-semibold text-jade-700">{c.tagline}</span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isSelected ? "translate-x-1 text-gold-500" : "text-ink-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* detail card on the right */}
          <Reveal key={activeCondition.id}>
            <div className="rounded-3xl border border-gold-200/80 bg-gradient-to-br from-white via-white to-ivory-50 p-8 shadow-lift sm:p-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-jade-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-jade-800">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Specialist Patient Guide
              </span>

              <h3 className="mt-4 text-2xl font-black tracking-tight text-brand-900 sm:text-3xl">
                {activeCondition.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-jade-700">
                {activeCondition.tagline}
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                <p>{activeCondition.description}</p>
              </div>

              {/* When to consult alert card */}
              <div className="mt-7 rounded-2xl border border-gold-300/70 bg-gradient-to-r from-gold-50 via-gold-100/50 to-white p-6 shadow-soft">
                <div className="flex items-start gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-500 text-brand-900 shadow-soft">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-brand-900">
                      When to Consult an Eye Specialist
                    </h4>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-brand-950">
                      {activeCondition.whenToConsult}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() =>
                    nav.navigate({
                      view: "appointment",
                      prefill: { department: activeCondition.treatmentId },
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold text-brand-900 shadow-lift transition hover:bg-gold-400"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Checkup for {activeCondition.name}
                </button>
                <button
                  onClick={() =>
                    nav.navigate({
                      view: "treatment",
                      treatmentId: activeCondition.treatmentId,
                    })
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-jade-200 bg-white px-6 py-3.5 text-sm font-bold text-jade-700 shadow-soft transition hover:border-jade-300 hover:bg-jade-50"
                >
                  Learn About Clinical Care
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Mobile / Tablet card grid */}
        <StaggerGrid className="mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
          {COMMON_CONDITIONS.map((c) => (
            <StaggerItem key={c.id}>
              <div className="flex h-full flex-col rounded-3xl border border-gold-200/70 bg-white p-6 shadow-soft">
                <span className="text-[0.68rem] font-bold uppercase tracking-wider text-jade-700">
                  {c.tagline}
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-brand-900">{c.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{c.description}</p>

                <div className="mt-5 flex-1 rounded-2xl bg-gold-50/80 p-4 border border-gold-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-900 uppercase tracking-wide">
                    <AlertCircle className="h-4 w-4 text-gold-600" />
                    When to Consult
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-brand-950 leading-relaxed">
                    {c.whenToConsult}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <button
                    onClick={() =>
                      nav.navigate({
                        view: "appointment",
                        prefill: { department: c.treatmentId },
                      })
                    }
                    className="w-full rounded-full bg-gold-500 py-3 text-xs font-bold text-brand-900 shadow-soft transition hover:bg-gold-400"
                  >
                    Book Examination
                  </button>
                  <button
                    onClick={() =>
                      nav.navigate({
                        view: "treatment",
                        treatmentId: c.treatmentId,
                      })
                    }
                    className="w-full rounded-full border border-jade-200 py-2.5 text-xs font-bold text-jade-700 transition hover:bg-jade-50"
                  >
                    View Clinical Details
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
