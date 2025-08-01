import React from "react";

interface CommandButtonsProps {
  onAttack: () => void;
  onEscape: () => void;
  onRelated: () => void;
  onSNS: () => void;
}

const CommandButtons: React.FC<CommandButtonsProps> = ({
  onAttack,
  onEscape,
  onRelated,
  onSNS,
}) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={onAttack}>たたかう</button>
      <button onClick={onEscape}>にげる</button>
      <button onClick={onRelated}>関連サイト</button>
      <button onClick={onSNS}>SNS</button>
    </div>
  );
};

export default CommandButtons;
