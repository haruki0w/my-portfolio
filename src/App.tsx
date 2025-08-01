import React from "react";
import MainVisual from "./components/MainVisual/MainVisual";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App: React.FC = () => {
  // 各ボタンがクリックされた時の処理をここに書きます
  const handleAttack = () => alert("たたかう！");
  const handleEscape = () => alert("にげる！");
  const handleRelated = () => alert("関連サイト！");
  const handleSNS = () => alert("SNSリンク！");

  return (
    <div className="App">
      <Header />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <MainVisual
          onAttack={handleAttack}
          onEscape={handleEscape}
          onRelated={handleRelated}
          onSNS={handleSNS}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
