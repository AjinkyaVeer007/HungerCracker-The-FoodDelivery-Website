import React from "react";

function OnlineRestoShimmer() {
  return (
    <div className="p-4 bg-shimmerBg rounded mb-20">
      <div className="p-4 bg-shimmerContent animate-pulse w-3/4 rounded-lg mb-6"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg w-full bg-shimmerContent h-56 animate-pulse"></div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 animate-pulse"></div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 animate-pulse"></div>
        <div className="rounded-lg w-full bg-shimmerContent h-56 animate-pulse"></div>
      </div>
    </div>
  );
}

export default OnlineRestoShimmer;
