"use client";

import { useState } from "react";
import NewGame from "../(phases)/newGame";
import PhaseOne from "../(phases)/phaseOne";

// Componente interno que usa o hook
function GameContent() {
  const [phase] = useState(1);

  return (
    <>
      {phase === 0 && <NewGame />}
      {phase === 1 && <PhaseOne />}
    </>
  );
}

// Componente principal que fornece o contexto
export default function TheGame() {
  return <GameContent />;
}
