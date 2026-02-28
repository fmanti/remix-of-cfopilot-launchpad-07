import { motion } from "framer-motion";

// Import all logos
import chrisLogo from "@/assets/logos/chris-dips.jpg";
import dhLogo from "@/assets/logos/dh-australia.jpg";
import sjLogo from "@/assets/logos/sj-electric.png";
import pasteliLogo from "@/assets/logos/pasteli.jpg";
import ammiratiLogo from "@/assets/logos/ammirati.png";
import pioneerLogo from "@/assets/logos/pioneer.jpg";
import ofeLogo from "@/assets/logos/ofe.png";
import tmaLogo from "@/assets/logos/tma.jpg";
import medloLogo from "@/assets/logos/medlo.png";
import summitLogo from "@/assets/logos/summit.jpg";
import dietliciousLogo from "@/assets/logos/dietlicious.png";
import expertLogo from "@/assets/logos/expert-logistics.jpg";
import gcsLogo from "@/assets/logos/gcs.png";
import arelisLogo from "@/assets/logos/arelis.png";

const logos = [
  { src: chrisLogo, alt: "Chris' Greek Dips" },
  { src: dhLogo, alt: "DH Australia" },
  { src: sjLogo, alt: "SJ Electric" },
  { src: pasteliLogo, alt: "Pasteli Health Foods" },
  { src: ammiratiLogo, alt: "Ammirati Puris Lintas" },
  { src: pioneerLogo, alt: "Pioneer Road Services" },
  { src: ofeLogo, alt: "OFE Refrigerated Transport" },
  { src: tmaLogo, alt: "TMA Truck Modifications" },
  { src: medloLogo, alt: "Medlo" },
  { src: summitLogo, alt: "Summit Formwork" },
  { src: dietliciousLogo, alt: "Dietlicious" },
  { src: expertLogo, alt: "Expert Logistics" },
  { src: gcsLogo, alt: "GCS" },
  { src: arelisLogo, alt: "Arelis" },
];

const LogoCarousel = () => {
  return (
    <section className="py-16 bg-light-bg border-y border-border">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-medium"
        >
          Trusted by Australian businesses across industries
        </motion.p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
