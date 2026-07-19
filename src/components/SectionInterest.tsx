import { useState } from "react";
import { INTEREST_CHOICES } from "@/data/content";

export function SectionInterest() {
  const [selectedKey, setSelectedKey] = useState<string>("C");
  const activeChoice = INTEREST_CHOICES.find((c) => c.key === selectedKey);

  return (
    <section id="loiich" className="relative bg-ivory py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 06 · QUAN HỆ LỢI ÍCH</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Một quyết định kinh tế có thể tạo{" "}
            <span className="italic text-earth">cơ hội</span> cho người này và{" "}
            <span className="italic text-earth">áp lực</span> cho người khác.
          </h2>
        </div>

        {/* Scenario introduction box */}
        <div className="mt-10 rounded-lg border border-ink/15 bg-paper p-6 shadow-sm">
          <span className="eyebrow text-earth font-bold block mb-1">Tình huống quyết định</span>
          <p className="text-base leading-relaxed text-ink/85 font-sans">
            Một doanh nghiệp chế biến cà phê dự định đưa hệ thống phân loại tự động vào sản xuất. Máy móc mới có thể tăng năng suất nhưng một số công việc thủ công sẽ không còn cần thiết.
          </p>
        </div>

        {/* 3 Choices */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {INTEREST_CHOICES.map((c) => {
            const isSelected = c.key === selectedKey;
            return (
              <button
                key={c.key}
                onClick={() => setSelectedKey(c.key)}
                className={`rounded-lg border p-6 text-left transition-all ${
                  isSelected
                    ? "border-earth bg-earth/10 shadow-md ring-1 ring-earth"
                    : "border-ink/15 bg-paper hover:border-earth/50"
                }`}
              >
                <p className={`font-display text-lg ${isSelected ? "text-earth font-semibold" : "text-ink"}`}>
                  {c.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* 3 Perspective cards revealed */}
        {activeChoice && (
          <div className="mt-10 grid gap-6 md:grid-cols-3 animate-fade-in">
            {/* Người lao động card */}
            <div className="rounded-lg border border-ink/10 border-l-4 border-l-earth bg-paper p-6 shadow-sm">
              <span className="eyebrow text-earth font-bold block">01 · Người lao động</span>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">
                {activeChoice.perspectives.worker}
              </p>
              <div className="mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1">
                <p>· Yếu tố tác động: Việc làm, Thu nhập, Yêu cầu kỹ năng, Cơ hội đào tạo.</p>
              </div>
            </div>

            {/* Doanh nghiệp card */}
            <div className="rounded-lg border border-ink/10 border-l-4 border-l-sun bg-paper p-6 shadow-sm">
              <span className="eyebrow text-sun font-bold block">02 · Doanh nghiệp</span>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">
                {activeChoice.perspectives.firm}
              </p>
              <div className="mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1">
                <p>· Yếu tố tác động: Năng suất, Chi phí, Khả năng cạnh tranh, Hiệu quả dài hạn.</p>
              </div>
            </div>

            {/* Nhà nước và xã hội card */}
            <div className="rounded-lg border border-ink/10 border-l-4 border-l-leaf bg-paper p-6 shadow-sm">
              <span className="eyebrow text-leaf font-bold block">03 · Nhà nước và xã hội</span>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">
                {activeChoice.perspectives.state}
              </p>
              <div className="mt-4 border-t border-ink/10 pt-3 text-[11px] text-ink/60 space-y-1">
                <p>· Yếu tố tác động: Chất lượng nguồn nhân lực, An sinh xã hội, Năng lực sản xuất, Chính sách hỗ trợ chuyển đổi nghề.</p>
              </div>
            </div>
          </div>
        )}

        {/* Academic Conclusion */}
        <div className="mt-12 rounded-lg bg-ink text-ivory p-6 md:p-8 shadow-xl">
          <span className="eyebrow text-sun block mb-2">Kết luận lý luận</span>
          <p className="font-display text-lg leading-relaxed text-ivory/90 font-medium">
            Trong nền kinh tế tồn tại nhiều nhóm lợi ích khác nhau. Vai trò của chính sách không chỉ là lựa chọn một bên, mà còn là nhận diện, điều hòa và tạo điều kiện để các lợi ích chính đáng được thực hiện.
          </p>
        </div>
      </div>
    </section>
  );
}
