import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-4xl text-white font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className={"text-xl max-w-2xl mx-auto mt-4 mb-16 text-white"}>{props.description}</div>
    {props.button}
  </header>
);

export { HeroOneButton };
