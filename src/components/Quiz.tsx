import { useState } from "react";
import { QUIZ } from "@/data/content";

export function Quiz() {
  const [idx, setIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ[idx];
  const score = userAnswers.filter((ans, i) => ans === QUIZ[i].answer).length;

  const handlePick = (optionIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIdx);
    setUserAnswers((prev) => [...prev, optionIdx]);
  };

  const handleNext = () => {
    if (idx + 1 < QUIZ.length) {
      setIdx((i) => i + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setIdx(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setIsFinished(false);
  };

  const handleScrollTop = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="quiz" className="relative bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="eyebrow text-roast tracking-[0.25em]">TRẮC NGHIỆM KIỂM TRA</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            Bạn đã nhìn thấy điều gì phía sau một ly cà phê?
          </h2>
        </div>

        {!isFinished ? (
          <div className="mt-12 rounded-lg border border-ink/15 bg-ivory p-6 md:p-10 shadow-lg">
            {/* Header progress */}
            <div className="flex items-center justify-between text-xs font-semibold text-roast uppercase tracking-wider mb-2">
              <span>CÂU {idx + 1} / {QUIZ.length}</span>
              <span>Tiến độ {Math.round(((idx + (selectedOption !== null ? 1 : 0)) / QUIZ.length) * 100)}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-2 w-full rounded-full bg-ink/10 overflow-hidden mb-8">
              <div
                className="h-full bg-earth transition-all duration-300"
                style={{ width: `${((idx + (selectedOption !== null ? 1 : 0)) / QUIZ.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <p className="font-display text-2xl leading-snug text-ink font-semibold">
              {currentQ.q}
            </p>

            {/* Options list */}
            <div className="mt-6 grid gap-3">
              {currentQ.options.map((optionText, optionIdx) => {
                const isPicked = selectedOption === optionIdx;
                const isCorrect = currentQ.answer === optionIdx;
                const revealed = selectedOption !== null;

                let buttonStyles = "border-ink/20 text-ink/85 hover:border-earth/60 hover:bg-paper";
                if (revealed) {
                  if (isCorrect) {
                    buttonStyles = "border-leaf bg-leaf/15 text-ink font-medium shadow-inner";
                  } else if (isPicked) {
                    buttonStyles = "border-earth bg-earth/15 text-ink font-medium shadow-inner";
                  } else {
                    buttonStyles = "border-ink/10 text-ink/40 opacity-60";
                  }
                }

                return (
                  <button
                    key={optionIdx}
                    onClick={() => handlePick(optionIdx)}
                    disabled={revealed}
                    className={`rounded-md border p-4 text-left text-sm transition-all ${buttonStyles}`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{optionText}</span>
                      {revealed && isCorrect && <span className="text-leaf font-bold">✓ Đáp án đúng</span>}
                      {revealed && isPicked && !isCorrect && <span className="text-earth font-bold">✕ Chưa đúng</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Detailed Explanation */}
            {selectedOption !== null && (
              <div className="mt-6 rounded-md border-l-4 border-earth bg-paper p-4 text-xs leading-relaxed text-ink/90 animate-fade-in">
                <strong className="text-earth font-semibold block mb-1">Giải thích chi tiết:</strong>
                {currentQ.explain}
              </div>
            )}

            {/* Next button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="rounded-full bg-earth px-7 py-3 text-sm font-medium text-ivory transition-all hover:bg-sun hover:text-ink disabled:opacity-30 shadow-md"
              >
                {idx + 1 === QUIZ.length ? "XEM KẾT QUẢ →" : "CÂU TIẾP THEO →"}
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="mt-12 rounded-lg border border-ink/15 bg-ivory p-8 text-center md:p-12 shadow-xl animate-fade-in">
            <p className="eyebrow text-roast tracking-[0.25em]">HÀNH TRÌNH HOÀN THÀNH</p>
            <h3 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              BẠN ĐÃ HOÀN THÀNH HÀNH TRÌNH
            </h3>

            <div className="mt-6 inline-block rounded-full bg-paper px-8 py-4 border border-ink/10">
              <p className="font-display text-5xl font-bold text-earth">
                {score} / {QUIZ.length}
              </p>
              <p className="text-xs uppercase tracking-wider text-ink/60 mt-1 font-sans">
                câu trả lời đúng
              </p>
            </div>

            <p className="mt-6 max-w-md mx-auto text-base text-ink/85 font-display italic leading-relaxed">
              {score === 5
                ? "“Bạn đã nhìn thấy gần như toàn bộ câu chuyện phía sau vị đắng.”"
                : score >= 3
                ? "“Bạn đã nắm được những mối quan hệ quan trọng.”"
                : "“Hành trình vẫn còn nhiều điều để khám phá. Hãy thử lại.”"}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={handleScrollTop}
                className="rounded-full bg-earth px-6 py-3 text-sm font-medium text-ivory hover:bg-sun hover:text-ink shadow-md transition-all"
              >
                XEM LẠI HÀNH TRÌNH
              </button>
              <button
                onClick={handleRestart}
                className="rounded-full border border-ink/20 bg-paper px-6 py-3 text-sm font-medium text-ink hover:border-ink/50 transition-all"
              >
                LÀM LẠI TRẮC NGHIỆM
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
