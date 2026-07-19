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
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-sun tracking-[0.25em]">CHƯƠNG 07 · HỘI NHẬP</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Một hạt cà phê có thể đi qua nhiều{" "}
            <span className="italic text-sun">quốc gia</span> trước khi đến tay người tiêu dùng.
          </h2>
        </div>

        {/* Minimalist Vector Supply Chain Map */}
        <div className="mt-12 rounded-lg border border-ivory/15 bg-roast/20 p-6 md:p-10 shadow-2xl">
          <p className="eyebrow text-sun mb-4">Sơ đồ tuyến đường chuỗi giá trị toàn cầu</p>

          <div className="relative py-8">
            {/* Connecting SVG line */}
            <svg viewBox="0 0 700 80" className="w-full h-auto overflow-visible" role="img" aria-label="Vector chuỗi cung ứng">
              <path
                d="M 20 40 Q 120 15 220 40 T 420 40 T 620 40 T 680 40"
                fill="none"
                stroke="#C49A58"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-60"
              />
            </svg>

            {/* Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 -mt-16 relative z-10">
              {NODES.map((n) => {
                const isActive = n.id === activeNode;
                return (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(n.id)}
                    className={`flex flex-col items-center text-center p-3 rounded-lg border transition-all ${
                      isActive
                        ? "border-sun bg-sun/20 shadow-lg scale-105"
                        : "border-ivory/10 bg-ink/60 hover:border-sun/40"
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded-full border-2 mb-2 transition-colors ${
                        isActive ? "border-sun bg-earth animate-pulse" : "border-ivory/40 bg-ink"
                      }`}
                    />
                    <span className="text-[10px] font-mono text-sun uppercase tracking-wider">
                      Bước 0{n.id}
                    </span>
                    <span className={`font-display text-sm font-semibold mt-1 ${isActive ? "text-sun" : "text-ivory"}`}>
                      {n.label}
                    </span>
                    <span className="text-[10px] text-ivory/60 mt-0.5">
                      {n.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Opportunities & Challenges */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Opportunities */}
          <div className="rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md">
            <span className="eyebrow text-sun font-bold block mb-3">Cơ hội</span>
            <ul className="space-y-3 text-xs leading-relaxed text-ivory/85">
              <li className="flex items-start gap-2">
                <span className="text-sun">✓</span>
                <span>Mở rộng thị trường tiêu thụ nông sản ra toàn thế giới.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun">✓</span>
                <span>Tiếp cận công nghệ chế biến, bảo quản và máy móc hiện đại.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun">✓</span>
                <span>Thu hút nguồn vốn đầu tư quốc tế và tạo thêm nhiều việc làm.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sun">✓</span>
                <span>Tham gia sâu hơn vào chuỗi giá trị nông sản quốc tế.</span>
              </li>
            </ul>
          </div>

          {/* Challenges */}
          <div className="rounded-lg border border-ivory/15 bg-roast/30 p-6 md:p-8 shadow-md">
            <span className="eyebrow text-earth font-bold block mb-3">Thách thức</span>
            <ul className="space-y-3 text-xs leading-relaxed text-ivory/85">
              <li className="flex items-start gap-2">
                <span className="text-earth">!</span>
                <span>Áp lực cạnh tranh gay gắt từ các thương hiệu quốc tế lớn.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth">!</span>
                <span>Nguy cơ phụ thuộc vào sự biến động của thị trường bên ngoài.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth">!</span>
                <span>Giá trị gia tăng có thể bị tập trung phần lớn ở các công đoạn thương hiệu và phân phối.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth">!</span>
                <span>Yêu cầu ngày càng khắt khe về chất lượng, nguồn gốc và bảo vệ môi trường.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth">!</span>
                <span>Cần không ngừng nâng cao năng lực tự chủ kinh tế quốc gia.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion statement */}
        <div className="mt-10 rounded-lg bg-sun/10 border border-sun/20 p-6 text-center">
          <p className="font-display text-lg italic text-sun font-medium leading-relaxed">
            “Hội nhập không chỉ là bán được nhiều sản phẩm hơn. Vấn đề quan trọng còn nằm ở vị trí của người sản xuất và quốc gia trong chuỗi giá trị.”
          </p>
        </div>
      </div>
    </section>
  );
}
