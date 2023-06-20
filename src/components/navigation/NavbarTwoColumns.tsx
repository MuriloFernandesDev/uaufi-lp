import { ReactNode, useEffect, useState } from 'react';

import Link from 'next/link';
import DropDown from '../DropDown';

type INavbarProps = {
   logo: ReactNode;
   children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
   const [isNavbarFixed, setIsNavbarFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.pageYOffset;
         setIsNavbarFixed(scrollPosition > 100);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   });

   return (
      <div
         className={`w-full transition-all duration-300 ${
            isNavbarFixed ? 'fixed bg-primary-500' : 'relative bg-transparent'
         } z-20`}
      >
         <div className='navbar flex-row-reverse flex justify-between w-full max-w-7xl p-3 mx-auto'>
            <div>
               <Link href='/'>
                  <a>{props.logo}</a>
               </Link>
            </div>

            <div className='hidden md:block'>
               <ul className='flex gap-2 items-center font-medium text-xl text-white'>
                  {props.children}
               </ul>
            </div>

            <DropDown>{props.children}</DropDown>
         </div>
      </div>
   );
};

export { NavbarTwoColumns };
