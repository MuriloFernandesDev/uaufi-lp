interface IconsGroupProps {
   cols?: number;
   children: React.ReactNode;
   className?: string;
}

const IconsGroup = ({ children, className }: IconsGroupProps) => {
   return (
      <div className={`grid grid-cols-1 md:grid-cols-3 mx-auto gap-10 ${className}`}>
         {children}
      </div>
   );
};

export default IconsGroup;
