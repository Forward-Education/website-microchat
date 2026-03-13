import { Separator } from "../../../../components/ui/separator";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Resources", href: "#resources" },
  ],
  company: [
    { label: "About Us", href: "https://forwardedu.com/pages/about-us" },
    { label: "Blog", href: "https://forwardedu.com/blogs/blog" },
    { label: "Careers", href: "https://forwardedu.com/pages/careers" },
    { label: "Contact", href: "mailto:hello@forwardedu.com" },
  ],
  legal: [
    { label: "Knowledge Base", href: "https://help.forwardedu.com/en/knowledge-base" },
	{ label: "Privacy Policy", href: "https://forwardedu.com/policies/privacy-policy" },
    { label: "Terms of Service", href: "https://forwardedu.com/pages/terms-conditions" },
	],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full items-start gap-8 px-4 md:px-8 lg:px-16 xl:px-[139px] py-[73px] bg-[#101828]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col items-start gap-4">
          <div className="flex h-10 items-center gap-2 w-full">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl tracking-[-0.31px] leading-6 whitespace-nowrap">
              MicroChat
            </h2>
            <img
              className="w-11 h-9 object-cover"
              alt="Ai forward"
              src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/ai-forward-transparent-white-text-1-1.png"
            />
          </div>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#e6e6e6] text-base tracking-[-0.31px] leading-6 max-w-[295px]">
            Making coding accessible for K-12 students with AI-powered micro:bit
            code generation.
          </p>
        </div>

        <nav className="flex flex-col items-start gap-4">
          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg tracking-[-0.44px] leading-[27px]">
            Product
          </h3>
          <ul className="flex flex-col items-start gap-2">
            {footerLinks.product.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="[font-family:'Poppins',Helvetica] font-normal text-[#d0d5db] text-base tracking-[-0.31px] leading-6 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col items-start gap-4">
          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg tracking-[-0.44px] leading-[27px]">
            Company
          </h3>
          <ul className="flex flex-col items-start gap-2">
            {footerLinks.company.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="[font-family:'Poppins',Helvetica] font-normal text-[#d0d5db] text-base tracking-[-0.31px] leading-6 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-col items-start gap-4">
          <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-lg tracking-[-0.44px] leading-[27px]">
            Legal
          </h3>
          <ul className="flex flex-col items-start gap-2">
            {footerLinks.legal.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="[font-family:'Poppins',Helvetica] font-normal text-[#d0d5db] text-base tracking-[-0.31px] leading-6 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Separator className="bg-[#1d2838]" />

      <div className="flex items-center justify-between w-full">
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#99a1ae] text-sm tracking-[-0.15px] leading-5">
          © 2026 microchat. All rights reserved.
        </p>
        <img
          className="w-32 h-5"
          alt="Social media icons"
          src="https://c.animaapp.com/mmc6e2r3Y4c7zC/img/container-7.svg"
        />
      </div>
    </footer>
  );
};
