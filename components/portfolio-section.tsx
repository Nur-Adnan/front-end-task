import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Website Design",
      image: "/computer.jpeg",
      alt: "Website Design - Healthy breakfast cereal website on laptop",
    },
    {
      id: 2,
      title: "Mobile Application",
      image: "/mobile.jpg",
      alt: "Mobile Application - Travel and mountain packages app",
    },
    {
      id: 3,
      title: "Corporate Design",
      image: "/corporate.jpg",
      alt: "Corporate Design - Creative agency branding on devices",
    },
    {
      id: 4,
      title: "Mobile Application",
      image: "/mobile2.jpg",
      alt: "Mobile Application - Vegetables nutrition app",
    },
    {
      id: 5,
      title: "Responsive Design",
      image: "/responsive.jpg",
      alt: "Responsive Design - Creative design website on multiple devices",
    },
    {
      id: 6,
      title: "Digital Product",
      image: "/digital.jpg",
      alt: "Digital Product - Colorful mobile app interface",
    },
  ];

  return (
    <section id="portfolio" className="bg-[#272c32] py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Portfolio
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-base leading-relaxed tracking-wide font-light">
            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris
            ultrices eros in cursus turpis massa tincidunt. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="bg-white overflow-hidden cursor-default border-0 shadow-none rounded-none"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-transparent" />
              </div>
              <CardContent className="p-6 h-20 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-gray-400 text-center">
                  {item.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Attribution */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Images from{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors font-medium">
              Freepik
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
