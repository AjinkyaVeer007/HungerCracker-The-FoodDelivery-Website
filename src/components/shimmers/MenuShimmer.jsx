import React from "react";

function MenuShimmer() {
  return (
    <div className="p-4 bg-shimmerBg rounded mb-20 mx-10">
      <div className="pb-10 pt-4">
        <div className="p-6 bg-shimmerContent animate-pulse w-2/4 rounded-lg mb-2 mx-auto"></div>
        <div className="p-2 bg-shimmerContent animate-pulse w-1/4 rounded-lg mb-2 mx-auto"></div>
        <div className="p-2 bg-shimmerContent animate-pulse w-2/4 rounded-lg mb-6 mx-auto"></div>
      </div>
      <div className="flex items-center gap-6 mb-4">
        <div className="p-4 bg-shimmerContent rounded-lg w-44 animate-pulse"></div>
        <div className="p-4 bg-shimmerContent rounded-lg w-44 animate-pulse"></div>
        <div className="p-4 bg-shimmerContent rounded-lg w-44 animate-pulse"></div>
        <div className="p-4 bg-shimmerContent rounded-lg w-44 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="rounded-lg w-full bg-shimmerContent p-2">
          <div className="animate-pulse bg-shimmerBg rounded w-full h-36 mb-2"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-full p-2 rounded animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="bg-shimmerBg animate-pulse w-20 p-2 rounded"></div>
              <div className="bg-shimmerBg animate-pulse w-20 p-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent p-2">
          <div className="animate-pulse bg-shimmerBg rounded w-full h-36 mb-2"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-full p-2 rounded animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="bg-shimmerBg animate-pulse w-20 p-2 rounded"></div>
              <div className="bg-shimmerBg animate-pulse w-20 p-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent p-2">
          <div className="animate-pulse bg-shimmerBg rounded w-full h-36 mb-2"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-full p-2 rounded animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="bg-shimmerBg animate-pulse w-20 p-2 rounded"></div>
              <div className="bg-shimmerBg animate-pulse w-20 p-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent p-2">
          <div className="animate-pulse bg-shimmerBg rounded w-full h-36 mb-2"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-full p-2 rounded animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="bg-shimmerBg animate-pulse w-20 p-2 rounded"></div>
              <div className="bg-shimmerBg animate-pulse w-20 p-3 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="rounded-lg w-full bg-shimmerContent p-2">
          <div className="animate-pulse bg-shimmerBg rounded w-full h-36 mb-2"></div>
          <div className="flex flex-col">
            <div className="bg-shimmerBg w-full p-2 rounded animate-pulse mb-2"></div>
            <div className="flex justify-between items-center">
              <div className="bg-shimmerBg animate-pulse w-20 p-2 rounded"></div>
              <div className="bg-shimmerBg animate-pulse w-20 p-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuShimmer;
