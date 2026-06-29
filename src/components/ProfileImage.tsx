"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";

export function ProfileImage() {
  const [src, setSrc] = useState(profile.avatar);

  return (
    <Image
      src={src}
      alt={profile.name}
      fill
      sizes="(min-width: 1024px) 420px, 100vw"
      className="object-cover object-[center_25%] [filter:grayscale(0.18)_contrast(1.08)_brightness(1.02)] transition duration-700"
      priority
      unoptimized
      onError={() => {
        if (src !== profile.avatarFallback) setSrc(profile.avatarFallback);
      }}
    />
  );
}
