import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { animation } from "../utility/animation";

export const PageLayout = ({ children }) => {
  const { locale } = useRouter();

  useEffect(() => {
    animation();
  }, [locale]);

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"} className="container">
      {children}
    </div>
  );
};
