import { useState } from "react";

const NODES = [
  { id: 1, label: "Nông trại", sub: "Trồng trọt & Thu hoạch" },
  { id: 2, label: "Cơ sở sơ chế", sub: "Phơi sấy & Nhân cà phê" },
  { id: 3, label: "Nhà máy", sub: "Phân loại & Đóng gói" },
  { id: 4, label: "Cảng", sub: "Xuất khẩu logistics" },
  { id: 5, label: "Nhà rang xay", sub: "Chế biến & Định vị vị" },
  { id: 6, label: "Cửa hàng", sub: "Phân phối & Pha chế" },
  { id: 7, label: "Người tiêu dùng", sub: "Thưởng thức & Trải nghiệm" },
];

export function SectionIntegration() {
  const [activeNode, setActiveNode] = useState<number>(1);

  return (
    <section id="hoinhap" className="relative bg-ink text-ivory py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-sun tracking-[0.25em]">CHƯƠNG 07 · HỘI NHẬP</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Một hạt cà phê có thể đi qua nhiều{" "}
            <span className="italic text-sun">quốc gia</span> trước khi đến tay người tiêu dùng.
          </h2>
        </div>

        {/* Staggered (So le) Supply Chain Route */}
        <div className="mt-14 rounded-xl border border-ivory/15 bg-roast/20 p-6 md:p-10 shadow-2xl overflow-hidden">
          {/* Desktop Staggered (So le) Layout */}
          <div className="hidden lg:block relative py-10">
            {/* Wavy Dashed Connecting Line in Background */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0 px-8">
              <svg viewBox="0 0 1000 120" className="w-full h-auto overflow-visible" role="img" aria-label="Tuyến đường chuỗi cung ứng">
                <path
                  d="M 50 60 C 120 15, 170 105, 200 60 C 270 15, 320 105, 350 60 C 420 15, 470 105, 500 60 C 570 15, 620 105, 650 60 C 720 15, 770 105, 800 60 C 870 15, 920 105, 950 60"
                  fill="none"
                  stroke="#C49A58"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* 7 Columns Staggered (Odd Top, Even Bottom) */}
            <div className="relative z-10 grid grid-cols-7 gap-2">
              {NODES.map((n) => {
                const isOdd = n.id % 2 !== 0; // 1, 3, 5, 7 -> TOP; 2, 4, 6 -> BOTTOM
                const isActive = n.id === activeNode;

                return (
                  <div key={n.id} className="flex flex-col items-center justify-between min-h-[250px]">
                    {/* Top Container */}
                    <div className="h-[100px] flex items-end justify-center w-full">
                      {isOdd && (
                        <button
                          onClick={() => setActiveNode(n.id)}
                          className={`w-full text-center p-3 rounded-lg border transition-all duration-300 ${
                            isActive
                              ? "border-sun bg-sun/20 text-sun shadow-xl scale-105"
                              : "border-ivory/10 bg-ink/80 text-ivory/85 hover:border-sun/40 hover:bg-ink"
                          }`}
                        >
                          <span className="font-display text-sm font-semibold block leading-snug">
                            {n.label}
                          </span>
                          <span className="text-[9px] text-ivory/60 block mt-1 leading-tight font-sans">
                            {n.sub}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Center Dot & Stem Indicator */}
                    <div className="my-2 relative flex flex-col items-center">
                      <button
                        onClick={() => setActiveNode(n.id)}
                        className={`h-7 w-7 rounded-full border-2 flex items-center justify-center transition-all ${
                          isActive
                            ? "border-sun bg-earth scale-125 shadow-lg shadow-earth/50"
                            : "border-sun/50 bg-ink hover:border-sun hover:scale-110"
                        }`}
                        aria-label={n.label}
                      >
                        <span className={`h-2 w-2 rounded-full ${isActive ? "bg-ivory animate-ping" : "bg-sun"}`} />
                      </button>
                    </div>

                    {/* Bottom Container */}
                    <div className="h-[100px] flex items-start justify-center w-full">
                      {!isOdd && (
                        <button
                          onClick={() => setActiveNode(n.id)}
                          className={`w-full text-center p-3 rounded-lg border transition-all duration-300 ${
                            isActive
                              ? "border-sun bg-sun/20 text-sun shadow-xl scale-105"
                              : "border-ivory/10 bg-ink/80 text-ivory/85 hover:border-sun/40 hover:bg-ink"
                          }`}
                        >
                          <span className="font-display text-sm font-semibold block leading-snug">
                            {n.label}
                          </span>
                          <span className="text-[9px] text-ivory/60 block mt-1 leading-tight font-sans">
                            {n.sub}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Staggered Vertical Timeline */}
          <div className="lg:hidden relative py-4">
            <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-sun/40" />

            <div className="space-y-4 relative z-10">
              {NODES.map((n) => {
                const isActive = n.id === activeNode;
                return (
                  <div key={n.id} className="flex items-start gap-4 pl-3">
                    <button
                      onClick={() => setActiveNode(n.id)}
                      className={`mt-1.5 h-6 w-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                        isActive
                          ? "border-sun bg-earth scale-110"
                          : "border-sun/50 bg-ink"
                      }`}
                    >
                      <span className={`h-2 w-2 rounded-full ${isActive ? "bg-ivory" : "bg-sun"}`} />
                    </button>

                    <button
                      onClick={() => setActiveNode(n.id)}
                      className={`flex-1 text-left p-4 rounded-lg border transition-all ${
                        isActive
                          ? "border-sun bg-sun/20 text-sun shadow-lg"
                          : "border-ivory/10 bg-ink/70 text-ivory/85"
                      }`}
                    >
                      <p className="font-display text-base font-semibold">
                        {n.label}
                      </p>
                      <p className="text-xs text-ivory/60 mt-1 font-sans">
                        {n.sub}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Opportunities & Challenges */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Opportunities */}
          <div className="rounded-xl border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md">
            <span className="eyebrow text-sun font-bold block mb-3">Cơ hội</span>
            <ul className="space-y-3 text-xs leading-relaxed text-ivory/85 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-sun font-bold">✓</span>
                <span>Mở rộng thị trường tiêu thụ nông sản ra toàn thế giới.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun font-bold">✓</span>
                <span>Tiếp cận công nghệ chế biến, bảo quản và máy móc hiện đại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun font-bold">✓</span>
                <span>Thu hút nguồn vốn đầu tư quốc tế và tạo thêm nhiều việc làm.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun font-bold">✓</span>
                <span>Tham gia sâu hơn vào chuỗi giá trị nông sản quốc tế.</span>
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="rounded-xl border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md">
            <span className="eyebrow text-earth font-bold block mb-3">Thách thức</span>
            <ul className="space-y-3 text-xs leading-relaxed text-ivory/85 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">!</span>
                <span>Áp lực cạnh tranh gay gắt từ các thương hiệu quốc tế lớn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">!</span>
                <span>Nguy cơ phụ thuộc vào sự biến động của thị trường bên ngoài.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">!</span>
                <span>Giá trị gia tăng có thể bị tập trung phần lớn ở các công đoạn thương hiệu và phân phối.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">!</span>
                <span>Yêu cầu ngày càng khắt khe về chất lượng, nguồn gốc và bảo vệ môi trường.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion statement */}
        <div className="mt-10 rounded-xl bg-sun/10 border border-sun/20 p-6 text-center">
          <p className="font-display text-lg italic text-sun font-medium leading-relaxed">
            “Hội nhập không chỉ là bán được nhiều sản phẩm hơn. Vấn đề quan trọng còn nằm ở vị trí của người sản xuất và quốc gia trong chuỗi giá trị.”
          </p>
        </div>
      </div>

      {/* Smooth bottom gradient fade into Section 08 (Quiz) paper tone */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-paper pointer-events-none" />
    </section>
  );
}
