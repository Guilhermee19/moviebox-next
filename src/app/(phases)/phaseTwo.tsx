import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PhaseTwo() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isActivated, setIsActivated] = useState<boolean>(false);

  const handleClick = () => {
    const scalar = 1;
    const unicorn = confetti.shapeFromText({ text: "🦄", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [unicorn],
      scalar,
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 0);
  };

  useEffect(() => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();

    console.log(day, month, year);

    if (day === 20 && month === 7) {
      handleClick();
    }

    if (year === 1969) {
      handleClick();
    }

    if (day === 20 && month === 7 && year === 1969) {
      setIsActivated(true);
    }
  });

  return (
    <>
      <section className="bg-main w-full px-2 h-dvh overflow-hidden flex flex-col justify-center items-center gap-4">
        <p className="w-full text-white text-center">1º , Lua</p>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />

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
