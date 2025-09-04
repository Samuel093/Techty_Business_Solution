"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const logos = [
  { src: "/images/logo1.png", alt: "Loop" },
  { src: "/images/logo2.png", alt: "Logoipsum" },
  { src: "/images/logo3.png", alt: "IPSUM" },
  { src: "/images/logo4.png", alt: "BeeCo" },
];

export default function LogoTicker() {
  return (
    <div className="relative">
      <Marquee gradient={false} pauseOnHover={true} speed={40}>
        {logos.concat(logos).map((l, idx) => (
          <div key={idx} className="mx-10 flex items-center">
            <Image
              src={l.src}
              alt={l.alt}
              width={160}
              height={36}
              className="h-9 w-auto opacity-80"
              priority={idx < 3}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
