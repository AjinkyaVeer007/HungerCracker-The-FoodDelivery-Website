import React from "react";

function CategoriesShimmer() {
  return (
    <div className="p-4 bg-shimmerBg rounded">
      <div className="p-4 bg-shimmerContent animate-pulse w-60 rounded-lg mb-6"></div>
      <div className="flex items-center gap-4">
        <div className="rounded-lg w-36 bg-shimmerContent h-40 animate-pulse"></div>
        <div className="rounded-lg w-36 bg-shimmerContent h-40 animate-pulse"></div>
        <div className="rounded-lg w-36 bg-shimmerContent h-40 animate-pulse"></div>
        <div className="rounded-lg w-36 bg-shimmerContent h-40 animate-pulse"></div>
        <div className="rounded-lg w-36 bg-shimmerContent h-40 animate-pulse"></div>
      </div>
    </div>
  );
}

export default CategoriesShimmer;
