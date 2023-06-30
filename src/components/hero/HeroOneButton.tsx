import React from 'react';
import posed from 'react-pose';

type IHeroOneButtonProps = {
   title: React.ReactNode;
   description: string;
   button?: React.ReactNode;
};

let pos: any = posed;

const AnimatedDiv: any = pos.div({
   hidden: { opacity: 0 },
   visible: { opacity: 1, delay: 500 },
});

const HeroOneButton = (props: IHeroOneButtonProps) => (
   <header className='text-center'>
      <AnimatedDiv initialPose='hidden' pose='visible'>
         <h1 className='text-xl md:text-4xl text-white font-bold whitespace-pre-line md:leading-hero'>
            {props.title}
         </h1>
      </AnimatedDiv>
      <AnimatedDiv initialPose='hidden' pose='visible' style={{ transitionDelay: '0.5s' }}>
         <div className='text-md md:text-xl max-w-2xl mx-auto mt-4 mb-16 text-white'>
            {props.description}
         </div>
      </AnimatedDiv>
      <AnimatedDiv initialPose='hidden' pose='visible' style={{ transitionDelay: '1s' }}>
         {props.button}
      </AnimatedDiv>
   </header>
);

export { HeroOneButton };
