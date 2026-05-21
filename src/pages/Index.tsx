import AboutScene from "@/components/scenes/AboutScene";
import AiStatementScene from "@/components/scenes/AiStatementScene";
import ContactScene from "@/components/scenes/ContactScene";
import DigitalSystemsScene from "@/components/scenes/DigitalSystemsScene";
import FullStackMarqueeScene from "@/components/scenes/FullStackMarqueeScene";
import GenAiOpsScene from "@/components/scenes/GenAiOpsScene";
import HeroScene from "@/components/scenes/HeroScene";
import PortfolioFooter from "@/components/PortfolioFooter";
import PrinciplesScene from "@/components/scenes/PrinciplesScene";
import TransitionScene from "@/components/scenes/TransitionScene";
import WorkReelScene from "@/components/scenes/WorkReelScene";
import SectionTimeline from "@/components/SectionTimeline";

const Index = () => {
  return (
    <div className="w-full relative">
      <SectionTimeline />
      <div id="hero" className="scroll-mt-6">
        <HeroScene />
      </div>
      <div id="digital-systems" className="scroll-mt-6">
        <DigitalSystemsScene />
      </div>
      <div id="work-reel" className="scroll-mt-6">
        <WorkReelScene />
      </div>
      <div id="full-stack-marquee" className="scroll-mt-6">
        <FullStackMarqueeScene />
      </div>
      <div id="gen-ai-ops" className="scroll-mt-6">
        <GenAiOpsScene />
      </div>
      <div id="principles" className="scroll-mt-6">
        <PrinciplesScene />
      </div>
      <div id="ai-statement" className="scroll-mt-6">
        <AiStatementScene />
      </div>
      <div id="transition" className="scroll-mt-6">
        <TransitionScene />
      </div>
      <div id="about" className="scroll-mt-6">
        <AboutScene />
      </div>
      <div id="contact" className="scroll-mt-6">
        <ContactScene />
      </div>
      <PortfolioFooter />
    </div>
  );
};

export default Index;
