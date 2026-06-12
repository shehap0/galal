import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import heroCup from "@/assets/hero-cup.jpg";
import beans from "@/assets/beans.jpg";
import heritage from "@/assets/heritage.jpg";
import pour from "@/assets/pour.jpg";
import roast from "@/assets/roast.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import restGrind from "@/assets/rest-grind.png";
import thePour from "@/assets/the-pour.png";
import theRitual from "@/assets/the-ritual.png";
import heritageNew from "@/assets/heritage-new.png";
import galalNoir from "@/assets/galal-noir.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galal Coffee — The King Of Egyptian Coffee" },
      {
        name: "description",
        content:
          "Galal Coffee crafts exceptional coffee experiences for modern Egypt. Premium blends, single origin roasts, and a heritage rooted in Cairo.",
      },
      { property: "og:title", content: "Galal Coffee — The King Of Egyptian Coffee" },
      {
        property: "og:description",
        content:
          "The digital flagship of Egypt's most iconic coffee brand. Roasted in Cairo, served everywhere.",
      },
    ],
  }),
  component: GalalCoffee,
});

/* ---------- King crown icon ---------- */
function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <path
        d="M4 36 L8 10 L20 24 L32 4 L44 24 L56 10 L60 36 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect x="4" y="34" width="56" height="4" fill="currentColor" />
      <circle cx="8" cy="10" r="2.5" fill="currentColor" />
      <circle cx="32" cy="4" r="2.5" fill="currentColor" />
      <circle cx="56" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

/* ---------- Custom cursor ---------- */
function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = dot.current;
    if (!el) return;
    let x = 0, y = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const raf = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) el.classList.add("hover");
      else el.classList.remove("hover");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    requestAnimationFrame(raf);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return <div ref={dot} className="cursor-dot" />;
}

/* ---------- Smooth scroll ---------- */
function useLenis() {
  return useRef<Lenis>(null);
}

function useInitLenis(lenisRef: React.RefObject<Lenis | null>) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const handleAnchor = (e: Event) => {
      const link = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (link && link.getAttribute("href") !== "#") {
        e.preventDefault();
        lenis.scrollTo(link.getAttribute("href")!);
      }
    };
    document.addEventListener("click", handleAnchor);

    const raf = (time: number) => { lenis.raf(time * 1000); };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      document.removeEventListener("click", handleAnchor);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);
}

/* ---------- Magnetic button ---------- */
function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const enter = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.5, ease: "power3.out" });
    };
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" });
    el.addEventListener("mousemove", enter);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", enter); el.removeEventListener("mouseleave", leave); };
  }, []);
  return <div ref={ref} className={`inline-block magnetic ${className}`}>{children}</div>;
}

/* ---------- MAIN ---------- */
function GalalCoffee() {
  const lenisRef = useLenis();
  useInitLenis(lenisRef);
  const main = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    // Hero reveal
    gsap.from(".hero-word", {
      yPercent: 110, opacity: 0, duration: 1.1, ease: "power4.out", stagger: 0.08, delay: 0.2,
    });
    gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 1, delay: 1.0, ease: "power3.out" });
    gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 1.2, stagger: 0.1, ease: "power3.out" });
    gsap.from(".hero-meta", { opacity: 0, duration: 1, delay: 1.4, stagger: 0.1 });

    // Hero parallax cup
    gsap.to(".hero-cup", {
      yPercent: -20,
      scale: 1.1,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });

    // Scrubbing word reveal in manifesto
    const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
    words.forEach((w) => {
      gsap.fromTo(
        w,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: w, start: "top 80%", end: "top 45%", scrub: true },
        }
      );
    });

    // Bento card stacking image scale
    gsap.utils.toArray<HTMLElement>(".scale-img").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0.85 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 90%", end: "top 30%", scrub: true },
        }
      );
    });

    // Pinned heritage section with title
    const heritageSec = document.querySelector(".heritage-pin") as HTMLElement | null;
    if (heritageSec) {
      ScrollTrigger.create({
        trigger: heritageSec,
        start: "top top",
        end: "+=80%",
        pin: ".heritage-title",
        pinSpacing: false,
      });
    }

    // Stats count-up
    gsap.utils.toArray<HTMLElement>(".stat-num").forEach((el) => {
      const target = Number(el.dataset.value || 0);
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: target,
            duration: 2,
            ease: "power3.out",
            onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(); },
          });
        },
      });
    });

    // Journey horizontal scroll
    const track = document.querySelector(".journey-track") as HTMLElement | null;
    const wrap = document.querySelector(".journey-wrap") as HTMLElement | null;
    if (track && wrap) {
      const total = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -total,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: () => `+=${total}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }
  }, { scope: main });

  return (
    <main ref={main} className="overflow-x-hidden w-full max-w-full bg-charcoal text-cream selection:bg-brand-accent">
      <CustomCursor />

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 h-px z-[100] bg-cream/5">
        <div className="h-full bg-brand-accent origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <Hero />

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* MANIFESTO */}
      <Manifesto />

      {/* COLLECTION BENTO */}
      <Collection />

      {/* HERITAGE PINNED */}
      <Heritage />

      {/* JOURNEY HORIZONTAL */}
      <Journey />

      {/* STATS */}
      <Stats />

      {/* TESTIMONIALS */}
      <Voices />

      {/* CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[min(1240px,calc(100%-2rem))]">
      <nav className="flex items-center justify-between rounded-full border border-cream/10 bg-charcoal/60 backdrop-blur-xl px-5 md:px-7 py-3">
        <a href="#top" className="flex items-center gap-2.5 text-cream">
          <CrownIcon className="w-7 h-5 text-brand-accent" />
          <span className="font-display text-lg tracking-tight">Galal</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-cream/70">
          <li><a href="#story" className="hover:text-cream transition">Story</a></li>
          <li><a href="#collection" className="hover:text-cream transition">Collection</a></li>
          <li><a href="#heritage" className="hover:text-cream transition">Heritage</a></li>
          <li><a href="#journey" className="hover:text-cream transition">Craft</a></li>
        </ul>
        <Magnetic>
          <a
            href="#collection"
            className="inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-5 py-2.5 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors"
          >
            Shop coffee
            <span aria-hidden>→</span>
          </a>
        </Magnetic>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCup}
          alt=""
          className="hero-cup h-full w-full object-cover object-center opacity-70"
          width={1536}
          height={1920}
        />
        <div className="absolute inset-0 radial-vignette" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
      </div>

      <div className="relative max-w-6xl w-full text-center">
        <div className="hero-meta flex items-center justify-center gap-3 text-cream/60 text-xs tracking-[0.3em] uppercase mb-8">
          <span className="h-px w-10 bg-cream/30" />
          Roasted in Cairo · Est. 1987
          <span className="h-px w-10 bg-cream/30" />
        </div>

        <h1 className="font-display font-light text-balance leading-[0.95] text-cream"
            style={{ fontSize: "clamp(3rem, 8.5vw, 8.5rem)" }}>
          <span className="block overflow-hidden"><span className="hero-word inline-block">The King</span></span>
          <span className="block overflow-hidden">
            <span className="hero-word inline-block italic text-brand-accent">Of Egyptian</span>
            <span className="hero-word inline-block ml-4">Coffee</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl mx-auto text-base md:text-lg text-cream/70 leading-relaxed">
          Crafting exceptional coffee experiences for modern Egypt — bean by bean, cup by cup, ritual by ritual.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Magnetic className="hero-cta">
            <a href="#story"
              className="inline-flex items-center gap-3 rounded-full bg-cream text-charcoal px-7 py-4 text-sm font-medium tracking-wide hover:bg-brand-accent transition-colors"
            >
              Explore our story
              <span aria-hidden>↓</span>
            </a>
          </Magnetic>
          <Magnetic className="hero-cta">
            <a href="#collection"
              className="inline-flex items-center gap-3 rounded-full border border-cream/20 text-cream px-7 py-4 text-sm font-medium tracking-wide hover:border-cream hover:bg-cream/5 transition-colors"
            >
              Discover our coffee
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Bottom meta strip */}
      <div className="hero-meta absolute bottom-8 left-0 right-0 px-8 flex items-end justify-between text-cream/50 text-xs tracking-widest uppercase">
        <span>N 30°02′ · E 31°14′</span>
        <span className="hidden md:inline">Scroll · to · descend</span>
        <span>Single Origin · Arabica · 100%</span>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = ["Single Origin", "Slow Roast", "Cairo Crafted", "Specialty Grade", "Direct Trade", "Hand Sorted"];
  return (
    <section className="border-y border-cream/10 bg-brand-dark/40 py-8 overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 px-8 text-cream/70 font-display text-3xl md:text-5xl italic font-light">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-16 whitespace-nowrap">
            {it}
            <CrownIcon className="w-8 h-5 text-brand-accent" />
          </span>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
  const text =
    "We do not sell coffee. We bottle the morning light of Cairo, the patience of the roaster, the hush before the first sip. Every cup is a small inheritance — passed from soil, to hand, to flame, to you.";
  const words = text.split(" ");
  return (
    <section id="story" className="relative py-40 md:py-56 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-12">
          <CrownIcon className="w-5 h-3 text-brand-accent" />
          The Galal manifesto
        </div>
        <p className="font-display text-balance leading-[1.15] text-cream"
           style={{ fontSize: "clamp(1.75rem, 4.2vw, 4rem)" }}>
          {words.map((w, i) => (
            <span key={i} className="manifesto-word inline-block mr-[0.25em]">{w}</span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="collection" className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="font-display font-light text-cream leading-[0.95] max-w-3xl"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            A collection,<br />
            <span className="italic text-brand-accent">tasted in chapters.</span>
          </h2>
          <p className="text-cream/60 max-w-sm text-base leading-relaxed">
            Four expressions of Egyptian craft. From the bright acidity of the Nile valley to the deep,
            smoked sweetness of our flagship Cairo Noir.
          </p>
        </div>

        {/* Gapless bento: 3 cols x 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 grid-flow-dense">
          {/* Tall hero card */}
          <article className="group relative md:row-span-2 rounded-3xl overflow-hidden bg-brand-dark min-h-[520px] md:min-h-[640px] grain">
            <img src={galalNoir} alt="" loading="lazy" width={1080} height={1600}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-cream/70 text-xs tracking-widest uppercase">
                <CrownIcon className="w-4 h-3 text-brand-accent" /> Flagship
              </div>
              <div>
                <h3 className="font-display text-cream leading-tight"
                    style={{ fontSize: "clamp(2rem, 3.4vw, 3.25rem)" }}>
                  Galal
                </h3>
                <p className="mt-3 text-cream/70 max-w-md text-sm md:text-base leading-relaxed">
                  A profoundly dark roast. Notes of cardamom, burnt sugar, and dried date. The cup that built us.
                </p>
                <div className="mt-6 flex items-center gap-6 text-cream/60 text-xs tracking-widest uppercase">
                  <span>250g</span>
                  <span>·</span>
                  <span>EGP 380</span>
                </div>
              </div>
            </div>
          </article>

          {/* Wide top right */}
          <article className="group relative md:col-span-2 rounded-3xl overflow-hidden bg-brand min-h-[260px] md:min-h-[310px]">
            <img src={beans} alt="" loading="lazy" width={1920} height={1280}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 p-8 md:p-10 flex items-end justify-between gap-6">
              <div>
                <div className="text-cream/70 text-xs tracking-widest uppercase mb-3">Signature Blend</div>
                <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                  Nile Valley No. 7
                </h3>
              </div>
              <span className="text-cream/80 font-mono text-sm shrink-0">EGP 290</span>
            </div>
          </article>

          {/* Bottom mid */}
          <article className="group relative rounded-3xl overflow-hidden bg-charcoal border border-cream/10 min-h-[310px]">
            <img src={pour} alt="" loading="lazy" width={1080} height={1600}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="text-brand-accent text-xs tracking-widest uppercase mb-3">Espresso</div>
              <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}>
                Royal Crema
              </h3>
              <p className="mt-2 text-cream/60 text-sm">Honeyed body. A 25-second pour, every time.</p>
            </div>
          </article>

          {/* Bottom right text-only */}
          <article className="group relative rounded-3xl overflow-hidden brand-gradient min-h-[310px] grain">
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <CrownIcon className="w-10 h-7 text-cream/90" />
              <div>
                <div className="text-cream/80 text-xs tracking-widest uppercase mb-3">Seasonal · Winter ’26</div>
                <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}>
                  Khedive Reserve
                </h3>
                <p className="mt-2 text-cream/80 text-sm">Limited 800 tins. Aged on cedar, finished with mastiha.</p>
                <a href="#" className="mt-5 inline-flex items-center gap-2 text-cream text-sm font-medium border-b border-cream/40 pb-1 hover:border-cream">
                  Reserve a tin <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section id="heritage" className="heritage-pin relative bg-brand-dark overflow-hidden">
      <div className="grid md:grid-cols-12 gap-0 min-h-screen">
        <div className="heritage-title md:col-span-5 px-6 md:px-12 py-24 flex flex-col justify-center">
          <div className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
            <CrownIcon className="w-5 h-3" /> Heritage
          </div>
          <h2 className="font-display font-light text-cream leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            Three decades<br />
            <span className="italic text-brand-accent">in a single sip.</span>
          </h2>
          <p className="mt-8 max-w-md text-cream/70 leading-relaxed">
            From a copper roaster in Khan el-Khalili to roasteries across the Middle East — Galal Coffee has
            poured a cultural through-line through Egyptian mornings since 1987.
          </p>
        </div>

        <div className="md:col-span-7 relative">
          <img src={heritageNew} alt="Egyptian barista at a copper espresso machine" loading="lazy"
            width={1536} height={1920}
            className="h-full w-full object-cover min-h-[60vh]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40" />

          <ul className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4 text-cream">
            {[
              { y: "1987", l: "First roastery" },
              { y: "2004", l: "Cairo flagship" },
              { y: "2019", l: "Direct origin" },
            ].map((it) => (
              <li key={it.y} className="rounded-2xl border border-cream/15 bg-charcoal/40 backdrop-blur-md p-4">
                <div className="font-display text-2xl">{it.y}</div>
                <div className="text-cream/70 text-xs uppercase tracking-widest mt-1">{it.l}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { n: "I",   t: "Bean Selection", d: "Hand-sorted lots from the highlands of Sidamo, Yirgacheffe and Harrar.", img: beans },
    { n: "II",  t: "Slow Roast",     d: "Drum-roasted in copper. The crackle, the curl, the second crack.",      img: roast },
    { n: "III", t: "Rest & Grind",   d: "Beans rest 14 days. Then ground to order, never before.",                img: restGrind },
    { n: "IV",  t: "The Pour",       d: "A 25-second extraction. Crema like silk. Body like velvet.",             img: thePour },
    { n: "V",   t: "The Ritual",     d: "Poured in porcelain. Served with a moment of quiet.",                    img: theRitual },
  ];
  return (
    <section id="journey" className="journey-wrap relative h-screen overflow-hidden bg-charcoal">
      <div className="journey-track flex h-full will-change-transform">
        {/* Intro panel */}
        <div className="shrink-0 w-screen h-full flex items-center px-8 md:px-24">
          <div className="max-w-2xl">
            <div className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <CrownIcon className="w-5 h-3" /> The craft
            </div>
            <h2 className="font-display font-light text-cream leading-[0.95]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Five movements.<br />
              <span className="italic text-brand-accent">One cup.</span>
            </h2>
            <p className="mt-6 text-cream/70 max-w-md">
              Scroll right to follow a bean from highland soil to porcelain rim.
            </p>
            <div className="mt-10 text-cream/40 text-xs tracking-widest uppercase">Scroll →</div>
          </div>
        </div>

        {steps.map((s, i) => (
          <article key={s.n} className="shrink-0 w-[88vw] md:w-[56vw] h-full px-6 md:px-10 py-20 flex flex-col">
            <div className="grow rounded-3xl overflow-hidden relative bg-brand-dark grain">
              <img src={s.img} alt={s.t} loading="lazy" width={1280} height={1600}
                className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              <div className="absolute top-8 left-8 right-8 flex items-start justify-between">
                <span className="font-display text-cream/80 text-7xl md:text-8xl leading-none">{s.n}</span>
                <span className="text-cream/60 text-xs tracking-widest uppercase">
                  Step {i + 1} of {steps.length}
                </span>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(2rem, 3.6vw, 3.25rem)" }}>
                  {s.t}
                </h3>
                <p className="mt-3 text-cream/70 max-w-md">{s.d}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 142, l: "Stores across Egypt", suf: "" },
    { v: 3, l: "Million customers served", suf: "M+" },
    { v: 28, l: "Years of craft", suf: "" },
    { v: 100, l: "Single-origin Arabica", suf: "%" },
  ];
  return (
    <section className="py-32 md:py-48 px-6 border-y border-cream/10 bg-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10">
        {items.map((it) => (
          <div key={it.l} className="bg-charcoal p-8 md:p-10">
            <div className="font-display text-cream leading-none flex items-baseline gap-1"
                 style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              <span className="stat-num" data-value={it.v}>0</span>
              <span className="text-brand-accent text-3xl md:text-4xl">{it.suf}</span>
            </div>
            <div className="mt-4 text-cream/60 text-sm tracking-wide max-w-[12rem]">{it.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const voices = [
    { q: "Galal turned my morning into a ritual. Cairo Noir is the only coffee I bring on the road.", n: "Yousef A.", r: "Architect, Alexandria", img: p1 },
    { q: "It tastes like the city remembered me. There is no other way to describe it.",              n: "Maryam S.", r: "Editor, Cairo",       img: p2 },
    { q: "I have sourced coffee for twenty years. This is the most honest Egyptian roast on the market.", n: "Sheikh Tareq",  r: "Coffee buyer, Aswan",img: p3 },
  ];
  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-light text-cream leading-[0.95] max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
          The cup speaks.<br />
          <span className="italic text-brand-accent">The city replies.</span>
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {voices.map((v, i) => (
            <figure key={i} className="group relative rounded-3xl bg-brand-dark/40 border border-cream/10 p-8 md:p-10 overflow-hidden">
              <CrownIcon className="absolute top-8 right-8 w-8 h-5 text-brand-accent/40" />
              <blockquote className="font-display text-cream leading-snug text-balance"
                          style={{ fontSize: "clamp(1.25rem, 1.6vw, 1.6rem)" }}>
                “{v.q}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <img src={v.img} alt={v.n} loading="lazy" width={80} height={80}
                     className="h-14 w-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition duration-700" />
                <div>
                  <div className="text-cream text-sm font-medium">{v.n}</div>
                  <div className="text-cream/50 text-xs tracking-wide">{v.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 brand-gradient" />
      <div className="absolute inset-0 -z-10 grain opacity-100" />
      <div className="max-w-6xl mx-auto text-center">
        <CrownIcon className="mx-auto w-14 h-9 text-cream/90 mb-10" />
        <h2 className="font-display font-light text-cream leading-[0.95] text-balance"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7.5rem)" }}>
          Coffee fit <span className="italic">for a king.</span>
          <br />Brewed for every morning.
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Magnetic>
            <a href="#collection" className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-8 py-4 text-sm font-medium hover:bg-cream hover:text-charcoal transition-colors">
              Order your first tin <span aria-hidden>→</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#heritage" className="inline-flex items-center gap-3 rounded-full border border-cream/40 text-cream px-8 py-4 text-sm font-medium hover:bg-cream/10 transition-colors">
              Find a roastery
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 text-cream">
              <CrownIcon className="w-9 h-6 text-brand-accent" />
              <span className="font-display text-3xl">Galal Coffee</span>
            </div>
            <p className="mt-6 text-cream/60 max-w-sm leading-relaxed">
              Roasted in Cairo. Served with intention. A modern Egyptian house of coffee since 1987.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="text-cream/40 text-xs tracking-widest uppercase mb-4">Shop</div>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li><a href="#" className="hover:text-brand-accent">Signature</a></li>
              <li><a href="#" className="hover:text-brand-accent">Espresso</a></li>
              <li><a href="#" className="hover:text-brand-accent">Reserve</a></li>
              <li><a href="#" className="hover:text-brand-accent">Equipment</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-cream/40 text-xs tracking-widest uppercase mb-4">House</div>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li><a href="#" className="hover:text-brand-accent">Our story</a></li>
              <li><a href="#" className="hover:text-brand-accent">Roasteries</a></li>
              <li><a href="#" className="hover:text-brand-accent">Press</a></li>
              <li><a href="#" className="hover:text-brand-accent">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-cream/40 text-xs tracking-widest uppercase mb-4">Newsletter</div>
            <form className="flex items-center gap-2 border-b border-cream/20 pb-2">
              <input type="email" placeholder="your@email.com"
                     className="bg-transparent flex-1 outline-none text-cream placeholder:text-cream/30 text-sm py-2" />
              <button className="text-brand-accent text-sm hover:text-cream" aria-label="Subscribe">→</button>
            </form>
            <p className="mt-3 text-cream/40 text-xs">Quiet letters. No spam. Just coffee.</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-cream/40 text-xs tracking-wide">
          <div>© {new Date().getFullYear()} Galal Coffee · Cairo, Egypt</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
