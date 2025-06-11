"use client";

import { useState } from "react";
import NewGame from "../(phases)/newGame";
import PhaseOne from "../(phases)/phaseOne";
import PhaseTwo from "../(phases)/phaseTwo";

// Componente interno que usa o hook
function GameContent() {
  const [phase] = useState(2);

  return (
    <>
      {phase === 0 && <NewGame />}
      {phase === 1 && <PhaseOne />}
      {phase === 2 && <PhaseTwo />}
    </>
  );
}

// Componente principal que fornece o contexto
export default function TheGame() {
  return <GameContent />;
}
