import { useEffect, useState } from "react";
import { NAV } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <button
          onClick={() => go("hero")}
          className={`text-left font-display text-sm md:text-base tracking-wide ${
            scrolled ? "text-ink" : "text-ivory"
          }`}
        >
          <span className="italic">Sau Vị Đắng</span>
          <span className={`ml-2 hidden md:inline text-[11px] tracking-[0.24em] uppercase ${scrolled ? "text-roast/70" : "text-ivory/70"}`}>
            MLN122 · Sản phẩm sáng tạo
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`text-[13px] tracking-wide transition-colors ${
                scrolled ? "text-ink/80 hover:text-earth" : "text-ivory/85 hover:text-sun"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button
          className={`lg:hidden text-sm ${scrolled ? "text-ink" : "text-ivory"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? "Đóng" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left text-ink/90 py-1"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="h-[2px] w-full bg-ink/5">
        <div
          className="h-full bg-earth transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
