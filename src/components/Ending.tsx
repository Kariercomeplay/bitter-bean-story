import cupImgPng from "@/assets/coffee-cup-dark.png";
import cupImgJpg from "@/assets/coffee-cup-dark.jpg";
import { TEAM, REFERENCES, DISCLAIMER } from "@/data/content";

export function Ending() {
  return (
    <section className="relative bg-ink text-ivory">
      {/* Visual ending quote backdrop */}
      <div className="relative h-[560px] w-full overflow-hidden md:h-[680px]">
        <img
          src={cupImgPng || cupImgJpg}
          alt="Một ly cà phê đã uống gần hết trong ánh sáng nhẹ từ cửa sổ"
          width={1600}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <blockquote className="max-w-4xl">
            <p className="font-display text-2xl leading-relaxed text-ivory md:text-4xl lg:text-5xl">
              “Giá của một ly cà phê được nhìn thấy trên{" "}
              <span className="italic text-sun font-normal">hóa đơn</span>. Giá trị phía sau nó được tạo nên qua cả một quá trình{" "}
              <span className="italic text-sun font-normal">lao động xã hội</span>.”
            </p>
          </blockquote>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ivory/80 md:text-base font-sans">
            Khi hiểu được hành trình đó, một sản phẩm quen thuộc không còn chỉ là thứ chúng ta sử dụng mỗi ngày. Nó trở thành cánh cửa để nhìn thấy lao động, thị trường và các quan hệ kinh tế đang tồn tại xung quanh mình.
          </p>
        </div>
      </div>

      {/* Team Intro & References section */}
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          {/* Group Intro */}
          <div>
            <p className="eyebrow text-sun tracking-[0.25em]">GIỚI THIỆU NHÓM THỰC HIỆN</p>
            <h3 className="mt-3 font-display text-3xl text-ivory font-semibold">
              Nhóm sinh viên MLN122
            </h3>
            <div className="mt-6 divide-y divide-ivory/10 border-t border-b border-ivory/10">
              {TEAM.map((member) => (
                <div key={member.name} className="flex items-center justify-between py-3.5">
                  <span className="font-display text-lg text-ivory">{member.name}</span>
                  <span className="text-xs uppercase tracking-wider text-sun font-mono">{member.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <p className="eyebrow text-sun tracking-[0.25em]">TÀI LIỆU THAM KHẢO</p>
            <h3 className="mt-3 font-display text-3xl text-ivory font-semibold">
              Nguồn tri thức & Tư liệu
            </h3>
            <ul className="mt-6 space-y-3 text-xs leading-relaxed text-ivory/80">
              {REFERENCES.map((ref, idx) => (
                <li key={idx} className="border-l-2 border-sun/50 pl-4 py-1">
                  {ref}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-ivory/10 pt-4">
              <span className="eyebrow text-ivory/60 block mb-1">Quy tắc bản quyền & Hình ảnh</span>
              <p className="text-xs text-ivory/60 leading-relaxed">
                Tất cả các hình ảnh sử dụng trên website đều có bản quyền mở hoặc được khởi tạo độc quyền cho mục đích minh họa học tập không thương mại.
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mt-16 rounded-lg border border-sun/25 bg-roast/30 p-6 text-xs leading-relaxed text-ivory/80 md:p-8 shadow-inner">
          <p className="eyebrow text-sun font-bold tracking-widest mb-2">DISCLAIMER / TUYÊN BỐ MIỄN TRỪ</p>
          <p className="font-sans leading-relaxed">
            {DISCLAIMER}
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-ivory/40 border-t border-ivory/10 pt-8">
          SAU VỊ ĐẮNG · MLN122 — Sản phẩm kể chuyện tương tác Kinh tế Chính trị Mác–Lênin
        </div>
      </div>
    </section>
  );
}
