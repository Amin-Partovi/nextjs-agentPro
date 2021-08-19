import { useRouter } from "next/dist/client/router";
import { fa } from "../localization/fa";
import { en } from "../localization/en";

export const useTranslation = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : fa;

  return t;
};
