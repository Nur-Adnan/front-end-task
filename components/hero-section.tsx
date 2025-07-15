import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Palette, Monitor, Lightbulb } from "lucide-react";

const HeroSection = () => {
  return (
    <div id="home" className="bg-[#ebddd5] ">
      {/* Hero Section */}
      <section className="min-h-[120vh] flex items-center justify-center sm:p-8 relative overflow-hidden mr-24 ">
        {/* 🟨 Yellow diagonal background outside the card */}

        <div className="absolute -top-[-5%] -right-[-14%] w-[580px] h-[750px] bg-yellow-400 z-10 sm:" />

        <div className="max-w-5xl w-full">
          <Card
            className={
              "min-h-[200px] lg:min-h-[700px] max-w-4xl border-0 shadow-2xl rounded-none mt-12"
            }
          >
            <div className="absolute inset-0 overflow-hidden">
              {/* Pattern left side */}
              <div className="absolute top-[15%] left-[46%] w-[32%] h-[46%] z-20 opacity-80 rounded-none">
                <Image src="/diagonal.png" alt="Diagonal pattern" fill />
              </div>

              {/* Device mockup (angled) */}
              <div className="absolute top-[35%] right-[8%] w-[50%] h-[80%] flex items-center justify-center z-40">
                <div className="relative w-full h-full">
                  <div className="absolute top-[-48%] right-[16%] w-[80%] max-w-[600px] h-[50rem] max-h-[800px] aspect-[4/3] transform transition-transform duration-500">
                    <Image
                      src="/device-mockup.png"
                      alt="Device mockup showcasing websites"
                      fill
                      className="object-contain drop-shadow-2xl filter brightness-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Text content */}
            <CardContent className="relative z-40 p-6 sm:p-8 lg:p-12 max-w-lg h-full flex flex-col justify-center">
              <div className="mt-40 max-w-[21.5rem]">
                <h1 className="text-xl sm:text-xl lg:text-2xl xl:text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  We Create Websites
                </h1>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base lg:text-lg max-w-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt.
                </p>

                <p className="text-xs sm:text-sm text-gray-500 mb-8 py-3">
                  Image from{" "}
                  <span className="underline underline-offset-4 cursor-pointer hover:text-gray-400 transition-colors font-medium">
                    Freepik
                  </span>
                </p>

                <Button
                  size="lg"
                  className="w-fit bg-black hover:bg-gray-800 text-white font-extralight uppercase tracking-wider text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section - Matching the reference image */}
      <section className="pb-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-normal">
              Epic design and engineering
            </h2>
            <p className="text-gray-600 max-w-[40rem] mx-auto text-sm sm:text-base leading-loose py-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Strategy Card (bg removed) */}
            <Card className="h-80 bg-transparent border-none shadow-none">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                  STRATEGY
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </CardContent>
            </Card>

            {/* Branding Card - Highlighted */}
            <Card className="h-80 bg-white shadow-md transition-all duration-300 group border-0 rounded-none">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mb-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                  BRANDING
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </CardContent>
            </Card>

            {/* Development Card (bg removed) */}
            <Card className="h-80 bg-transparent border-0 shadow-none">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center bg-transparent">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-wide">
                  DEVELOPMENT
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </CardContent>
            </Card>

            {/* Web Design Card */}
            <Card className="h-80 bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md group border-0 rounded-none">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4 ">
                  <Palette className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-wide">
                  WEB DESIGN
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                  nunc justo sagittis suscipit ultrices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
