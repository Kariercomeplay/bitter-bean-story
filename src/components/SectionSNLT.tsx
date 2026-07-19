import { useState } from "react";
import compareImgPng from "@/assets/facility-compare.png";

export function SectionSNLT() {
  const [choice, setChoice] = useState<"A" | "B" | "social" | null>(null);

  return (
    <section id="giatri" className="relative bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 03 · LƯỢNG GIÁ TRỊ</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Làm lâu hơn chưa chắc làm hàng hóa có{" "}
            <span className="italic text-earth">giá trị lớn hơn</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/80 md:text-lg">
            Đây là câu hỏi cốt lõi để tránh hiểu sai về lượng giá trị của một hàng hóa khi được sản xuất ở các điều kiện kỹ thuật khác nhau.
          </p>
        </div>

        {/* Infographic Comparison */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Facility A */}
          <div className="rounded-lg border border-ink/15 bg-ivory p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <p className="eyebrow text-earth">Cơ sở A</p>
                <span className="text-xs bg-earth/10 text-earth px-2.5 py-1 rounded font-mono font-medium">Cá biệt A</span>
              </div>
              <p className="mt-4 font-display text-5xl text-ink font-semibold">10 giờ</p>
              <p className="mt-2 text-sm text-ink/70">để xử lý một lô cà phê nhân</p>
              <div className="mt-4 rounded bg-paper p-3 text-xs text-ink/80 border border-ink/10">
                <strong>Đặc điểm:</strong> Thiết bị cũ, quy trình thủ công, kém hiệu quả hơn mặt bằng chung.
              </div>
            </div>
            <div className="mt-6 h-3 w-full rounded-full bg-ink/10 overflow-hidden">
              <div className="h-full rounded-full bg-earth w-full" />
            </div>
          </div>

          {/* Facility B */}
          <div className="rounded-lg border border-ink/15 bg-ivory p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <p className="eyebrow text-leaf">Cơ sở B</p>
                <span className="text-xs bg-leaf/10 text-leaf px-2.5 py-1 rounded font-mono font-medium">Mức phổ biến</span>
              </div>
              <p className="mt-4 font-display text-5xl text-ink font-semibold">6 giờ</p>
              <p className="mt-2 text-sm text-ink/70">để xử lý một lô cà phê nhân</p>
              <div className="mt-4 rounded bg-paper p-3 text-xs text-ink/80 border border-ink/10">
                <strong>Đặc điểm:</strong> Điều kiện sản xuất phổ biến trên thị trường, công nghệ đạt mức trung bình xã hội.
              </div>
            </div>
            <div className="mt-6 h-3 w-full rounded-full bg-ink/10 overflow-hidden">
              <div className="h-full rounded-full bg-leaf w-[60%]" />
            </div>
          </div>
        </div>

        {/* Visual photo if available */}
        {compareImgPng && (
          <div className="mt-8 rounded-lg overflow-hidden border border-ink/10 max-h-[280px]">
            <img
              src={compareImgPng}
              alt="So sánh hai cơ sở sản xuất có mức độ công nghệ khác nhau"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* User Choice Interactive Box */}
        <div className="mt-10 rounded-lg border border-ink/15 bg-ivory p-6 md:p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-roast mb-4">
            Câu hỏi thảo luận: Lượng giá trị nên được tính theo 10 giờ hay 6 giờ?
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setChoice("A")}
              className={`rounded-md border px-5 py-3 text-sm font-medium transition-all ${
                choice === "A"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"
              }`}
            >
              10 giờ (Cơ sở A)
            </button>
            <button
              onClick={() => setChoice("B")}
              className={`rounded-md border px-5 py-3 text-sm font-medium transition-all ${
                choice === "B"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"
              }`}
            >
              6 giờ (Cơ sở B)
            </button>
            <button
              onClick={() => setChoice("social")}
              className={`rounded-md border px-5 py-3 text-sm font-medium transition-all ${
                choice === "social"
                  ? "border-earth bg-earth text-ivory shadow"
                  : "border-ink/20 text-ink/80 hover:border-earth/60 hover:bg-paper"
              }`}
            >
              Thời gian lao động xã hội cần thiết
            </button>
          </div>

          {/* Explanation Banner */}
          {choice && (
            <div className="mt-6 rounded-md border-l-4 border-earth bg-paper p-6 animate-fade-in">
              <div className="mb-3">
                <span className="eyebrow text-earth font-bold tracking-widest block mb-1">
                  THỜI GIAN LAO ĐỘNG XÃ HỘI CẦN THIẾT
                </span>
                <p className="text-base text-ink font-medium leading-relaxed">
                  Lượng giá trị hàng hóa không do thời gian cá biệt của một người sản xuất quyết định. Nó được đo bằng thời gian lao động xã hội cần thiết trong điều kiện sản xuất bình thường của xã hội.
                </p>
              </div>

              <div className="border-t border-ink/10 pt-3 text-xs leading-relaxed text-ink/80 space-y-2">
                <p>
                  · Một cơ sở làm việc chậm hơn mức phổ biến không thể tự động bán sản phẩm với giá cao hơn chỉ vì đã sử dụng nhiều thời gian hơn.
                </p>
                <p>
                  · Năng suất lao động tăng có thể làm giảm lượng thời gian cần thiết để tạo ra một đơn vị hàng hóa, từ đó giảm lượng giá trị của một đơn vị hàng hóa đó.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
