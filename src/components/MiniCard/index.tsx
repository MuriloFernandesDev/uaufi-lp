import Image, { StaticImageData } from 'next/image';

interface MiniCardProps {
   image: string | StaticImageData;
   width?: number;
   title?: string;
}

const MiniCard = ({ image, title }: MiniCardProps) => {
   return (
      <div className='bg-white drop-shadow-md w-80 cursor-pointer p-7 rounded-lg transition duration-300 hover:shadow-2xl flex flex-col items-center justify-center'>
         <div className='w-[150px]'>
            <Image src={image} alt='Logo Parceiro' layout='responsive' quality={100}></Image>
         </div>

         {title && <p className='text-center text-xl mt-2'>{title}</p>}
      </div>
   );
};

export default MiniCard;
