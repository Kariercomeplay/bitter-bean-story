export function SectionLaborPower() {
  const necessary = 4;
  const surplus = 4;
  const total = necessary + surplus;

  return (
    <section className="relative bg-ink text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl">
          <p className="eyebrow text-sun">04 · Sức lao động</p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
            Người lao động không bán chính bản thân mình. Họ bán{" "}
            <span className="italic text-sun">khả năng lao động</span> trong một
            khoảng thời gian nhất định.
          </h2>
        </div>

        <div className="mt-12 rounded-md border border-ivory/10 bg-roast/30 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] text-ivory/60">
            Một ngày lao động 8 giờ (minh họa)
          </p>
          <div className="mt-6 flex h-16 w-full overflow-hidden rounded-sm">
            <div
              className="flex items-center justify-center bg-leaf text-xs font-medium text-ivory"
              style={{ width: `${(necessary / total) * 100}%` }}
              aria-label="Thời gian lao động cần thiết"
            >
              Lao động cần thiết · {necessary}h
            </div>
            <div
              className="flex items-center justify-center bg-earth text-xs font-medium text-ivory"
              style={{ width: `${(surplus / total) * 100}%` }}
              aria-label="Thời gian lao động thặng dư"
            >
              Lao động thặng dư · {surplus}h
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 text-sm text-ivory/80">
            <p>
              <span className="keyword text-sun">Lao động cần thiết</span> tạo ra
              phần giá trị bù đắp cho giá trị sức lao động (thể hiện qua tiền lương).
            </p>
            <p>
              <span className="keyword text-sun">Lao động thặng dư</span> tạo ra
              giá trị thặng dư — phần giá trị mới vượt quá giá trị sức lao động.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-ivory/10 p-6">
            <p className="font-display italic text-sun text-xl">Tiền lương</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/80">
              Là hình thức biểu hiện bằng tiền của giá cả hàng hóa sức lao động.
              Tiền lương không phải là toàn bộ giá trị do người lao động tạo ra.
            </p>
          </div>
          <div className="rounded-md border border-ivory/10 p-6">
            <p className="font-display italic text-sun text-xl">Giá trị thặng dư</p>
            <p className="mt-3 text-sm leading-relaxed text-ivory/80">
              Là một phạm trù của kinh tế chính trị. Nó không đồng nhất hoàn toàn
              với lợi nhuận kế toán — hai khái niệm ở hai lớp phân tích khác nhau.
            </p>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-ivory/50 italic">
          Sơ đồ 4h – 4h chỉ mang tính minh họa lý luận, không phản ánh cơ cấu thời
          gian của một doanh nghiệp cụ thể.
        </p>
      </div>
    </section>
  );
}
