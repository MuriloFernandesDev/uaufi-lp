import { useState } from 'react';

interface DropDownProps {
   children: React.ReactNode;
}
const DropDown = ({ children }: DropDownProps) => {
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

   return (
      <div className='dropdown dropdown-start block md:hidden'>
         <button
            className='btn btn-square btn-ghost'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
         >
            <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               className='inline-block w-5 h-5 stroke-current text-white'
            >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
               ></path>
            </svg>
         </button>

         <ul
            className={`dropdown-content ${
               isDropdownOpen && 'dropdown-open'
            } menu p-2 shadow bg-base-100 rounded-box`}
         >
            {children}
         </ul>
      </div>
   );
};

export default DropDown;
