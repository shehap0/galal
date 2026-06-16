import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import heroCup from "@/assets/hero-cup.jpg";
import beans from "@/assets/beans.jpg";
import roast from "@/assets/roast.jpg";
import ritual from "@/assets/ritual.png";
import portsaidVideo from "@/assets/portsaid.mp4";
import icedCoffeeImg from "@/assets/ice-coffee.png";
import espressoImg from "@/assets/Espresso.jpg";
import milkshakeImg from "@/assets/milk-shake.png";
import dessertImg from "@/assets/dessert.png";
import galalBg from "@/assets/galal-background.jpg";
import grind from "@/assets/grind.jpg";
import pourImg from "@/assets/pour.jpg";
import TestimonialsSection from "@/components/TestimonialsSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Galal Coffee - The King Of Egyptian Coffee" },
      {
        name: "description",
        content:
          "From a car in Port Said to a nationwide icon. Galal Coffee serves Egypt with passion since 2015.",
      },
      { property: "og:title", content: "Galal Coffee - The King Of Egyptian Coffee" },
      {
        property: "og:description",
        content:
          "Born on the streets of Port Said. Crafted with passion. From a single car to an Egyptian icon since 2015.",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 40'%3E%3Cpath d='M4 36 L8 10 L20 24 L32 4 L44 24 L56 10 L60 36 Z' fill='%2300704A' stroke='%2300704A' stroke-width='1.5'/%3E%3Crect x='4' y='34' width='56' height='4' fill='%2300704A'/%3E%3C/svg%3E" },
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

    // Heritage title fade-out
    const heritageTitle = document.querySelector(".heritage-title") as HTMLElement | null;
    if (heritageTitle) {
      gsap.to(heritageTitle, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".heritage-pin",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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

    // Scroll-reveal section headings
    gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((el) => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }
      );
    });

    // Collection cards stagger entrance
    gsap.utils.toArray<HTMLElement>(".bento-card").forEach((el, i) => {
      gsap.fromTo(el,
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });
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
      <TestimonialsSection />

      {/* CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top -60px",
      onEnter: () => nav.classList.add("nav-compact"),
      onLeaveBack: () => nav.classList.remove("nav-compact"),
    });

    return () => st.kill();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        ref={navRef}
        className="flex items-center justify-between px-5 md:px-10 py-6 max-w-[2000px] mx-auto bg-charcoal/20 backdrop-blur-xl border-b border-cream/5 transition-all duration-500"
      >
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
          Roasted in Cairo · Est. 2015
          <span className="h-px w-10 bg-cream/30" />
        </div>

        <h1 className="font-display font-light text-balance leading-[1] text-cream"
            style={{ fontSize: "clamp(3rem, 8.5vw, 8.5rem)" }}>
          <span className="block overflow-hidden"><span className="hero-word inline-block pb-2">The King</span></span>
          <span className="block">
            <span className="hero-word inline-block italic text-brand-accent pb-2">Of Egyptian</span>
            <span className="hero-word inline-block ml-4 pb-2">Coffee</span>
          </span>
        </h1>

        <p className="hero-sub mt-8 max-w-xl mx-auto text-base md:text-lg text-cream/70 leading-relaxed">
          From a car in Port Said to a nationwide icon. Every cup carries the Bousaidi spirit of hard work and the taste of home.
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
        <span>Port Said · Est. 2015</span>
        <span className="hidden md:inline">Crafted · with · passion</span>
        <span>Premium Arabica · ISO Certified</span>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const items = ["Port Said Pride", "Slow Roast", "Cairo Crafted", "ISO Certified", "Premium Arabica", "Hand Sorted"];
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
  const paragraphs = [
    "It began in Port Said. A young man named Mohamed Galal, a small car, and a dream. No shop, no investors — just Bousaidi grit and a perfect brew.",
    "Word spread. The car became a landmark. Today, Galal Coffee spans Port Said to Cairo, Ismailia, Damietta, and beyond.",
  ];
  return (
    <section id="story" className="relative py-40 md:py-56 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-12 reveal-up">
          <CrownIcon className="w-5 h-3 text-brand-accent" />
          How it started
        </div>
        <div className="space-y-10">
          {paragraphs.map((text, pi) => (
            <p key={pi} className="font-display text-balance leading-[1.2] text-cream"
               style={{ fontSize: "clamp(1.5rem, 3.6vw, 3.25rem)" }}>
              {text.split(" ").map((w, i) => (
                <span key={i} className="manifesto-word inline-block mr-[0.2em]">{w}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  return (
    <section id="collection" className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <h2 className="font-display font-light text-cream leading-[0.95] max-w-3xl reveal-up"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            Our menu,<br />
            <span className="italic text-brand-accent">crafted to perfection.</span>
          </h2>
          <p className="text-cream/60 max-w-sm text-base leading-relaxed">
            From our signature Iced Spanish Latte to creamy milkshakes and warm waffles. Every item made with the same Bousaidi care.
          </p>
        </div>

        {/* Gapless bento: 3 cols x 3 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 grid-flow-dense">
          {/* Tall hero card - Iced Coffee */}
          <article className="bento-card group relative md:row-span-2 rounded-3xl overflow-hidden bg-brand-dark min-h-[520px] md:min-h-[640px] grain card-shine">
            <img src={icedCoffeeImg} alt="" loading="lazy" width={1080} height={1600}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-cream/70 text-xs tracking-widest uppercase">
                <CrownIcon className="w-4 h-3 text-brand-accent" /> Signature Iced Coffee
              </div>
              <div>
                <h3 className="font-display text-cream leading-tight"
                    style={{ fontSize: "clamp(2rem, 3.4vw, 3.25rem)" }}>
                  Iced Coffee
                </h3>
                <p className="mt-3 text-cream/70 max-w-md text-sm md:text-base leading-relaxed">
                  Smooth, chilled, and expertly brewed. From our classic Iced Latte to the rich, signature Spanish Latte.
                </p>
                <div className="mt-6 flex items-center gap-6 text-brand-accent text-xs tracking-widest uppercase">
                  Starting from EGP 75
                </div>
              </div>
            </div>
          </article>

          {/* Wide top right - Hot Drinks */}
          <article className="bento-card group relative md:col-span-2 rounded-3xl overflow-hidden bg-brand min-h-[260px] md:min-h-[310px] card-shine">
            <img src={espressoImg} alt="" loading="lazy" width={1920} height={1280}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 p-8 md:p-10 flex items-end justify-between gap-6">
              <div>
                <div className="text-cream/70 text-xs tracking-widest uppercase mb-3">The Hot Classics</div>
                <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
                  Hot Drinks
                </h3>
              </div>
              <span className="text-brand-accent font-mono text-sm shrink-0">From EGP 44</span>
            </div>
          </article>

          {/* Bottom mid - Milkshakes */}
          <article className="bento-card group relative rounded-3xl overflow-hidden bg-charcoal border border-cream/10 min-h-[310px] card-shine">
            <img src={milkshakeImg} alt="" loading="lazy" width={1080} height={1600}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="text-brand-accent text-xs tracking-widest uppercase mb-3">Indulgent Milkshakes</div>
              <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}>
                Milkshakes
              </h3>
              <p className="mt-2 text-cream/60 text-sm">Creamy, thick, and blended to perfection. Featuring Ferrero Rocher, Golden Oreo, and Caramel.</p>
            </div>
          </article>

          {/* Bottom right - Sweet Treats */}
          <article className="bento-card group relative rounded-3xl overflow-hidden brand-gradient min-h-[310px] grain card-shine">
            <img src={dessertImg} alt="" loading="lazy" width={1080} height={1600}
              className="scale-img absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/60 via-brand-dark/30 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <CrownIcon className="w-10 h-7 text-cream/90" />
              <div>
                <div className="text-cream/80 text-xs tracking-widest uppercase mb-3">Dessert</div>
                <h3 className="font-display text-cream leading-tight" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" }}>
                  Sweet Treats
                </h3>
                <p className="mt-2 text-cream/80 text-sm">Golden, crispy waffles generously covered in rich chocolate, white chocolate, or Ferrero Rocher.</p>
                <div className="mt-5 text-brand-accent text-sm font-medium">
                  Starting from EGP 68
                </div>
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
          <div className="text-brand-accent text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3 reveal-up">
            <CrownIcon className="w-5 h-3" /> Heritage
          </div>
          <h2 className="font-display font-light text-cream leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
            A decade<br />
            <span className="italic text-brand-accent">in a single sip.</span>
          </h2>
          <p className="mt-8 max-w-md text-cream/70 leading-relaxed">
            From a single coffee car on a Port Said street to a nationwide brand with ISO-certified roasteries. The same passion, the same Bousaidi spirit, served every day since 2015.
          </p>
        </div>

        <div className="md:col-span-7 relative">
          <img src={galalBg} alt="Galal Coffee heritage" loading="lazy"
            width={1536} height={1920}
            className="h-full w-full object-cover min-h-[60vh]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40" />

          <ul className="absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-cream">
            {[
              { y: "2015", l: "The First Spark", d: "Mohamed Galal starts his coffee car in Port Said" },
              { y: "2018", l: "From Wheels to Walls", d: "First physical roastery in Port Said" },
              { y: "2021", l: "The Cairo Conquest", d: "Expands to Sheraton and Nasr City" },
              { y: "2023", l: "ISO Certified", d: "9001 & 22000 global quality standards" },
            ].map((it) => (
              <li key={it.y} className="rounded-2xl border border-cream/15 bg-charcoal/40 backdrop-blur-md p-4">
                <div className="font-display text-xl md:text-2xl text-brand-accent">{it.y}</div>
                <div className="text-cream/90 text-xs uppercase tracking-widest mt-1">{it.l}</div>
                <div className="text-cream/50 text-[10px] mt-1 leading-relaxed">{it.d}</div>
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
    { n: "I",   t: "Bean Selection", d: "Premium Arabica beans, hand-sorted for consistency and quality.", img: beans },
    { n: "II",  t: "Slow Roast",     d: "Drum-roasted in copper. The crackle, the curl, the second crack.",      img: roast },
    { n: "III", t: "Rest & Grind",   d: "Beans rest 14 days. Then ground to order, never before.",                img: grind },
    { n: "IV",  t: "The Pour",       d: "A 25-second extraction. Crema like silk. Body like velvet.",             img: pourImg },
    { n: "V",   t: "The Ritual",     d: "Poured in porcelain. Served with a moment of quiet.",                    img: ritual },
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
            <h2 className="font-display font-light text-cream leading-[0.95] reveal-up"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Five movements.<br />
              <span className="italic text-brand-accent">One cup.</span>
            </h2>
            <p className="mt-6 text-cream/70 max-w-md">
              From bean selection to your cup. Each step shaped by the Bousaidi spirit of doing things right.
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
    { value: "9+", suffix: "", label: "Years of Passion", desc: "Since 2015, perfecting every cup" },
    { value: "", suffix: "", label: "Growing Across Egypt", desc: "From Port Said to Cairo and beyond", icon: true },
    { value: "", suffix: "", label: "Millions of Cups Shared", desc: "Served with the Bousaidi spirit", icon: true },
    { value: "", suffix: "", label: "ISO Certified", desc: "9001 & 22000 quality standards", icon: true },
  ];
  return (
    <section className="py-32 md:py-48 px-6 border-y border-cream/10 bg-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10">
        {items.map((it) => (
          <div key={it.label} className="bg-charcoal p-8 md:p-10">
            {it.value ? (
              <div className="font-display text-cream leading-none flex items-baseline gap-1"
                   style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
                <span className="stat-num" data-value={9}>0</span>
                <span className="text-brand-accent text-3xl md:text-4xl">+</span>
              </div>
            ) : (
              <CrownIcon className="w-8 h-5 text-brand-accent mb-4" />
            )}
            <div className="mt-4 text-cream/60 text-sm tracking-wide max-w-[12rem]">{it.label}</div>
            <div className="mt-1 text-cream/40 text-xs leading-relaxed">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Voices() {
  const reviews = [
    { n: "Omar H.",   q: "The best coffee quality in Egypt right now. I've been following their journey since the car in Port Said, and they still maintain the same incredible standard." },
    { n: "Sara M.",   q: "Finally, an Egyptian brand that understands specialty coffee. Their V60 is perfect, and the atmosphere in the Sheraton branch is very cozy for working." },
    { n: "Ahmed Z.",  q: "Amazing experience! The history of this place makes the coffee taste better. A true Port Saidi success story that we are all proud of." },
    { n: "Mariam E.", q: "I love the consistency of the beans. Whether I'm in Port Said or Cairo, the taste is exactly the same. Highly recommended for real coffee addicts." },
    { n: "Khaled W.", q: "Great service and even better coffee. It's inspiring to see a local brand grow like this. The signature blends are a must-try!" },
  ];

  const initials = (name: string) =>
    name.split(" ").map((w) => w[0]).join("");

  return (
    <section className="py-32 md:py-48 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-16 reveal-up">
          <CrownIcon className="w-5 h-3 text-brand-accent" />
          What Egypt says
        </div>

        <div className="space-y-8">
          {reviews.map((v, i) => (
            <figure key={i} className="flex items-start gap-6 py-6 border-b border-cream/5 last:border-0">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent text-lg font-medium font-mono tracking-wide">
                {initials(v.n)}
              </span>
              <div className="flex-1 min-w-0">
                <blockquote className="font-display text-cream/90 leading-relaxed text-balance"
                            style={{ fontSize: "clamp(1rem, 1.5vw, 1.35rem)" }}>
                  &ldquo;{v.q}&rdquo;
                </blockquote>
                <figcaption className="mt-2 flex items-center gap-3">
                  <span className="text-cream/70 text-sm font-medium">{v.n}</span>
                  <span className="text-cream/30 text-[10px] tracking-widest uppercase">Verified</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const mapBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23111'/%3E%3Cpath d='M0 35 Q30 15 90 35 T200 25' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M0 90 Q50 70 110 95 T200 80' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M0 145 Q70 125 130 160 T200 140' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M50 0 Q30 40 55 90 T45 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M110 0 Q90 50 130 110 T105 200' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M170 0 Q155 30 180 80 T160 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Ccircle cx='90' cy='35' r='3' fill='%23333'/%3E%3Ccircle cx='55' cy='95' r='2' fill='%23333'/%3E%3Ccircle cx='160' cy='145' r='2.5' fill='%23333'/%3E%3C/svg%3E")`;

  return (
    <section className="relative py-40 md:py-56 px-6 overflow-hidden">
      {/* Video background */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={portsaidVideo}
      />
      <div className="absolute inset-0 bg-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
      <div className="relative z-[1] max-w-6xl mx-auto text-center">
        <CrownIcon className="mx-auto w-14 h-9 text-brand-accent mb-10 animate-float" />
        <h2 className="font-display font-light leading-[0.95] text-balance"
            style={{ fontSize: "clamp(2.75rem, 8vw, 7.5rem)", color: "var(--brand-accent)" }}>
          From Port Said<br />
          <span className="italic text-cream">to Your Neighborhood.</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-cream/80 text-lg leading-relaxed">
          Find us across Egypt from our original home in Port Said to Cairo, Ismailia, and Damietta.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {/* Order on Talabat */}
          <Magnetic>
            <a href="https://www.talabat.com/egypt/restaurants?s=Galal%20Coffee" target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-3 rounded-full bg-[#FF5A00] text-white px-8 py-4 text-sm font-medium min-w-[220px] justify-center transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#FF5A00]/30">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              Order on Talabat
            </a>
          </Magnetic>

          {/* Find a Location */}
          <Magnetic>
            <a href="https://www.google.com/maps/search/Galal+Coffee/" target="_blank" rel="noopener noreferrer"
               className="group relative inline-flex items-center gap-3 rounded-full min-w-[220px] justify-center px-8 py-4 text-sm font-medium text-white border border-white/15 overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: mapBg }} />
              <span className="absolute inset-0 bg-black/40" />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="relative z-10">Find a Location</span>
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
              Born on the streets of Port Said. Crafted with passion. From a single car to an Egyptian icon since 2015.
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
              <li><a href="#story" className="hover:text-brand-accent">Our story</a></li>
              <li><a href="#journey" className="hover:text-brand-accent">The Journey</a></li>
              <li><a href="#" className="hover:text-brand-accent">Press</a></li>
              <li><a href="#" className="hover:text-brand-accent">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-cream/40 text-xs tracking-wide">
          <div>
            Made with ❤️ love by{" "}
            <a href="https://www.facebook.com/people/Auto-synapse/61590422384756/" target="_blank" rel="noopener noreferrer" className="shehap-link">Auto synapse</a>
            {" "}&middot; Port Said &middot; Cairo &middot; Ismailia &middot; Damietta, Egypt
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/Galalcoffee1/?locale=ar_AR" target="_blank" rel="noopener noreferrer" className="hover:text-cream">Facebook</a>
            <a href="https://www.instagram.com/galal_coffee/?hl=ar" target="_blank" rel="noopener noreferrer" className="hover:text-cream">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
