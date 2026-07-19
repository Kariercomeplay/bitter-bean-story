import { useState } from "react";
import laborPowerImgPng from "@/assets/labor-power.png";

export function SectionLaborPower() {
  const [hoveredPart, setHoveredPart] = useState<"necessary" | "surplus" | null>(null);

  return (
    <section id="suclaodong" className="relative bg-ink text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
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
            <div className="relative overflow-hidden rounded-md border border-ivory/15 shadow-2xl">
              {laborPowerImgPng ? (
                <img
                  src={laborPowerImgPng}
                  alt="Nhân viên rang xay và chế biến cà phê trong xưởng sản xuất"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-[360px] w-full object-cover md:h-[420px]"
                />
              ) : (
                <div className="h-[360px] w-full bg-roast/40 flex items-center justify-center p-6 text-center text-ivory/70">
                  Hình ảnh người lao động vận hành máy rang cà phê
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-5">
                <p className="eyebrow text-sun">Hàng hóa sức lao động</p>
                <p className="text-xs text-ivory/80 italic mt-1 font-display">
                  Sức lao động trở thành hàng hóa khi người lao động được tự do về thân thể và không có tư liệu sản xuất.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive 8-hour workday Infographic */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-xl">
              <p className="eyebrow text-sun mb-2">Infographic phân chia ngày lao động (8 giờ minh họa)</p>

              {/* Time axis */}
              <div className="flex justify-between text-xs font-mono text-ivory/60 mb-2 px-1">
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
              </div>

              {/* Bar */}
              <div className="flex h-16 w-full overflow-hidden rounded border border-ivory/20 shadow-inner">
                <button
                  onMouseEnter={() => setHoveredPart("necessary")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => setHoveredPart("necessary")}
                  className={`w-1/2 flex flex-col items-center justify-center transition-all px-2 ${
                    hoveredPart === "necessary" ? "bg-leaf text-ivory scale-[1.02] z-10 shadow-lg" : "bg-leaf/80 text-ivory/90 hover:bg-leaf"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">Lao động cần thiết</span>
                  <span className="text-[11px] opacity-80">(08:00 – 12:00)</span>
                </button>

                <button
                  onMouseEnter={() => setHoveredPart("surplus")}
                  onMouseLeave={() => setHoveredPart(null)}
                  onClick={() => setHoveredPart("surplus")}
                  className={`w-1/2 flex flex-col items-center justify-center transition-all px-2 ${
                    hoveredPart === "surplus" ? "bg-earth text-ivory scale-[1.02] z-10 shadow-lg" : "bg-earth/80 text-ivory/90 hover:bg-earth"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">Lao động thặng dư</span>
                  <span className="text-[11px] opacity-80">(12:00 – 16:00)</span>
                </button>
              </div>

              {/* Interactive Info Box */}
              <div className="mt-6 rounded border border-ivory/10 bg-ink/60 p-4 text-xs leading-relaxed text-ivory/90 min-h-[80px]">
                {hoveredPart === "necessary" && (
                  <div className="animate-fade-in">
                    <strong className="text-sun block text-sm mb-1">Thời gian lao động cần thiết:</strong>
                    Khoảng thời gian người lao động tạo ra lượng giá trị tương ứng với giá trị sức lao động của mình (tương ứng giá trị tư liệu sinh hoạt cần thiết).
                  </div>
                )}

                {hoveredPart === "surplus" && (
                  <div className="animate-fade-in">
                    <strong className="text-earth block text-sm mb-1">Thời gian lao động thặng dư:</strong>
                    Khoảng thời gian người lao động tiếp tục tạo ra giá trị vượt quá giá trị sức lao động, là nguồn gốc hình thành giá trị thặng dư.
                  </div>
                )}

                {!hoveredPart && (
                  <p className="text-ivory/60 italic">
                    Rê chuột hoặc nhấn vào từng khoảng thời gian 4h để xem định nghĩa chi tiết.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Academic Disclaimer Card */}
        <div className="mt-14 rounded-lg border border-sun/30 bg-roast/40 p-6 md:p-8 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-3 w-3 rounded-full bg-sun animate-pulse" />
            <h3 className="eyebrow text-sun text-sm font-semibold tracking-wider">
              LƯU Ý HỌC THUẬT BẮT BUỘC
            </h3>
          </div>

          <p className="font-display text-lg text-ivory font-medium">
            Đây là mô hình minh họa lý luận. Không thể lấy trực tiếp giá bán một ly cà phê trừ tiền lương để kết luận phần còn lại là giá trị thặng dư.
          </p>

          <ul className="mt-4 space-y-2 text-xs leading-relaxed text-ivory/80 border-t border-ivory/10 pt-4">
            <li className="flex items-start gap-2">
              <span className="text-sun">1.</span>
              <span>Tiền lương là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sun">2.</span>
              <span>Giá trị thặng dư không đồng nhất hoàn toàn với lợi nhuận kế toán của doanh nghiệp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sun">3.</span>
              <span>Giá bán thực tế còn chịu ảnh hưởng của chi phí nguyên vật liệu, khấu hao máy móc, mặt bằng, cung cầu, cạnh tranh, thuế, thương hiệu và điều kiện thị trường.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
