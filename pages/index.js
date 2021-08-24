import Head from "next/head";
import { useRouter } from "next/dist/client/router";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { useTranslation } from "../utility/useTranslation";
import Seperator from "../components/Seperator";
import Geometries from "../components/Geometries";

export default function Home() {
  const t = useTranslation();
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>{t.agentPro}</title>
        <meta name="description" content={t.insurances} />
        <meta name="keywords" content={t.keywords} />
        <meta property="og:image" content="/icon.svg" />
        <meta property="og:image:secure_url" content="/icon.svg" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Geometries locale={locale} />
      <Header locale={locale} />
      <Main locale={locale} />
      <Seperator />
      <Footer locale={locale} />
    </div>
  );
}


