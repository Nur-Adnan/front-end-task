import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      label: "Phone:",
      value: "1 (232) 252 55 22",
      isLink: true,
      href: "tel:+12322525522",
    },
    {
      label: "Location:",
      value: "75 Street Sample, WI 63025",
      isLink: false,
    },
    {
      label: "Mail:",
      value: "template@sample.com",
      isLink: true,
      href: "mailto:template@sample.com",
    },
  ];

  return (
    <div>
      <section id="contact" className="bg-[#ddcfc6] pt-12">
        <div className="max-w-6xl mx-auto ">
          <Card className="bg-white shadow-lg border-0 rounded-none overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information - Left Side */}
              <CardContent className="p-10 lg:p-16 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
                <div className="space-y-8">
                  {/* Main Heading */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center">
                    Contact Us
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto md:mx-0 text-center">
                    We are here to meet any business need and to promote your
                    company online!
                  </p>

                  {/* Divider Line */}
                  <div className="w-[80%] h-0.5 bg-gray-300 mx-auto" />

                  {/* Contact Information */}
                  <div className="space-y-5 text-sm sm:text-base lg:text-lg text-center">
                    {contactInfo.map((info, index) => (
                      <div key={index}>
                        <span className="font-semibold text-gray-900">
                          {info.label}
                        </span>{" "}
                        {info.isLink ? (
                          <a
                            href={info.href}
                            className="text-gray-700 underline underline-offset-4"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-700">{info.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Attribution */}
                  <p className="text-gray-600 text-xs sm:text-sm text-center">
                    Image from{" "}
                    <span className="underline underline-offset-4 font-medium">
                      Freepik
                    </span>
                  </p>
                </div>
              </CardContent>

              {/* Image - Right Side */}
              <div className="relative w-full h-[450px] md:h-auto md:min-h-[500px] order-1 md:order-2">
                <Image
                  src="/contact-workspace.jpg"
                  alt="Modern workspace with wooden desk, laptop, desk lamp, and framed artwork"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="bg-[#323232] text-center py-12 px-6">
        <p className="text-gray-400 text-sm">
          Sample text. Click to select the Text Element.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
