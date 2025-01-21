import React from "react";
import { useStore } from "@nanostores/react";
import { isDark } from "@/store/global";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const $isDark = useStore(isDark);
  return (
    <div
      className={`h-screen w-full dark:bg-black bg-white  flex flex-col ${$isDark ? "dark:bg-dot-white/[0.2] bg-dot-black/[0.2]" : "dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"}`}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
