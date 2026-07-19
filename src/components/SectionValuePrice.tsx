import { useState } from "react";
import { PRICE_FACTORS } from "@/data/content";

export function SectionValuePrice() {
  const [active, setActive] = useState<string[]>([]);
  const toggle = (k: string) =>
    setActive((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]));

  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">05 · Giá trị & Giá cả</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Con số trên hóa đơn chưa kể hết{" "}
            <span className="italic text-earth">câu chuyện</span> của một ly cà phê.
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative mx-auto flex h-[380px] w-full max-w-sm items-end justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-56 w-56 rounded-full border-[10px] border-ink/80 bg-gradient-to-br from-roast to-ink shadow-2xl shadow-ink/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/70">Giá bán minh họa</p>
                    <p className="mt-1 font-display text-4xl text-ivory">50.000₫</p>
                    <p className="mt-1 text-[10px] text-ivory/60">một ly cà phê</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-ink/60 italic">
              Con số 50.000₫ chỉ mang tính minh họa cho câu chuyện, không phải biểu đồ tỷ lệ cấu thành.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm leading-relaxed text-ink/75">
              Nhấn vào các yếu tố có thể ảnh hưởng đến giá bán của ly cà phê này:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {PRICE_FACTORS.map((f) => {
                const on = active.includes(f.key);
                return (
                  <button
                    key={f.key}
                    onClick={() => toggle(f.key)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      on
                        ? "border-earth bg-earth text-ivory"
                        : "border-ink/20 text-ink/80 hover:border-ink/40"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {active.length > 0 && (
              <ul className="mt-6 space-y-3 animate-fade-in">
                {PRICE_FACTORS.filter((f) => active.includes(f.key)).map((f) => (
                  <li key={f.key} className="rounded-md border-l-2 border-earth bg-ivory px-4 py-3 text-sm text-ink/80">
                    <span className="font-medium text-ink">{f.label}. </span>
                    {f.note}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-md bg-ivory p-5">
                <p className="font-display italic text-earth">Giá trị</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Hình thành trên cơ sở <span className="keyword">lao động xã hội cần thiết</span>
                  {" "}kết tinh trong hàng hóa.
                </p>
              </div>
              <div className="rounded-md bg-ink text-ivory p-5">
                <p className="font-display italic text-sun">Giá cả</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/80">
                  Là biểu hiện bằng tiền của giá trị. Có thể dao động quanh giá trị dưới tác động của cung – cầu, cạnh tranh, thương hiệu…
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs italic text-ink/60">
              Không đồng nhất giá trị với giá bán trên hóa đơn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
