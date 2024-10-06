"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type Props = {
  previewSrc: string;
  originalSrc: string;
  alt: string;
};

export default function ImagePreview({ previewSrc, originalSrc, alt }: Props) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleOpenFullscreen = () => {
    setIsFullscreen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div
        onClick={handleOpenFullscreen}
        className="cursor-pointer flex flex-col gap-2 not-prose"
      >
        <Image src={previewSrc} alt={alt} width={300} height={200} />
        <p className="text-xs text-gray-400 italic">(click image to enlarge)</p>
      </div>

      {isFullscreen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={handleCloseFullscreen}
          >
            <img src={originalSrc} alt={alt} />
          </div>,
          document.body,
        )}
    </>
  );
}
