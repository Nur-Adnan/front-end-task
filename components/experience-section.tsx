import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/digital-background.jpg"
          alt="Yellow workspace with hands typing on laptop, coffee cup and office supplies"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-end justify-start p-4 sm:p-6 lg:p-8 xl:py-16 sm:mx-auto">
        <Card
          className="absolute bg-white shadow-2xl border-0 max-w-md sm:max-w-xs lg:max-w-2xl xl:max-w-2xl w-full mb-4 sm:mb-6 lg:mb-8 scale-[1.05] py-16 
          sm:left-1/2 sm:-translate-x-1/2 
          lg:left-64 lg:translate-x-0 
          rounded-none"
        >
          <CardContent className="p-8 sm:px-6 sm:py-4 lg:p-12 space-y-8">
            {/* Main Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Crafting digital experiences
              </h1>

              {/* Subtitle */}
              <p className="text-black text-base sm:text-lg lg:text-2xl leading-relaxed">
                Join the elite ranks of sustained value creators
              </p>

              {/* Attribution */}
              <p className="text-gray-600 text-sm sm:text-base">
                Image from{" "}
                <span className="underline underline-offset-4 font-medium">
                  Freepik
                </span>
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-black text-white px-8 lg:px-12 py-4 lg:py-8 font-extralight uppercase tracking-wide text-base lg:text-lg rounded-md shadow-lg ">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Optional: Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </section>
  );
};

export default ExperienceSection;
