import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS, r as require_react, t as useGSAP } from "../_libs/gsap+gsap__react+react.mjs";
import { d as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ice-coffee-hQsdIxNi.js
var ice_coffee_default = "/assets/ice-coffee-5hol3suY.png";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jZ7hNqTt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var beans_default = "/assets/beans-B9NHRpxq.jpg";
var roast_default = "/assets/roast-Cbz1XM96.jpg";
var ritual_default = "/assets/ritual-BsQ4I75X.png";
var portsaid_default = "/assets/portsaid-CKvebLJH.mp4";
var galal_background_default = "/assets/galal-background-DKvhO6sz.jpg";
var grind_default = "/assets/grind-ZAErx6tl.jpg";
var pour_default = "/assets/pour-9CFgizMa.jpg";
var TestimonialsColumn = (props) => {
	const trackRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const track = trackRef.current;
		if (!track) return;
		const ctx = gsapWithCSS.to(track, {
			yPercent: -50,
			duration: props.duration || 10,
			repeat: -1,
			ease: "none"
		});
		return () => {
			ctx.kill();
		};
	}, [props.duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: props.className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: trackRef,
			className: "flex flex-col gap-6 pb-6",
			children: [...new Array(2)].map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-6",
				children: props.testimonials.map(({ text, image, name, role }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-8 rounded-3xl border border-cream/10 shadow-lg shadow-brand/5 max-w-xs w-full bg-charcoal/60",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-cream/80 text-sm leading-relaxed",
						children: [
							"“",
							text,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							width: 40,
							height: 40,
							src: image,
							alt: name,
							className: "h-10 w-10 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-cream text-sm font-medium leading-tight",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-cream/50 text-xs leading-tight mt-0.5",
							children: role
						})] })]
					})]
				}, i))
			}, index))
		})
	});
};
gsapWithCSS.registerPlugin(ScrollTrigger);
var testimonials = [
	{
		text: "The best coffee quality in Egypt right now. I've been following their journey since the car in Port Said, and they still maintain the same incredible standard.",
		image: "https://randomuser.me/api/portraits/men/2.jpg",
		name: "Omar H.",
		role: "Coffee Enthusiast"
	},
	{
		text: "Finally, an Egyptian brand that understands specialty coffee. Their V60 is perfect, and the atmosphere in the Sheraton branch is very cozy for working.",
		image: "https://randomuser.me/api/portraits/women/3.jpg",
		name: "Sara M.",
		role: "Remote Worker"
	},
	{
		text: "Amazing experience! The history of this place makes the coffee taste better. A true Port Saidi success story that we are all proud of.",
		image: "https://randomuser.me/api/portraits/men/4.jpg",
		name: "Ahmed Z.",
		role: "Local Business Owner"
	},
	{
		text: "I love the consistency of the beans. Whether I'm in Port Said or Cairo, the taste is exactly the same. Highly recommended for real coffee addicts.",
		image: "https://randomuser.me/api/portraits/women/5.jpg",
		name: "Mariam E.",
		role: "Home Barista"
	},
	{
		text: "Great service and even better coffee. It's inspiring to see a local brand grow like this. The signature blends are a must-try!",
		image: "https://randomuser.me/api/portraits/men/7.jpg",
		name: "Khaled W.",
		role: "Brand Fan"
	},
	{
		text: "The Port Said blend is something else. Rich, smooth, and full of character. Perfect for my morning ritual.",
		image: "https://randomuser.me/api/portraits/women/1.jpg",
		name: "Nour K.",
		role: "Morning Regular"
	},
	{
		text: "I drive 20 minutes just to get my Galal fix. The Spanish Latte is the best I have had anywhere in Egypt.",
		image: "https://randomuser.me/api/portraits/men/9.jpg",
		name: "Youssef A.",
		role: "Devoted Customer"
	},
	{
		text: "The staff remembers your order, the beans are always fresh, and the vibe is unmatched. This is what Egyptian coffee culture should be.",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
		name: "Dina L.",
		role: "Coffee Explorer"
	},
	{
		text: "From bean to cup, everything is intentional. You can taste the Bousaidi spirit in every sip. Proud to be a regular since 2019.",
		image: "https://randomuser.me/api/portraits/women/8.jpg",
		name: "Karim F.",
		role: "Long-time Regular"
	}
];
var firstColumn = testimonials.slice(0, 3);
var secondColumn = testimonials.slice(3, 6);
var thirdColumn = testimonials.slice(6, 9);
var TestimonialsSection = () => {
	const headingRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = headingRef.current;
		if (!el) return;
		const ctx = gsapWithCSS.fromTo(el, {
			opacity: 0,
			y: 24
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			ease: "power3.out",
			scrollTrigger: {
				trigger: el,
				start: "top 85%",
				once: true
			}
		});
		return () => {
			ctx.kill();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-32 md:py-48 px-6 bg-charcoal relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: headingRef,
				className: "flex flex-col items-center text-center max-w-xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block text-brand-accent text-xs tracking-[0.3em] uppercase border border-brand-accent/20 rounded-full px-4 py-1.5 mb-6",
						children: "Testimonials"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display font-light text-cream leading-[0.95]",
						style: { fontSize: "clamp(2.5rem, 6vw, 5rem)" },
						children: [
							"The cup speaks.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-brand-accent",
								children: "The city replies."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-cream/60 max-w-md",
						children: "Real words from the people who drink Galal Coffee every day."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[700px] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsColumn, {
						testimonials: firstColumn,
						duration: 15
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsColumn, {
						testimonials: secondColumn,
						className: "hidden md:block",
						duration: 19
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsColumn, {
						testimonials: thirdColumn,
						className: "hidden lg:block",
						duration: 17
					})
				]
			})]
		})
	});
};
var cup_review_default = "/assets/cup%20review-VvTxNW06.png";
var bean001_default = "/assets/bean001-BA0-OYYh.png";
var bean002_default = "/assets/bean002-Bvp30fsf.png";
var bean003_default = "/assets/bean003-D3KwPboL.png";
var bean005_default = "/assets/bean005-CIh66Gfb.png";
var bean006_default = "/assets/bean006-Bv8x-CgP.png";
var bean007_default = "/assets/bean007-7N0oDHj1.png";
var cinnamon_default = "/assets/cinnamon-CZpqj1WJ.png";
var chocolate1_default = "/assets/chocolate1-pWk_JC_e.png";
var chocolate2_default = "/assets/chocolate2-nq1xLJDD.png";
var beans = [
	{
		src: bean001_default,
		cls: "top-[12%] left-[7%]  w-[35px]",
		rot: -12
	},
	{
		src: bean002_default,
		cls: "top-[28%] left-[16%] w-[50px]",
		rot: 18
	},
	{
		src: bean003_default,
		cls: "top-[62%] left-[8%]  w-[28px]",
		rot: -28
	},
	{
		src: bean005_default,
		cls: "top-[8%]  right-[10%] w-[44px]",
		rot: 15
	},
	{
		src: bean006_default,
		cls: "top-[30%] right-[6%]  w-[22px]",
		rot: -18
	},
	{
		src: bean007_default,
		cls: "top-[55%] right-[10%] w-[52px]",
		rot: 32
	},
	{
		src: bean001_default,
		cls: "top-[78%] left-[20%] w-[40px]",
		rot: -8
	},
	{
		src: bean003_default,
		cls: "top-[72%] right-[20%] w-[30px]",
		rot: 20
	},
	{
		src: bean005_default,
		cls: "top-[18%] left-[35%] w-[24px]",
		rot: -22
	},
	{
		src: bean002_default,
		cls: "top-[82%] right-[30%] w-[28px]",
		rot: 10
	},
	{
		src: bean006_default,
		cls: "top-[42%] left-[3%]  w-[36px]",
		rot: 14
	},
	{
		src: bean007_default,
		cls: "top-[40%] right-[3%]  w-[40px]",
		rot: -14
	}
];
var LandingHero = () => {
	const sectionRef = (0, import_react.useRef)(null);
	useGSAP(() => {
		gsapWithCSS.from(".hero-cup", {
			scale: .9,
			opacity: 0,
			duration: 1.2,
			ease: "power3.out"
		});
		gsapWithCSS.from(".hero-text-child", {
			y: 40,
			opacity: 0,
			duration: .8,
			stagger: .15,
			delay: .5,
			ease: "power3.out"
		});
		gsapWithCSS.utils.toArray(".bean").forEach((bean) => {
			gsapWithCSS.to(bean, {
				y: gsapWithCSS.utils.random(-30, -10),
				rotation: gsapWithCSS.utils.random(-15, 15),
				duration: gsapWithCSS.utils.random(1.5, 3),
				repeat: -1,
				yoyo: true,
				delay: gsapWithCSS.utils.random(0, 2),
				ease: "sine.inOut"
			});
		});
		gsapWithCSS.utils.toArray(".heavy").forEach((el) => {
			gsapWithCSS.to(el, {
				y: gsapWithCSS.utils.random(-15, -8),
				rotation: gsapWithCSS.utils.random(-5, 5),
				duration: gsapWithCSS.utils.random(4, 6),
				repeat: -1,
				yoyo: true,
				delay: gsapWithCSS.utils.random(0, 2),
				ease: "sine.inOut"
			});
		});
	}, { scope: sectionRef });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative h-screen bg-[#0D0A07] overflow-hidden flex flex-col items-center justify-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none",
				style: { background: "radial-gradient(circle, rgba(180,100,20,0.12) 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none",
				children: [
					beans.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: b.src,
						alt: "",
						className: `bean absolute ${b.cls}`,
						style: { transform: `rotate(${b.rot}deg)` },
						draggable: false
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cinnamon_default,
						alt: "",
						className: "heavy absolute top-[38%] left-[2%] w-[130px] hidden sm:block",
						draggable: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: chocolate1_default,
						alt: "",
						className: "heavy absolute top-[32%] right-[2%] w-[140px] hidden sm:block",
						draggable: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: chocolate2_default,
						alt: "",
						className: "heavy absolute top-[55%] right-[1%] w-[110px] hidden sm:block",
						draggable: false
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: cup_review_default,
				alt: "Galal Coffee cup",
				className: "hero-cup relative z-10 w-[280px] sm:w-[340px] md:w-[400px] drop-shadow-[0_20px_60px_rgba(180,100,20,0.15)]",
				draggable: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-text relative z-10 text-center mt-10 max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-text-child font-display text-cream font-light leading-[1.05]",
						style: { fontSize: "clamp(2.5rem, 6vw, 5.5rem)" },
						children: [
							"Every sip tells",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-brand-accent",
								children: "a story."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-text-child mt-5 text-cream/60 text-base md:text-lg leading-relaxed max-w-md mx-auto",
						children: "Hand-selected beans, slow-roasted to perfection. From our family to your cup."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#collection",
						className: "hero-text-child inline-flex items-center gap-2 mt-8 rounded-full bg-cream text-charcoal px-8 py-4 text-sm font-medium hover:bg-brand-accent hover:text-charcoal transition-colors",
						children: ["Explore our menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				]
			})
		]
	});
};
var milkshake_default = "/assets/milkshake-CG5PfHhh.png";
var rest_grind_default = "/assets/rest-grind-Dpq5yvjl.png";
var the_ritual_default = "/assets/the-ritual-BWQqiwVd.png";
var menu_default = "/assets/menu-SF96eIi3.png";
var FEATURED = [
	{
		id: 1,
		name: "MILK SHAKE",
		price: 80,
		offerLabel: "New",
		img: milkshake_default
	},
	{
		id: 2,
		name: "ICE DRINKS",
		price: 80,
		offerLabel: "Best Seller",
		img: ice_coffee_default
	},
	{
		id: 3,
		name: "Frappuccino",
		price: 50,
		offerLabel: "Popular",
		img: rest_grind_default
	},
	{
		id: 4,
		name: "WAFFLE/DONUT",
		price: 60,
		offerLabel: "Cozy",
		img: the_ritual_default
	}
];
var MENU_CATEGORIES = {
	"MILK SHAKE": [
		{
			name: "M.S Caramel Basbousa (New)",
			price: 20
		},
		{
			name: "M.S Mix",
			price: 15
		},
		{
			name: "M.S Vanilla",
			price: 15
		},
		{
			name: "M.S Chocolate",
			price: 15
		},
		{
			name: "M.S Caramel",
			price: 20
		},
		{
			name: "M.S Strawberry",
			price: 20
		},
		{
			name: "M.S Peach",
			price: 20
		},
		{
			name: "M.S Pineapple",
			price: 20
		},
		{
			name: "M.S Blueberry",
			price: 20
		},
		{
			name: "M.S Kiwi",
			price: 20
		},
		{
			name: "M.S Mango",
			price: 20
		}
	],
	"SOFT DRINKS": [
		{
			name: "Jelly Cola",
			price: 15
		},
		{
			name: "Blueberry Cola",
			price: 15
		},
		{
			name: "Strawberry Cola",
			price: 15
		},
		{
			name: "Strawberry Mint",
			price: 15
		},
		{
			name: "Blue Taste",
			price: 15
		},
		{
			name: "Green Apple Lemon",
			price: 15
		},
		{
			name: "Red Berry",
			price: 15
		},
		{
			name: "Mint Kiwi",
			price: 15
		},
		{
			name: "Mango Kiwi",
			price: 15
		},
		{
			name: "Strawberry Kiwi",
			price: 15
		},
		{
			name: "Pineapple Mix",
			price: 15
		},
		{
			name: "Mango Mix",
			price: 15
		},
		{
			name: "Cherry Cola",
			price: 15
		},
		{
			name: "Conta Lamer",
			price: 15
		},
		{
			name: "Benacolada",
			price: 15
		},
		{
			name: "Blue Passion",
			price: 15
		},
		{
			name: "Pink Colada",
			price: 15
		},
		{
			name: "Lemon Mint",
			price: 15
		},
		{
			name: "Lemonada",
			price: 15
		},
		{
			name: "Blueberry",
			price: 15
		},
		{
			name: "Happiness Drink",
			price: 15
		}
	],
	"NEW (Healthy Drinks)": [{
		name: "Ice Tea (Green Tea Mint / Strawberry / Blueberry / Mango / Peach)",
		price: 15
	}, {
		name: "Light Milk Shake",
		price: 15
	}],
	"FRAPPUCCINO & FARABEH": [
		{
			name: "Frappuccino",
			price: 20
		},
		{
			name: "Frappuccino with Flavors",
			price: 25
		},
		{
			name: "Frappuccino Dolce",
			price: 25
		},
		{
			name: "Frappuccino Chocolate",
			price: 25
		},
		{
			name: "Ice Dolce",
			price: 20
		},
		{
			name: "Ice Latte",
			price: 20
		},
		{
			name: "Ice Mocha",
			price: 20
		},
		{
			name: "Ice Coffee",
			price: 25
		},
		{
			name: "illy Cream",
			price: 15
		},
		{
			name: "Ice Golden Oreo",
			price: 20
		},
		{
			name: "Ice Mocha Dolce",
			price: 25
		},
		{
			name: "Ice White Mocha",
			price: 25
		},
		{
			name: "Caramel Macchiato",
			price: 20
		},
		{
			name: "illy Cream Biscuits",
			price: 30
		},
		{
			name: "Nutella Lovers",
			price: 30
		}
	],
	"WINTER DRINKS": [
		{
			name: "Hot Dolce",
			price: 15
		},
		{
			name: "Golden Oreo",
			price: 15
		},
		{
			name: "Hot Chocolate",
			price: 15
		},
		{
			name: "Gersy",
			price: 15
		},
		{
			name: "Hot Lotus Cinnamon",
			price: 15
		},
		{
			name: "Corn Flakes",
			price: 15
		}
	],
	"COFFEE CORNER": [
		{
			name: "Turkey Coffee",
			price: 10
		},
		{
			name: "French Coffee",
			price: 10
		},
		{
			name: "Cappuccino Bonjourno",
			price: 10
		},
		{
			name: "Cappuccino Biscuits Vanilla",
			price: 10
		},
		{
			name: "Nescafe",
			price: 10
		},
		{
			name: "Flavors Tea",
			price: 6
		},
		{
			name: "Single Espresso",
			price: 10
		},
		{
			name: "Double Espresso",
			price: 15
		},
		{
			name: "American Coffee",
			price: 15
		}
	],
	"FLAVORS COFFEE": [
		{
			name: "Hazelnut Coffee (Regular)",
			price: 10
		},
		{
			name: "Vanilla Coffee",
			price: 10
		},
		{
			name: "Chocolate Coffee",
			price: 10
		},
		{
			name: "Banana Coffee",
			price: 10
		},
		{
			name: "Hazelnut Coffee (Special/Large)",
			price: 15
		},
		{
			name: "Almonds Coffee",
			price: 15
		},
		{
			name: "Shesha Apple Coffee",
			price: 15
		},
		{
			name: "Cookies Coffee",
			price: 15
		},
		{
			name: "Nutella Hazelnut",
			price: 15
		}
	],
	"CAPPUCCINO DRINKS": [
		{
			name: "Es. Cappuccino",
			price: 15
		},
		{
			name: "Special Cappuccino",
			price: 15
		},
		{
			name: "Cappuccino Espresso Flavors",
			price: 17
		},
		{
			name: "Hot Mocha",
			price: 20
		},
		{
			name: "Hot Flavors Mocha",
			price: 22
		},
		{
			name: "White Mocha",
			price: 20
		},
		{
			name: "Flat White",
			price: 15
		},
		{
			name: "Michato Espresso",
			price: 15
		},
		{
			name: "Irish Cream",
			price: 20
		}
	]
};
var EXTRAS = [
	{
		id: "cream",
		label: "Add Cream",
		price: 5
	},
	{
		id: "marshmello",
		label: "Add Marshmello",
		price: 5
	},
	{
		id: "skimmed",
		label: "Skimmed Milk / Diet Sugar",
		price: 5
	}
];
var ChevronDown = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	width: "14",
	height: "14",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	style: { flexShrink: 0 },
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "6 9 12 15 18 9" })
});
function SelectBox({ label, value, onChange, options, placeholder }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const listRef = (0, import_react.useRef)(null);
	const btnRef = (0, import_react.useRef)(null);
	const selectedLabel = value ? options.find((o) => o.value === value)?.label ?? value : null;
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const handler = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
				btnRef.current?.focus();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open || !listRef.current) return;
		const active = listRef.current.querySelector("[aria-selected=true]");
		if (active) active.scrollIntoView({ block: "nearest" });
	}, [open]);
	const handleKeyDown = (e) => {
		if (!open) {
			if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
				e.preventDefault();
				setOpen(true);
			}
			return;
		}
		const items = listRef.current?.querySelectorAll("[role=option]");
		if (!items) return;
		const currentIdx = Array.from(items).findIndex((el) => el.dataset.value === value);
		let nextIdx = currentIdx;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			nextIdx = Math.min(currentIdx + 1, items.length - 1);
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			nextIdx = Math.max(currentIdx - 1, 0);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (currentIdx >= 0) onChange(items[currentIdx].dataset.value);
			setOpen(false);
			btnRef.current?.focus();
		} else if (e.key === "Escape") {
			setOpen(false);
			btnRef.current?.focus();
		}
		if (nextIdx !== currentIdx && nextIdx >= 0) {
			items[nextIdx]?.focus();
			onChange(items[nextIdx].dataset.value);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: { marginBottom: 24 },
		onKeyDown: handleKeyDown,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "aw-micro-label",
			id: `${label}-label`,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { position: "relative" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: btnRef,
				type: "button",
				role: "combobox",
				"aria-expanded": open,
				"aria-haspopup": "listbox",
				"aria-labelledby": `${label}-label`,
				onClick: () => setOpen((p) => !p),
				className: `aw-select ${open ? "aw-select-open" : ""}`,
				style: {
					width: "100%",
					padding: "14px 16px",
					backgroundColor: "rgba(255,255,255,0.02)",
					color: selectedLabel ? "#fff" : "#666",
					border: `1px solid rgba(255,255,255,${open ? "0.3" : "0.08"})`,
					borderRadius: 8,
					fontSize: 14,
					outline: "none",
					cursor: "pointer",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					gap: 8,
					textAlign: "left",
					transition: "border-color 0.25s, background-color 0.25s"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedLabel ?? placeholder }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						display: "flex",
						transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
						transform: open ? "rotate(180deg)" : "rotate(0deg)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {})
				})]
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				ref: listRef,
				role: "listbox",
				tabIndex: -1,
				"aria-label": label,
				style: {
					position: "absolute",
					top: "calc(100% + 4px)",
					left: 0,
					right: 0,
					zIndex: 50,
					backgroundColor: "#16181a",
					border: "1px solid rgba(255,255,255,0.1)",
					borderRadius: 8,
					padding: 4,
					margin: 0,
					listStyle: "none",
					maxHeight: 220,
					overflowY: "auto",
					boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
					animation: "awFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					"aria-selected": value === "",
					"data-value": "",
					tabIndex: -1,
					onClick: () => {
						onChange("");
						setOpen(false);
						btnRef.current?.focus();
					},
					style: {
						padding: "10px 14px",
						borderRadius: 6,
						fontSize: 13,
						cursor: "pointer",
						color: "#666",
						backgroundColor: value === "" ? "rgba(255,255,255,0.04)" : "transparent"
					},
					children: placeholder
				}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					role: "option",
					"aria-selected": value === o.value,
					"data-value": o.value,
					tabIndex: -1,
					onClick: () => {
						onChange(o.value);
						setOpen(false);
						btnRef.current?.focus();
					},
					style: {
						padding: "10px 14px",
						borderRadius: 6,
						fontSize: 13,
						cursor: "pointer",
						color: "#fff",
						backgroundColor: value === o.value ? "rgba(255,255,255,0.06)" : "transparent"
					},
					onMouseEnter: (e) => {
						e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
					},
					onMouseLeave: (e) => {
						e.currentTarget.style.backgroundColor = value === o.value ? "rgba(255,255,255,0.06)" : "transparent";
					},
					children: o.label
				}, o.value))]
			})]
		})]
	});
}
function OrderPanel() {
	const [category, setCategory] = (0, import_react.useState)("");
	const [itemName, setItemName] = (0, import_react.useState)("");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [extras, setExtras] = (0, import_react.useState)([]);
	const [placed, setPlaced] = (0, import_react.useState)(false);
	const items = category ? MENU_CATEGORIES[category] : [];
	const chosenItem = items.find((i) => i.name === itemName);
	const extrasTotal = extras.reduce((s, id) => {
		return s + (EXTRAS.find((x) => x.id === id)?.price ?? 0);
	}, 0);
	const total = ((chosenItem?.price ?? 0) + extrasTotal) * qty;
	const toggleExtra = (id) => setExtras((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]);
	const handleCategory = (c) => {
		setCategory(c);
		setItemName("");
		setExtras([]);
	};
	const handleItem = (n) => {
		setItemName(n);
		setExtras([]);
	};
	const handlePlace = () => {
		if (!chosenItem) return;
		setPlaced(true);
		setTimeout(() => {
			setPlaced(false);
			setCategory("");
			setItemName("");
			setQty(1);
			setExtras([]);
		}, 2800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "aw-order-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: 12,
					marginBottom: 32
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
					width: 8,
					height: 8,
					borderRadius: "50%",
					backgroundColor: "var(--accent)"
				} }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "aw-panel-title",
					children: "Interactive Request"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBox, {
				label: "01. Category Selection",
				value: category,
				onChange: handleCategory,
				placeholder: "Select class...",
				options: Object.keys(MENU_CATEGORIES).map((c) => ({
					value: c,
					label: c
				}))
			}),
			category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: { animation: "awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBox, {
					label: "02. Product Selection",
					value: itemName,
					onChange: handleItem,
					placeholder: "Select item...",
					options: items.map((i) => ({
						value: i.name,
						label: `${i.name} — ${i.price} EGP`
					}))
				})
			}),
			itemName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: { animation: "awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "aw-micro-label",
						children: "03. Optional Enhancements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							gap: 8,
							marginBottom: 28
						},
						children: EXTRAS.map((ex) => {
							const checked = extras.includes(ex.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `aw-extra-item ${checked ? "active" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked,
										onChange: () => toggleExtra(ex.id),
										style: { display: "none" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aw-custom-checkbox",
										children: checked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aw-custom-checkbox-dot" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: 13,
											flex: 1,
											letterSpacing: "-0.01em"
										},
										children: ex.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: {
											fontSize: 13,
											opacity: .8,
											fontFamily: "monospace"
										},
										children: [
											"+",
											ex.price,
											" EGP"
										]
									})
								]
							}, ex.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							marginBottom: 32
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "aw-micro-label",
							style: { margin: 0 },
							children: "04. Quantity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aw-qty-selector",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => Math.max(1, q - 1)),
									className: "aw-qty-btn",
									children: "−"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										fontSize: 15,
										fontWeight: 500,
										minWidth: 32,
										textAlign: "center",
										fontFamily: "monospace"
									},
									children: qty.toString().padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => q + 1),
									className: "aw-qty-btn",
									children: "+"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aw-receipt",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									display: "flex",
									justifyContent: "space-between",
									marginBottom: 10
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { opacity: .6 },
									children: [
										itemName,
										" × ",
										qty
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: { fontFamily: "monospace" },
									children: [(chosenItem?.price ?? 0) * qty, " EGP"]
								})]
							}),
							extras.map((id) => {
								const ex = EXTRAS.find((e) => e.id === id);
								if (!ex) return null;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										marginBottom: 10,
										fontSize: 13
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: { opacity: .6 },
										children: [
											ex.label,
											" × ",
											qty
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										style: { fontFamily: "monospace" },
										children: [
											"+",
											ex.price * qty,
											" EGP"
										]
									})]
								}, id);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aw-receipt-total",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ESTIMATED TOTAL" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									style: {
										fontFamily: "monospace",
										fontSize: 20
									},
									children: [
										total,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { fontSize: 11 },
											children: "EGP"
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handlePlace,
						disabled: !chosenItem,
						className: `aw-place-btn ${placed ? "success" : ""}`,
						children: placed ? "TRANSACTION SECURED" : "CONFIRM SELECTION"
					})
				]
			})
		]
	});
}
function ZoomableMenuImage({ src, alt }) {
	const [coords, setCoords] = (0, import_react.useState)({
		x: 50,
		y: 50
	});
	const [isZoomed, setIsZoomed] = (0, import_react.useState)(false);
	const handleMouseMove = (e) => {
		const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
		setCoords({
			x: (e.clientX - left) / width * 100,
			y: (e.clientY - top) / height * 100
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onMouseMove: handleMouseMove,
		onMouseEnter: () => setIsZoomed(true),
		onMouseLeave: () => setIsZoomed(false),
		style: {
			position: "relative",
			width: "100%",
			borderRadius: 16,
			overflow: "hidden",
			border: "1px solid rgba(255, 255, 255, 0.06)",
			background: "#0e0f11",
			cursor: "zoom-in"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style: {
				position: "absolute",
				bottom: 16,
				left: "50%",
				transform: "translateX(-50%)",
				zIndex: 10,
				backgroundColor: "rgba(10, 11, 13, 0.85)",
				backdropFilter: "blur(12px)",
				WebkitBackdropFilter: "blur(12px)",
				padding: "8px 16px",
				borderRadius: "100px",
				fontSize: "11px",
				color: "rgba(255, 255, 255, 0.8)",
				pointerEvents: "none",
				letterSpacing: "0.08em",
				textTransform: "uppercase",
				opacity: isZoomed ? 0 : 1,
				transition: "opacity 0.25s ease",
				border: "1px solid rgba(255, 255, 255, 0.08)"
			},
			children: "Hover over to read"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			style: {
				width: "100%",
				display: "block",
				transformOrigin: `${coords.x}% ${coords.y}%`,
				transform: isZoomed ? "scale(2.2)" : "scale(1)",
				transition: isZoomed ? "transform 0.1s ease-out, transform-origin 0.1s ease-out" : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
			}
		})]
	});
}
function MenuPortal({ onClose }) {
	const stopProp = (e) => e.stopPropagation();
	return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .aw-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background-color: rgba(4, 4, 5, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: awBackdropIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .aw-dialog {
          width: 100%;
          max-width: 1320px;
          max-height: 92vh;
          background-color: #0b0c0e;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9);
          animation: awDialogIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (min-width: 768px) {
          .aw-dialog {
            grid-template-columns: 1.5fr 0.9fr;
          }
        }
        .aw-scroll-area {
          overflow-y: auto;
          max-height: 90vh;
          padding: 40px;
        }
        .aw-scroll-area::-webkit-scrollbar {
          width: 4px;
        }
        .aw-scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .aw-scroll-area::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 99px;
        }
        .aw-close-circle {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-close-circle:hover {
          background: #fff;
          color: #000;
          transform: rotate(90deg);
        }
        .aw-dialog-left {
          border-right: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        @keyframes awBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes awDialogIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		onClick: onClose,
		onWheel: (e) => e.stopPropagation(),
		onTouchMove: (e) => e.stopPropagation(),
		className: "aw-backdrop",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: stopProp,
			className: "aw-dialog",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "aw-dialog-left aw-scroll-area",
				style: { padding: "28px 28px 40px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "Close dialog",
						className: "aw-close-circle",
						children: "×"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { marginBottom: 20 },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "aw-micro-label",
							style: {
								color: "var(--accent)",
								marginBottom: 6
							},
							children: "ARCHIVED BOARD"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "aw-poster-title",
							style: {
								color: "#fff",
								margin: 0,
								fontSize: 20,
								letterSpacing: "-0.03em"
							},
							children: "Galal Coffee Menu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomableMenuImage, {
						src: menu_default,
						alt: "Menu list visualization"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aw-scroll-area",
				style: { backgroundColor: "#0b0c0e" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderPanel, {})
			})]
		})
	})] }), document.body);
}
function MenuSection() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "aw-section",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        :root {
          --accent: #10b981;
        }
        .aw-section {
          background-color: #050506;
          padding: 120px 24px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #ffffff;
          overflow: hidden;
        }
        .aw-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 72px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 32px;
        }
        .aw-tag {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--accent);
          display: inline-block;
          margin-bottom: 16px;
        }
        .aw-title {
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0;
          color: #f3f4f6;
        }
        .aw-title-italic {
          font-style: italic;
          font-family: Georgia, serif;
          color: #9ca3af;
        }
        .aw-nav-btn {
          padding: 14px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.15);
          background-color: transparent;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
          position: relative;
          transition: border-color 0.3s;
        }
        .aw-nav-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: #fff;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .aw-nav-btn:hover {
          border-color: #fff;
        }
        .aw-nav-btn:hover::before {
          transform: translateY(0);
        }
        .aw-nav-btn-text {
          position: relative;
          z-index: 2;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .aw-nav-btn:hover .aw-nav-btn-text {
          color: #000;
        }

        /* Grid system styling */
        .aw-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        /* Card design inspired by editorial layouts */
        .aw-card {
          background-color: #0e0f11;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }
        .aw-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-4px);
        }
        .aw-card-img-wrap {
          width: 100%;
          height: 260px;
          position: relative;
          overflow: hidden;
          background-color: #121316;
        }
        .aw-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
        }
        .aw-card:hover .aw-card-img {
          transform: scale(1.05);
          opacity: 0.9;
        }
        .aw-card-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(10, 11, 13, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 6px 12px;
          border-radius: 100px;
        }
        .aw-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .aw-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .aw-card-num {
          font-size: 11px;
          font-family: monospace;
          opacity: 0.3;
        }
        .aw-card-title {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .aw-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .aw-price {
          font-family: monospace;
          font-size: 16px;
          font-weight: 500;
        }
        .aw-card-btn {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          position: relative;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .aw-card-btn::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-card:hover .aw-card-btn::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Order panel specific internal UI classes */
        .aw-order-panel {
          background-color: transparent;
        }
        .aw-panel-title {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0;
          color: #9ca3af;
        }
        .aw-micro-label {
          color: rgba(255, 255, 255, 0.4);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 10px;
        }
        .aw-select {
          width: 100%;
          padding: 14px 16px;
          background-color: rgba(255,255,255,0.02);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          cursor: pointer;
          appearance: none;
          transition: border-color 0.25s, background-color 0.25s;
        }
        .aw-select:focus {
          border-color: rgba(255, 255, 255, 0.3);
          background-color: rgba(255,255,255,0.04);
        }
        .aw-select-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255,255,255,0.4);
        }
        .aw-extra-item {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          padding: 12px 16px;
          border-radius: 8px;
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-extra-item:hover {
          background-color: rgba(255,255,255,0.03);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .aw-extra-item.active {
          background-color: rgba(16, 185, 129, 0.06);
          border-color: rgba(16, 185, 129, 0.3);
        }
        .aw-custom-checkbox {
          width: 16px;
          height: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .aw-extra-item.active .aw-custom-checkbox {
          border-color: var(--accent);
          background-color: var(--accent);
        }
        .aw-custom-checkbox-dot {
          width: 6px;
          height: 6px;
          background-color: #000;
          border-radius: 50%;
        }
        .aw-qty-selector {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 4px;
        }
        .aw-qty-btn {
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .aw-qty-btn:hover {
          opacity: 0.6;
        }
        .aw-receipt {
          padding: 24px;
          background-color: rgba(255,255,255,0.01);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          margin-bottom: 24px;
          font-size: 14px;
        }
        .aw-receipt-total {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 18px;
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 0.05em;
          font-weight: 500;
        }
        .aw-place-btn {
          width: 100%;
          padding: 16px 0;
          border-radius: 8px;
          background-color: #ffffff;
          color: #000000;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .aw-place-btn:hover {
          background-color: #eaeaea;
          transform: translateY(-2px);
        }
        .aw-place-btn.success {
          background-color: var(--accent);
          color: #fff;
        }
        @keyframes awFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					maxWidth: 1200,
					margin: "0 auto"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "aw-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "aw-tag",
						children: "SELECTED OFFERS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "aw-title",
						children: ["Our menu, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "aw-title-italic",
							children: "crafted to perfection."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(true),
						className: "aw-nav-btn",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "aw-nav-btn-text",
							children: ["Launch Menu ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aw-grid",
					children: FEATURED.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aw-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aw-card-img-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.img,
								alt: item.name,
								className: "aw-card-img"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "aw-card-tag",
								children: item.offerLabel
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "aw-card-body",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aw-card-header",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "aw-card-title",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "aw-card-num",
									children: [
										"[ 0",
										idx + 1,
										" ]"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "aw-card-footer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "aw-price",
									children: [
										item.price,
										".00 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: {
												fontSize: 11,
												opacity: .5
											},
											children: "EGP"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setOpen(true),
									className: "aw-card-btn",
									children: "Order ↗"
								})]
							})]
						})]
					}, item.id))
				})]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuPortal, { onClose: () => setOpen(false) })
		]
	});
}
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingHero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueeStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heritage, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	const navRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const nav = navRef.current;
		if (!nav) return;
		const st = ScrollTrigger.create({
			trigger: document.body,
			start: "top -60px",
			onEnter: () => nav.classList.add("nav-compact"),
			onLeaveBack: () => nav.classList.remove("nav-compact")
		});
		return () => st.kill();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			ref: navRef,
			className: "flex items-center justify-between px-5 md:px-10 py-6 max-w-[2000px] mx-auto transition-all duration-1000 ease-in-out",
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
					"Made with ❤️ love by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.facebook.com/people/Auto-synapse/61590422384756/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "shehap-link",
						children: "Auto synapse"
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
