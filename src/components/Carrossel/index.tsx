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
      autoplaySpeed: 2500,
      cssEase: 'linear',
      swipe: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               autoplaySpeed: 1400,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
               autoplaySpeed: 1500,
            },
         },
      ],
   };

   return (
      <div className='mx-3'>
         <Slider {...settings}>
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
