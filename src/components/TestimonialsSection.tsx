import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns";

gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  { text: "The best coffee quality in Egypt right now. I've been following their journey since the car in Port Said, and they still maintain the same incredible standard.", image: "https://randomuser.me/api/portraits/men/2.jpg", name: "Omar H.", role: "Coffee Enthusiast" },
  { text: "Finally, an Egyptian brand that understands specialty coffee. Their V60 is perfect, and the atmosphere in the Sheraton branch is very cozy for working.", image: "https://randomuser.me/api/portraits/women/3.jpg", name: "Sara M.", role: "Remote Worker" },
  { text: "Amazing experience! The history of this place makes the coffee taste better. A true Port Saidi success story that we are all proud of.", image: "https://randomuser.me/api/portraits/men/4.jpg", name: "Ahmed Z.", role: "Local Business Owner" },
  { text: "I love the consistency of the beans. Whether I'm in Port Said or Cairo, the taste is exactly the same. Highly recommended for real coffee addicts.", image: "https://randomuser.me/api/portraits/women/5.jpg", name: "Mariam E.", role: "Home Barista" },
  { text: "Great service and even better coffee. It's inspiring to see a local brand grow like this. The signature blends are a must-try!", image: "https://randomuser.me/api/portraits/men/7.jpg", name: "Khaled W.", role: "Brand Fan" },
  { text: "The Port Said blend is something else. Rich, smooth, and full of character. Perfect for my morning ritual.", image: "https://randomuser.me/api/portraits/women/1.jpg", name: "Nour K.", role: "Morning Regular" },
  { text: "I drive 20 minutes just to get my Galal fix. The Spanish Latte is the best I have had anywhere in Egypt.", image: "https://randomuser.me/api/portraits/men/9.jpg", name: "Youssef A.", role: "Devoted Customer" },
  { text: "The staff remembers your order, the beans are always fresh, and the vibe is unmatched. This is what Egyptian coffee culture should be.", image: "https://randomuser.me/api/portraits/women/6.jpg", name: "Dina L.", role: "Coffee Explorer" },
  { text: "From bean to cup, everything is intentional. You can taste the Bousaidi spirit in every sip. Proud to be a regular since 2019.", image: "https://randomuser.me/api/portraits/women/8.jpg", name: "Karim F.", role: "Long-time Regular" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const ctx = gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      }
    );

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <section className="py-32 md:py-48 px-6 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className="flex flex-col items-center text-center max-w-xl mx-auto"
        >
          <span className="inline-block text-brand-accent text-xs tracking-[0.3em] uppercase border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6">
            Testimonials
          </span>
          <h2 className="font-display font-light text-cream leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            The cup speaks.
            <br />
            <span className="italic text-brand-accent">The city replies.</span>
          </h2>
          <p className="mt-5 text-cream/60 max-w-md">
            Real words from the people who drink Galal Coffee every day.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
