import React from "react";
import Image from "next/image";

import { useTranslation } from "../utility/useTranslation";
import planIcon from "../public/assets/images/plan.svg";
import learnIcon from "../public/assets/images/learn.svg";
import prepareIcon from "../public/assets/images/prepare.svg";
import salesIcon from "../public/assets/images/sales.svg";
import Card from "../components/Card";

const Main = () => {
  const t = useTranslation();
  return (
    <main>
      <div className="services">
        <Card>
          <div className="servicesTitle">
            <h3>
              <b>{t.services}</b>
            </h3>
            <p>{t.servicesDescription}</p>
          </div>
          <div className="listBox">
            <ul className="list">
              <li>
                <Image src={prepareIcon} alt={t.prepare} priority={true} />
                <strong>{t.prepare}</strong>
              </li>
              <li>
                <Image src={salesIcon} alt={t.sales} priority={true} />
                <strong>{t.sales}</strong>
              </li>
              <li>
                <Image src={learnIcon} alt={t.learn} priority={true} />
                <strong>{t.learn}</strong>
              </li>
              <li>
                <Image src={planIcon} alt={t.plan} priority={true} />
                <strong>{t.plan}</strong>
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="sloganBox">
        <section className="slogan">
          <h1>
            <b>{t.slogan}</b>
          </h1>
          <p>{t.mainText}</p>
        </section>
      </div>
    </main>
  );
};

export default Main;
