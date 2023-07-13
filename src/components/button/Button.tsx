import className from 'classnames';

type IButtonProps = {
   xl?: boolean;
   children: string;
};

const Button = (props: IButtonProps) => {
   const btnClass = className({
      btn: true,
      'btn-xl': props.xl,
      'btn-base': !props.xl,
      'btn-primary': true,
      'rounded-3xl': true,
   });

   return <button className={btnClass}>{props.children}</button>;
};

export { Button };
