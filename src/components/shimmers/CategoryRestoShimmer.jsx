import React from "react";

function CategoryRestoShimmer() {
  return (
    <div className="p-4 bg-shimmerBg rounded mb-20 mx-10">
      <div className="p-4 bg-shimmerContent animate-pulse w-2/4 rounded-lg mb-2"></div>
      <div className="p-4 bg-shimmerContent animate-pulse w-3/4 rounded-lg mb-6"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg w-full bg-shimmerContent h-56 grid grid-cols-2 p-2 gap-6">
          <div className="animate-pulse bg-shimmerBg rounded"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-3/4 p-4 rounded animate-pulse mb-2"></div>
            <div className="bg-shimmerBg w-1/3 p-3 rounded animate-pulse"></div>
            <div className="mt-auto mb-2 p-4 rounded-full bg-shimmerBg animate-pulse w-36"></div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 grid grid-cols-2 p-2 gap-6">
          <div className="animate-pulse bg-shimmerBg rounded"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-3/4 p-4 rounded animate-pulse mb-2"></div>
            <div className="bg-shimmerBg w-1/3 p-3 rounded animate-pulse"></div>
            <div className="mt-auto mb-2 p-4 rounded-full bg-shimmerBg animate-pulse w-36"></div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 grid grid-cols-2 p-2 gap-6">
          <div className="animate-pulse bg-shimmerBg rounded"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-3/4 p-4 rounded animate-pulse mb-2"></div>
            <div className="bg-shimmerBg w-1/3 p-3 rounded animate-pulse"></div>
            <div className="mt-auto mb-2 p-4 rounded-full bg-shimmerBg animate-pulse w-36"></div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 grid grid-cols-2 p-2 gap-6">
          <div className="animate-pulse bg-shimmerBg rounded"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-3/4 p-4 rounded animate-pulse mb-2"></div>
            <div className="bg-shimmerBg w-1/3 p-3 rounded animate-pulse"></div>
            <div className="mt-auto mb-2 p-4 rounded-full bg-shimmerBg animate-pulse w-36"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryRestoShimmer;
