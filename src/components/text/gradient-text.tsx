import React from "react";

export default function GradientText({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <span className="text-orange-600 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-[length:200%_100%] bg-clip-text animate-shimmer motion-reduce:animate-none">
      {children}
    </span>
  );
}
