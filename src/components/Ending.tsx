import cupImg from "@/assets/coffee-cup-dark.jpg";
import { TEAM, REFERENCES } from "@/data/content";

export function Ending() {
  return (
    <section className="relative bg-ink text-ivory">
      <div className="relative h-[520px] w-full overflow-hidden md:h-[640px]">
        <img
          src={cupImg}
          alt="Một ly cà phê trong ánh sáng nhẹ trên mặt bàn tối"
          width={1600}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="max-w-3xl text-center">
            <p className="font-display text-2xl leading-snug text-ivory md:text-4xl lg:text-5xl">
              “Giá của một ly cà phê được nhìn thấy trên{" "}
              <span className="italic text-sun">hóa đơn</span>. Giá trị phía sau
              nó được tạo nên qua cả một quá trình{" "}
              <span className="italic text-sun">lao động xã hội</span>.”
            </p>
          </blockquote>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow text-sun">Nhóm thực hiện</p>
            <h3 className="mt-3 font-display text-3xl">Sản phẩm sáng tạo · MLN122</h3>
            <ul className="mt-6 divide-y divide-ivory/10">
              {TEAM.map((m) => (
                <li key={m.name} className="flex items-center justify-between py-3">
                  <span className="font-display italic text-lg">{m.name}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-ivory/60">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-sun">Tài liệu tham khảo</p>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              {REFERENCES.map((r) => (
                <li key={r} className="border-l border-ivory/20 pl-4">{r}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-ivory/50">
              Nguồn ảnh: hình minh họa được tạo phục vụ mục đích học tập.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-md border border-ivory/10 bg-roast/20 p-6 text-xs leading-relaxed text-ivory/70 md:p-8">
          <p className="eyebrow text-sun">Disclaimer</p>
          <p className="mt-3">
            Website là sản phẩm học tập của sinh viên, được xây dựng nhằm minh họa
            kiến thức Kinh tế Chính trị Mác–Lênin. Các tình huống, thời gian và
            con số trong infographic chỉ mang tính minh họa, không đại diện cho
            một doanh nghiệp cụ thể và không phải mô hình dự báo kinh tế.
          </p>
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-ivory/40">
          Sau Vị Đắng · 2026
        </p>
      </div>
    </section>
  );
}
