import React from "react";
import { useRouter } from "next/dist/client/router";

export const LngChanger = () => {
  const router = useRouter();

  const handleChangeLng = e => {
    if (e.target.value === "fa") {
      router.push(`${router.pathname}`, `${router.pathname}`, { locale: "fa" });
    } else if (e.target.value === "en") {
      router.push(`${router.pathname}`, `${router.pathname}`, { locale: "en" });
    }
  };

  return (
    <select className="selectLng" onChange={handleChangeLng} value="">
      <option value="" hidden></option>
      <option value="fa">fa</option>
      <option value="en">en</option>
    </select>
  );
};
