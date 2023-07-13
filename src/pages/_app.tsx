import { AppProps } from 'next/app';
import { Theme } from 'react-daisyui';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <Theme dataTheme='light' className='bg-base-100'>
         <Component {...pageProps} />
      </Theme>
   );
};

export default MyApp;
