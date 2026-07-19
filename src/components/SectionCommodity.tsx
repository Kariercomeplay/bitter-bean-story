import { useState } from "react";
import handsImg from "@/assets/hands-harvest.jpg";

const OPTIONS = [
  {
    key: "family",
    label: "Trồng để gia đình sử dụng",
    result: "Sản phẩm chưa trở thành hàng hóa vì chỉ nhằm phục vụ nhu cầu tiêu dùng nội bộ, không đi ra thị trường trao đổi.",
  },
  {
    key: "market",
    label: "Trồng để bán trên thị trường",
    result: "Sản phẩm trở thành hàng hóa vì được sản xuất nhằm mục đích trao đổi, thỏa mãn nhu cầu của người khác thông qua thị trường.",
  },
];

export function SectionCommodity() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section id="hanghoa" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-ink/20">
            <img
              src={handsImg}
              alt="Đôi bàn tay người nông dân đang hái quả cà phê chín đỏ"
              width={1400}
              height={1600}
              loading="lazy"
              className="h-[520px] w-full object-cover md:h-[680px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-ivory/80">Hàng hóa · Chương I</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:pt-10">
          <p className="eyebrow">01 · Hàng hóa</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Không phải mọi sản phẩm đều tự nhiên trở thành{" "}
            <span className="italic text-earth">hàng hóa</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75">
            Hãy thử đặt mình vào vị trí một người trồng cà phê. Bạn sẽ chọn cách nào?
          </p>

          <div className="mt-6 grid gap-3">
            {OPTIONS.map((o) => {
              const active = choice === o.key;
              return (
                <button
                  key={o.key}
                  onClick={() => setChoice(o.key)}
                  className={`text-left rounded-md border px-5 py-4 transition-all ${
                    active
                      ? "border-earth bg-earth/5"
                      : "border-ink/15 hover:border-ink/40"
                  }`}
                >
                  <span className={`block text-sm font-medium ${active ? "text-earth" : "text-ink"}`}>
                    {o.label}
                  </span>
                </button>
              );
            })}
          </div>

          {choice && (
            <div className="mt-5 rounded-md border-l-2 border-earth bg-paper px-5 py-4 text-sm leading-relaxed text-ink/80 animate-fade-in">
              {OPTIONS.find((o) => o.key === choice)?.result}
            </div>
          )}

          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="text-sm leading-relaxed text-ink/75">
              Một sản phẩm chỉ trở thành <span className="keyword">hàng hóa</span> khi được tạo ra
              nhằm mục đích trao đổi, thỏa mãn nhu cầu của người khác thông qua thị trường.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Giá trị sử dụng", d: "Công dụng của hàng hóa, thỏa mãn một nhu cầu nhất định của con người." },
                { t: "Giá trị", d: "Hao phí lao động xã hội của người sản xuất kết tinh trong hàng hóa." },
                { t: "Giá trị trao đổi", d: "Tỷ lệ trao đổi giữa các giá trị sử dụng khác nhau; là hình thức biểu hiện của giá trị." },
              ].map((c) => (
                <div key={c.t} className="rounded-md bg-paper p-5">
                  <p className="font-display italic text-earth">{c.t}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/70">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-ink/60">
              <span className="keyword text-earth">Giá trị sử dụng</span> và{" "}
              <span className="keyword">giá trị</span> là hai thuộc tính của hàng hóa;{" "}
              <span className="keyword">giá trị trao đổi</span> là hình thức biểu hiện của giá trị.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
