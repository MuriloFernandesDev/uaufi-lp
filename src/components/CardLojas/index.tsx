import Image, { StaticImageData } from 'next/image';

interface CardLojasProps {
   image: string | StaticImageData;
   width?: number;
}
const CardLojas = ({ image }: CardLojasProps) => {
   return (
      <div className='md:min-w-[200px] min-w-[150px] bg-white shadow-lg cursor-pointer p-5 w-32 md:w-52 min-h-[6rem] max-h-[6rem] flex items-center justify-center rounded-lg transition duration-300 hover:shadow-2xl'>
         <Image
            className='grayscale hover:grayscale-0 object-contain'
            src={image}
            alt='Logo Parceiro'
            quality={100}
         ></Image>
      </div>
   );
};

export default CardLojas;
