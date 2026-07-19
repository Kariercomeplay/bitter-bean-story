import { useState } from "react";
import { LABOR_STEPS } from "@/data/content";

export function SectionLabor() {
  const [activeIdx, setActiveIdx] = useState(0);
  const step = LABOR_STEPS[activeIdx];

  return (
    <section id="laodong" className="relative bg-ivory py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 02 · LAO ĐỘNG</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một ly cà phê không được tạo nên bởi{" "}
            <span className="italic text-earth">một người duy nhất</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
            Từ nông trại đến quầy phục vụ, rất nhiều dạng lao động cụ thể đã cùng tạo ra công dụng cuối cùng của sản phẩm.
          </p>
        </div>

        {/* 6 Stage Timeline & Detail Viewer */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Timeline menu */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-ink/10 bg-paper p-6 shadow-sm">
              <p className="eyebrow text-roast mb-6">Hành trình 6 công đoạn lao động</p>
              <ol className="relative border-l-2 border-sun/40 space-y-4">
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
                              ? "border-earth bg-earth scale-110 shadow-sm"
                              : "border-roast bg-ivory group-hover:border-earth"
                          }`}
                        />
                        <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-earth">
                          Công đoạn {s.num}
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
            <div key={step.key} className="rounded-lg border border-ink/15 bg-paper p-6 shadow-lg animate-fade-in">
              <div className="relative overflow-hidden rounded-md h-[320px] md:h-[400px]">
                <img
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur px-3 py-1.5 rounded text-xs text-sun font-sans tracking-widest uppercase">
                  Công đoạn {step.num} / 06
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="eyebrow text-roast block">Chủ thể lao động</span>
                  <h3 className="font-display text-2xl text-ink font-semibold mt-1">
                    {step.worker}
                  </h3>
                </div>

                <div className="border-t border-ink/10 pt-4">
                  <span className="eyebrow text-roast block mb-1">Công việc thực hiện</span>
                  <p className="text-base text-ink/85 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="rounded-md border-l-4 border-leaf bg-ivory p-4 border border-ink/10">
                  <span className="eyebrow text-leaf block mb-1">Giá trị sử dụng được tạo thêm</span>
                  <p className="text-sm text-ink/90 italic font-display">
                    “{step.addedValue}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Knowledge Section */}
        <div className="mt-16 border-t border-ink/15 pt-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-ink/15 bg-paper p-8 shadow-sm">
              <p className="eyebrow text-leaf tracking-widest">Khái niệm 01</p>
              <h3 className="mt-2 font-display text-2xl text-ink">
                Lao động cụ thể
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                Lao động dưới một hình thức nghề nghiệp cụ thể như trồng trọt, vận chuyển, rang xay hoặc pha chế. Lao động cụ thể tạo ra <span className="keyword">giá trị sử dụng</span>.
              </p>
            </div>

            <div className="rounded-lg border border-ink/20 bg-ink text-ivory p-8 shadow-md">
              <p className="eyebrow text-sun tracking-widest">Khái niệm 02</p>
              <h3 className="mt-2 font-display text-2xl text-ivory">
                Lao động trừu tượng
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/85">
                Sự hao phí sức lao động của con người nói chung, không xét đến hình thức nghề nghiệp cụ thể. Lao động trừu tượng tạo ra <span className="keyword text-sun">giá trị của hàng hóa</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
