"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const PortraitVideoSlider = dynamic(
  () => import("@/components/ui/portrait-video-slider"),
  { ssr: false }
);

export default PortraitVideoSlider;
