import Image from 'next/image';
import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
   xl?: boolean;
};

const Logo = (props: ILogoProps) => {
   const size = props.xl ? '44' : '32';
   const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

   return (
      <span className={`text-white inline-flex items-center ${fontStyle}`}>
         <Image src={AppConfig.logo} alt={AppConfig.title} layout='fixed' width={200} height={50} />
      </span>
   );
};

export { Logo };
