interface InputProps {
  placeHolder: string;
  className?: string;
}

const Input = ({placeHolder, className}: InputProps) => {
  return (
    <input placeholder={placeHolder} className={`bg-slate-100 rounded-3xl border border-gray-300 p-4 ${className}`}/>
  );
}
 
export default Input;