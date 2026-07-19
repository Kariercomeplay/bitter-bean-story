import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionCommodity } from "@/components/SectionCommodity";
import { SectionLabor } from "@/components/SectionLabor";
import { SectionSNLT } from "@/components/SectionSNLT";
import { SectionLaborPower } from "@/components/SectionLaborPower";
import { SectionValuePrice } from "@/components/SectionValuePrice";
import { SectionInterest } from "@/components/SectionInterest";
import { SectionIntegration } from "@/components/SectionIntegration";
import { Quiz } from "@/components/Quiz";
import { Ending } from "@/components/Ending";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="grain-bg text-ink">
      <Header />
      <Hero />
      <SectionCommodity />
      <SectionLabor />
      <SectionSNLT />
      <SectionLaborPower />
      <SectionValuePrice />
      <SectionInterest />
      <SectionIntegration />
      <Quiz />
      <Ending />
    </main>
  );
}
