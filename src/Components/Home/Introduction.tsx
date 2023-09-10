import { useState, useEffect } from "react";
import SocialMediaIcons from "./SocialMediaIconsList";

function Introduction() {
  const [profession, setProfession] = useState<string>("web developer");
  const [currentProfession, setCurrentProfession] = useState<string>("");
  function professionLoop() {
    if (currentProfession === "web developer") {
      setTimeout(() => {
        setProfession("is specialist");
        setCurrentProfession("");
      }, 1000);
    }
    if (currentProfession === "is specialist") {
      setTimeout(() => {
        setProfession("web developer");
        setCurrentProfession("");
      }, 1000);
    }
    setTimeout(() => {
      setCurrentProfession(profession.slice(0, currentProfession.length + 1));
    }, 100);
  }
  useEffect(professionLoop, [currentProfession, profession]);
  return (
    <div className="intro">
      <div className="name">i'm amr walidi</div>
      <div className="profession">{currentProfession}</div>
      <p>
        I am a Yemeni web developer and Information Systems specialist,
        passionate about harnessing the power of technology to create innovative
        solutions. Through this platform, I aim to share my expertise, insights,
        and experiences in the world of web development and information systems.
      </p>
      <SocialMediaIcons />
    </div>
  );
}

export default Introduction;
