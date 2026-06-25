"use client";

import dynamic from "next/dynamic";

const LandscapeVideoSlider = dynamic(
  () => import("@/components/ui/landscape-video-slider"),
  { ssr: false }
);

export default LandscapeVideoSlider;
