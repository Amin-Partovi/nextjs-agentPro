import React from "react";
import { useRouter } from "next/dist/client/router";

export const PageLayout = ({ children }) => {
  const { locale } = useRouter();

  return (
    <div dir={locale === "en" ? "ltr" : "rtl"} className="container">
      {children}
    </div>
  );
};
