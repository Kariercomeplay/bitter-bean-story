import { useState } from "react";
import handsImgPng from "@/assets/hands-harvest.png";
import handsImgJpg from "@/assets/hands-harvest.jpg";

export function SectionCommodity() {
  const [choice, setChoice] = useState<"A" | "B" | null>(null);

  return (
    <section id="hanghoa" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image 45% width on desktop */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-md shadow-2xl shadow-ink/15 border border-ink/10">
              <img
                src={handsImgPng || handsImgJpg}
                alt="Một bàn tay đang hái quả cà phê chín đỏ trên nền lá xanh tự nhiên"
                width={1400}
                height={1600}
                loading="lazy"
                className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[600px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent p-6">
                <p className="eyebrow text-sun">Hình ảnh tư liệu</p>
                <p className="mt-1 font-display text-sm italic text-ivory/90">
                  Bàn tay thu hái quả cà phê chín mộng tại nông trại
                </p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7">
            <p className="eyebrow text-roast tracking-[0.25em]">CHƯƠNG 01 · HÀNG HÓA</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
              Không phải mọi sản phẩm đều tự nhiên trở thành{" "}
              <span className="italic text-earth">hàng hóa</span>.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-ink/80 md:text-lg">
              Hạt cà phê có công dụng đối với con người. Nhưng chỉ khi nó được sản xuất để trao đổi hoặc mua bán trên thị trường, nó mới trở thành hàng hóa.
            </p>

            {/* Interactive choices */}
            <div className="mt-8 rounded-lg border border-ink/15 bg-ivory p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest font-semibold text-roast mb-4">
                Tình huống thực tế — Chọn một trường hợp:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  onClick={() => setChoice("A")}
                  className={`rounded-md border p-4 text-left transition-all ${
                    choice === "A"
                      ? "border-earth bg-earth/10 text-earth font-medium shadow-inner"
                      : "border-ink/20 text-ink/80 hover:border-earth/50 hover:bg-paper"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-wider text-earth font-semibold mb-1">
                    Trường hợp A
                  </span>
                  Trồng để gia đình sử dụng
                </button>

                <button
                  onClick={() => setChoice("B")}
                  className={`rounded-md border p-4 text-left transition-all ${
                    choice === "B"
                      ? "border-earth bg-earth/10 text-earth font-medium shadow-inner"
                      : "border-ink/20 text-ink/80 hover:border-earth/50 hover:bg-paper"
                  }`}
                >
                  <span className="block text-xs uppercase tracking-wider text-earth font-semibold mb-1">
                    Trường hợp B
                  </span>
                  Trồng để bán trên thị trường
                </button>
              </div>

              {/* Dynamic feedback */}
              {choice && (
                <div className="mt-5 rounded-md border-l-4 border-earth bg-paper p-4 text-sm leading-relaxed text-ink/90 animate-fade-in">
                  {choice === "A" ? (
                    <p>
                      <strong className="text-earth">Kết quả:</strong> Đây là một sản phẩm phục vụ nhu cầu trực tiếp, chưa phải hàng hóa.
                    </p>
                  ) : (
                    <p>
                      <strong className="text-earth">Kết quả:</strong> Sản phẩm được tạo ra nhằm mục đích trao đổi, vì vậy nó mang hình thái hàng hóa.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* 3 Knowledge cards */}
            <div className="mt-10 border-t border-ink/10 pt-8">
              <p className="eyebrow text-roast mb-4">Hai thuộc tính và hình thức biểu hiện</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md">
                  <span className="text-xs uppercase tracking-wider text-roast font-semibold block">01</span>
                  <p className="font-display text-lg italic text-earth mt-1">Giá trị sử dụng</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75">
                    Công dụng của sản phẩm có khả năng đáp ứng một nhu cầu nhất định của con người.
                  </p>
                </div>

                <div className="rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md">
                  <span className="text-xs uppercase tracking-wider text-roast font-semibold block">02</span>
                  <p className="font-display text-lg italic text-earth mt-1">Giá trị</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75">
                    Lao động xã hội của người sản xuất hàng hóa được kết tinh trong hàng hóa.
                  </p>
                </div>

                <div className="rounded-md border border-ink/10 bg-ivory p-5 transition-shadow hover:shadow-md">
                  <span className="text-xs uppercase tracking-wider text-roast font-semibold block">03</span>
                  <p className="font-display text-lg italic text-earth mt-1">Giá trị trao đổi</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/75">
                    Hình thức biểu hiện của giá trị thông qua quan hệ trao đổi giữa các hàng hóa.
                  </p>
                </div>
              </div>

              {/* Clarification note */}
              <div className="mt-6 rounded-md bg-ink/5 p-4 border border-ink/10 text-xs leading-relaxed text-ink/80">
                <p>
                  <strong className="text-earth uppercase tracking-wider">Lưu ý học thuật:</strong>{" "}
                  Giá trị sử dụng và giá trị là hai thuộc tính của hàng hóa. Giá trị trao đổi là hình thức biểu hiện của giá trị, không nên đồng nhất ba khái niệm này.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
