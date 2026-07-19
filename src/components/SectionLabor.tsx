import { useState } from "react";
import { LABOR_STEPS } from "@/data/content";

export function SectionLabor() {
  const [activeIdx, setActiveIdx] = useState(0);
  const step = LABOR_STEPS[activeIdx];

  return (
    <section id="laodong" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 02 · LAO ĐỘNG</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một ly cà phê không được tạo nên bởi{" "}
            <span className="italic text-earth">một người duy nhất</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
            Từ mảnh đất gieo hạt đến quầy phục vụ, rất nhiều dạng lao động cụ thể đã cùng tiếp sức để tạo nên hương vị cuối cùng.
          </p>
        </div>

        {/* 6 Stage Timeline & Detail Viewer */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Timeline navigation */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-ivory p-6 shadow-sm border border-ink/5">
              <ol className="relative border-l-2 border-sun/30 space-y-3">
                {LABOR_STEPS.map((s, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <li key={s.key} className="pl-6 relative">
                      <button
                        onClick={() => setActiveIdx(i)}
                        className={`group flex w-full flex-col text-left transition-all ${
                          isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                        }`}
                      >
                        <span
                          className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 transition-all ${
                            isActive
                              ? "border-earth bg-earth scale-110"
                              : "border-roast/50 bg-ivory group-hover:border-earth"
                          }`}
                        />
                        <span className="text-[11px] font-sans font-medium tracking-widest uppercase text-earth">
                          {s.num}
                        </span>
                        <span className={`font-display text-xl ${isActive ? "text-ink font-semibold" : "text-ink/70"}`}>
                          {s.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Active Stage Detail */}
          <div className="lg:col-span-7">
            <div key={step.key} className="rounded-xl bg-ivory p-6 md:p-8 shadow-sm border border-ink/5 animate-fade-in">
              <div className="relative overflow-hidden rounded-lg h-[300px] md:h-[380px]">
                <img
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-ink font-semibold">
                    {step.worker}
                  </h3>
                  <p className="text-base text-ink/80 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="rounded-lg bg-paper p-4 border-l-2 border-leaf">
                  <p className="text-sm text-ink/85 italic font-display">
                    “{step.addedValue}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Concepts Section */}
        <div className="mt-16 pt-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-ivory p-8 border border-ink/5">
              <p className="eyebrow text-leaf tracking-widest">Góc nhìn 01</p>
              <h3 className="mt-2 font-display text-2xl text-ink">
                Lao động cụ thể
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75 font-sans">
                Là công việc cụ thể của người nông dân, công nhân sơ chế, kỹ thuật viên hay barista. Lao động cụ thể tạo ra <span className="italic text-earth">giá trị sử dụng</span> của ly cà phê.
              </p>
            </div>

            <div className="rounded-xl bg-ink text-ivory p-8 shadow-md">
              <p className="eyebrow text-sun tracking-widest">Góc nhìn 02</p>
              <h3 className="mt-2 font-display text-2xl text-ivory">
                Lao động trừu tượng
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80 font-sans">
                Là sự hao phí sức lực, thần kinh và thời gian nói chung của người lao động. Lao động trừu tượng là nguồn gốc tạo nên <span className="italic text-sun font-normal">giá trị</span> của hàng hóa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
