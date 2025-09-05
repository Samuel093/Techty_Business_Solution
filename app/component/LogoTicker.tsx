"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const logos = [
  { src: "/images/asana.png", alt: "asana" },
  { src: "/images/webflow.png", alt: "webflow" },
  { src: "/images/elastic.png", alt: "elastic" },
  { src: "/images/databricks.png", alt: "databricks" },
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
