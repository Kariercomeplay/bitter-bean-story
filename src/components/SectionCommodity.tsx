import { useState } from "react";
import handsImgPng from "@/assets/hands-harvest.png";
import handsImgJpg from "@/assets/hands-harvest.jpg";

export function SectionCommodity() {
  const [choice, setChoice] = useState<"A" | "B" | null>(null);

  return (
    <section id="hanghoa" className="relative bg-paper py-24 md:py-32">
      {/* Top transition gradient from Hero dark to Paper light */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-ink to-paper pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image side */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-lg shadow-xl shadow-ink/10">
              <img
                src={handsImgPng || handsImgJpg}
                alt="Một bàn tay đang hái quả cà phê chín đỏ"
                width={1400}
                height={1600}
                loading="lazy"
                className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[560px]"
              />
            </div>
          </div>

          {/* Narrative content side */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 01 · HÀNG HÓA</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
              Không phải mọi sản phẩm đều tự nhiên trở thành{" "}
              <span className="italic text-earth">hàng hóa</span>.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
              Hạt cà phê mang trong mình công dụng hữu ích đối với con người. Nhưng chỉ khi nó được tạo ra để trao đổi trên thị trường, nó mới khoác lên mình hình thái hàng hóa.
            </p>

            {/* Natural Interactive Choice */}
            <div className="mt-8 rounded-xl bg-ivory p-6 md:p-8 shadow-sm border border-ink/5">
              <p className="text-sm font-display italic text-roast mb-4">
                Nếu bạn là người trồng hạt cà phê này...
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => setChoice("A")}
                  className={`rounded-lg border p-4 text-left transition-all ${
                    choice === "A"
                      ? "border-earth bg-earth/10 text-earth font-medium"
                      : "border-ink/15 text-ink/80 hover:border-earth/40 hover:bg-paper"
                  }`}
                >
                  <span className="block font-display text-base font-semibold mb-1">
                    Trồng cho gia đình sử dụng
                  </span>
                  <span className="text-xs text-ink/60 font-sans block">
                    Phục vụ nhu cầu thưởng thức cá nhân.
                  </span>
                </button>

                <button
                  onClick={() => setChoice("B")}
                  className={`rounded-lg border p-4 text-left transition-all ${
                    choice === "B"
                      ? "border-earth bg-earth/10 text-earth font-medium"
                      : "border-ink/15 text-ink/80 hover:border-earth/40 hover:bg-paper"
                  }`}
                >
                  <span className="block font-display text-base font-semibold mb-1">
                    Trồng để bán trên thị trường
                  </span>
                  <span className="text-xs text-ink/60 font-sans block">
                    Mang sản phẩm ra trao đổi với xã hội.
                  </span>
                </button>
              </div>

              {/* Dynamic feedback */}
              {choice && (
                <div className="mt-5 rounded-lg bg-paper p-4 text-sm leading-relaxed text-ink/85 animate-fade-in border-l-2 border-earth">
                  {choice === "A" ? (
                    <p>
                      Sản phẩm sinh ra chỉ để đáp ứng nhu cầu tiêu dùng trực tiếp của gia đình. Lúc này, hạt cà phê là sản phẩm lao động, chưa bước vào quan hệ hàng hóa.
                    </p>
                  ) : (
                    <p>
                      Khi hạt cà phê được tạo ra nhằm mục đích mang đi trao đổi, thỏa mãn nhu cầu của người khác trên thị trường, nó chính thức trở thành hàng hóa.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* 3 Core attributes */}
            <div className="mt-10 pt-6">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-ivory p-5 border border-ink/5">
                  <p className="font-display text-lg italic text-earth">Giá trị sử dụng</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-sans">
                    Công dụng làm dịu cơn khát, mang lại sự tỉnh táo và hương vị đặc trưng cho người thưởng thức.
                  </p>
                </div>

                <div className="rounded-lg bg-ivory p-5 border border-ink/5">
                  <p className="font-display text-lg italic text-earth">Giá trị</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-sans">
                    Lao động xã hội của người trồng trọt và chế biến ẩn mình bên trong từng hạt cà phê.
                  </p>
                </div>

                <div className="rounded-lg bg-ivory p-5 border border-ink/5">
                  <p className="font-display text-lg italic text-earth">Giá trị trao đổi</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75 font-sans">
                    Tỷ lệ trao đổi giữa ly cà phê với các hàng hóa khác trên thị trường.
                  </p>
                </div>
              </div>

              {/* Seamless reflection note */}
              <p className="mt-6 text-xs leading-relaxed text-ink/60 italic font-display">
                * Giá trị sử dụng và giá trị là hai thuộc tính song hành của hàng hóa; giá trị trao đổi là hình thức biểu hiện ra bên ngoài của giá trị.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade into Section 2 */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-paper pointer-events-none" />
    </section>
  );
}
