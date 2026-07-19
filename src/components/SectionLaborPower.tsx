import { useState } from "react";
import laborPowerImgPng from "@/assets/labor-power.png";

export function SectionLaborPower() {
  const [hoveredPart, setHoveredPart] = useState<"necessary" | "surplus" | null>(null);

  return (
    <section id="suclaodong" className="relative bg-ink text-ivory py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-sun tracking-[0.25em]">CHƯƠNG 04 · SỨC LAO ĐỘNG</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Người lao động không bán chính bản thân mình. Họ bán{" "}
            <span className="italic text-sun">khả năng lao động</span> trong một khoảng thời gian nhất định.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 items-center">
          {/* Worker photo visual */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-ivory/15 shadow-2xl">
              {laborPowerImgPng && (
                <img
                  src={laborPowerImgPng}
                  alt="Người thợ rang cà phê"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-[360px] w-full object-cover md:h-[420px]"
                />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-5">
                <p className="text-xs text-ivory/80 italic font-display">
                  Sức lao động trở thành hàng hóa khi con người có tự do về thân thể và tìm kiếm cơ hội mang năng lực của mình ra trao đổi.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive 8-hour workday timeline */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-ivory/10 bg-roast/20 p-6 md:p-8 shadow-xl">
              <p className="text-xs font-mono uppercase tracking-widest text-sun/80 mb-4">
                Cơ cấu một ngày làm việc (Minh họa 8 giờ)
              </p>

              {/* Time axis */}
              <div className="flex justify-between text-xs font-mono text-ivory/60 mb-2 px-1">
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
              </div>

              {/* Bar */}
              <div className="flex h-16 w-full overflow-hidden rounded-lg border border-ivory/15">
                <button
                  onMouseEnter={() => setHoveredPart("necessary")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => setHoveredPart("necessary")}
                  className={`w-1/2 flex flex-col items-center justify-center transition-all px-2 ${
                    hoveredPart === "necessary" ? "bg-leaf text-ivory scale-[1.02] z-10" : "bg-leaf/80 text-ivory/90 hover:bg-leaf"
                  }`}
                >
                  <span className="text-xs font-medium uppercase tracking-wider">Lao động cần thiết</span>
                  <span className="text-[10px] opacity-75 font-mono">08:00 – 12:00</span>
                </button>

                <button
                  onMouseEnter={() => setHoveredPart("surplus")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => setHoveredPart("surplus")}
                  className={`w-1/2 flex flex-col items-center justify-center transition-all px-2 ${
                    hoveredPart === "surplus" ? "bg-earth text-ivory scale-[1.02] z-10" : "bg-earth/80 text-ivory/90 hover:bg-earth"
                  }`}
                >
                  <span className="text-xs font-medium uppercase tracking-wider">Lao động thặng dư</span>
                  <span className="text-[10px] opacity-75 font-mono">12:00 – 16:00</span>
                </button>
              </div>

              {/* Interactive Info Box */}
              <div className="mt-6 rounded-lg bg-ink/70 p-4 text-xs leading-relaxed text-ivory/90 min-h-[75px] border border-ivory/10">
                {hoveredPart === "necessary" && (
                  <div className="animate-fade-in font-sans">
                    <strong className="text-sun block text-sm mb-1 font-display">Lao động cần thiết:</strong>
                    Khoảng thời gian người lao động tái tạo lại giá trị sức lao động của chính mình (nhận lại dưới dạng tiền lương để đáp ứng nhu cầu cuộc sống).
                  </div>
                )}

                {hoveredPart === "surplus" && (
                  <div className="animate-fade-in font-sans">
                    <strong className="text-earth block text-sm mb-1 font-display">Lao động thặng dư:</strong>
                    Khoảng thời gian người lao động tiếp tục tạo ra giá trị mới vượt quá giá trị sức lao động, làm nền tảng hình thành giá trị thặng dư.
                  </div>
                )}

                {!hoveredPart && (
                  <p className="text-ivory/50 italic font-display text-center py-2">
                    Nhấp chọn hoặc rê chuột qua hai khoảng thời gian để theo dõi nội dung.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Academic Reflection Card */}
        <div className="mt-14 rounded-xl border border-sun/20 bg-roast/30 p-6 md:p-8 shadow-lg">
          <p className="font-display text-lg text-ivory font-medium leading-relaxed">
            Đây là mô hình minh họa lý luận. Không thể lấy trực tiếp giá bán một ly cà phê trừ tiền lương để kết luận ngay phần còn lại là giá trị thặng dư.
          </p>

          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-ivory/75 border-t border-ivory/10 pt-4 font-sans">
            <li className="flex items-start gap-2">
              <span className="text-sun font-bold">·</span>
              <span>Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sun font-bold">·</span>
              <span>Giá trị thặng dư không đồng nhất hoàn toàn với lợi nhuận kế toán của doanh nghiệp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sun font-bold">·</span>
              <span>Giá bán thực tế trên thị trường còn chịu sự tác động tổng hòa của chi phí nguyên liệu, khấu hao máy móc, mặt bằng, cung cầu, vị trí và thương hiệu.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Smooth bottom gradient fade into Section 05 paper tone */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-paper pointer-events-none" />
    </section>
  );
}
