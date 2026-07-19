import { useState } from "react";
import { PRICE_FACTORS } from "@/data/content";

export function SectionValuePrice() {
  const [selectedFactors, setSelectedFactors] = useState<string[]>(["nguyenlieu", "luong"]);

  const toggleFactor = (key: string) => {
    setSelectedFactors((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <section id="giacagiatri" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 05 · GIÁ TRỊ VÀ GIÁ CẢ</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Con số trên hóa đơn chưa kể hết{" "}
            <span className="italic text-earth">câu chuyện</span> của một ly cà phê.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Coffee cup visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative flex h-[320px] w-full max-w-sm items-center justify-center rounded-2xl bg-ivory p-8 border border-ink/5 shadow-lg">
              <div className="relative flex flex-col items-center justify-center">
                <div className="h-52 w-52 rounded-full border-[10px] border-ink bg-gradient-to-br from-roast via-ink to-[#1a110d] shadow-2xl flex items-center justify-center relative">
                  <div className="h-28 w-28 rounded-full bg-roast/50 border border-sun/20 backdrop-blur" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <span className="font-display text-4xl text-ivory font-bold">
                      50.000₫
                    </span>
                    <span className="text-[11px] text-ivory/70 italic mt-1 font-sans">
                      trên hóa đơn
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink/60 italic max-w-xs font-display">
              Mức giá 50.000₫ là biểu hiện bằng tiền của giá cả trên thị trường.
            </p>
          </div>

          {/* 10 factor chips */}
          <div className="lg:col-span-7">
            <p className="text-sm font-display italic text-roast mb-3">
              Những yếu tố cùng tham gia tạo nên mức giá này:
            </p>

            <div className="flex flex-wrap gap-2">
              {PRICE_FACTORS.map((f) => {
                const active = selectedFactors.includes(f.key);
                return (
                  <button
                    key={f.key}
                    onClick={() => toggleFactor(f.key)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                      active
                        ? "border-earth bg-earth text-ivory shadow-sm"
                        : "border-ink/15 text-ink/75 bg-ivory hover:border-earth/40"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {/* Factor details */}
            <div className="mt-6 space-y-2 max-h-[220px] overflow-y-auto pr-2">
              {selectedFactors.length > 0 &&
                PRICE_FACTORS.filter((f) => selectedFactors.includes(f.key)).map((f) => (
                  <div key={f.key} className="rounded-lg bg-ivory p-3.5 text-xs text-ink/85 border border-ink/5 animate-fade-in">
                    <strong className="text-earth font-semibold block mb-0.5 font-display text-sm">{f.label}:</strong>
                    <span className="font-sans leading-relaxed">{f.note}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Dual Comparison & Ending reflection */}
        <div className="mt-16 pt-10 border-t border-ink/5">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-ivory p-6 border border-ink/5">
              <h3 className="font-display text-2xl text-ink">Giá trị</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80 font-sans">
                Được kết tinh từ <span className="italic text-earth font-serif">lao động xã hội cần thiết</span> qua cả chuỗi cung ứng sản xuất.
              </p>
            </div>

            <div className="rounded-xl bg-ink text-ivory p-6 shadow-md">
              <h3 className="font-display text-2xl text-ivory">Giá cả</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80 font-sans">
                Là biểu hiện bằng tiền của giá trị, luôn dao động linh hoạt xoay quanh giá trị dưới tác động của cung cầu và cạnh tranh.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-earth/10 p-6 text-center">
            <p className="font-display text-lg italic text-earth font-medium">
              “Giá cả có thể cao hơn hoặc thấp hơn giá trị trong từng thời điểm. Vì vậy, không nên đồng nhất giá bán trên hóa đơn với giá trị thực sự của hàng hóa.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
