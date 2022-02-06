import { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
