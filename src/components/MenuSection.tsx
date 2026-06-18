import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import milkshake from "@/assets/milkshake.png";
import iceCoffee from "@/assets/ice-coffee.png";
import restGrind from "@/assets/rest-grind.png";
import theRitual from "@/assets/the-ritual.png";
import menuPng from "@/assets/menu.png";

interface MenuItem {
  name: string;
  price: number;
}

interface Extra {
  id: string;
  label: string;
  price: number;
}

interface FeaturedItem {
  id: number;
  name: string;
  price: number;
  offerLabel: string;
  img: string;
}

const FEATURED: FeaturedItem[] = [
  { id: 1, name: "MILK SHAKE", price: 80, offerLabel: "New", img: milkshake },
  { id: 2, name: "ICE DRINKS", price: 80, offerLabel: "Best Seller", img: iceCoffee },
  { id: 3, name: "Frappuccino", price: 50, offerLabel: "Popular", img: restGrind },
  { id: 4, name: "WAFFLE/DONUT", price: 60, offerLabel: "Cozy", img: theRitual },
];

const MENU_CATEGORIES: Record<string, MenuItem[]> = {
  "MILK SHAKE": [
    { name: "M.S Caramel Basbousa (New)", price: 20 },
    { name: "M.S Mix", price: 15 },
    { name: "M.S Vanilla", price: 15 },
    { name: "M.S Chocolate", price: 15 },
    { name: "M.S Caramel", price: 20 },
    { name: "M.S Strawberry", price: 20 },
    { name: "M.S Peach", price: 20 },
    { name: "M.S Pineapple", price: 20 },
    { name: "M.S Blueberry", price: 20 },
    { name: "M.S Kiwi", price: 20 },
    { name: "M.S Mango", price: 20 },
  ],
  "SOFT DRINKS": [
    { name: "Jelly Cola", price: 15 },
    { name: "Blueberry Cola", price: 15 },
    { name: "Strawberry Cola", price: 15 },
    { name: "Strawberry Mint", price: 15 },
    { name: "Blue Taste", price: 15 },
    { name: "Green Apple Lemon", price: 15 },
    { name: "Red Berry", price: 15 },
    { name: "Mint Kiwi", price: 15 },
    { name: "Mango Kiwi", price: 15 },
    { name: "Strawberry Kiwi", price: 15 },
    { name: "Pineapple Mix", price: 15 },
    { name: "Mango Mix", price: 15 },
    { name: "Cherry Cola", price: 15 },
    { name: "Conta Lamer", price: 15 },
    { name: "Benacolada", price: 15 },
    { name: "Blue Passion", price: 15 },
    { name: "Pink Colada", price: 15 },
    { name: "Lemon Mint", price: 15 },
    { name: "Lemonada", price: 15 },
    { name: "Blueberry", price: 15 },
    { name: "Happiness Drink", price: 15 },
  ],
  "NEW (Healthy Drinks)": [
    { name: "Ice Tea (Green Tea Mint / Strawberry / Blueberry / Mango / Peach)", price: 15 },
    { name: "Light Milk Shake", price: 15 },
  ],
  "FRAPPUCCINO & FARABEH": [
    { name: "Frappuccino", price: 20 },
    { name: "Frappuccino with Flavors", price: 25 },
    { name: "Frappuccino Dolce", price: 25 },
    { name: "Frappuccino Chocolate", price: 25 },
    { name: "Ice Dolce", price: 20 },
    { name: "Ice Latte", price: 20 },
    { name: "Ice Mocha", price: 20 },
    { name: "Ice Coffee", price: 25 },
    { name: "illy Cream", price: 15 },
    { name: "Ice Golden Oreo", price: 20 },
    { name: "Ice Mocha Dolce", price: 25 },
    { name: "Ice White Mocha", price: 25 },
    { name: "Caramel Macchiato", price: 20 },
    { name: "illy Cream Biscuits", price: 30 },
    { name: "Nutella Lovers", price: 30 },
  ],
  "WINTER DRINKS": [
    { name: "Hot Dolce", price: 15 },
    { name: "Golden Oreo", price: 15 },
    { name: "Hot Chocolate", price: 15 },
    { name: "Gersy", price: 15 },
    { name: "Hot Lotus Cinnamon", price: 15 },
    { name: "Corn Flakes", price: 15 },
  ],
  "COFFEE CORNER": [
    { name: "Turkey Coffee", price: 10 },
    { name: "French Coffee", price: 10 },
    { name: "Cappuccino Bonjourno", price: 10 },
    { name: "Cappuccino Biscuits Vanilla", price: 10 },
    { name: "Nescafe", price: 10 },
    { name: "Flavors Tea", price: 6 },
    { name: "Single Espresso", price: 10 },
    { name: "Double Espresso", price: 15 },
    { name: "American Coffee", price: 15 },
  ],
  "FLAVORS COFFEE": [
    { name: "Hazelnut Coffee (Regular)", price: 10 },
    { name: "Vanilla Coffee", price: 10 },
    { name: "Chocolate Coffee", price: 10 },
    { name: "Banana Coffee", price: 10 },
    { name: "Hazelnut Coffee (Special/Large)", price: 15 },
    { name: "Almonds Coffee", price: 15 },
    { name: "Shesha Apple Coffee", price: 15 },
    { name: "Cookies Coffee", price: 15 },
    { name: "Nutella Hazelnut", price: 15 },
  ],
  "CAPPUCCINO DRINKS": [
    { name: "Es. Cappuccino", price: 15 },
    { name: "Special Cappuccino", price: 15 },
    { name: "Cappuccino Espresso Flavors", price: 17 },
    { name: "Hot Mocha", price: 20 },
    { name: "Hot Flavors Mocha", price: 22 },
    { name: "White Mocha", price: 20 },
    { name: "Flat White", price: 15 },
    { name: "Michato Espresso", price: 15 },
    { name: "Irish Cream", price: 20 },
  ],
};

const EXTRAS: Extra[] = [
  { id: "cream", label: "Add Cream", price: 5 },
  { id: "marshmello", label: "Add Marshmello", price: 5 },
  { id: "skimmed", label: "Skimmed Milk / Diet Sugar", price: 5 },
];

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function SelectBox({
  label, value, onChange, options, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const selectedLabel = value
    ? options.find((o) => o.value === value)?.label ?? value
    : null;

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    if (!open || !listRef.current) return;
    const active = listRef.current.querySelector<HTMLLIElement>("[aria-selected=true]");
    if (active) active.scrollIntoView({ block: "nearest" });
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    const items = listRef.current?.querySelectorAll<HTMLLIElement>("[role=option]");
    if (!items) return;
    const currentIdx = Array.from(items).findIndex((el) => el.dataset.value === value);
    let nextIdx = currentIdx;
    if (e.key === "ArrowDown") { e.preventDefault(); nextIdx = Math.min(currentIdx + 1, items.length - 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); nextIdx = Math.max(currentIdx - 1, 0); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (currentIdx >= 0) onChange(items[currentIdx].dataset.value!); setOpen(false); btnRef.current?.focus(); }
    else if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
    if (nextIdx !== currentIdx && nextIdx >= 0) {
      items[nextIdx]?.focus();
      onChange(items[nextIdx].dataset.value!);
    }
  };

  return (
    <div style={{ marginBottom: 24 }} onKeyDown={handleKeyDown}>
      <p className="aw-micro-label" id={`${label}-label`}>
        {label}
      </p>
      <div style={{ position: "relative" }}>
        <button
          ref={btnRef}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-labelledby={`${label}-label`}
          onClick={() => setOpen((p) => !p)}
          className={`aw-select ${open ? "aw-select-open" : ""}`}
          style={{
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
            transition: "border-color 0.25s, background-color 0.25s",
          }}
        >
          <span>{selectedLabel ?? placeholder}</span>
          <span style={{
            display: "flex",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}>
            <ChevronDown />
          </span>
        </button>

        {open && (
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-label={label}
            style={{
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
              animation: "awFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <li
              role="option"
              aria-selected={value === ""}
              data-value=""
              tabIndex={-1}
              onClick={() => { onChange(""); setOpen(false); btnRef.current?.focus(); }}
              style={{
                padding: "10px 14px",
                borderRadius: 6,
                fontSize: 13,
                cursor: "pointer",
                color: "#666",
                backgroundColor: value === "" ? "rgba(255,255,255,0.04)" : "transparent",
              }}
            >
              {placeholder}
            </li>
            {options.map((o) => (
              <li
                key={o.value}
                role="option"
                aria-selected={value === o.value}
                data-value={o.value}
                tabIndex={-1}
                onClick={() => { onChange(o.value); setOpen(false); btnRef.current?.focus(); }}
                style={{
                  padding: "10px 14px",
                  borderRadius: 6,
                  fontSize: 13,
                  cursor: "pointer",
                  color: "#fff",
                  backgroundColor: value === o.value ? "rgba(255,255,255,0.06)" : "transparent",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = value === o.value ? "rgba(255,255,255,0.06)" : "transparent"; }}
              >
                {o.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function OrderPanel() {
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState(1);
  const [extras, setExtras] = useState<string[]>([]);
  const [placed, setPlaced] = useState(false);

  const items = category ? MENU_CATEGORIES[category] : [];
  const chosenItem = items.find((i) => i.name === itemName);

  const extrasTotal = extras.reduce((s, id) => {
    const e = EXTRAS.find((x) => x.id === id);
    return s + (e?.price ?? 0);
  }, 0);

  const unitPrice = (chosenItem?.price ?? 0) + extrasTotal;
  const total = unitPrice * qty;

  const toggleExtra = (id: string) =>
    setExtras((prev) => prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]);

  const handleCategory = (c: string) => { setCategory(c); setItemName(""); setExtras([]); };
  const handleItem = (n: string) => { setItemName(n); setExtras([]); };

  const handlePlace = () => {
    if (!chosenItem) return;
    setPlaced(true);
    setTimeout(() => {
      setPlaced(false);
      setCategory(""); setItemName(""); setQty(1); setExtras([]);
    }, 2800);
  };

  return (
    <div className="aw-order-panel">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "var(--accent)" }} />
        <h3 className="aw-panel-title">
          Interactive Request
        </h3>
      </div>

      <SelectBox
        label="01. Category Selection"
        value={category}
        onChange={handleCategory}
        placeholder="Select class..."
        options={Object.keys(MENU_CATEGORIES).map((c) => ({ value: c, label: c }))}
      />

      {category && (
        <div style={{ animation: "awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <SelectBox
            label="02. Product Selection"
            value={itemName}
            onChange={handleItem}
            placeholder="Select item..."
            options={items.map((i) => ({ value: i.name, label: `${i.name} — ${i.price} EGP` }))}
          />
        </div>
      )}

      {itemName && (
        <div style={{ animation: "awFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
          <p className="aw-micro-label">03. Optional Enhancements</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
            {EXTRAS.map((ex) => {
              const checked = extras.includes(ex.id);
              return (
                <label
                  key={ex.id}
                  className={`aw-extra-item ${checked ? "active" : ""}`}
                >
                  <input type="checkbox" checked={checked} onChange={() => toggleExtra(ex.id)}
                    style={{ display: "none" }}
                  />
                  <div className="aw-custom-checkbox">
                    {checked && <div className="aw-custom-checkbox-dot" />}
                  </div>
                  <span style={{ fontSize: 13, flex: 1, letterSpacing: "-0.01em" }}>{ex.label}</span>
                  <span style={{ fontSize: 13, opacity: 0.8, fontFamily: "monospace" }}>+{ex.price} EGP</span>
                </label>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <p className="aw-micro-label" style={{ margin: 0 }}>04. Quantity</p>
            <div className="aw-qty-selector">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="aw-qty-btn">
                −
              </button>
              <span style={{ fontSize: 15, fontWeight: 500, minWidth: 32, textAlign: "center", fontFamily: "monospace" }}>
                {qty.toString().padStart(2, "0")}
              </span>
              <button onClick={() => setQty((q) => q + 1)} className="aw-qty-btn">
                +
              </button>
            </div>
          </div>

          <div className="aw-receipt">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
              <span style={{ opacity: 0.6 }}>{itemName} × {qty}</span>
              <span style={{ fontFamily: "monospace" }}>{(chosenItem?.price ?? 0) * qty} EGP</span>
            </div>
            {extras.map((id) => {
              const ex = EXTRAS.find((e) => e.id === id);
              if (!ex) return null;
              return (
                <div key={id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13 }}>
                  <span style={{ opacity: 0.6 }}>{ex.label} × {qty}</span>
                  <span style={{ fontFamily: "monospace" }}>+{ex.price * qty} EGP</span>
                </div>
              );
            })}
            <div className="aw-receipt-total">
              <span>ESTIMATED TOTAL</span>
              <span style={{ fontFamily: "monospace", fontSize: 20 }}>
                {total} <span style={{ fontSize: 11 }}>EGP</span>
              </span>
            </div>
          </div>

          <button
            onClick={handlePlace}
            disabled={!chosenItem}
            className={`aw-place-btn ${placed ? "success" : ""}`}
          >
            {placed ? "TRANSACTION SECURED" : "CONFIRM SELECTION"}
          </button>
        </div>
      )}
    </div>
  );
}

function ZoomableMenuImage({ src, alt }: { src: string; alt: string }) {
  const [coords, setCoords] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setCoords({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      style={{
        position: "relative",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        background: "#0e0f11",
        cursor: "zoom-in",
      }}
    >
      <div
        style={{
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
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        Hover over to read
      </div>

      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          display: "block",
          transformOrigin: `${coords.x}% ${coords.y}%`,
          transform: isZoomed ? "scale(2.2)" : "scale(1)",
          transition: isZoomed
            ? "transform 0.1s ease-out, transform-origin 0.1s ease-out"
            : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

function MenuPortal({ onClose }: { onClose: () => void }) {
  const stopProp = (e: React.MouseEvent) => e.stopPropagation();

  return createPortal(
    <>
      <style>{`
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
      `}</style>

      <div onClick={onClose} onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()} className="aw-backdrop">
        <div onClick={stopProp} className="aw-dialog">

          {/* Left Panel: Menu Poster Visual */}
          <div className="aw-dialog-left aw-scroll-area" style={{ padding: "28px 28px 40px" }}>
            <button onClick={onClose} aria-label="Close dialog" className="aw-close-circle">
              ×
            </button>
            <div style={{ marginBottom: 20 }}>
              <span className="aw-micro-label" style={{ color: "var(--accent)", marginBottom: 6 }}>ARCHIVED BOARD</span>
              <h2 className="aw-poster-title" style={{ color: "#fff", margin: 0, fontSize: 20, letterSpacing: "-0.03em" }}>
                Galal Coffee Menu
              </h2>
            </div>
            <ZoomableMenuImage src={menuPng} alt="Menu list visualization" />
          </div>

          {/* Right Panel: Transaction / Configurator */}
          <div className="aw-scroll-area" style={{ backgroundColor: "#0b0c0e" }}>
            <OrderPanel />
          </div>

        </div>
      </div>
    </>,
    document.body
  );
}

export default function MenuSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section id="collection" className="aw-section">
      <style>{`
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
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header Section */}
        <div className="aw-header">
          <div>
            <span className="aw-tag">SELECTED OFFERS</span>
            <h2 className="aw-title">
              Our menu, <span className="aw-title-italic">crafted to perfection.</span>
            </h2>
          </div>

          <button onClick={() => setOpen(true)} className="aw-nav-btn">
            <span className="aw-nav-btn-text">
              Launch Menu <span>→</span>
            </span>
          </button>
        </div>

        {/* Featured Card Grid */}
        <div className="aw-grid">
          {FEATURED.map((item, idx) => (
            <div key={item.id} className="aw-card">

              <div className="aw-card-img-wrap">
                <img src={item.img} alt={item.name} className="aw-card-img" />
                <span className="aw-card-tag">
                  {item.offerLabel}
                </span>
              </div>

              <div className="aw-card-body">
                <div className="aw-card-header">
                  <h3 className="aw-card-title">{item.name}</h3>
                  <span className="aw-card-num">[ 0{idx + 1} ]</span>
                </div>

                <div className="aw-card-footer">
                  <span className="aw-price">
                    {item.price}.00 <span style={{ fontSize: 11, opacity: 0.5 }}>EGP</span>
                  </span>

                  <button onClick={() => setOpen(true)} className="aw-card-btn">
                    Order ↗
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Responsive Modal Portal */}
      {open && <MenuPortal onClose={() => setOpen(false)} />}
    </section>
  );
}
