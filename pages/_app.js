import "@/styles/globals.css";
import React from 'react';
if (!process.browser) React.useLayoutEffect = React.useEffect;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
