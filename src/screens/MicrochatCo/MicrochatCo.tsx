import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ClassroomManagementSection } from "./sections/ClassroomManagementSection/ClassroomManagementSection";
import { EducationBenefitsSection } from "./sections/EducationBenefitsSection/EducationBenefitsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { HeroSection } from "./sections/HeroSection";
import { KeyFeaturesSection } from "./sections/KeyFeaturesSection";
import { PricingDetailsSection } from "./sections/PricingDetailsSection";
import { PricingOverviewSection } from "./sections/PricingOverviewSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const MicrochatCo = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full relative overflow-x-hidden"
      data-model-id="1:2"
    >
      <header className="fixed top-0 left-0 w-full h-24 bg-white border-b z-50 translate-y-[-1rem] animate-fade-in opacity-0">
        <div className="flex items-center justify-between h-full px-4 md:px-8 lg:px-16 xl:px-[225px] max-w-[1920px] mx-auto">
          <div className="flex items-end gap-0">
            <h1 className="font-bold text-black text-4xl tracking-[-0.31px] leading-6 [font-family:'Poppins',Helvetica] whitespace-nowrap">
              MicroChat
            </h1>
            <img
              className="w-11 h-9 object-cover"
              alt="Ai forward"
              src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/ai-forward-transparent-white-text-1-1.png"
            />
          </div>

          <nav className="flex items-center gap-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="[font-family:'Poppins',Helvetica] font-normal text-[#495565] text-base tracking-[-0.31px] leading-6 whitespace-nowrap hover:text-[#2795b9] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="h-auto [font-family:'Poppins',Helvetica] font-medium text-[#495565] text-base tracking-[-0.31px] leading-6 hover:text-[#2795b9] transition-colors"
            >
              Sign In
            </Button>
            <a href="https://app.microchat.co">
            <Button className="h-10 bg-[#2795b9] hover:bg-[#2795b9]/90 rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-white text-base tracking-[-0.31px] leading-6 transition-colors">
              Try MicroChat
            </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 relative">
        <div className="relative w-full">
          <img
            className="absolute top-[-156px] left-[187px] w-[1969px] h-[1108px] object-cover pointer-events-none"
            alt="Hero banner gradient"
            src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/hero-banner-gradient-background-1.png"
          />

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <HeroSection />
          </div>
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <KeyFeaturesSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <PricingPlansSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <UserTestimonialsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <PricingDetailsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <ClassroomManagementSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <EducationBenefitsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <PricingOverviewSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <FrequentlyAskedQuestionsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
          <CallToActionSection />
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
