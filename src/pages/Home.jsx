import React from "react";
import { Lights } from '../animation';
import '../animation/glowingbutton.css';

function Home() {
  return (
    <div className="Home">
      <Lights />
      <div className="container">
            <a href="/dashboard"><span>Enter</span></a>
      </div>
    </div>
  );
}

export default Home;