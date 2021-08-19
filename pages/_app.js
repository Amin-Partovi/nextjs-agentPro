
import { PageLayout } from "../components/PageLayout";
import "../styles/globals.css";
import { LngChanger } from "../components/LngChanger";

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <LngChanger />
      <Component {...pageProps} />
    </PageLayout>
  );
}

export default MyApp;
