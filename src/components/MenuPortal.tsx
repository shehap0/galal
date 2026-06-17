import { useEffect, useRef } from "react";
import { MENU_CATEGORIES } from "../data/menu";

export default function MenuPortal({ onClose }: { onClose: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Full menu"
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(8px)",
        }}
      />

      <div
        ref={scrollRef}
        data-lenis-prevent
        style={{
          position: "relative",
          width: "100%", maxWidth: 800,
          maxHeight: "90vh", overflowY: "auto",
          backgroundColor: "var(--card)",
          borderRadius: 24,
          padding: "40px 32px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <h2 style={{
            color: "var(--foreground)",
            fontSize: 28, fontWeight: 500,
            fontFamily: "var(--font-display)",
            margin: 0,
          }}>
            Our Menu
          </h2>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--foreground)", padding: 4,
              display: "flex",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {MENU_CATEGORIES.map((cat) => (
          <div key={cat.name} style={{ marginBottom: 36 }}>
            <h3 style={{
              color: "var(--accent)",
              fontSize: 12, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.08em", margin: "0 0 16px",
            }}>
              {cat.name}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(242,240,235,0.06)",
                  }}
                >
                  <div>
                    <span style={{
                      color: "var(--foreground)", fontSize: 15, fontWeight: 500,
                    }}>
                      {item.name}
                    </span>
                    <span style={{
                      color: "var(--muted-foreground)", fontSize: 13,
                      marginLeft: 12, opacity: 0.6,
                    }}>
                      {item.description}
                    </span>
                  </div>
                  <span style={{
                    color: "var(--accent)", fontSize: 15, fontWeight: 600,
                    fontFamily: "var(--font-display)", flexShrink: 0, marginLeft: 16,
                  }}>
                    {item.price}
                    <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.6, marginLeft: 3 }}>EGP</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
