import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BrandValueSection = () => {
  return (
    <section
      id="brand"
      className="min-h-screen bg-[#ddcfc6] flex items-center justify-center p-12 sm:p-8"
    >
      <div className="relative w-full max-w-6xl h-[500px] sm:h-[600px] lg:h-[700px]">
        {/* Left Upper Image - Woman Working */}
        <div className="absolute top-[-4rem] left-4 sm:left-8 lg:left-[5.5rem] w-64 sm:w-80 md:w-96 lg:w-[28rem] h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden">
          <Image
            src="/women.jpg"
            alt="Woman working with laptop and taking notes"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
          />
        </div>

        {/* Left Bottom Image - Laptop with Design */}
        <div className="absolute bottom-[-0.8rem] left-[-4rem] w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-52 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
          <Image
            src="/laptop.jpg"
            alt="Laptop showing design wireframes with coffee"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 600px"
          />
        </div>

        {/* Right Side Image - Creative Workspace */}
        <div className="absolute top-8 sm:top-16 lg:top-20 right-16 w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] overflow-hidden">
          <Image
            src="/design.jpg"
            alt="Creative workspace with laptop, mockups and design materials"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 340px, (max-width: 768px) 420px, (max-width: 1024px) 480px, 540px"
          />
        </div>

        {/* Center Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <Card className="bg-black/90 backdrop-blur-sm border border-gray-700 w-64 sm:w-72 lg:w-96 rounded-none">
            <CardContent className="p-6 lg:p-8 text-center space-y-4">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Brand Values
              </h2>

              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base mb-6">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit mollit anim id est laborum.
              </p>

              <div className="space-y-4">
                <p className="text-gray-400 text-xs sm:text-sm">
                  Images from{" "}
                  <span className="underline cursor-default font-medium">
                    Freepik
                  </span>
                </p>

                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white text-xs font-medium tracking-wider uppercase px-6 py-2"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/30 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/20 animate-pulse delay-1000" />
      </div>
    </section>
  );
};

export default BrandValueSection;
