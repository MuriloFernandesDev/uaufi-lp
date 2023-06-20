import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import LogoGoogle from '../../../public/assets/images/google.png';
import CardLojas from '../CardLojas';

const Carousel = () => {
   const settings: Settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1200,
      cssEase: 'linear',
      swipe: false,
   };

   return (
      <div>
         <Slider {...settings} className='py-4'>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
            <div className='my-6'>
               <CardLojas image={LogoGoogle} width={150} />
            </div>
         </Slider>
      </div>
   );
};

export default Carousel;
