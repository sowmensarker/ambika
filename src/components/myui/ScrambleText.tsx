"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
  children: string;
  cyclesPerLetter?: number;
  shuffleTime?: number;
};

const ScrambleText: React.FC<Props> = ({
  children,
  cyclesPerLetter,
  shuffleTime,
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;
  const CYCLES_PER_LETTER = cyclesPerLetter ? cyclesPerLetter : 2;
  const SHUFFLE_TIME = shuffleTime ? shuffleTime : 50;
  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onViewportEnter={scramble}
      onViewportLeave={stopScramble}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default ScrambleText;
