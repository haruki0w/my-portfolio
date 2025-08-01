import React from "react";
import "./MainVisual.css";

interface MainVisualProps {
  onAttack?: () => void;
  onEscape?: () => void;
  onRelated?: () => void;
  onSNS?: () => void;
}

const MainVisual: React.FC<MainVisualProps> = ({
  onAttack,
  onEscape,
  onRelated,
  onSNS,
}) => {
  return (
    <div className="main-visual">
      {/* 上部バトルエリア */}
      <div className="battle-area">
        {/* バトルフィールド背景 */}
        <div className="battle-background" />

        {/* プレイヤー側（左） */}
        <div className="player-side">
          <div className="character-box player-character">
            <div className="character-emoji">👨‍💻</div>
          </div>
          <div className="character-name">Developer L25</div>
          <div className="hp-bar">
            <div className="hp-fill player-hp" style={{ width: "85%" }} />
          </div>
          <div className="hp-text">85/100</div>
        </div>

        {/* 敵側（右） */}
        <div className="enemy-side">
          <div className="character-box enemy-character">
            <div className="character-emoji">💼</div>
          </div>
          <div className="character-name">Project L15</div>
          <div className="hp-bar">
            <div className="hp-fill enemy-hp" style={{ width: "60%" }} />
          </div>
          <div className="hp-text">60/100</div>
        </div>

        {/* 中央のメッセージエリア */}
        {/* <div className="message-area">
          <div className="message-text">
            ポートフォリオを見に来てくれてありがとう！
          </div>
        </div> */}
      </div>

      {/* 下部コマンドエリア */}
      <div className="command-area">
        <div className="command-buttons">
          <button className="command-btn attack-btn" onClick={onAttack}>
            たたかう
          </button>
          <button className="command-btn bag-btn" onClick={onRelated}>
            SNSリンク
          </button>
          <button className="command-btn pokemon-btn" onClick={onSNS}>
            関連サイト
          </button>
          <button className="command-btn run-btn" onClick={onEscape}>
            にげる
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
