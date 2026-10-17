"use client";

import { useSearchParams } from "next/navigation";
import { AppointmentView } from "@/components/views/appointment-view";

export function AppointmentContent() {
  const sp = useSearchParams();
  const department = sp.get("department") || undefined;
  const doctor = sp.get("doctor") || undefined;
  const prefill = {
    department,
    doctorId: doctor,
  };
  const key = `${department ?? ""}|${doctor ?? ""}`;
  return <AppointmentView key={key} prefill={prefill} />;
}
