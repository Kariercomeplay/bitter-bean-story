import cupImgPng from "@/assets/coffee-cup-dark.png";
import cupImgJpg from "@/assets/coffee-cup-dark.jpg";
import { TEAM, REFERENCES, DISCLAIMER } from "@/data/content";

export function Ending() {
  return (
    <section className="relative bg-ink text-ivory">
      {/* Visual ending quote backdrop */}
      <div className="relative h-[600px] w-full overflow-hidden md:h-[720px]">
        <img
          src={cupImgPng || cupImgJpg}
          alt="Một ly cà phê trong ánh sáng nhẹ từ cửa sổ"
          width={1600}
          height={1200}
          loading="lazy"
          className="h-full w-full object-cover opacity-50 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Main lingering quote */}
          <blockquote className="max-w-4xl">
            <p className="font-display text-2xl leading-relaxed text-ivory md:text-4xl lg:text-5xl tracking-tight">
              “Giá của một ly cà phê được nhìn thấy trên{" "}
              <span className="italic text-sun font-normal">hóa đơn</span>.
              <br className="hidden md:inline" />
              Giá trị phía sau nó được tạo nên qua cả một quá trình{" "}
              <span className="italic text-sun font-normal">lao động xã hội</span>.”
            </p>
          </blockquote>

          {/* Deep reflective paragraph */}
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ivory/85 md:text-base font-sans font-light">
            Vị đắng qua vòm họng chỉ kéo dài vài giây. Nhưng những giọt mồ hôi, thời gian và mối quan hệ kinh tế nâng đỡ nó sẽ còn đọng lại rất lâu. Khi học cách nhìn thấu hành trình của một vật phẩm thường nhật, ta bắt đầu thấu hiểu thế giới xung quanh bằng sự trân trọng sâu sắc hơn.
          </p>

          {/* Emotional separator */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <span className="h-10 w-px bg-gradient-to-b from-sun/60 to-transparent" />
            <span className="text-xs font-display italic tracking-widest text-sun/80">
              Sau Vị Đắng
            </span>
          </div>
        </div>
      </div>

      {/* Team Members & References Footer Section */}
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Team Members */}
          <div>
            <p className="eyebrow text-sun tracking-[0.25em]">GIỚI THIỆU NHÓM THỰC HIỆN</p>
            <h3 className="mt-3 font-display text-3xl text-ivory font-semibold">
              Nhóm sinh viên MLN122
            </h3>
            
            <div className="mt-6 space-y-2.5">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                    member.isLeader
                      ? "bg-sun/15 border border-sun/50 shadow-md shadow-sun/5 ring-1 ring-sun/30"
                      : "bg-ivory/5 border border-ivory/10 hover:border-ivory/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-display text-base md:text-lg ${
                        member.isLeader
                          ? "text-sun font-bold tracking-wide"
                          : "text-ivory font-medium"
                      }`}
                    >
                      {member.name}
                    </span>
                    {member.isLeader && (
                      <span className="inline-flex items-center gap-1 rounded bg-sun/20 px-2 py-0.5 text-[10px] font-semibold text-sun uppercase tracking-wider border border-sun/40 font-mono">
                        <span className="h-1.5 w-1.5 rounded-full bg-sun animate-pulse" />
                        LEADER
                      </span>
                    )}
                  </div>

                  {member.code ? (
                    <span
                      className={`text-xs font-mono tracking-wider ${
                        member.isLeader ? "text-sun font-semibold" : "text-ivory/60"
                      }`}
                    >
                      {member.code}
                    </span>
                  ) : (
                    <span className="text-xs font-mono tracking-wider text-ivory/30 italic">
                      —
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow text-sun tracking-[0.25em]">TÀI LIỆU THAM KHẢO</p>
              <h3 className="mt-3 font-display text-3xl text-ivory font-semibold">
                Nguồn tri thức & Tư liệu
              </h3>
              <ul className="mt-6 space-y-3 text-xs leading-relaxed text-ivory/80">
                {REFERENCES.map((ref, idx) => (
                  <li key={idx} className="border-l-2 border-sun/50 pl-4 py-1.5 bg-ivory/[0.02] rounded-r">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 rounded-xl border border-ivory/10 bg-roast/20 p-6 text-xs leading-relaxed text-ivory/60 font-sans backdrop-blur">
          <p className="font-sans leading-relaxed">
            {DISCLAIMER}
          </p>
        </div>
      </div>

      {/* Quiet Lingering Footer */}
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-4 md:px-10">
        <div className="flex flex-col items-center justify-center gap-2 text-center border-t border-ivory/10 pt-8">
          <p className="font-display italic text-lg text-sun/90">
            Cảm ơn bạn đã đồng hành cùng hành trình phía sau ly cà phê.
          </p>
          <p className="text-[11px] tracking-widest text-ivory/40 font-mono uppercase">
            MLN122 · Sản phẩm sáng tạo
          </p>
        </div>
      </div>
    </section>
  );
}
