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
    <section id="giacagiatri" className="relative bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 05 · GIÁ TRỊ VÀ GIÁ CẢ</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Con số trên hóa đơn chưa kể hết{" "}
            <span className="italic text-earth">câu chuyện</span> của một ly cà phê.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Coffee cup illustration center */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative flex h-[340px] w-full max-w-sm items-center justify-center rounded-2xl bg-ivory p-8 border border-ink/10 shadow-xl">
              <div className="relative flex flex-col items-center justify-center">
                {/* Visual Cup ring */}
                <div className="h-56 w-56 rounded-full border-[12px] border-ink bg-gradient-to-br from-roast via-ink to-[#1a110d] shadow-2xl flex items-center justify-center relative">
                  <div className="h-32 w-32 rounded-full bg-roast/60 border border-sun/20 backdrop-blur" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <span className="eyebrow text-sun text-[10px] tracking-widest uppercase">
                      GIÁ BÁN MINH HỌA
                    </span>
                    <span className="font-display text-4xl text-ivory font-bold mt-1">
                      50.000 VNĐ
                    </span>
                    <span className="text-[11px] text-ivory/70 italic mt-1 font-sans">
                      (Con số mang tính minh họa)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-ink/60 italic max-w-xs">
              Con số 50.000 VNĐ trên hóa đơn là biểu hiện bằng tiền của giá cả, không đồng nhất với giá trị thuần túy.
            </p>
          </div>

          {/* Interactive 10 factor chips & descriptions */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-roast mb-3">
              Nhấn vào các thành phần tác động tới cấu thành giá cả thực tế:
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
                        ? "border-earth bg-earth text-ivory shadow-sm scale-105"
                        : "border-ink/20 text-ink/75 bg-ivory hover:border-earth/50"
                    }`}
                  >
                    {f.label} {active ? "✓" : "+"}
                  </button>
                );
              })}
            </div>

            {/* Factor details display */}
            <div className="mt-6 space-y-2 max-h-[220px] overflow-y-auto pr-2">
              {selectedFactors.length === 0 ? (
                <p className="text-xs text-ink/50 italic p-3 bg-ivory rounded border border-ink/10">
                  Hãy nhấn vào các yếu tố trên để xem giải thích.
                </p>
              ) : (
                PRICE_FACTORS.filter((f) => selectedFactors.includes(f.key)).map((f) => (
                  <div key={f.key} className="rounded-md border-l-3 border-earth bg-ivory p-3.5 text-xs text-ink/85 border border-ink/10 animate-fade-in">
                    <strong className="text-earth font-semibold block mb-0.5">{f.label}:</strong>
                    {f.note}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Dual Comparison Blocks & Conclusion */}
        <div className="mt-16 border-t border-ink/10 pt-12">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-ink/15 bg-ivory p-6 shadow-sm">
              <span className="eyebrow text-earth font-bold">Thuộc tính bản chất</span>
              <h3 className="font-display text-2xl text-ink mt-1">Giá trị</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">
                Được hình thành trên cơ sở <span className="keyword">lao động xã hội cần thiết</span> kết tinh trong hàng hóa.
              </p>
            </div>

            <div className="rounded-lg border border-ink/20 bg-ink text-ivory p-6 shadow-md">
              <span className="eyebrow text-sun font-bold">Biểu hiện thị trường</span>
              <h3 className="font-display text-2xl text-ivory mt-1">Giá cả</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/85">
                Là biểu hiện bằng tiền của giá trị và có thể dao động do cung cầu, cạnh tranh cùng nhiều điều kiện thị trường khác.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-earth/10 border border-earth/20 p-5 text-center">
            <p className="font-display text-lg italic text-earth font-medium">
              “Giá cả có thể cao hơn hoặc thấp hơn giá trị trong từng điều kiện cụ thể. Vì vậy, không nên đồng nhất giá bán với giá trị hàng hóa.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
