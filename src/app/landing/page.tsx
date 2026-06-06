"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useInView } from "motion/react";
import { ArrowRight, Baby, HeartPulse, Microscope, Stethoscope } from "lucide-react";
import { AppMark } from "@/components/enjab/app-mark";
import { EnjabByline } from "@/components/enjab/enjab-byline";
import { Reveal } from "@/components/enjab/reveal";

const hover = { duration: 0.22, ease: [0.4, 0, 0.2, 1] as const };

function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);
  const text =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-US");
  return (
    <span ref={ref} className="font-data text-4xl text-teal">
      {text}
      {suffix}
    </span>
  );
}

const features = [
  { icon: Baby, title: "Fertility & IVF", desc: "Twenty years of expertise, built into every step of care." },
  { icon: Stethoscope, title: "Ob / Gyn", desc: "Specialist women's health, from first visit to delivery." },
  { icon: HeartPulse, title: "Pediatrics", desc: "Gentle, attentive care for the whole family." },
  { icon: Microscope, title: "Diagnostics", desc: "In-house labs and fast, accurate results." },
];

export default function LandingPage() {
  return (
    <div className="min-h-full bg-white">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <AppMark name="Enjab Medical Centre" glyph={<HeartPulse strokeWidth={2.4} />} size={32} />
          <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <span>About</span>
            <span>Services</span>
            <span>Doctors</span>
            <span>Contact</span>
          </nav>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={hover}
            className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(5,124,139,0.25)]"
          >
            Book Now <ArrowRight className="size-4" />
          </motion.button>
        </div>
      </header>

      <main>
        {/* hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 right-0 size-[460px] rounded-full bg-teal/10 blur-3xl" />
          <div className="pointer-events-none absolute top-10 -left-20 size-[360px] rounded-full bg-info/10 blur-3xl" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <span className="rounded-full border border-teal/20 bg-teal-tint px-3 py-1 font-data text-xs uppercase tracking-[0.12em] text-teal">
                Enjab Medical Centre · Sharjah
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-3xl text-6xl font-black leading-[1.05] tracking-tight text-navy">
                Your health is our priority
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Expert, compassionate care for the whole family. From fertility and Ob/Gyn to
                pediatrics, dermatology, and beyond.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ y: -1 }}
                  transition={hover}
                  className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3.5 font-bold text-white shadow-[0_8px_20px_rgba(5,124,139,0.28)]"
                >
                  Book a consultation
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ y: -1 }}
                  transition={hover}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-teal px-6 py-3.5 font-bold text-teal"
                >
                  Our services
                </motion.button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* features */}
        <section className="mx-auto max-w-6xl px-6 pb-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={hover}
                  className="group relative h-full overflow-hidden rounded-2xl border bg-white p-6 shadow-sm hover:shadow-[0_18px_40px_rgba(13,13,13,0.08)]"
                >
                  <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-teal to-info transition-transform duration-200 group-hover:scale-x-100" />
                  <div className="flex size-11 items-center justify-center rounded-xl bg-teal-tint text-teal transition-transform duration-200 group-hover:scale-110">
                    <f.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* stats */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 rounded-3xl border bg-canvas p-12 sm:grid-cols-3">
            <div>
              <CountUp to={200000} suffix="+" />
              <div className="mt-1 text-sm text-muted-foreground">Patients treated</div>
            </div>
            <div>
              <CountUp to={20} suffix=" yrs" />
              <div className="mt-1 text-sm text-muted-foreground">Years of care</div>
            </div>
            <div>
              <CountUp to={4.7} decimals={1} suffix=" ★" />
              <div className="mt-1 text-sm text-muted-foreground">Average rating</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-navy px-10 py-14 text-center">
              <h2 className="text-3xl font-black text-white">The best, or nothing.</h2>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                Book your visit with Enjab today and experience care built on twenty years of trust.
              </p>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ y: -1 }}
                transition={hover}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 font-bold text-white"
              >
                Book Now <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <EnjabByline className="mb-4 justify-center" />
        Landing demo · motion by Framer Motion ·{" "}
        <Link href="/" className="font-semibold text-teal hover:underline">
          Back to Enjab UI
        </Link>
      </footer>
    </div>
  );
}
