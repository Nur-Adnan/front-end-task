import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Strategy.",
      items: [
        "Analytics and Research",
        "Interactive Workshops",
        "Brand Strategy",
        "Content Strategy",
        "Digital Strategy",
        "Conversion Rate Optimization",
      ],
    },
    {
      title: "Design.",
      items: [
        "Creative Direction",
        "Brand Guides",
        "Prototypes",
        "UI/UX & Web Design",
        "Visual Asset Creation",
        "Motion Design",
      ],
    },
    {
      title: "Development.",
      items: [
        "System Architecture Design",
        "Full-Stack Development",
        "3rd Party Integrations",
        "Performance Optimization",
        "WordPress Development",
        "Shopify Development",
      ],
    },
  ];

  const highlightedItems = [
    "Conversion Rate Optimization",
    "UI/UX & Web Design",
    "3rd Party Integrations",
  ];

  return (
    <section id="what-we-do" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400 mb-4">
            What We Do
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map(({ title, items }, i) => (
            <Card
              key={i}
              className="bg-transparent border-gray-800 hover:border-orange-400/50 transition-all duration-300 border-0"
            >
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-6">
                  {title}
                </h2>
                <ul className="space-y-4">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="text-base leading-relaxed text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {highlightedItems.includes(item) ? (
                        <span className="underline underline-offset-4 decoration-orange-400 text-white">
                          {item}
                        </span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
