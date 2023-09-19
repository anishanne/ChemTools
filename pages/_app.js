import "@/styles/globals.css";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MGWE70ZG79"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {` 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MGWE70ZG79');
  `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
