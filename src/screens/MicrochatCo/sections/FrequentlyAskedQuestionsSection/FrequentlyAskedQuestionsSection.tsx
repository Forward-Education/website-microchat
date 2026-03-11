import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

const faqData = [
  {
    question: "What is MicroChat?",
    answer:
      "MicroChat is an AI coding assistant designed for micro:bit classrooms. It helps students turn plain-language ideas into real, downloadable micro:bit programs they can run on physical hardware.",
  },
  {
    question: "How is MicroChat different from ChatGPT or general AI chatbots?",
    answer:
      "MicroChat is purpose-built for education and micro:bit coding. Instead of open-ended conversation, it focuses on generating real, runnable code for hands-on classroom projects. This keeps students on-task and aligned with learning goals.",
  },
  {
    question: "Is MicroChat safe for classroom use?",
    answer:
      "Yes. MicroChat is designed as a classroom-safe AI tool with guardrails that keep interactions focused on coding and project-based learning. It avoids wide-open chat behavior and stays aligned with educational use.",
  },
  {
    question: "Can beginners use MicroChat for coding?",
    answer:
      "Yes. MicroChat supports beginners with simple prompts while allowing students to grow into more advanced programming concepts. This creates a low floor to start and a high ceiling for deeper learning.",
  },
  {
    question: "Does MicroChat work with real micro:bit hardware?",
    answer:
      "Yes. Students can download MicroChat-generated code directly to their micro:bit and see their programs run using LEDs, sensors, buttons, sound, and motion.",
  },
  {
    question: "Does MicroChat help teach AI literacy?",
    answer:
      "Yes. MicroChat helps students learn how AI generates code, how prompt wording affects outputs, and how to test, debug, and improve AI-generated programs. This builds practical AI literacy skills.",
  },
  {
    question: "Do teachers need coding experience to use MicroChat?",
    answer:
      "No. MicroChat is designed to support teachers without requiring deep coding expertise. It helps educators focus on facilitation, problem-solving, and learning outcomes instead of troubleshooting code.",
  },
  {
    question:
      "Why teach AI with physical computing instead of screen-only tools?",
    answer:
      "Teaching AI with physical computing helps students connect code to real-world outcomes. When students use sensors, lights, and motion, they can see how AI decisions affect real systems. This makes AI concepts more concrete, engaging, and easier to understand.",
  },
  {
    question: "What are the benefits of hands-on AI learning for students?",
    answer:
      "Hands-on AI learning improves problem-solving, critical thinking, and engagement. Students learn to test, debug, and refine real systems instead of passively consuming AI tools. Physical projects also help students understand cause-and-effect relationships in AI systems.",
  },
  {
    question: "What is the best way to teach AI literacy in K–12 classrooms?",
    answer:
      "The most effective way to teach AI literacy is through project-based learning. Students should create, test, and improve real code while exploring how AI generates outputs, responds to prompts, and interacts with real-world inputs like sensors and data.",
  },
];

export const FrequentlyAskedQuestionsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex flex-col justify-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <p className="[font-family:'Poppins',Helvetica] font-normal text-[#2795b9] text-base tracking-[-0.45px] leading-7 mb-8">
              MICROCHAT FAQS
            </p>
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[45px] tracking-[-0.31px] leading-[61.8px]">
              Frequently Asked
              <br />
              Questions
            </h2>
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-6"
            >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="bg-[#f8f8f9] rounded-[14px] border-2 border-solid border-[#d6d6d6] px-10 py-5 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${400 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <AccordionTrigger className="[font-family:'Poppins',Helvetica] font-semibold text-black text-lg tracking-[-0.45px] leading-7 text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.45px] leading-7 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
