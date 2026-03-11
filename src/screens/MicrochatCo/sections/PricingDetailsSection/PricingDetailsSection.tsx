import { CheckIcon } from "lucide-react";

const features = [
  {
    text: "MicroChat is a closed AI system for distraction-free micro:bit projects.",
  },
  {
    text: "Chat modes allow educators to control the reading level and coding output difficulty.",
  },
  {
    text: "Safeguards block harmful or inappropriate content.",
  },
];

export const PricingDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-[65px] translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="relative w-full lg:w-[731px] h-[400px] lg:h-[500px] flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="absolute top-0 left-0 w-full lg:w-[630px] h-full bg-[#edfbe3] rounded-[14px]" />
            <div className="absolute top-[59px] left-[58px] right-0 bottom-0 flex justify-center items-center">
              <div
                className="bg-[url(https://c.animaapp.com/mmc6e2r3Y4c7zC/img/imagewithfallback.svg)] w-full max-w-[607px] h-[300px] lg:h-[389px] rounded-3xl bg-cover bg-center"
                role="img"
                aria-label="Person working on micro:bit project"
              />
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[491px] items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#7cc242] text-base tracking-[-0.45px] leading-7 uppercase">
              MICRO:BIT AI TUTOR
            </div>

            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[-0.45px] leading-normal">
              Safe, controlled access to AI coding tools
            </h2>

            <div className="flex flex-col gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${600 + index * 200}ms`,
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
