import { AppProps } from 'next/app';
import { Theme } from 'react-daisyui';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
   const MyComponent = Component as any;

   return (
      <Theme dataTheme='light' className='bg-base-100'>
         <MyComponent {...pageProps} />
      </Theme>
   );
};

export default MyApp;
