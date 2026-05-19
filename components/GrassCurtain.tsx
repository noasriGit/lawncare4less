"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FADE_DURATION = 0.8;
const BG_IMAGE = "/BG.png";
const HOLD_BEFORE_FADE_MS = 500;

export default function GrassCurtain() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => setFading(true), HOLD_BEFORE_FADE_MS);
    return () => clearTimeout(startFade);
  }, []);

  const handleFadeComplete = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed left-0 top-0 z-[100] h-full w-full overflow-hidden bg-green-800"
          style={{ height: "100svh", minHeight: "100svh" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: fading ? 0 : 1 }}
          transition={{ duration: FADE_DURATION, ease: "easeOut" }}
          onAnimationComplete={fading ? handleFadeComplete : undefined}
          aria-hidden
        >
          <Image
            src={BG_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
