import { useEffect, useState } from "react";
import heroImgPng from "@/assets/hero-coffee-hills.png";
import heroImgJpg from "@/assets/hero-coffee-hills.jpg";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollNext = () => {
    document.getElementById("hanghoa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink select-none">
      {/* Background image with parallax */}
      <img
        src={heroImgPng || heroImgJpg}
        alt="Người lao động trên nông trại cà phê vào buổi sáng sớm."
        width={1920}
        height={1280}
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.28}px, 0)` }}
      />

      {/* Dark brown atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/75 to-ink" />

      {/* Subtle dust particles overlay effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(196,154,88,0.15),transparent_60%)]" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <p className="eyebrow text-sun tracking-[0.3em]">
          MLN122 · KINH TẾ CHÍNH TRỊ MÁC–LÊNIN
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.1] text-ivory md:text-6xl lg:text-7xl">
          Sau vị đắng là cả một hành trình của{" "}
          <span className="italic font-normal text-sun">lao động và giá trị</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 md:text-lg">
          Một ly cà phê chỉ mất vài phút để thưởng thức. Nhưng để có được nó, rất nhiều con người, công đoạn và quan hệ kinh tế đã cùng tham gia.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={scrollNext}
            className="group inline-flex items-center gap-3 rounded-full bg-earth px-7 py-3.5 text-sm font-medium tracking-wide text-ivory shadow-lg shadow-earth/25 transition-all hover:bg-sun hover:text-ink hover:shadow-sun/30"
          >
            KHÁM PHÁ HÀNH TRÌNH
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </button>

          <button
            onClick={scrollNext}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ivory/70 hover:text-ivory transition-colors"
          >
            CUỘN XUỐNG
            <svg
              className="h-4 w-4 animate-bounce text-sun"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
