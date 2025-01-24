import React from "react";
import { useStore } from "@nanostores/react";
import { isDark } from "@/store/global";

export default function Background() {
  const $isDark = useStore(isDark);
  return (
    <div
      className={`h-full min-h-screen -z-50 absolute w-full dark:bg-black bg-white  flex flex-col ${$isDark ? "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]" : "bg-grid-small-black/[0.1] md:dark:bg-grid-small-white/[0.2] md:bg-grid-small-black/[0.2]"}`}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
