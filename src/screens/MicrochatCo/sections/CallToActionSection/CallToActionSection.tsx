import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 px-4 md:px-8 lg:px-16 xl:px-56 bg-[linear-gradient(135deg,rgba(39,149,185,1)_0%,rgba(124,194,66,1)_100%)]">
      <div className="max-w-[1505px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-10 translate-y-[-1rem] animate-fade-in opacity-0">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[50px] tracking-[0.35px] leading-[50px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Ready to Transform Your Classroom?
            </h2>

            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.45px] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Join thousands of educators using microchat to make coding
              accessible and fun for all students. Start your free 14-day trial
              today.
            </p>

            <div className="flex flex-wrap items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <a href="https://app.microchat.co">
			  <Button className="h-auto bg-white hover:bg-white/90 text-[#2795b9] rounded-[10px] px-[30px] py-[18px] [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[-0.31px] leading-6 transition-[transform,box-shadow] hover:scale-105">
                Start Free Trial
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Button>
			</a>
			<a href="https://nlab3.share.hsforms.com/26hvahAv-RfuzbsuhKGq_ww" target="_blank">
              <Button
                variant="outline"
                className="h-auto bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-[10px] px-[30px] py-[18px] [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.31px] leading-6 transition-[transform,box-shadow] hover:scale-105"
              >
                Schedule a Demo
              </Button>
			</a>
            </div>
          </div>

          <div className="relative w-full max-w-[692px] h-[461px] rounded-3xl shadow-[0px_25px_50px_-12px_#00000040] bg-[url(https://c.animaapp.com/mmc6e2r3Y4c7zC/img/imagewithfallback-3.svg)] bg-cover bg-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]" />
        </div>
      </div>
    </section>
  );
};
