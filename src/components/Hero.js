import React from "react";
import "./Hero.css";
import appsumo from "../assets/appsumo.png.png";
import rightArrow from "../assets/SVG.svg";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="lifetimeDeal">
        <img src={appsumo} alt="img" />
        Now on AppSumo
        <button className="dealbutton">
          Get Lifetime Deal
          <img src={rightArrow} alt="img" />
        </button>
      </div>
      <div className="titleBold">
        <p>Your second brain for</p>
        <p>maximizing productivity </p>{" "}

        
      </div>
      
      <div className="paragraph"> 
      <p>
        Afforai is an AI chatbot that searches, summarizes, and translates info
        from multiple sources to
      </p>
      <p>
        produce trustworthy research. Feed lengthy research documents to stacks
        of dry compliance
      </p>
      <p>requirements and extract the key findings you need.</p>

      <div className="qualityTab"> 
      <div className="fourNotes" id="scroll-text" ><img src={rightArrow} alt="img"/>Summarize Key Findings</div>
      <div className="fourNotes1" id="scroll-text"><img src={rightArrow} alt="img"/>Compare Between Documents</div>
      <div className="fourNotes" id="scroll-text"><img src={rightArrow} alt="img"/>Search For Answers</div>
      <div className="fourNotes" id="scroll-text"><img src={rightArrow} alt="img"/>Ask In Any Language</div>
      </div>
      </div>
      <div className="twoButtons"><button className="tryForFreeButton">Try for free</button><button className="GetStartedButton">Get Started</button><button className="viewPricingButton">View Pricing</button></div>
       {/*
       
      
       */}
    </div>
  );
};

export default Hero;
