import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
   logo: ReactNode;
   children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
   <div className='w-full'>
      <div className='flex flex-wrap justify-between items-center pt-8 w-full max-w-7xl mx-auto'>
         <nav>
            <ul className='nav flex gap-3 items-center font-medium text-xl text-white'>
               {props.children}
            </ul>
         </nav>

         <div>
            <Link href='/'>
               <a>{props.logo}</a>
            </Link>
         </div>

         <style jsx>
            {`
               .nav :global(li:not(:first-child)) {
                  @apply mt-0;
               }

               .nav :global(li:not(:last-child)) {
                  @apply mr-5;
               }
            `}
         </style>
      </div>
   </div>
);

export { NavbarTwoColumns };
