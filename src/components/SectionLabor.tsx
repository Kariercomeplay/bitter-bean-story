import { useState } from "react";
import { LABOR_STEPS } from "@/data/content";

export function SectionLabor() {
  const [active, setActive] = useState(0);
  const step = LABOR_STEPS[active];

  return (
    <section id="laodong" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">02 · Lao động</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một ly cà phê không được tạo nên bởi{" "}
            <span className="italic text-earth">một người duy nhất</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            Từ hạt giống đến ly cà phê trên tay bạn là chuỗi các công đoạn lao động
            nối tiếp nhau, mỗi công đoạn là kết tinh của kỹ năng và thời gian.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ol className="relative border-l border-ink/15">
              {LABOR_STEPS.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.key} className="ml-6 pb-5">
                    <button
                      onClick={() => setActive(i)}
                      className="group flex w-full items-start gap-4 text-left"
                    >
                      <span
                        className={`absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-2 transition-colors ${
                          isActive ? "border-earth bg-earth" : "border-ink/30 bg-ivory"
                        }`}
                        aria-hidden
                      />
                      <div>
                        <p className={`text-[11px] tracking-[0.3em] uppercase ${isActive ? "text-earth" : "text-ink/50"}`}>
                          Bước {String(i + 1).padStart(2, "0")}
                        </p>
                        <p className={`mt-1 font-display text-xl md:text-2xl ${isActive ? "text-ink" : "text-ink/60 group-hover:text-ink"}`}>
                          {s.title}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <div key={step.key} className="animate-fade-in">
              <div className="overflow-hidden rounded-sm shadow-xl shadow-ink/15">
                <img
                  src={step.image}
                  alt={step.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-[380px] w-full object-cover md:h-[500px]"
                />
              </div>
              <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
                {step.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-ink/10 bg-ivory p-8">
            <p className="eyebrow text-leaf">Lao động cụ thể</p>
            <p className="mt-4 font-display text-2xl text-ink">
              Tạo ra <span className="italic text-earth">giá trị sử dụng</span>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Là lao động có ích dưới một hình thức cụ thể của những nghề nghiệp
              chuyên môn nhất định — người hái, người rang, người pha.
            </p>
          </div>
          <div className="rounded-md border border-ink/10 bg-ink text-ivory p-8">
            <p className="eyebrow text-sun">Lao động trừu tượng</p>
            <p className="mt-4 font-display text-2xl">
              Tạo ra <span className="italic text-sun">giá trị</span>.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/80">
              Là sự hao phí sức lao động nói chung của người sản xuất, gạt bỏ mọi
              hình thức cụ thể để quy về hao phí lao động đồng chất.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
