import { useKonamiCode } from "@/hooks/useKonamiCode";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PhaseOne() {
  const { isActivated } = useKonamiCode();

  return (
    <>
      <section className="bg-main w-full px-2 h-dvh overflow-hidden flex flex-col justify-center items-center gap-4">
        <p className="w-full text-white text-center">
          cima, cima, baixo, baixo, esquerda, direita, esquerda, direita, B, A
        </p>

        <div className="min-h-7">
          {isActivated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                duration: 1.5,
                ease: "easeOut",
              }}
            >
              <Button variant="default">Proximo</Button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
