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

        {/* 敵HP情報（左上） */}
        <div className="enemy-hp-area">
          <div className="character-name">PROJECT L15</div>
          <div className="hp-bar">
            <div className="hp-fill enemy-hp" style={{ width: "60%" }} />
          </div>
          <div className="hp-text">60/100</div>
        </div>

        {/* 敵キャラクター（右上） */}
        <div className="enemy-character-area">
          <div className="character-box enemy-character">
            <div className="pixel-character enemy-sprite">
              <div className="enemy-main"></div>
              <div className="enemy-detail1"></div>
              <div className="enemy-detail2"></div>
              <div className="enemy-detail3"></div>
            </div>
          </div>
        </div>

        {/* プレイヤーキャラクター（左下） */}
        <div className="player-character-area">
          <div className="character-box player-character">
            <div className="pixel-character player-sprite">
              <div className="pixel-head"></div>
              <div className="pixel-body"></div>
              <div className="pixel-arms"></div>
              <div className="pixel-legs"></div>
            </div>
          </div>
        </div>

        {/* プレイヤーHP情報（右下） */}
        <div className="player-hp-area">
          <div className="character-name">DEVELOPER L25</div>
          <div className="hp-bar">
            <div className="hp-fill player-hp" style={{ width: "85%" }} />
          </div>
          <div className="hp-text">85/100</div>
        </div>

        {/* 中央のメッセージエリア */}
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
