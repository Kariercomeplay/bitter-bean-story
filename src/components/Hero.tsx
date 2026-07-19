import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-coffee-hills.jpg";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollNext = () => {
    document.getElementById("hanghoa")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Đồi cà phê lúc bình minh, sương mờ phủ trên các hàng cây"
        width={1920}
        height={1280}
        className="absolute inset-0 h-[115%] w-full object-cover will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.25}px, 0)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink/85" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
        <p className="eyebrow text-ivory/80">MLN122 · Kinh tế Chính trị Mác–Lênin</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-ivory md:text-6xl lg:text-7xl">
          Sau <span className="italic text-sun">vị đắng</span> là cả một hành trình
          của <span className="italic text-sun">lao động</span> và{" "}
          <span className="italic text-sun">giá trị</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-ivory/85 md:text-lg">
          Một ly cà phê chỉ mất vài phút để thưởng thức. Nhưng để có được nó,
          rất nhiều con người, công đoạn và quan hệ kinh tế đã cùng tham gia.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={scrollNext}
            className="group inline-flex items-center gap-3 rounded-full bg-earth px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-sun hover:text-ink"
          >
            Khám phá hành trình
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <span className="text-xs uppercase tracking-[0.3em] text-ivory/60">
            Cuộn xuống
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-px bg-ivory/40 animate-pulse" />
      </div>
    </section>
  );
}
