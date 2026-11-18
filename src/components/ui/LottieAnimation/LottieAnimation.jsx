"use client";

import { useEffect, useState } from "react";

export default function LottieAnimation({
  animationData,
  loop = true,
  style,
  className,
  lottieRef,
  onLoadedImages,
}) {
  const [LottieComponent, setLottieComponent] = useState(null);

  useEffect(() => {
    let isMounted = true;
    import("lottie-react").then((mod) => {
      if (isMounted) {
        setLottieComponent(() => mod.default || mod);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  if (!LottieComponent) {
    return <div style={style} className={className} aria-hidden="true" />;
  }

  return (
    <LottieComponent
      animationData={animationData}
      loop={loop}
      style={style}
      className={className}
      lottieRef={lottieRef}
      onLoadedImages={onLoadedImages}
    />
  );
}
