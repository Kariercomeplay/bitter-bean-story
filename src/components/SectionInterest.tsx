import { useState } from "react";
import { INTEREST_CHOICES } from "@/data/content";

export function SectionInterest() {
  const [choice, setChoice] = useState<string | null>(null);
  const active = INTEREST_CHOICES.find((c) => c.key === choice);

  return (
    <section id="loiich" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">06 · Quan hệ lợi ích</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một quyết định kinh tế có thể tạo{" "}
            <span className="italic text-earth">cơ hội</span> cho người này và{" "}
            <span className="italic text-earth">áp lực</span> cho người khác.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            <span className="italic">Tình huống.</span> Một doanh nghiệp chế biến cà phê
            đang cân nhắc đưa máy phân loại hạt tự động vào dây chuyền sản xuất. Bạn sẽ chọn hướng đi nào?
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {INTEREST_CHOICES.map((c) => {
            const isActive = c.key === choice;
            return (
              <button
                key={c.key}
                onClick={() => setChoice(c.key)}
                className={`rounded-md border p-6 text-left transition-all ${
                  isActive ? "border-earth bg-earth/5" : "border-ink/15 bg-paper hover:border-ink/40"
                }`}
              >
                <p className={`font-display text-xl ${isActive ? "text-earth" : "text-ink"}`}>
                  {c.label}
                </p>
              </button>
            );
          })}
        </div>

        {active && (
          <div className="mt-10 grid gap-5 md:grid-cols-3 animate-fade-in">
            {[
              { label: "Người lao động", key: "worker", color: "border-earth" },
              { label: "Doanh nghiệp", key: "firm", color: "border-sun" },
              { label: "Nhà nước & xã hội", key: "state", color: "border-leaf" },
            ].map((p) => (
              <div key={p.key} className={`rounded-md border-l-2 ${p.color} bg-paper p-6`}>
                <p className="eyebrow">{p.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">
                  {active.perspectives[p.key as "worker" | "firm" | "state"]}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="mt-10 max-w-2xl text-sm italic text-ink/60">
          Không có lựa chọn nào tuyệt đối đúng hay tuyệt đối sai. Điều quan trọng
          là nhận diện và điều hòa các quan hệ lợi ích giữa các chủ thể.
        </p>
      </div>
    </section>
  );
}
