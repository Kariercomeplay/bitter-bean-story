import { useEffect, useState } from "react";
import { NAV } from "@/data/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <button
          onClick={() => go("hero")}
          className="text-left group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className={`font-display text-xl md:text-2xl tracking-tight transition-colors ${scrolled ? "text-ink" : "text-ivory"}`}>
            <span className="italic font-semibold">Sau Vị Đắng</span>
          </span>
          <span className={`hidden sm:inline-block text-[11px] font-sans tracking-[0.2em] uppercase transition-colors border-l pl-3 ${
            scrolled ? "border-ink/20 text-roast/80" : "border-ivory/30 text-ivory/80"
          }`}>
            MLN122 · Sản phẩm sáng tạo
          </span>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`text-xs font-sans font-medium tracking-wider uppercase transition-colors ${
                scrolled
                  ? "text-ink/75 hover:text-earth"
                  : "text-ivory/80 hover:text-sun"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* Progress & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-sans tracking-wider text-ink/70">
            <span className={scrolled ? "text-ink/60" : "text-ivory/70"}>
              {Math.round(progress)}%
            </span>
            <div className={`h-1.5 w-16 rounded-full overflow-hidden ${scrolled ? "bg-ink/10" : "bg-ivory/20"}`}>
              <div
                className="h-full bg-sun transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <button
            className={`lg:hidden text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded border ${
              scrolled
                ? "border-ink/20 text-ink bg-paper/50"
                : "border-ivory/30 text-ivory bg-ink/30"
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Navigation"
          >
            {open ? "Đóng" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-ink/10 bg-paper/98 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-3">
            <p className="eyebrow text-earth mb-1">Điều hướng chương</p>
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className="text-left text-sm font-medium text-ink hover:text-earth py-2 border-b border-ink/5"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Thin scroll line under header */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-earth transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
