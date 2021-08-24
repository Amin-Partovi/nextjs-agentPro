import React, { useEffect } from "react";
import Image from "next/image";

import { useTranslation } from "../utility/useTranslation";
import agentPro from "../public/assets/images/agent.svg";
import Button from "./Button";
import Card from "./Card";
import background from "../public/assets/images/background.svg";

const Header = ({ locale }) => {
  const t = useTranslation();

  const handleContactUs = () =>
    window.scroll({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

  return (
    <header className="header">
      <Card>
        <div className="titleBox slider transition-delay-long bottom">
          <div className="imageWrapper ">
            <Image src={agentPro} alt={t.agentPro} priority={true} />
          </div>
          <h4>
            <b>&nbsp;{t.agentPro}</b>
          </h4>
        </div>
        <div className="introBox">
          <h1
            className={`slider transform-delay-short ${
              locale === "fa" ? "right" : "left"
            }`}>
            <b>{t.insurances}</b>
          </h1>
          <div className="intro">
            <p className="fade">{t.introduction}</p>
          </div>

          <div className="buttonBox fade">
            <Button>
              <a href="https://panel.pejwakbaran.com/login">{t.signin}</a>
            </Button>
            <span className="space" />
            <Button outline onClick={handleContactUs}>
              {t.contact}
            </Button>
          </div>
        </div>
      </Card>
      {/* <div
        className={`headerBackground ${locale === "fa" ? "reverseLeft" : ""}`}>
        <Image src={background} alt="" priority={true} />
      </div> */}
    </header>
  );
};

export default Header;
