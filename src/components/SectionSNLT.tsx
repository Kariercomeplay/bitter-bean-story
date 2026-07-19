import { useState } from "react";
import compareImgPng from "@/assets/facility-compare.png";

export function SectionSNLT() {
  const [choice, setChoice] = useState<"A" | "B" | "social" | null>(null);

  return (
    <section id="giatri" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 03 · LƯỢNG GIÁ TRỊ</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Làm lâu hơn chưa chắc làm hàng hóa có{" "}
            <span className="italic text-earth">giá trị lớn hơn</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
            Hai xưởng chế biến cùng sản xuất ra một lô cà phê nhân. Điều gì sẽ quyết định lượng giá trị thực sự của sản phẩm khi ra thị trường?
          </p>
        </div>

        {/* Infographic Comparison */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Facility A */}
          <div className="rounded-xl bg-ivory p-8 border border-ink/5 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-earth">Xưởng A</p>
              <p className="mt-3 font-display text-5xl text-ink font-semibold">10 giờ</p>
              <p className="mt-2 text-sm text-ink/70 font-sans">Thời gian xử lý một lô cà phê</p>
              <p className="mt-4 text-xs text-ink/75 font-sans leading-relaxed">
                Máy móc cũ kỹ, quy trình chưa được tối ưu, năng suất thấp hơn mặt bằng chung.
              </p>
            </div>
            <div className="mt-6 h-2 w-full rounded-full bg-ink/10 overflow-hidden">
              <div className="h-full bg-earth w-full" />
            </div>
          </div>

          {/* Facility B */}
          <div className="rounded-xl bg-ivory p-8 border border-ink/5 flex flex-col justify-between">
            <div>
              <p className="eyebrow text-leaf">Xưởng B</p>
              <p className="mt-3 font-display text-5xl text-ink font-semibold">6 giờ</p>
              <p className="mt-2 text-sm text-ink/70 font-sans">Thời gian xử lý một lô cà phê</p>
              <p className="mt-4 text-xs text-ink/75 font-sans leading-relaxed">
                Quy trình sản xuất phổ biến trên thị trường, công nghệ đạt trình độ trung bình của xã hội.
              </p>
            </div>
            <div className="mt-6 h-2 w-full rounded-full bg-ink/10 overflow-hidden">
              <div className="h-full bg-leaf w-[60%]" />
            </div>
          </div>
        </div>

        {/* Comparison Photo */}
        {compareImgPng && (
          <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-ink/5 max-h-[260px]">
            <img
              src={compareImgPng}
              alt="So sánh hai điều kiện sản xuất"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Natural Choice Interaction */}
        <div className="mt-10 rounded-xl bg-ivory p-6 md:p-8 border border-ink/5">
          <p className="text-sm font-display italic text-roast mb-4">
            Theo bạn, lượng giá trị của một lô cà phê sẽ được tính dựa trên thước đo nào?
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setChoice("A")}
              className={`rounded-lg border px-5 py-3 text-sm font-medium transition-all ${
                choice === "A"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/15 text-ink/80 hover:border-earth/40 hover:bg-paper"
              }`}
            >
              10 giờ của Xưởng A
            </button>
            <button
              onClick={() => setChoice("B")}
              className={`rounded-lg border px-5 py-3 text-sm font-medium transition-all ${
                choice === "B"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/15 text-ink/80 hover:border-earth/40 hover:bg-paper"
              }`}
            >
              6 giờ của Xưởng B
            </button>
            <button
              onClick={() => setChoice("social")}
              className={`rounded-lg border px-5 py-3 text-sm font-medium transition-all ${
                choice === "social"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/15 text-ink/80 hover:border-earth/40 hover:bg-paper"
              }`}
            >
              Thời gian lao động xã hội cần thiết
            </button>
          </div>

          {/* Explanation Banner */}
          {choice && (
            <div className="mt-6 rounded-lg bg-paper p-6 animate-fade-in border-l-2 border-earth">
              <span className="eyebrow text-earth font-bold tracking-widest block mb-2">
                THỜI GIAN LAO ĐỘNG XÃ HỘI CẦN THIẾT
              </span>
              <p className="text-base text-ink font-medium leading-relaxed font-display">
                Lượng giá trị hàng hóa không do thời gian cá biệt của một nhà sản xuất quyết định. Nó được đo bằng thời gian đòi hỏi để sản xuất trong điều kiện sản xuất bình thường của xã hội.
              </p>

              <div className="border-t border-ink/10 pt-4 mt-4 text-xs leading-relaxed text-ink/75 space-y-2 font-sans">
                <p>
                  · Một xưởng làm việc chậm hơn mức phổ biến không thể tự động bán sản phẩm giá cao hơn chỉ vì họ đã tốn nhiều thời gian hơn.
                </p>
                <p>
                  · Khi năng suất lao động xã hội tăng lên, lượng thời gian cần thiết để tạo ra một hạt cà phê giảm xuống, khiến giá trị của mỗi sản phẩm giảm tương ứng.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Smooth gradient transition down into dark Section 04 */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-ink pointer-events-none" />
    </section>
  );
}
