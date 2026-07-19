import { useState } from "react";
import { QUIZ } from "@/data/content";

export function Quiz() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = QUIZ[idx];
  const correctCount = answers.filter((a, i) => a === QUIZ[i].answer).length;

  const pick = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setAnswers((prev) => [...prev, i]);
  };

  const next = () => {
    if (idx + 1 < QUIZ.length) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setIdx(0); setAnswers([]); setPicked(null); setDone(false);
  };

  const scrollTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quiz" className="relative bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="eyebrow">Trắc nghiệm</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            Kiểm tra <span className="italic text-earth">hành trình</span> của bạn
          </h2>
        </div>

        {!done ? (
          <div className="mt-12 rounded-md border border-ink/10 bg-ivory p-6 md:p-10">
            <div className="flex items-center justify-between text-xs text-ink/60">
              <span>Câu {idx + 1} / {QUIZ.length}</span>
              <span>{Math.round(((idx) / QUIZ.length) * 100)}%</span>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-earth transition-all"
                style={{ width: `${((idx + (picked !== null ? 1 : 0)) / QUIZ.length) * 100}%` }}
              />
            </div>

            <p className="mt-8 font-display text-2xl leading-snug text-ink md:text-3xl">
              {q.q}
            </p>

            <div className="mt-6 grid gap-3">
              {q.options.map((o, i) => {
                const isPicked = picked === i;
                const isCorrect = q.answer === i;
                const revealed = picked !== null;
                let cls = "border-ink/15 hover:border-ink/40";
                if (revealed) {
                  if (isCorrect) cls = "border-leaf bg-leaf/10 text-ink";
                  else if (isPicked) cls = "border-earth bg-earth/10 text-ink";
                  else cls = "border-ink/10 text-ink/60";
                }
                return (
                  <button
                    key={i}
                    onClick={() => pick(i)}
                    disabled={revealed}
                    className={`rounded-md border px-5 py-3 text-left text-sm transition-colors ${cls}`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>

            {picked !== null && (
              <div className="mt-5 rounded-md bg-paper px-4 py-3 text-sm text-ink/80 animate-fade-in">
                <span className="keyword">
                  {picked === q.answer ? "Chính xác." : "Chưa đúng."}
                </span>{" "}
                {q.explain}
              </div>
            )}

            <div className="mt-8 flex justify-end">
              <button
                onClick={next}
                disabled={picked === null}
                className="rounded-full bg-ink px-5 py-2 text-sm text-ivory transition-opacity disabled:opacity-40"
              >
                {idx + 1 === QUIZ.length ? "Xem kết quả" : "Câu tiếp theo →"}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-12 rounded-md border border-ink/10 bg-ivory p-8 text-center md:p-12 animate-fade-in">
            <p className="eyebrow">Kết quả</p>
            <p className="mt-3 font-display text-6xl text-ink">
              {correctCount}<span className="text-ink/40">/{QUIZ.length}</span>
            </p>
            <p className="mt-4 text-base text-ink/75">
              {correctCount === QUIZ.length
                ? "Bạn đã nắm rất chắc những khái niệm nền tảng của hành trình này."
                : correctCount >= 3
                ? "Bạn đã đi được phần lớn hành trình. Hãy quay lại để soi kỹ những khái niệm còn mờ."
                : "Hành trình còn nhiều điều để khám phá. Hãy đi lại từ đầu — vị đắng sẽ dần rõ ràng hơn."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={restart} className="rounded-full border border-ink/20 px-5 py-2 text-sm text-ink hover:border-ink/50">
                Làm lại
              </button>
              <button onClick={scrollTop} className="rounded-full bg-earth px-5 py-2 text-sm text-ivory hover:bg-sun hover:text-ink">
                Xem lại hành trình
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
