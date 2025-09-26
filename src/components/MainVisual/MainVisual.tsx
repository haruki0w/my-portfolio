import React, { useState } from "react";
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
  const [showSkills, setShowSkills] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleAttackClick = () => {
    setShowSkills(!showSkills);
    setSelectedSkill(null);
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
    setShowSkills(false);
    if (onAttack) onAttack();
  };

  return (
    <div className="main-visual">
      {/* 上部バトルエリア */}
      <div className="battle-area">
        {/* バトルフィールド背景 */}
        <div className="battle-background" />

        {/* 敵HP情報（左上） */}
        <div className="enemy-hp-area">
          <div className="character-name">PROJECT L100</div>
          <div className="hp-line-enemy">
            <div className="hp-container" style={{ marginBottom: "10px" }}>
              <span className="hp-label">HP:</span>
              <div className="hp-bar">
                <div className="hp-fill enemy-hp" style={{ width: "100%" }} />
              </div>
            </div>
            {/* <div className="hp-text">60/100</div> */}
          </div>
        </div>

        {/* 敵キャラクター（右上） */}
        <div className="enemy-character-area">
          <div className="character-box enemy-character">
            <img
              src="src\assets\enemy.png "
              alt="Enemy Project"
              className="character-photo"
            />
          </div>
        </div>

        {/* プレイヤーキャラクター（左下） */}
        <div className="player-character-area">
          <div className="character-box player-character">
            <img
              src="src\assets\player.png"
              alt="Developer Profile"
              className="character-photo"
            />
          </div>
        </div>

        {/* プレイヤーHP情報（右下） */}
        <div className="player-hp-area">
          <div className="character-name">DEVELOPER L33</div>
          <div className="hp-line-player">
            <div className="hp-container">
              <span className="hp-label">HP:</span>
              <div className="hp-bar">
                <div className="hp-fill player-hp" style={{ width: "20%" }} />
              </div>
            </div>
            <div className="hp-text">20 / 100</div>
          </div>
        </div>

        {/* 中央のメッセージエリア */}
      </div>

      {/* 下部コマンドエリア */}
      <div className="command-area">
        <div
          className={`command-area-left ${
            showSkills ? "with-right-border" : ""
          }`}
        >
          {showSkills ? (
            <div className="skills-menu">
              {/* <h3 className="skills-title">技を選んでください</h3> */}
              <div className="skills-list">
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("JavaScript")}
                >
                  JavaScript
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("TypeScript")}
                >
                  TypeScript
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("React")}
                >
                  React
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("CSS")}
                >
                  CSS
                </button>
              </div>
            </div>
          ) : selectedSkill ? (
            <div className="skill-result">
              <p className="skill-message">{selectedSkill}を使った！</p>
            </div>
          ) : (
            <div className="empty-state"></div>
          )}
        </div>
        <div className="command-area-right">
          <div className="command-buttons">
            <button
              className={`command-btn attack-btn ${
                showSkills ? "selected" : ""
              }`}
              onClick={handleAttackClick}
            >
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
    </div>
  );
};

export default MainVisual;
