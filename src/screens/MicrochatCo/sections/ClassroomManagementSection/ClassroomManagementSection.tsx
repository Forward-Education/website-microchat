import { Card, CardContent } from "../../../../components/ui/card";

const cardsData = [
  {
    title: "Districts",
    titleColor: "text-[#2795b9]",
    features: [
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/course-1-1.svg",
        text: "Focused AI Literacy for Classrooms",
        iconClass: "w-[46px] h-[45px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/course-1.svg",
        text: "STEAM, CTE, & Workforce Pathways",
        iconClass: "w-[47px] h-[47px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/graph-1.svg",
        text: "Maximizes micro:bit investments",
        iconClass: "w-[47px] h-[46px]",
      },
    ],
  },
  {
    title: "Teachers",
    titleColor: "text-[#1caf66]",
    features: [
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/self-confidence-1.svg",
        text: "Support to teach coding confidently",
        iconClass: "w-[55px] h-[55px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/speedometer-1.svg",
        text: "Save time creating starter code and examples",
        iconClass: "w-[52px] h-[52px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/solution-1.svg",
        text: "Help students break through barriers",
        iconClass: "w-14 h-14",
      },
    ],
  },
  {
    title: "Students",
    titleColor: "text-[#7cc242]",
    features: [
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/start-up-1.svg",
        text: "Create deeper learning by bringing AI code to life",
        iconClass: "w-[45px] h-[45px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/hardware-ecosytemasset-1-1.svg",
        text: "See how prompt quality affects real outputs",
        iconClass: "w-12 h-[43px]",
      },
      {
        icon: "https://c.animaapp.com/mmc6e2r3Y4c7zC/img/planet-earth-1.svg",
        text: "Turn ideas into meaningful projects faster",
        iconClass: "w-[53px] h-[53px]",
      },
    ],
  },
];

export const ClassroomManagementSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 bg-[url(https://c.animaapp.com/mmc6e2r3Y4c7zC/img/rectangle-1618.svg)] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Poppins',Helvetica] font-semibold text-neutral-950 text-4xl md:text-5xl text-center tracking-[0.35px] leading-tight mb-12 md:mb-16">
          Why micro:bit users love MicroChat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {cardsData.map((card, cardIndex) => (
            <Card
              key={card.title}
              className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${(cardIndex + 1) * 200}ms] bg-white rounded-[20px] shadow-[0px_0px_50px_#0000001a] border-0`}
            >
              <CardContent className="p-8 md:p-10 lg:p-12">
                <h3
                  className={`${card.titleColor} [font-family:'Poppins',Helvetica] font-bold text-3xl text-center tracking-[-0.31px] leading-[43.9px] mb-6`}
                >
                  {card.title}
                </h3>

                <div className="flex flex-col gap-6">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-4">
                      <img
                        className={`flex-shrink-0 ${feature.iconClass}`}
                        alt={feature.text}
                        src={feature.icon}
                      />
                      <p className="[font-family:'Poppins',Helvetica] font-semibold text-neutral-950 text-lg tracking-[-0.45px] leading-7">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
