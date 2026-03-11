import { CheckIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    text: "Create a session to give students anonymous tool access - with no logins required.",
  },
  {
    text: "Built-in reflection & inquiry makes it easy to assess students' understanding of the code.",
  },
  {
    text: "Full educator visibility into student conversations in MicroChat.",
  },
];

export const UserTestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex flex-col max-w-[491px] items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#2795b9] text-base tracking-[-0.45px] leading-7 whitespace-nowrap">
              NO STUDENT LOGINS
            </div>

            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-3xl tracking-[-0.45px] leading-normal">
              Classroom management &amp; teacher controls
            </h2>

            <div className="flex flex-col gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${(index + 1) * 200}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center justify-center bg-[#2795b9] rounded-full w-9 h-9 flex-shrink-0 mt-1">
                    <CheckIcon className="w-5 h-5 text-white" />
                  </div>
                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[-0.45px] leading-normal flex-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-[731px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Card className="bg-[#edf9ff] border-0 shadow-none overflow-hidden">
              <CardContent className="p-12">
                <div className="relative w-full aspect-[607/389]">
                  <img
                    src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/imagewithfallback-1.svg"
                    alt="Classroom management interface"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
