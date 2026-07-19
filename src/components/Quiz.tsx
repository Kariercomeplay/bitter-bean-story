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
    <section id="quiz" className="relative bg-paper py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="eyebrow text-roast tracking-[0.25em]">GÓC NHÌN LẠI</p>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-5xl">
            Bạn đã nhìn thấy điều gì phía sau một ly cà phê?
          </h2>
        </div>

        {!isFinished ? (
          <div className="mt-12 rounded-xl bg-ivory p-6 md:p-10 shadow-sm border border-ink/5">
            {/* Header progress */}
            <div className="flex items-center justify-between text-xs font-sans text-ink/60 mb-2">
              <span>Câu hỏi {idx + 1} / {QUIZ.length}</span>
            </div>

            {/* Progress line */}
            <div className="h-1.5 w-full rounded-full bg-ink/10 overflow-hidden mb-8">
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

                let buttonStyles = "border-ink/15 text-ink/85 hover:border-earth/40 hover:bg-paper";
                if (revealed) {
                  if (isCorrect) {
                    buttonStyles = "border-leaf bg-leaf/10 text-ink font-medium";
                  } else if (isPicked) {
                    buttonStyles = "border-earth bg-earth/10 text-ink font-medium";
                  } else {
                    buttonStyles = "border-ink/10 text-ink/40 opacity-50";
                  }
                }

                return (
                  <button
                    key={optionIdx}
                    onClick={() => handlePick(optionIdx)}
                    disabled={revealed}
                    className={`rounded-lg border p-4 text-left text-sm transition-all ${buttonStyles}`}
                  >
                    <span>{optionText}</span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Explanation */}
            {selectedOption !== null && (
              <div className="mt-6 rounded-lg bg-paper p-4 text-xs leading-relaxed text-ink/85 animate-fade-in border-l-2 border-earth font-sans">
                {currentQ.explain}
              </div>
            )}

            {/* Next button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="rounded-full bg-earth px-7 py-3 text-sm font-medium text-ivory transition-all hover:bg-sun hover:text-ink disabled:opacity-30 shadow-md font-display tracking-wide"
              >
                {idx + 1 === QUIZ.length ? "XEM TỔNG KẾT →" : "CÂU TIẾP THEO →"}
              </button>
            </div>
          </div>
        ) : (
          /* Results Screen */
          <div className="mt-12 rounded-xl bg-ivory p-8 text-center md:p-12 shadow-sm border border-ink/5 animate-fade-in">
            <h3 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              HÀNH TRÌNH ĐÃ HOÀN THÀNH
            </h3>

            <div className="mt-6 inline-block rounded-full bg-paper px-8 py-4 border border-ink/5">
              <p className="font-display text-5xl font-bold text-earth">
                {score} / {QUIZ.length}
              </p>
              <p className="text-xs text-ink/60 mt-1 font-sans">
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
                className="rounded-full bg-earth px-6 py-3 text-sm font-medium text-ivory hover:bg-sun hover:text-ink shadow-md transition-all font-display tracking-wide"
              >
                XEM LẠI HÀNH TRÌNH
              </button>
              <button
                onClick={handleRestart}
                className="rounded-full border border-ink/20 bg-paper px-6 py-3 text-sm font-medium text-ink hover:border-ink/50 transition-all font-display tracking-wide"
              >
                LÀM LẠI
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Smooth bottom gradient fade into Section 10 Ending dark background */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-ink pointer-events-none" />
    </section>
  );
}
