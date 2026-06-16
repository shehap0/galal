import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.to(track, {
      yPercent: -50,
      duration: props.duration || 10,
      repeat: -1,
      ease: "none",
    });

    return () => {
      ctx.kill();
    };
  }, [props.duration]);

  return (
    <div className={props.className}>
      <div ref={trackRef} className="flex flex-col gap-6 pb-6">
        {[...new Array(2)].map((_, index) => (
          <div key={index} className="flex flex-col gap-6">
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-cream/10 shadow-lg shadow-brand/5 max-w-xs w-full bg-charcoal/60"
                key={i}
              >
                <p className="text-cream/80 text-sm leading-relaxed">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-cream text-sm font-medium leading-tight">
                      {name}
                    </div>
                    <div className="text-cream/50 text-xs leading-tight mt-0.5">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
