"use client";

import React from "react";
import Image from "next/image";

type Member = {
  name: string;
  role: string;
  photo: string; // path under /public
};

const people: Member[] = [
  {
    name: "Hyeon Vivek",
    role: "Financial Consultant",
    photo: "/images/image 3.png",
  },
  {
    name: "Hyeon Vivek",
    role: "Financial Consultant",
    photo: "/images/image 4.png",
  },
  {
    name: "Hyeon Vivek",
    role: "Financial Consultant",
    photo: "/images/image 3.png",
  },
  {
    name: "Hyeon Vivek",
    role: "Financial Consultant",
    photo: "/images/image 4.png",
  },
];

export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900"
          >
            Our <span className="text-emerald-500">team</span> behind all
            <br className="hidden sm:block" /> the success we have
          </h2>
        </div>

        {/* Team grid */}
        <ul className="mt-12 sm:mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {people.map((person, idx) => (
            <li key={idx} className="flex flex-col">
              {/* Photo frame with fixed ratio */}
              <div className="relative w-full rounded-2xl bg-slate-200 overflow-hidden shadow-sm">
                {/* Maintain ~4:3 aspect ratio without Tailwind plugin */}
                <div className="pt-[75%]" />
                <Image
                  src={person.photo}
                  alt={`${person.name} portrait`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0 h-full w-full object-contain"
                  priority={idx < 2}
                />
              </div>

              {/* Text */}
              <div className="mt-5">
                <p className="text-lg font-semibold text-slate-900">{person.name}</p>
                <p className="mt-1 text-sm text-slate-600">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
