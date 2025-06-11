"use client";

import { TypingAnimation } from "@/components/magicui/terminal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NewGame() {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchVariants = {
    normal: {
      x: 0,
      y: 0,
      filter: "hue-rotate(0deg)",
      textShadow: "0 0 0px transparent",
    },
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 2, -2, 0],
      filter: [
        "hue-rotate(0deg)",
        "hue-rotate(90deg)",
        "hue-rotate(180deg)",
        "hue-rotate(270deg)",
        "hue-rotate(0deg)",
      ],
      textShadow: [
        "0 0 0px transparent",
        "2px 0 0px #ff0000, -2px 0 0px #00ffff",
        "-2px 0 0px #ff0000, 2px 0 0px #00ffff",
        "0 0 0px transparent",
      ],
    },
  };

  return (
    <>
      <section className="bg-main w-full h-dvh overflow-hidden flex flex-col justify-center items-center gap-8">
        <TypingAnimation className="text-white text-lg">
          Vamos Jogar um Jogo ?
        </TypingAnimation>

        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            <Button variant="default">Sim</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 1.5,
              ease: "easeOut",
            }}
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
          >
            <motion.div
              variants={glitchVariants}
              animate={isGlitching ? "glitch" : "normal"}
              transition={{
                duration: 0.3,
                repeat: isGlitching ? Infinity : 0,
                repeatType: "loop",
              }}
            >
              <Button
                variant="default"
                className="relative overflow-hidden"
                style={{
                  filter: isGlitching
                    ? "contrast(120%) brightness(110%)"
                    : "none",
                }}
              >
                Não
                {isGlitching && (
                  <>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center text-red-400"
                      animate={{
                        opacity: [0, 1, 0],
                        x: [-1, 1, -1],
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      Não
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center text-cyan-400"
                      animate={{
                        opacity: [0, 1, 0],
                        x: [1, -1, 1],
                      }}
                      transition={{
                        duration: 0.1,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0.05,
                      }}
                    >
                      Não
                    </motion.span>
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
