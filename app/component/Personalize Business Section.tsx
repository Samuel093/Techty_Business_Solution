"use client";

import React from "react";
import Image from "next/image";

export default function PersonalizeBusinessSection() {
  const STAR_SRC = "/images/icons/star.svg"; // place files under /public/icons
  const BELL_SRC = "/images/icons/bell.svg";
  const USER_SRC = "/images/icons/user-circle.svg";
  const CHEV_SRC = "/images/icons/chevron-down.svg";

  return (
    <section aria-labelledby="pbs-heading" className="bg-[#0F1316] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-18 my-14 md:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: mock app card */}
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-xl my-8 overflow-hidden rounded-[28px] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5">
              {/* Header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200">
                <Image src={BELL_SRC} alt="Notifications" width={20} height={20} className="opacity-60" />
                <Image src={USER_SRC} alt="User avatar" width={32} height={32} className="opacity-70" />
                <span className="ml-1 mr-auto font-medium">Alex John</span>
                <Image src={CHEV_SRC} alt="Open menu" width={18} height={18} className="opacity-60" />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 px-6 py-4">
                <button className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-slate-600 w-full sm:w-40" aria-label="Filter by year">
                  <span className="text-sm">Year</span>
                  <Image src={CHEV_SRC} alt="Expand" width={16} height={16} />
                </button>
                <button className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-2.5 text-slate-600 w-full" aria-label="Filter by status">
                  <span className="text-sm">Status filter</span>
                  <Image src={CHEV_SRC} alt="Expand" width={16} height={16} />
                </button>
              </div>

              {/* Table */}
              <div className="overflow-hidden">
                <div className="grid grid-cols-12 px-6 py-2.5 text-xs font-medium uppercase tracking-wide text-slate-500">
                  <div className="col-span-4">Assessment Date</div>
                  <div className="col-span-4">Amount Due</div>
                  <div className="col-span-4">Action</div>
                </div>
                <ul role="list">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <li key={i} className="grid grid-cols-12 items-center px-6 py-3 border-t border-slate-200 text-sm">
                      <div className="col-span-4 text-slate-500">N/A</div>
                      <div className="col-span-4 text-slate-500">N/A</div>
                      <div className="col-span-4">
                        <button className="group inline-flex items-center text-slate-700 hover:text-emerald-600">View</button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: copy and stats */}
          <div className="lg:col-span-6">
            <h2 id="pbs-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Personalize your business <span className="text-emerald-500">strategy</span> to reach out.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Our advisors approach each client individually, so each time we select the appropriate insurance for your needs. Thanks to conversation, we will adjust the appropriate cover.
            </p>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <dt className="text-3xl md:text-5xl font-semibold">99.7%</dt>
                <dd className="mt-2 text-sm text-slate-400">Customer Satisfaction</dd>
                <div className="mt-3 flex" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src={STAR_SRC} alt="Star" width={20} height={20} />
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <dt className="text-3xl md:text-5xl font-semibold">4X</dt>
                <dd className="mt-2 text-sm text-slate-400">New Visitors</dd>
                <div className="mt-3 flex" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Image key={i} src={STAR_SRC} alt="Star" width={20} height={20} />
                  ))}
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
