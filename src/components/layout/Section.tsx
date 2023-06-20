import { ReactNode } from 'react';

type ISectionProps = {
   title?: string;
   description?: string;
   yPadding?: string;
   children: ReactNode;
};

const Section = (props: ISectionProps) => (
   <div className={`max-w-7xl mx-auto px-2 ${props.yPadding ? props.yPadding : ''}`}>
      {(props.title || props.description) && (
         <div className='my-14 md:my-24 text-center'>
            {props.title && (
               <h2 className='text-xl md:text-4xl text-gray-900 font-bold'>{props.title}</h2>
            )}
            {props.description && (
               <div className='mt-4 text-md md:text-xl md:px-20'>{props.description}</div>
            )}
         </div>
      )}

      {props.children}
   </div>
);

export { Section };
