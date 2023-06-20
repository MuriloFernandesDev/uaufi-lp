import React from 'react';

import { IconType } from 'react-icons/lib';

interface IconComponentProps {
   title: string;
   subtitle: string;
   icon?: IconType;
}

const IconComponent = ({ title, subtitle, icon }: IconComponentProps) => {
   const Icon = icon ? icon : React.Fragment; // Armazena o componente do ícone em uma variável

   return (
      <div className='flex flex-col gap-3 items-center text-center text-black'>
         <Icon className='text-3xl md:text-6xl' />
         <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
         <span className='text-sm md:text-xl'>{subtitle}</span>
      </div>
   );
};

export default IconComponent;
