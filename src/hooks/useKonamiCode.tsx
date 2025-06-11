import { useState, useEffect } from "react";

export function useKonamiCode() {
  const [isActivated, setIsActivated] = useState(false);
  const [sequence, setSequence] = useState([]);

  // Sequência do Konami Code
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.code;

      setSequence((currentSequence) => {
        const newSequence = [...currentSequence, key];

        // Manter apenas os últimos 10 elementos (tamanho do Konami Code)
        if (newSequence.length > konamiSequence.length) {
          newSequence.shift();
        }

        // Verificar se a sequência está correta
        if (newSequence.length === konamiSequence.length) {
          const isCorrect = newSequence.every(
            (key, index) => key === konamiSequence[index]
          );

          if (isCorrect) {
            setIsActivated(true);
            console.log("🎉 KONAMI CODE ATIVADO!");

            // Opcional: resetar após um tempo
            setTimeout(() => {
              setIsActivated(false);
              setSequence([]);
            }, 10000); // 10 segundos
          }
        }

        return newSequence;
      });
    };

    // Adicionar listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const resetKonami = () => {
    setIsActivated(false);
    setSequence([]);
  };

  return {
    isActivated,
    resetKonami,
    currentSequence: sequence,
    progress: sequence.length,
  };
}
