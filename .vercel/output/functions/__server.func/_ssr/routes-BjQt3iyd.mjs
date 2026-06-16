import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BjQt3iyd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_cup_default = "/assets/hero-cup-Befww7YJ.jpg";
var beans_default = "/assets/beans-B9NHRpxq.jpg";
var roast_default = "/assets/roast-Cbz1XM96.jpg";
var ritual_default = "/assets/ritual-BsQ4I75X.png";
var portsaid_default = "/assets/portsaid-CKvebLJH.mp4";
var ice_coffee_default = "/assets/ice-coffee-5hol3suY.png";
var Espresso_default = "/assets/Espresso-CkFJFTQG.jpg";
var milk_shake_default = "/assets/milk-shake-pVksupJq.png";
var dessert_default = "/assets/dessert-CV0n1Mvi.png";
var galal_background_default = "/assets/galal-background-DKvhO6sz.jpg";
var grind_default = "/assets/grind-ZAErx6tl.jpg";
var pour_default = "/assets/pour-9CFgizMa.jpg";
function CrownIcon({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 40",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 36 L8 10 L20 24 L32 4 L44 24 L56 10 L60 36 Z",
				fill: "currentColor",
				stroke: "currentColor",
				strokeLinejoin: "round",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "34",
				width: "56",
				height: "4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "8",
				cy: "10",
				r: "2.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "4",
				r: "2.5",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "56",
				cy: "10",
				r: "2.5",
				fill: "currentColor"
			})
		]
	});
}
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = dot.current;
		if (!el) return;
		let x = 0, y = 0, tx = 0, ty = 0;
		const move = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		const raf = () => {
			x += (tx - x) * .18;
			y += (ty - y) * .18;
			el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
			requestAnimationFrame(raf);
		};
		const over = (e) => {
			if (e.target.closest("a, button, [data-cursor='hover']")) el.classList.add("hover");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		className: "cursor-dot"
	});
}
function useLenis() {
	return (0, import_react.useRef)(null);
}
function useInitLenis(lenisRef) {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true
		});
		lenisRef.current = lenis;
		lenis.on("scroll", ScrollTrigger.update);
		const handleAnchor = (e) => {
			const link = e.target.closest("a[href^='#']");
			if (link && link.getAttribute("href") !== "#") {
				e.preventDefault();
				lenis.scrollTo(link.getAttribute("href"));
			}
		};
		document.addEventListener("click", handleAnchor);
		const raf = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(raf);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			document.removeEventListener("click", handleAnchor);
			gsapWithCSS.ticker.remove(raf);
			lenis.destroy();
		};
	}, []);
}
function Magnetic({ children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const enter = (e) => {
			const r = el.getBoundingClientRect();
			const x = e.clientX - (r.left + r.width / 2);
			const y = e.clientY - (r.top + r.height / 2);
			gsapWithCSS.to(el, {
				x: x * .25,
				y: y * .25,
				duration: .5,
				ease: "power3.out"
			});
		};
		const leave = () => gsapWithCSS.to(el, {
			x: 0,
			y: 0,
			duration: .7,
			ease: "elastic.out(1,0.4)"
		});
		el.addEventListener("mousemove", enter);
		el.addEventListener("mouseleave", leave);
		return () => {
			el.removeEventListener("mousemove", enter);
			el.removeEventListener("mouseleave", leave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `inline-block magnetic ${className}`,
		children
	});
}
function GalalCoffee() {
	useInitLenis(useLenis());
	const main = (0, import_react.useRef)(null);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			setProgress(h.scrollTop / (h.scrollHeight - h.clientHeight));
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useGSAP(() => {
		gsapWithCSS.from(".hero-word", {
			yPercent: 110,
			opacity: 0,
			duration: 1.1,
			ease: "power4.out",
			stagger: .08,
			delay: .2
		});
		gsapWithCSS.from(".hero-sub", {
			y: 30,
			opacity: 0,
			duration: 1,
			delay: 1,
			ease: "power3.out"
		});
		gsapWithCSS.from(".hero-cta", {
			y: 20,
			opacity: 0,
			duration: .8,
			delay: 1.2,
			stagger: .1,
			ease: "power3.out"
		});
		gsapWithCSS.from(".hero-meta", {
			opacity: 0,
			duration: 1,
			delay: 1.4,
			stagger: .1
		});
		gsapWithCSS.to(".hero-cup", {
			yPercent: -20,
			scale: 1.1,
			ease: "none",
			scrollTrigger: {
				trigger: ".hero",
				start: "top top",
				end: "bottom top",
				scrub: true
			}
		});
		gsapWithCSS.utils.toArray(".manifesto-word").forEach((w) => {
			gsapWithCSS.fromTo(w, { opacity: .12 }, {
				opacity: 1,
				ease: "none",
				scrollTrigger: {
					trigger: w,
					start: "top 80%",
					end: "top 45%",
					scrub: true
				}
			});
		});
		gsapWithCSS.utils.toArray(".scale-img").forEach((el) => {
			gsapWithCSS.fromTo(el, { scale: .85 }, {
				scale: 1,
				ease: "none",
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					end: "top 30%",
					scrub: true
				}
			});
		});
		const heritageTitle = document.querySelector(".heritage-title");
		if (heritageTitle) gsapWithCSS.to(heritageTitle, {
			opacity: 0,
			ease: "none",
			scrollTrigger: {
				trigger: ".heritage-pin",
				start: "top top",
				end: "bottom top",
				scrub: true
			}
		});
		gsapWithCSS.utils.toArray(".stat-num").forEach((el) => {
			const target = Number(el.dataset.value || 0);
			const obj = { v: 0 };
			ScrollTrigger.create({
				trigger: el,
				start: "top 80%",
				once: true,
				onEnter: () => {
					gsapWithCSS.to(obj, {
						v: target,
						duration: 2,
						ease: "power3.out",
						onUpdate: () => {
							el.textContent = Math.round(obj.v).toLocaleString();
						}
					});
				}
			});
		});
		const track = document.querySelector(".journey-track");
		const wrap = document.querySelector(".journey-wrap");
		if (track && wrap) {
			const total = track.scrollWidth - window.innerWidth;
			gsapWithCSS.to(track, {
				x: -total,
				ease: "none",
				scrollTrigger: {
					trigger: wrap,
					start: "top top",
					end: () => `+=${total}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true
				}
			});
		}
		gsapWithCSS.utils.toArray(".reveal-up").forEach((el) => {
			gsapWithCSS.fromTo(el, {
				y: 40,
				opacity: 0
			}, {
				y: 0,
				opacity: 1,
				duration: .8,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 85%",
					once: true
				}
			});
		});
		gsapWithCSS.utils.toArray(".bento-card").forEach((el, i) => {
			gsapWithCSS.fromTo(el, {
				y: 30,
				opacity: 0,
				scale: .98
			}, {
				y: 0,
				opacity: 1,
				scale: 1,
				duration: .7,
				delay: i * .1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: el,
					start: "top 88%",
					once: true
				}
			});
		});
	}, { scope: main });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		ref: main,
		className: "overflow-x-hidden w-full max-w-full bg-charcoal text-cream selection:bg-brand-accent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-0 left-0 right-0 h-px z-[100] bg-cream/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-brand-accent origin-left",
					style: { transform: `scaleX(${progress})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heritage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voices, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50 bg-charcoal/20 backdrop-blur-xl border-b border-cream/5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "flex items-center justify-between max-w-7xl mx-auto px-5 md:px-10 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-7 h-5 text-brand-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg tracking-tight",
						children: "Galal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden md:flex items-center gap-8 text-sm text-cream/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#story",
							className: "hover:text-cream transition",
							children: "Story"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#collection",
							className: "hover:text-cream transition",
							children: "Collection"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#heritage",
							className: "hover:text-cream transition",
							children: "Heritage"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#journey",
							className: "hover:text-cream transition",
							children: "Craft"
						}) })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#collection",
					className: "inline-flex items-center gap-2 rounded-full bg-cream text-charcoal px-5 py-2.5 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors",
					children: ["Shop coffee", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				}) })
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "hero relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden grain",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_cup_default,
						alt: "",
						className: "hero-cup h-full w-full object-cover object-center opacity-70",
						width: 1536,
						height: 1920
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 radial-vignette" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl w-full text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-meta flex items-center justify-center gap-3 text-cream/60 text-xs tracking-[0.3em] uppercase mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-cream/30" }),
							"Roasted in Cairo · Est. 2015",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-cream/30" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display font-light text-balance leading-[1] text-cream",
						style: { fontSize: "clamp(3rem, 8.5vw, 8.5rem)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-word inline-block pb-2",
								children: "The King"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-word inline-block italic text-brand-accent pb-2",
								children: "Of Egyptian"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-word inline-block ml-4 pb-2",
								children: "Coffee"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-sub mt-8 max-w-xl mx-auto text-base md:text-lg text-cream/70 leading-relaxed",
						children: "From a car in Port Said to a nationwide icon. Every cup carries the Bousaidi spirit of hard work and the taste of home."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							className: "hero-cta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#story",
								className: "inline-flex items-center gap-3 rounded-full bg-cream text-charcoal px-7 py-4 text-sm font-medium tracking-wide hover:bg-brand-accent transition-colors",
								children: ["Explore our story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "↓"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
							className: "hero-cta",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#collection",
								className: "inline-flex items-center gap-3 rounded-full border border-cream/20 text-cream px-7 py-4 text-sm font-medium tracking-wide hover:border-cream hover:bg-cream/5 transition-colors",
								children: "Discover our coffee"
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-meta absolute bottom-8 left-0 right-0 px-8 flex items-end justify-between text-cream/50 text-xs tracking-widest uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Port Said · Est. 2015" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden md:inline",
						children: "Crafted · with · passion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Premium Arabica · ISO Certified" })
				]
			})
		]
	});
}
function MarqueeStrip() {
	const items = [
		"Port Said Pride",
		"Slow Roast",
		"Cairo Crafted",
		"ISO Certified",
		"Premium Arabica",
		"Hand Sorted"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-cream/10 bg-brand-dark/40 py-8 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee gap-16 px-8 text-cream/70 font-display text-3xl md:text-5xl italic font-light",
			children: [
				...items,
				...items,
				...items
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-16 whitespace-nowrap",
				children: [it, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-8 h-5 text-brand-accent" })]
			}, i))
		})
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "story",
		className: "relative py-40 md:py-56 px-6 bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-12 reveal-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-5 h-3 text-brand-accent" }), "How it started"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-10",
				children: ["It began in Port Said. A young man named Mohamed Galal, a small car, and a dream. No shop, no investors — just Bousaidi grit and a perfect brew.", "Word spread. The car became a landmark. Today, Galal Coffee spans Port Said to Cairo, Ismailia, Damietta, and beyond."].map((text, pi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-balance leading-[1.2] text-cream",
					style: { fontSize: "clamp(1.5rem, 3.6vw, 3.25rem)" },
					children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "manifesto-word inline-block mr-[0.2em]",
						children: w
					}, i))
				}, pi))
			})]
		})
	});
}
function Collection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "collection",
		className: "relative py-32 md:py-48 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-16 flex-wrap gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display font-light text-cream leading-[0.95] max-w-3xl reveal-up",
					style: { fontSize: "clamp(2.5rem, 6vw, 5.5rem)" },
					children: [
						"Our menu,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-brand-accent",
							children: "crafted to perfection."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-cream/60 max-w-sm text-base leading-relaxed",
					children: "From our signature Iced Spanish Latte to creamy milkshakes and warm waffles. Every item made with the same Bousaidi care."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 grid-flow-dense",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bento-card group relative md:row-span-2 rounded-3xl overflow-hidden bg-brand-dark min-h-[520px] md:min-h-[640px] grain card-shine",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ice_coffee_default,
								alt: "",
								loading: "lazy",
								width: 1080,
								height: 1600,
								className: "scale-img absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 p-8 md:p-10 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-cream/70 text-xs tracking-widest uppercase",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-4 h-3 text-brand-accent" }), " Signature Iced Coffee"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-cream leading-tight",
										style: { fontSize: "clamp(2rem, 3.4vw, 3.25rem)" },
										children: "Iced Coffee"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-cream/70 max-w-md text-sm md:text-base leading-relaxed",
										children: "Smooth, chilled, and expertly brewed. From our classic Iced Latte to the rich, signature Spanish Latte."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex items-center gap-6 text-brand-accent text-xs tracking-widest uppercase",
										children: "Starting from EGP 75"
									})
								] })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bento-card group relative md:col-span-2 rounded-3xl overflow-hidden bg-brand min-h-[260px] md:min-h-[310px] card-shine",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: Espresso_default,
							alt: "",
							loading: "lazy",
							width: 1920,
							height: 1280,
							className: "scale-img absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 p-8 md:p-10 flex items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-cream/70 text-xs tracking-widest uppercase mb-3",
								children: "The Hot Classics"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-cream leading-tight",
								style: { fontSize: "clamp(1.75rem, 3vw, 2.75rem)" },
								children: "Hot Drinks"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-brand-accent font-mono text-sm shrink-0",
								children: "From EGP 44"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bento-card group relative rounded-3xl overflow-hidden bg-charcoal border border-cream/10 min-h-[310px] card-shine",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: milk_shake_default,
								alt: "",
								loading: "lazy",
								width: 1080,
								height: 1600,
								className: "scale-img absolute inset-0 h-full w-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-charcoal via-charcoal/40 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 p-8 flex flex-col justify-end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-brand-accent text-xs tracking-widest uppercase mb-3",
										children: "Indulgent Milkshakes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-cream leading-tight",
										style: { fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" },
										children: "Milkshakes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-cream/60 text-sm",
										children: "Creamy, thick, and blended to perfection. Featuring Ferrero Rocher, Golden Oreo, and Caramel."
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bento-card group relative rounded-3xl overflow-hidden brand-gradient min-h-[310px] grain card-shine",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dessert_default,
								alt: "",
								loading: "lazy",
								width: 1080,
								height: 1600,
								className: "scale-img absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-charcoal/60 via-brand-dark/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 p-8 flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-10 h-7 text-cream/90" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-cream/80 text-xs tracking-widest uppercase mb-3",
										children: "Dessert"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-cream leading-tight",
										style: { fontSize: "clamp(1.5rem, 2.4vw, 2.25rem)" },
										children: "Sweet Treats"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-cream/80 text-sm",
										children: "Golden, crispy waffles generously covered in rich chocolate, white chocolate, or Ferrero Rocher."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 text-brand-accent text-sm font-medium",
										children: "Starting from EGP 68"
									})
								] })]
							})
						]
					})
				]
			})]
		})
	});
}
function Heritage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "heritage",
		className: "heritage-pin relative bg-brand-dark overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-12 gap-0 min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "heritage-title md:col-span-5 px-6 md:px-12 py-24 flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-brand-accent text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3 reveal-up",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-5 h-3" }), " Heritage"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display font-light text-cream leading-[0.95]",
						style: { fontSize: "clamp(2.5rem, 5.5vw, 5rem)" },
						children: [
							"A decade",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-brand-accent",
								children: "in a single sip."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-cream/70 leading-relaxed",
						children: "From a single coffee car on a Port Said street to a nationwide brand with ISO-certified roasteries. The same passion, the same Bousaidi spirit, served every day since 2015."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: galal_background_default,
						alt: "Galal Coffee heritage",
						loading: "lazy",
						width: 1536,
						height: 1920,
						className: "h-full w-full object-cover min-h-[60vh]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-dark/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "absolute bottom-8 left-8 right-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-cream",
						children: [
							{
								y: "2015",
								l: "The First Spark",
								d: "Mohamed Galal starts his coffee car in Port Said"
							},
							{
								y: "2018",
								l: "From Wheels to Walls",
								d: "First physical roastery in Port Said"
							},
							{
								y: "2021",
								l: "The Cairo Conquest",
								d: "Expands to Sheraton and Nasr City"
							},
							{
								y: "2023",
								l: "ISO Certified",
								d: "9001 & 22000 global quality standards"
							}
						].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-cream/15 bg-charcoal/40 backdrop-blur-md p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl md:text-2xl text-brand-accent",
									children: it.y
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-cream/90 text-xs uppercase tracking-widest mt-1",
									children: it.l
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-cream/50 text-[10px] mt-1 leading-relaxed",
									children: it.d
								})
							]
						}, it.y))
					})
				]
			})]
		})
	});
}
function Journey() {
	const steps = [
		{
			n: "I",
			t: "Bean Selection",
			d: "Premium Arabica beans, hand-sorted for consistency and quality.",
			img: beans_default
		},
		{
			n: "II",
			t: "Slow Roast",
			d: "Drum-roasted in copper. The crackle, the curl, the second crack.",
			img: roast_default
		},
		{
			n: "III",
			t: "Rest & Grind",
			d: "Beans rest 14 days. Then ground to order, never before.",
			img: grind_default
		},
		{
			n: "IV",
			t: "The Pour",
			d: "A 25-second extraction. Crema like silk. Body like velvet.",
			img: pour_default
		},
		{
			n: "V",
			t: "The Ritual",
			d: "Poured in porcelain. Served with a moment of quiet.",
			img: ritual_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "journey",
		className: "journey-wrap relative h-screen overflow-hidden bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "journey-track flex h-full will-change-transform",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0 w-screen h-full flex items-center px-8 md:px-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-brand-accent text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-5 h-3" }), " The craft"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display font-light text-cream leading-[0.95] reveal-up",
							style: { fontSize: "clamp(2.5rem, 6vw, 5.5rem)" },
							children: [
								"Five movements.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-brand-accent",
									children: "One cup."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-cream/70 max-w-md",
							children: "From bean selection to your cup. Each step shaped by the Bousaidi spirit of doing things right."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 text-cream/40 text-xs tracking-widest uppercase",
							children: "Scroll →"
						})
					]
				})
			}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "shrink-0 w-[88vw] md:w-[56vw] h-full px-6 md:px-10 py-20 flex flex-col",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grow rounded-3xl overflow-hidden relative bg-brand-dark grain",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.t,
							loading: "lazy",
							width: 1280,
							height: 1600,
							className: "absolute inset-0 h-full w-full object-cover opacity-70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-8 left-8 right-8 flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-cream/80 text-7xl md:text-8xl leading-none",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-cream/60 text-xs tracking-widest uppercase",
								children: [
									"Step ",
									i + 1,
									" of ",
									steps.length
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-8 left-8 right-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-cream leading-tight",
								style: { fontSize: "clamp(2rem, 3.6vw, 3.25rem)" },
								children: s.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-cream/70 max-w-md",
								children: s.d
							})]
						})
					]
				})
			}, s.n))]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-32 md:py-48 px-6 border-y border-cream/10 bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10",
			children: [
				{
					value: "9+",
					suffix: "",
					label: "Years of Passion",
					desc: "Since 2015, perfecting every cup"
				},
				{
					value: "",
					suffix: "",
					label: "Growing Across Egypt",
					desc: "From Port Said to Cairo and beyond",
					icon: true
				},
				{
					value: "",
					suffix: "",
					label: "Millions of Cups Shared",
					desc: "Served with the Bousaidi spirit",
					icon: true
				},
				{
					value: "",
					suffix: "",
					label: "ISO Certified",
					desc: "9001 & 22000 quality standards",
					icon: true
				}
			].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-charcoal p-8 md:p-10",
				children: [
					it.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-cream leading-none flex items-baseline gap-1",
						style: { fontSize: "clamp(3rem, 6vw, 5.5rem)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-num",
							"data-value": 9,
							children: "0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand-accent text-3xl md:text-4xl",
							children: "+"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-8 h-5 text-brand-accent mb-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-cream/60 text-sm tracking-wide max-w-[12rem]",
						children: it.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-cream/40 text-xs leading-relaxed",
						children: it.desc
					})
				]
			}, it.label))
		})
	});
}
function Voices() {
	const reviews = [
		{
			n: "Omar H.",
			q: "The best coffee quality in Egypt right now. I've been following their journey since the car in Port Said, and they still maintain the same incredible standard."
		},
		{
			n: "Sara M.",
			q: "Finally, an Egyptian brand that understands specialty coffee. Their V60 is perfect, and the atmosphere in the Sheraton branch is very cozy for working."
		},
		{
			n: "Ahmed Z.",
			q: "Amazing experience! The history of this place makes the coffee taste better. A true Port Saidi success story that we are all proud of."
		},
		{
			n: "Mariam E.",
			q: "I love the consistency of the beans. Whether I'm in Port Said or Cairo, the taste is exactly the same. Highly recommended for real coffee addicts."
		},
		{
			n: "Khaled W.",
			q: "Great service and even better coffee. It's inspiring to see a local brand grow like this. The signature blends are a must-try!"
		}
	];
	const initials = (name) => name.split(" ").map((w) => w[0]).join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-32 md:py-48 px-6 bg-charcoal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-cream/40 text-xs tracking-[0.3em] uppercase mb-16 reveal-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-5 h-3 text-brand-accent" }), "What Egypt says"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: reviews.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex items-start gap-6 py-6 border-b border-cream/5 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent text-lg font-medium font-mono tracking-wide",
						children: initials(v.n)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-cream/90 leading-relaxed text-balance",
							style: { fontSize: "clamp(1rem, 1.5vw, 1.35rem)" },
							children: [
								"“",
								v.q,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-2 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream/70 text-sm font-medium",
								children: v.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-cream/30 text-[10px] tracking-widest uppercase",
								children: "Verified"
							})]
						})]
					})]
				}, i))
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-40 md:py-56 px-6 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				className: "absolute inset-0 h-full w-full object-cover",
				src: portsaid_default
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[1] max-w-6xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "mx-auto w-14 h-9 text-brand-accent mb-10 animate-float" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display font-light leading-[0.95] text-balance",
						style: {
							fontSize: "clamp(2.75rem, 8vw, 7.5rem)",
							color: "var(--brand-accent)"
						},
						children: [
							"From Port Said",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-cream",
								children: "to Your Neighborhood."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl mx-auto text-cream/80 text-lg leading-relaxed",
						children: "Find us across Egypt from our original home in Port Said to Cairo, Ismailia, and Damietta."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-wrap items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.talabat.com/egypt/restaurants?s=Galal%20Coffee",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-3 rounded-full bg-[#FF5A00] text-white px-8 py-4 text-sm font-medium min-w-[220px] justify-center transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#FF5A00]/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								"aria-hidden": "true",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
										x1: "3",
										y1: "6",
										x2: "21",
										y2: "6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 10a4 4 0 0 1-8 0" })
								]
							}), "Order on Talabat"]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.google.com/maps/search/Galal+Coffee/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group relative inline-flex items-center gap-3 rounded-full min-w-[220px] justify-center px-8 py-4 text-sm font-medium text-white border border-white/15 overflow-hidden transition-all duration-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110",
									style: { backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23111'/%3E%3Cpath d='M0 35 Q30 15 90 35 T200 25' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M0 90 Q50 70 110 95 T200 80' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M0 145 Q70 125 130 160 T200 140' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M50 0 Q30 40 55 90 T45 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Cpath d='M110 0 Q90 50 130 110 T105 200' stroke='%23222' stroke-width='2.5' fill='none'/%3E%3Cpath d='M170 0 Q155 30 180 80 T160 200' stroke='%23222' stroke-width='2' fill='none'/%3E%3Ccircle cx='90' cy='35' r='3' fill='%23333'/%3E%3Ccircle cx='55' cy='95' r='2' fill='%23333'/%3E%3Ccircle cx='160' cy='145' r='2.5' fill='%23333'/%3E%3C/svg%3E")` }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-black/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									width: "16",
									height: "16",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "1.5",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "relative z-10",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "10",
										r: "3"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10",
									children: "Find a Location"
								})
							]
						}) })]
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-cream/10 bg-charcoal px-6 pt-20 pb-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-12 gap-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrownIcon, { className: "w-9 h-6 text-brand-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl",
								children: "Galal Coffee"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-cream/60 max-w-sm leading-relaxed",
							children: "Born on the streets of Port Said. Crafted with passion. From a single car to an Egyptian icon since 2015."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-cream/40 text-xs tracking-widest uppercase mb-4",
							children: "Shop"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-cream/80 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Signature"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Espresso"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Reserve"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Equipment"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-cream/40 text-xs tracking-widest uppercase mb-4",
							children: "House"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-cream/80 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#story",
									className: "hover:text-brand-accent",
									children: "Our story"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#journey",
									className: "hover:text-brand-accent",
									children: "The Journey"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Press"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-brand-accent",
									children: "Careers"
								}) })
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-cream/40 text-xs tracking-wide",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					"© 2026",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://github.com/shehap0",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "shehap-link",
						children: "shehap"
					}),
					" ",
					"· Port Said · Cairo · Ismailia · Damietta, Egypt"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/Galalcoffee1/?locale=ar_AR",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-cream",
						children: "Facebook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/galal_coffee/?hl=ar",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-cream",
						children: "Instagram"
					})]
				})]
			})]
		})
	});
}
//#endregion
export { GalalCoffee as component };
