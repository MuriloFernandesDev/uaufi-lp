import { AppProps } from 'next/app';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
   const MyComponent = Component as any;

   return <MyComponent {...pageProps} />;
};

export default MyApp;
