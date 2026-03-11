import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    text: "Go from language text prompts, to working block and JavaScript code in seconds",
  },
  {
    text: "Automatically prompt students to answer questions and inquire about how the code works",
  },
  {
    text: "Empower students to problem-solve and create code on their own, faster and easier.",
  },
];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[65px]">
          <div className="relative w-full lg:w-[731px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <Card className="bg-[#edfbe3] border-none shadow-none overflow-visible">
              <CardContent className="p-0 relative h-[500px]">
                <div className="absolute top-[59px] left-[58px] w-[673px] h-[355px]">
                  <div
                    className="w-[607px] h-[389px] ml-[17px] rounded-3xl bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(https://c.animaapp.com/mmc6e2r3Y4c7zC/img/imagewithfallback-2.svg)",
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col w-full lg:w-[491px] items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#7cc242] text-base tracking-[-0.45px] leading-7 whitespace-nowrap">
              MICRO:BIT AI TUTOR
            </div>

            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[-0.45px] leading-normal">
              Create micro:bit success faster
            </h2>

            <div className="flex flex-col gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${400 + index * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center justify-center w-9 h-9 bg-[#7cc242] rounded-[18px] flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[-0.45px] leading-normal flex-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
