"use client";

export default function BlogSkeleton() {
  return (
    <div className="rounded-xl shadow-sm border border-gray-200 bg-white overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Content placeholder */}
      <div className="p-5 space-y-3">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
        <div className="w-3/4 h-5 bg-gray-400 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
