import { CheckIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../components/ui/card";

const pricingPlans = [
  {
    name: "Teacher",
    price: "$10",
    period: "/mo",
    annualPrice: "$120 annually",
    description: "Ideal for teachers with 3-4 class periods a month.",
    features: ["Up to 30 student seats", "Up to 100 prompts per student/mo."],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    isPopular: false,
    gradient: false,
  },
  {
    name: "Teacher Unlimited",
    price: "$12.50",
    period: "/mo",
    annualPrice: "$150 annually",
    description: "Unlimited use for teachers & students",
    features: [
      "Up to 30 student seats",
      "Unlimited prompt generation",
      "MakeCode editing",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "secondary" as const,
    isPopular: true,
    gradient: true,
  },
  {
    name: "District",
    price: "Custom",
    period: "",
    annualPrice: "contact for pricing",
    description: "For schools and districts with multiple classrooms",
    features: [
      "Up to 150 student seats",
      "Unlimited prompt generation",
      "MakeCode editing",
      "Unlimited output history",
      "Guided coding experience",
      "Classroom management",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default" as const,
    isPopular: false,
    gradient: false,
  },
];

export const PricingOverviewSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-16 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="font-semibold text-neutral-950 text-5xl text-center tracking-[0.35px] leading-[48px] [font-family:'Poppins',Helvetica]">
            MicroChat Pricing
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#495565] text-xl text-center tracking-[-0.45px] leading-7 max-w-3xl">
            Choose the plan that fits your needs. All plans include a 30-day
            free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.gradient
                  ? "bg-[linear-gradient(135deg,rgba(39,149,185,1)_0%,rgba(124,194,66,1)_100%)] shadow-[0px_25px_50px_-12px_#00000040] border-0 -mt-4"
                  : "bg-white border-2"
              } rounded-2xl h-auto`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7cc242] hover:bg-[#7cc242] text-white rounded-full px-4 py-1 [font-family:'Poppins',Helvetica] font-medium text-sm tracking-[-0.15px]">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="p-8 pb-0">
                <div className="flex flex-col gap-2">
                  <h3
                    className={`[font-family:'Poppins',Helvetica] font-medium text-2xl tracking-[0.07px] leading-8 ${
                      plan.gradient ? "text-white" : "text-[#101727]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`[font-family:'Poppins',Helvetica] font-normal text-4xl tracking-[0.37px] leading-10 ${
                        plan.gradient ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={`[font-family:'Poppins',Helvetica] font-normal text-xl tracking-[-0.45px] leading-7 ${
                          plan.gradient ? "text-white" : "text-neutral-950"
                        }`}
                      >
                        {plan.period}
                      </span>
                    )}
                    <span
                      className={`ml-auto [font-family:'Poppins',Helvetica] font-normal text-xs text-right tracking-[-0.31px] leading-6 ${
                        plan.gradient ? "text-white" : "text-[#495565]"
                      }`}
                    >
                      {plan.annualPrice}
                    </span>
                  </div>

                  <p
                    className={`[font-family:'Poppins',Helvetica] font-normal text-base tracking-[-0.31px] leading-6 ${
                      plan.gradient
                        ? "text-white"
                        : plan.name === "District"
                          ? "text-[#697282]"
                          : "text-[#495565]"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="p-8 flex-grow">
                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.gradient ? "text-white" : "text-[#2795b9]"
                        }`}
                      />
                      <span
                        className={`[font-family:'Poppins',Helvetica] font-normal text-base tracking-[-0.31px] leading-6 ${
                          plan.gradient ? "text-white" : "text-[#495565]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-8 pt-0">
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full h-auto py-3 rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[-0.31px] leading-6 ${
                    plan.gradient
                      ? "bg-white text-[#2795b9] hover:bg-white/90 font-semibold"
                      : "bg-[#2795b9] text-white hover:bg-[#2795b9]/90"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-[#ffffff6e] backdrop-blur-[9.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9.3px)_brightness(100%)]" />
          <Card className="relative z-10 pointer-events-auto bg-[#f5f9fa] rounded-lg shadow-[0px_0px_15px_#00000040] border-0 max-w-md mx-4">
            <CardContent className="p-8 flex flex-col gap-4">
              <h3 className="[font-family:'Poppins',Helvetica] font-medium text-black text-[25px] text-center tracking-[-0.31px] leading-[47px]">
                Pricing details coming soon...
              </h3>
              <a
                href="https://app.microchat.co"
                className="[font-family:'Poppins',Helvetica] font-normal text-black text-[25px] text-center tracking-[-0.31px] leading-[47px] underline hover:no-underline transition-all"
              >
                Try the Beta Version for Free
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
