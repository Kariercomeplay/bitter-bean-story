import { useState } from "react";
import { INTEREST_CHOICES } from "@/data/content";

export function SectionInterest() {
  const [selectedKey, setSelectedKey] = useState<string>("C");
  const activeChoice = INTEREST_CHOICES.find((c) => c.key === selectedKey);

  return (
    <section id="loiich" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 06 · QUAN HỆ LỢI ÍCH</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một quyết định kinh tế có thể tạo{" "}
            <span className="italic text-earth">cơ hội</span> cho người này và{" "}
            <span className="italic text-earth">áp lực</span> cho người khác.
          </h2>
        </div>

        {/* Scenario description */}
        <div className="mt-10 rounded-xl bg-ivory p-6 md:p-8 shadow-sm border border-ink/5">
          <p className="text-base leading-relaxed text-ink/85 font-sans">
            Một doanh nghiệp chế biến cà phê dự định đưa hệ thống phân loại tự động vào dây chuyền sản xuất. Máy móc mới giúp tăng mạnh năng suất nhưng một số công việc thủ công sẽ không còn cần thiết.
          </p>
        </div>

        {/* 3 Options */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {INTEREST_CHOICES.map((c) => {
            const isSelected = c.key === selectedKey;
            return (
              <button
                key={c.key}
                onClick={() => setSelectedKey(c.key)}
                className={`rounded-xl border p-6 text-left transition-all ${
                  isSelected
                    ? "border-earth bg-earth/10 shadow-sm"
                    : "border-ink/10 bg-ivory hover:border-earth/40"
                }`}
              >
                <p className={`font-display text-lg ${isSelected ? "text-earth font-semibold" : "text-ink"}`}>
                  {c.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* 3 Perspective cards */}
        {activeChoice && (
          <div className="mt-10 grid gap-6 md:grid-cols-3 animate-fade-in">
            {/* Người lao động card */}
            <div className="rounded-xl bg-ivory p-6 border-t-2 border-earth shadow-sm">
              <span className="eyebrow text-earth font-bold block mb-2">Người lao động</span>
              <p className="text-sm leading-relaxed text-ink/80 font-sans">
                {activeChoice.perspectives.worker}
              </p>
            </div>

            {/* Doanh nghiệp card */}
            <div className="rounded-xl bg-ivory p-6 border-t-2 border-sun shadow-sm">
              <span className="eyebrow text-sun font-bold block mb-2">Doanh nghiệp</span>
              <p className="text-sm leading-relaxed text-ink/80 font-sans">
                {activeChoice.perspectives.firm}
              </p>
            </div>

            {/* Nhà nước và xã hội card */}
            <div className="rounded-xl bg-ivory p-6 border-t-2 border-leaf shadow-sm">
              <span className="eyebrow text-leaf font-bold block mb-2">Nhà nước & Xã hội</span>
              <p className="text-sm leading-relaxed text-ink/80 font-sans">
                {activeChoice.perspectives.state}
              </p>
            </div>
          </div>
        )}

        {/* Synthesis Reflection */}
        <div className="mt-12 rounded-xl bg-ink text-ivory p-6 md:p-8 shadow-xl">
          <p className="font-display text-lg leading-relaxed text-ivory/90 font-medium">
            Trong nền kinh tế tồn tại nhiều nhóm lợi ích khác nhau. Vai trò của chính sách không chỉ là lựa chọn một bên, mà còn là nhận diện, điều hòa và tạo điều kiện để các lợi ích chính đáng được dung hòa và thực hiện.
          </p>
        </div>
      </div>

      {/* Smooth gradient transition down into dark Section 07 (Hội nhập) */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-ink pointer-events-none" />
    </section>
  );
}
