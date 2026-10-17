"use client";

import { Hero } from "@/components/home/hero";
import { QuickAppointment } from "@/components/home/quick-appointment";
import { About, DoctorsSection } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { Technology, Journey } from "@/components/home/technology";
import { WhyUs } from "@/components/home/why-us";
import { CommonConditionsGuide } from "@/components/home/conditions-guide";
import { Testimonials } from "@/components/home/testimonials";
import { Faq, Location, FinalCta } from "@/components/home/faq";

/**
 * Home = Comprehensive official landing experience incorporating all blueprint
 * sections: Hero, Quick Appointment, About, Clinical Services, Specialist Doctors,
 * Diagnostics & Technology, Why Patients Choose Us, Patient Journey, Common Conditions
 * Guide, Testimonials, FAQs, and Clinic Location.
 */
export function HomeView() {
  return (
    <>
      <Hero />
      <QuickAppointment />
      <About />
      <Services />
      <DoctorsSection />
      <Technology />
      <WhyUs />
      <Journey />
      <CommonConditionsGuide />
      <Testimonials />
      <Faq />
      <Location />
      <FinalCta />
    </>
  );
}
