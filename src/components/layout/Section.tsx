import { ReactNode } from 'react';

type ISectionProps = {
   title?: string;
   description?: string;
   yPadding?: string;
   marginBottom?: string;
   children: ReactNode;
   id?: string;
};

const Section = (props: ISectionProps) => (
   <div
      id={props.id}
      className={`max-w-7xl mx-auto px-2 ${props.yPadding && props.yPadding} ${
         props.marginBottom && props.marginBottom
      }`}
   >
      {(props.title || props.description) && (
         <div id={props.id} className='my-14 md:my-24 text-center'>
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
