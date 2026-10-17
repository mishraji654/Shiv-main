import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteShell } from "@/components/site/site-shell";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiv Netralay Gorakhpur | Eye Specialist & Vision Care Clinic",
  description:
    "Visit Shiv Netralay in Gorakhpur for expert eye care. Located at Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India. Consult specialist ophthalmologists for comprehensive eye testing, cataract assessment, and glaucoma care.",
  keywords: [
    "Shiv Netralay Gorakhpur",
    "Eye Hospital in Gorakhpur",
    "Eye Specialist in Gorakhpur",
    "Ophthalmologist in Gorakhpur",
    "Eye Clinic Gorakhnath Gorakhpur",
    "Shiv Netralay Bade Kajipur",
    "Glaucoma Specialist Gorakhpur",
    "Cataract Checkup Gorakhpur",
    "Specialist Consultations",
    "Accurate Diagnostics",
    "Patient Comfort",
    "Ethical Care",
    "Clear Vision",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shiv Netralay Gorakhpur | Eye Specialist & Vision Care Clinic",
    description:
      "Visit Shiv Netralay in Gorakhpur for expert eye care. Located at Purvi Kinara Gorakhnath Overbridge, N Eastern Railway Line, Bade Kajipur, Gorakhpur, Uttar Pradesh 273001, India. Consult specialist ophthalmologists for comprehensive eye testing, cataract assessment, and glaucoma care.",
    siteName: "Shiv Netralay",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
