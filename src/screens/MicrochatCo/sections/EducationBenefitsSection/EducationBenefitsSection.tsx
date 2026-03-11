import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const primmSteps = [
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-5.svg",
    title: "Predict",
    description: " what the code will do",
    delay: "200ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-1.svg",
    title: "Run",
    description: " the code on the micro:bit",
    delay: "400ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-3.svg",
    title: "Investigate",
    description: " the code & explain it",
    delay: "600ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-1.svg",
    title: "Make",
    description: " a new program with the code",
    delay: "800ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-2.svg",
    title: "Modify",
    description: " the code to improve it",
    delay: "1000ms",
  },
];

const features = [
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/paper-1.svg",
    title: "Student Worksheets",
    description:
      "Downloadable worksheets to guide students through activities and prompt reflection & inquiry.",
    delay: "200ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/downloads-2-1.svg",
    title: "Teacher Lesson Plan",
    description:
      "Downloadable, editable, and ready-to-use rubrics for student assessment.",
    delay: "400ms",
  },
  {
    icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/downloads-2-1-1.svg",
    title: "Student Assessment Rubrics",
    description:
      "Downloadable, editable, and ready-to-use rubrics for student assessment.",
    delay: "600ms",
  },
];

export const EducationBenefitsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 bg-[linear-gradient(180deg,rgba(237,251,227,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-4 mb-12">
          <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] flex items-center gap-2 bg-[#1caf66] hover:bg-[#1caf66] text-white px-6 py-2 rounded-full h-auto">
            <img
              className="w-4 h-4"
              alt="Icon"
              src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/icon.svg"
            />
            <span className="[font-family:'Poppins',Helvetica] font-normal text-sm tracking-[-0.15px] leading-5">
              The PRIMM Model
            </span>
          </Badge>

          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-5xl text-center tracking-[0.35px] leading-[48px] [font-family:'Poppins',Helvetica] font-semibold text-neutral-950">
            Built for Education
          </h2>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-[991px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center tracking-[-0.45px] leading-7">
            MicroChat is trained to guide students through the code generation
            process. MicroChat uses the PRIMM model to have the student respond
            to reflection & inquiry questions about how the code works.
          </p>
        </div>

        <div className="flex gap-8 mb-16">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-[66%]">
            <img
              className="w-full h-auto object-cover"
              alt="Microchat laptop"
              src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/microchat-laptop-mockup-1.png"
            />
          </div>

          <div className="w-[33%] flex flex-col gap-4">
            {primmSteps.map((step, index) => (
              <Card
                key={index}
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${step.delay}] bg-white rounded-2xl shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] border-0`}
              >
                <CardContent className="flex items-center gap-3 p-4">
                  <img
                    className="w-10 h-10 flex-shrink-0"
                    alt="Container"
                    src={step.icon}
                  />
                  <div className="flex items-center gap-1 [font-family:'Poppins',Helvetica] font-normal text-neutral-950 text-sm tracking-[-0.45px] leading-5">
                    <span className="font-bold tracking-[-0.09px]">
                      {step.title}
                    </span>
                    <span className="font-medium tracking-[-0.09px]">
                      {step.description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[52px] max-w-[1472px] mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${feature.delay}] bg-white rounded-[14px] border-2 border-solid border-[#d6d6d6]`}
            >
              <CardContent className="flex flex-col gap-6 p-6">
                <img
                  className="w-[55px] h-[55px]"
                  alt={feature.title}
                  src={feature.icon}
                />
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[21px] tracking-[-0.31px] leading-6">
                  {feature.title}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.31px] leading-6">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
