import type { Metadata } from "next";
import { Suspense } from "react";
import { AppointmentContent } from "./appointment-content";

export const metadata: Metadata = {
  title: "Book an Appointment — Shiv Netralay",
  description:
    "Schedule your eye care visit at Shiv Netralay — choose a department, doctor, date and time in five quick steps.",
};

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-neutral-50 dark:bg-neutral-950" />}>
      <AppointmentContent />
    </Suspense>
  );
}
