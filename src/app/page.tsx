"use client";
import { HeroHighlight } from "../components/ui/hero-highlight";
import { QuizLayout } from "../components/quiz-layout";

export default function Home() {
  return (
    <HeroHighlight>
      <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "> 
      </div>
      <div>
        <QuizLayout />
      </div>
      <div className="m-5 flex justify-center text-center">
    </div>
    </HeroHighlight>
  );
}
