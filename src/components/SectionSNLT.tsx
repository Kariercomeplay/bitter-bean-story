import { useState } from "react";

export function SectionSNLT() {
  const [choice, setChoice] = useState<"A" | "B" | "social" | null>(null);

  return (
    <section id="giatri" className="relative bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow">03 · Lượng giá trị</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink md:text-5xl">
            Làm lâu hơn chưa chắc làm cho hàng hóa có{" "}
            <span className="italic text-earth">giá trị lớn hơn</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75">
            Hai cơ sở cùng sản xuất một mẻ cà phê rang. Cái nào quyết định lượng giá trị của một kilogram hàng hóa trên thị trường?
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { key: "A", title: "Cơ sở A", time: "10 giờ", note: "Thiết bị cũ, năng suất thấp hơn mặt bằng chung." },
            { key: "B", title: "Cơ sở B", time: "6 giờ", note: "Điều kiện sản xuất phổ biến của xã hội hiện tại." },
          ].map((c) => (
            <div key={c.key} className="rounded-md border border-ink/10 bg-paper p-8">
              <p className="eyebrow">{c.title}</p>
              <p className="mt-3 font-display text-5xl text-ink">{c.time}</p>
              <p className="mt-3 text-sm text-ink/70">{c.note}</p>
              <div className="mt-6 h-2 w-full rounded-full bg-ink/10">
                <div
                  className={`h-full rounded-full ${c.key === "A" ? "bg-roast" : "bg-earth"}`}
                  style={{ width: c.key === "A" ? "100%" : "60%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-sm text-ink/70">Theo bạn, thời gian nào quyết định lượng giá trị của hàng hóa?</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { k: "A", l: "Thời gian của cơ sở A (10 giờ)" },
              { k: "B", l: "Thời gian của cơ sở B (6 giờ)" },
              { k: "social", l: "Thời gian lao động xã hội cần thiết" },
            ].map((o) => (
              <button
                key={o.k}
                onClick={() => setChoice(o.k as "A" | "B" | "social")}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  choice === o.k
                    ? "border-earth bg-earth text-ivory"
                    : "border-ink/20 text-ink/80 hover:border-ink/40"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>

          {choice && (
            <div className="mt-6 rounded-md border-l-2 border-earth bg-paper px-5 py-4 text-sm leading-relaxed text-ink/80 animate-fade-in">
              {choice === "social" ? (
                <>
                  Đúng vậy. Lượng giá trị của hàng hóa được đo bằng{" "}
                  <span className="keyword">thời gian lao động xã hội cần thiết</span> —
                  thời gian đòi hỏi để sản xuất ra hàng hóa trong điều kiện sản xuất
                  bình thường của xã hội, với trình độ kỹ thuật, tổ chức và cường độ
                  lao động trung bình. Thời gian cá biệt của một cơ sở không quyết
                  định giá trị hàng hóa của họ trên thị trường.
                </>
              ) : (
                <>
                  Thực ra, thời gian lao động của một cơ sở riêng lẻ (thời gian cá biệt)
                  không quyết định lượng giá trị. Lượng giá trị được đo bằng{" "}
                  <span className="keyword">thời gian lao động xã hội cần thiết</span> —
                  trong điều kiện sản xuất phổ biến, với năng suất và cường độ trung bình.
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
