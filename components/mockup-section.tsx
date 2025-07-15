import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const MockupSection = () => {
  const services = [
    {
      title: "Branding strategy",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      title: "Designing logos",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Brand identity",
      description:
        "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Fixed Width */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/mockup-background.jpg"
          alt="Minimalist workspace with business card mockups on beige background"
          fill
          className="object-left object-contain"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative bg-[#e2d2c8] min-h-screen flex items-center justify-center lg:justify-end px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full max-w-sm sm:max-w-xs lg:max-w-lg xl:max-w-xl space-y-4 lg:space-y-8 z-20 mr-0 sm:mr-0 md:mr-0 lg:mr-72">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/95 backdrop-blur-sm border-0 shadow-md rounded-none pb-10 h-64 sm:h-52 lg:h-72"
            >
              <CardContent className="p-2 sm:p-3 md:p-4 lg:p-6">
                <h2 className="text-base sm:text-sm md:text-lg lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-2 md:mb-3 lg:mb-4 leading-snug sm:leading-tight tracking-normal">
                  {service.title}
                </h2>
                <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-normal mb-2 sm:mb-2 md:mb-3 lg:mb-4">
                  {service.description}
                </p>
                {index === 0 && (
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm py-2 sm:py-3">
                    Images from{" "}
                    <span className="underline underline-offset-2 cursor-pointer hover:text-gray-800 transition-colors font-medium">
                      Freepik
                    </span>
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/5" />
    </section>
  );
};

export default MockupSection;
