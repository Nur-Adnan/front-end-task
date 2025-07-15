import Image from "next/image";
import { Button } from "@/components/ui/button";

const CalendarSection = () => {
  return (
    <section className="relative min-h-screen bg-[#ffb902] overflow-hidden flex flex-col lg:flex-row">
      {/* Left Image Full Height */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
        <Image
          src="/calendar-background.jpg"
          alt="Yellow workspace with calendar, keyboard and office supplies"
          fill
          className="object-cover object-left-top"
          priority
        />
      </div>

      {/* Right Text Content */}
      <div className="relative w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20 z-10">
        <div className="w-full max-w-xl rounded-lg p-6 lg:p-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-relaxed">
            Construction and renovation projects
          </h2>

          {/* Paragraph */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam nunc justo, sagittis suscipit ultrices. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* Attribution */}
          <p className="text-white/80 text-xs sm:text-sm mb-6 lg:mb-8">
            Image from{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors font-medium">
              Freepik
            </span>
          </p>

          {/* Button */}
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 lg:px-9 py-2 lg:py-6 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md font-light"
          >
            CONTACT US
          </Button>
        </div>
      </div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-black/30 pointer-events-none" />
    </section>
  );
};

export default CalendarSection;
