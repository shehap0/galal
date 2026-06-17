import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import cupImg from "@/assets/landing/cup review.png";
import bean001 from "@/assets/landing/bean001.png";
import bean002 from "@/assets/landing/bean002.png";
import bean003 from "@/assets/landing/bean003.png";
import bean005 from "@/assets/landing/bean005.png";
import bean006 from "@/assets/landing/bean006.png";
import bean007 from "@/assets/landing/bean007.png";
import cinnamonImg from "@/assets/landing/cinnamon.png";
import chocolate1 from "@/assets/landing/chocolate1.png";
import chocolate2 from "@/assets/landing/chocolate2.png";

const beans = [
  { src: bean001, cls: "top-[12%] left-[7%]  w-[35px]",  rot: -12 },
  { src: bean002, cls: "top-[28%] left-[16%] w-[50px]",  rot: 18  },
  { src: bean003, cls: "top-[62%] left-[8%]  w-[28px]",  rot: -28 },
  { src: bean005, cls: "top-[8%]  right-[10%] w-[44px]", rot: 15  },
  { src: bean006, cls: "top-[30%] right-[6%]  w-[22px]", rot: -18 },
  { src: bean007, cls: "top-[55%] right-[10%] w-[52px]", rot: 32  },
  { src: bean001, cls: "top-[78%] left-[20%] w-[40px]",  rot: -8  },
  { src: bean003, cls: "top-[72%] right-[20%] w-[30px]", rot: 20  },
  { src: bean005, cls: "top-[18%] left-[35%] w-[24px]",  rot: -22 },
  { src: bean002, cls: "top-[82%] right-[30%] w-[28px]", rot: 10  },
  { src: bean006, cls: "top-[42%] left-[3%]  w-[36px]",  rot: 14  },
  { src: bean007, cls: "top-[40%] right-[3%]  w-[40px]", rot: -14 },
];

const LandingHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".hero-cup", {
      scale: 0.9, opacity: 0, duration: 1.2, ease: "power3.out",
    });

    gsap.from(".hero-text-child", {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, delay: 0.5, ease: "power3.out",
    });

    gsap.utils.toArray<HTMLElement>(".bean").forEach((bean) => {
      gsap.to(bean, {
        y: gsap.utils.random(-30, -10),
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(1.5, 3),
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 2),
        ease: "sine.inOut",
      });
    });

    gsap.utils.toArray<HTMLElement>(".heavy").forEach((el) => {
      gsap.to(el, {
        y: gsap.utils.random(-15, -8),
        rotation: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(4, 6),
        repeat: -1,
        yoyo: true,
        delay: gsap.utils.random(0, 2),
        ease: "sine.inOut",
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0D0A07] overflow-hidden flex flex-col items-center justify-center px-6"
    >
      {/* Ambient glow behind cup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(180,100,20,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Floating ingredients */}
      <div className="absolute inset-0 pointer-events-none">
        {beans.map((b, i) => (
          <img
            key={i}
            src={b.src}
            alt=""
            className={`bean absolute ${b.cls}`}
            style={{ transform: `rotate(${b.rot}deg)` }}
            draggable={false}
          />
        ))}

        <img
          src={cinnamonImg}
          alt=""
          className="heavy absolute top-[38%] left-[2%] w-[130px] hidden sm:block"
          draggable={false}
        />

        <img
          src={chocolate1}
          alt=""
          className="heavy absolute top-[32%] right-[2%] w-[140px] hidden sm:block"
          draggable={false}
        />

        <img
          src={chocolate2}
          alt=""
          className="heavy absolute top-[55%] right-[1%] w-[110px] hidden sm:block"
          draggable={false}
        />
      </div>

      {/* Focal cup */}
      <img
        src={cupImg}
        alt="Galal Coffee cup"
        className="hero-cup relative z-10 w-[280px] sm:w-[340px] md:w-[400px] drop-shadow-[0_20px_60px_rgba(180,100,20,0.15)]"
        draggable={false}
      />

      {/* Heading + CTA */}
      <div className="hero-text relative z-10 text-center mt-10 max-w-xl">
        <h1 className="hero-text-child font-display text-cream font-light leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
          Every sip tells<br />
          <span className="italic text-brand-accent">a story.</span>
        </h1>
        <p className="hero-text-child mt-5 text-cream/60 text-base md:text-lg leading-relaxed max-w-md mx-auto">
          Hand-selected beans, slow-roasted to perfection. From our family to your cup.
        </p>
        <a
          href="#collection"
          className="hero-text-child inline-flex items-center gap-2 mt-8 rounded-full bg-cream text-charcoal px-8 py-4 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors"
        >
          Explore our menu
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
};

export default LandingHero;
