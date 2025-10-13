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
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showFourthMessage, setShowFourthMessage] = useState(false);
  const [showGameOverMessage, setShowGameOverMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFinalSuccessMessage, setShowFinalSuccessMessage] = useState(false);
  const [playerHP, setPlayerHP] = useState(100);
  const [usedSkills, setUsedSkills] = useState<string[]>([]);

  // 使用者の名前
  const userName = "ITエンジニア";

  const handleAttackClick = () => {
    setShowSkills(!showSkills);
    setSelectedSkill(null);
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
    setShowSkills(false);
    setShowSecondMessage(false);
    setShowThirdMessage(false);
    setShowFourthMessage(false);
    setShowGameOverMessage(false);
    setShowSuccessMessage(false);
    setShowFinalSuccessMessage(false);

    // 使用した技を記録
    const newUsedSkills = [...usedSkills, skill];
    setUsedSkills(newUsedSkills);

    // 成功パターンをチェック
    const successPattern = ["React", "TypeScript", "残業する", "リリースする"];
    if (
      newUsedSkills.length === 4 &&
      newUsedSkills.every((skill, index) => skill === successPattern[index])
    ) {
      // 成功パターンが完成した場合
      setTimeout(() => {
        setShowSuccessMessage(true);
        setSelectedSkill(null);
        setShowSecondMessage(false);
        setShowThirdMessage(false);
        setShowFourthMessage(false);
      }, 1500);
    }

    if (onAttack) onAttack();
  };

  const handleOverlayClick = () => {
    // メッセージが表示されている時の処理
    if (
      selectedSkill ||
      showGameOverMessage ||
      showSuccessMessage ||
      showFinalSuccessMessage
    ) {
      if (!showSecondMessage) {
        // 最初のメッセージが表示中の場合、2番目のメッセージを表示
        setShowSecondMessage(true);
      } else if (
        !showThirdMessage &&
        (selectedSkill === "React" ||
          selectedSkill === "TypeScript" ||
          selectedSkill === "リリースする" ||
          selectedSkill === "残業する")
      ) {
        // React、TypeScript、リリースする、残業するの場合、3番目のメッセージを表示
        setShowThirdMessage(true);
      } else if (
        !showFourthMessage &&
        showThirdMessage &&
        (selectedSkill === "React" || selectedSkill === "TypeScript")
      ) {
        // ReactまたはTypeScriptの場合、4番目のメッセージを表示してHP減少
        setShowFourthMessage(true);
        const newHP = Math.max(0, playerHP - 30);
        setPlayerHP(newHP);

        // HPが0になった場合、ゲームオーバーメッセージを準備
        if (newHP === 0) {
          setTimeout(() => {
            setShowGameOverMessage(true);
            setShowFourthMessage(false);
          }, 1500);
        }
      } else if (
        !showFourthMessage &&
        showThirdMessage &&
        selectedSkill === "リリースする"
      ) {
        // リリースするの場合、4番目のメッセージを表示してHP大幅減少
        setShowFourthMessage(true);
        const newHP = Math.max(0, playerHP - 90);
        setPlayerHP(newHP);

        // HPが0になった場合、ゲームオーバーメッセージを準備
        if (newHP === 0) {
          setTimeout(() => {
            setShowGameOverMessage(true);
            setShowFourthMessage(false);
          }, 1500);
        }
      } else if (
        !showFourthMessage &&
        showThirdMessage &&
        selectedSkill === "残業する"
      ) {
        // 残業するの場合、4番目のメッセージを表示してHP減少
        setShowFourthMessage(true);
        const newHP = Math.max(0, playerHP - 10);
        setPlayerHP(newHP);

        // HPが0になった場合、ゲームオーバーメッセージを準備
        if (newHP === 0) {
          setTimeout(() => {
            setShowGameOverMessage(true);
            setShowFourthMessage(false);
          }, 1500);
        }
      } else if (showSuccessMessage) {
        // 成功メッセージから最終成功メッセージへ
        setShowFinalSuccessMessage(true);
        setShowSuccessMessage(false);
      } else if (showFinalSuccessMessage) {
        // 最終成功メッセージ後、全てリセット
        setPlayerHP(100);
        setSelectedSkill(null);
        setShowSecondMessage(false);
        setShowThirdMessage(false);
        setShowFourthMessage(false);
        setShowGameOverMessage(false);
        setShowSuccessMessage(false);
        setShowFinalSuccessMessage(false);
        setUsedSkills([]);
      } else if (showGameOverMessage) {
        // ゲームオーバーメッセージ後、HPを回復してリセット
        setPlayerHP(100);
        setSelectedSkill(null);
        setShowSecondMessage(false);
        setShowThirdMessage(false);
        setShowFourthMessage(false);
        setShowGameOverMessage(false);
        setUsedSkills([]);
      } else if (selectedSkill) {
        // メッセージを消す
        setSelectedSkill(null);
        setShowSecondMessage(false);
        setShowThirdMessage(false);
        setShowFourthMessage(false);
        setShowGameOverMessage(false);
      }
    }
  };

  return (
    <div className="main-visual" onClick={handleOverlayClick}>
      {/* 上部バトルエリア */}
      <div className="battle-area">
        {/* バトルフィールド背景 */}
        <div className="battle-background" />

        {/* 敵HP情報（左上） */}
        <div className="enemy-hp-area">
          <div className="character-name">PM</div>
          <div className="hp-line-enemy">
            <div className="hp-container" style={{ marginBottom: "10px" }}>
              <span className="hp-label">体力:</span>
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
          <div className="character-name">ITエンジニア</div>
          <div className="hp-line-player">
            <div className="hp-container">
              <span className="hp-label">体力:</span>
              <div className="hp-bar">
                <div
                  className="hp-fill player-hp"
                  style={{ width: `${playerHP}%` }}
                />
              </div>
            </div>
            <div className="hp-text">{playerHP} / 100</div>
          </div>
        </div>

        {/* 中央のメッセージエリア */}
      </div>

      {/* 下部コマンドエリア */}
      <div className="command-area">
        {(selectedSkill ||
          showGameOverMessage ||
          showSuccessMessage ||
          showFinalSuccessMessage) && (
          <div className="skill-message-overlay">
            <p className="skill-message-text">
              {showFinalSuccessMessage
                ? "プロジェクト大成功！"
                : showSuccessMessage
                ? "PM：「なに...！全ての開発が終わっているだと...！」"
                : showGameOverMessage
                ? "プロジェクト失敗。退場となりました。"
                : showFourthMessage
                ? "精神と共に体力が削られた"
                : showThirdMessage
                ? selectedSkill === "リリースする"
                  ? "PM：勝手にリリースしないでください。"
                  : selectedSkill === "残業する"
                  ? "PM：「勝手に残業しないでください。」"
                  : "PM：「何をしているのですか？進捗が遅れています。」"
                : showSecondMessage
                ? selectedSkill === "リリースする"
                  ? "ITエンジニア：「これでバグ解消さ...」"
                  : selectedSkill === "残業する"
                  ? "ITエンジニア：「うおおおおお！！！タタタターーーーン！！！（Enter）」"
                  : "しかし何も起こらなかった。"
                : `${userName}は${selectedSkill}を使った！`}
            </p>
          </div>
        )}
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
                  onClick={() => handleSkillSelect("React")}
                >
                  React
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("TypeScript")}
                >
                  TypeScript
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("リリースする")}
                >
                  リリースする
                </button>
                <button
                  className="skill-btn"
                  onClick={() => handleSkillSelect("残業する")}
                >
                  残業する
                </button>
              </div>
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
