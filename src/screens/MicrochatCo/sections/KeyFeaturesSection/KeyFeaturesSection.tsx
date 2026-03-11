import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='71' viewBox='0 0 24 24' fill='none' stroke='%2380CE4E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='16 18 22 12 16 6'%3E%3C/polyline%3E%3Cpolyline points='8 6 2 12 8 18'%3E%3C/polyline%3E%3C/svg%3E",
    title: "Guided AI code creation & iteration",
    description:
      "Students explain their idea and MicroChat creates the code and helps them understand how it works.",
    backgroundColor: "#E2F4CE",
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='71' viewBox='0 0 24 24' fill='none' stroke='%2359BAE3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E",
    title: "Built for educators & classroom management",
    description:
      "Teachers invite students to join their classroom session with a pin and monitor their code as it develops.",
    backgroundColor: "#CFF0F4",
  },
  {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='71' height='71' viewBox='0 0 24 24' fill='none' stroke='%231CAF66' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'%3E%3C/path%3E%3C/svg%3E",
    title: "Safe, closed AI system designed for micro:bit",
    description:
      "Classrooms stay safe with guardrails that keep students on task and no student data collected.",
    backgroundColor: "#E2F4CE",
  },
];

export const KeyFeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col gap-16">
          <div className="flex justify-center px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="max-w-4xl [font-family:'Poppins',Helvetica] font-semibold text-black text-3xl text-center tracking-[0] leading-normal">
              MicroChat turns student ideas into micro:bit code with guided
              support that helps them understand how it works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white rounded-[14px] border border-solid shadow-[2px_4px_10px_#0000001a] translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${400 + index * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <CardContent className="p-11 flex flex-col gap-8">
                  <div className="w-[71px] h-[71px] rounded-lg flex items-center justify-center p-4" style={{ backgroundColor: feature.backgroundColor }}>
                    <img
                      className="w-full h-full"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>

                  <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-neutral-950 text-2xl tracking-[-0.45px] leading-7">
                    {feature.title}
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[-0.45px] leading-7">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
