import React from "react";
import Image from "next/image";

import { useTranslation } from "../utility/useTranslation";
import topPartBackground from "../public/assets/images/topFooterBackGround.svg";
import bottomPartBackground from "../public/assets/images/bottomFooterBackground.svg";

const Footer = ({ locale }) => {
  const t = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div
        className={`topFooterBackGround ${
          locale === "fa" ? "reverseLeft" : ""
        }`}>
        <Image src={topPartBackground} alt="" />
      </div>

      <h1 className="contact">
        <b>{t.contact}</b>
      </h1>
      <div className="contactDetail">
        <p>
          <strong>{t.tel}</strong>
          {t.telContent}
        </p>
        <p>
          <strong>{t.address}</strong>
          {t.addressContent}
        </p>
        <p>
          <strong>{t.email}</strong>
          {t.emailContent}
        </p>
      </div>
      <p className="copyRight">{t.copy}</p>
      <div
        className={`bottomFooterBackground  ${
          locale === "fa" ? "reverseRight" : ""
        }`}>
        <Image src={bottomPartBackground} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
