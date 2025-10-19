"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth, spring-based motion for a fluid effect
  const springX = useSpring(0, { stiffness: 80, damping: 20 });
  const springY = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 250); // offset (center of glow)
      springY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[500px] h-[500px] rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, rgba(37, 31, 212, 0.15) 0%, rgba(37, 31, 212, 0) 70%)",
        filter: "blur(50px)",
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
      }}
    />
  );
}
