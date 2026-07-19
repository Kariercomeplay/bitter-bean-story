const NODES = [
  { x: 6, y: 65, label: "Nông trại" },
  { x: 20, y: 55, label: "Sơ chế" },
  { x: 34, y: 62, label: "Nhà máy" },
  { x: 50, y: 50, label: "Cảng" },
  { x: 66, y: 55, label: "Nhà rang xay" },
  { x: 82, y: 50, label: "Cửa hàng" },
  { x: 94, y: 60, label: "Người tiêu dùng" },
];

export function SectionIntegration() {
  return (
    <section id="hoinhap" className="relative bg-ink text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-sun">07 · Hội nhập</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Một hạt cà phê có thể đi qua nhiều{" "}
            <span className="italic text-sun">quốc gia</span> trước khi đến tay
            người tiêu dùng.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-ivory/10 bg-roast/20 p-6 md:p-10">
          <svg viewBox="0 0 100 80" className="h-auto w-full" role="img" aria-label="Chuỗi giá trị cà phê toàn cầu">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(251,248,242,0.06)" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="80" fill="url(#grid)" />
            <path
              d="M 6 65 Q 13 58 20 55 T 34 62 T 50 50 T 66 55 T 82 50 T 94 60"
              fill="none"
              stroke="#C49A58"
              strokeWidth="0.4"
              strokeDasharray="1 1.2"
            />
            {NODES.map((n, i) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="1.4" fill="#A5483F" />
                <circle cx={n.x} cy={n.y} r="2.6" fill="none" stroke="#C49A58" strokeWidth="0.25" opacity="0.7" />
                <text
                  x={n.x}
                  y={n.y - 4}
                  textAnchor="middle"
                  fontSize="2.4"
                  fill="#FBF8F2"
                  fontFamily="Cormorant Garamond, serif"
                  fontStyle="italic"
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  fontSize="1.6"
                  fill="rgba(251,248,242,0.5)"
                  letterSpacing="0.3"
                >
                  0{i + 1}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-ivory/10 p-6">
            <p className="eyebrow text-sun">Cơ hội</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              <li>· Mở rộng thị trường tiêu thụ.</li>
              <li>· Tiếp cận công nghệ chế biến và bảo quản.</li>
              <li>· Thu hút đầu tư, tạo việc làm mới.</li>
              <li>· Học hỏi tiêu chuẩn quản trị và chất lượng.</li>
            </ul>
          </div>
          <div className="rounded-md border border-ivory/10 p-6">
            <p className="eyebrow text-earth">Thách thức</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/80">
              <li>· Cạnh tranh trực tiếp với các quốc gia sản xuất khác.</li>
              <li>· Nguy cơ phụ thuộc vào một số thị trường lớn.</li>
              <li>· Vị trí thường ở phân khúc thấp trong chuỗi giá trị.</li>
              <li>· Yêu cầu ngày càng cao về tiêu chuẩn chất lượng và môi trường.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
