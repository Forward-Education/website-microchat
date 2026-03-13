import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const examplePrompts = [
  "Make the LEDs show a smiley face when button A is pressed",
  "Create a countdown timer that displays on the LED screen",
  "Make the micro:bit play a melody when shaken",
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 xl:px-56">
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0">
            <Badge
              variant="secondary"
              className="w-fit flex items-center gap-2 bg-blue-50 text-[#2795b9] hover:bg-blue-50 rounded-full px-4 py-2 h-9 [--animation-delay:0ms]"
            >
              <SparklesIcon className="w-4 h-4" />
              <span className="[font-family:'Poppins',Helvetica] font-normal text-sm tracking-[-0.15px]">
                Beta Release
              </span>
            </Badge>

            <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h1 className="[font-family:'Poppins',Helvetica] font-semibold text-neutral-950 text-[55px] tracking-[0.12px] leading-[72px]">
                Hi I&apos;m MicroChat 👋
              </h1>

              <p className="[font-family:'Poppins',Helvetica] font-medium text-[#2795b9] text-[55px] tracking-[0.12px] leading-[72px]">
                your AI guide for
                <br />
                coding micro:bit
              </p>
            </div>

            <div className="flex flex-wrap gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <a href="https://app.microchat.co">
			  <Button className="bg-[#1caf66] hover:bg-[#1caf66]/90 text-white rounded-[10px] h-[60px] px-6 [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.31px]">
                Get started for free
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
			  </a>
			  
            </div>
          </div>

          <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <Card className="bg-white rounded-2xl shadow-[0px_25px_50px_-12px_#00000040] border overflow-visible">
              <CardContent className="p-6">
                <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#333333] text-lg text-center mb-6">
                  What would you like to code today?
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#697282] text-sm tracking-[-0.15px] leading-5">
                      Try an example:
                    </p>

                    <div className="flex flex-col gap-2">
                      {examplePrompts.map((prompt, index) => (
                        <div
                          key={index}
                          className="bg-[#edfbe3] rounded-[10px] px-3 py-2 h-8 flex items-center"
                        >
                          <p className="[font-family:'Poppins',Helvetica] font-medium text-[#1caf66] text-xs leading-4">
                            {prompt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="rounded-[14px] border-2 border-[#d0d5db] p-4 min-h-[160px] flex flex-col justify-between">
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#10172780] text-base tracking-[-0.31px] leading-6">
                        Ask your micro:bit to do anything..
                      </p>

                      <img
                        className="w-[169px] h-[42px] self-end"
                        alt="Group"
                        src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/group-1000002908.png"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <img
              className="absolute bottom-[-60px] left-[-80px] w-[219px] h-[182px] object-cover"
              alt="Microbit flat blue"
              src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/microbit-flat-blue-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
