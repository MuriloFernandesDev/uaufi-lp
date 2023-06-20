import { ReactNode } from 'react';

type IBackgroundProps = {
   children: ReactNode;
   image: string;
};

const Background = ({ children, image }: IBackgroundProps) => (
   <div className='relative w-full h-full'>
      <div
         className='absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat'
         style={{
            backgroundImage: `url('/assets/images/${image}')`,
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
         }}
      />
      <div className='relative z-10'>{children}</div>
   </div>
);

export { Background };
