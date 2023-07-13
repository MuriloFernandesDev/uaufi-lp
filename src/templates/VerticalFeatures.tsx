import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { GrConnect } from 'react-icons/gr';
import LogoGoogle from '../../public/assets/images/google.png';
import VideoExemple from '../../public/assets/images/screen.png';
import IconComponent from '../components/IconComponent';
import IconsGroup from '../components/IconsGroup';
import Input from '../components/Input';
import MiniCard from '../components/MiniCard';
import { Button } from '../components/button/Button';
import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';
const Carrossel: any = dynamic(() => import('../../src/components/Carrossel'), { ssr: false });

const VerticalFeatures = () => (
   <Section
      id='vantagem'
      title='VANTAGEM COMPETITIVA'
      description='Ao adotar nossa tecnologia, você terá um diferencial competitivo em relação aos 
      seus concorrentes.  Nossa solução oferece um alto valor agregado, com informações 
      precisas e em tempo real para serem usadas em qualquer tipo de negócio.'
   >
      <IconsGroup cols={3} className='my-20 md:my-24'>
         <IconComponent
            subtitle='Obtenha lucro ou receita 
            a partir do uso ou acesso à rede 
            Wi-Fi'
            title='Monetize sua rede Wi-Fi'
            icon={AiOutlineWifi}
         />
         <IconComponent
            subtitle='Adequação a LGPD e
            Marco Civil da Internet'
            title='Segurança'
            icon={BsShieldCheck}
         />
         <IconComponent
            subtitle='Integre com seu sistema
            ERP e identifique se
            quem acessou sua rede
            é ou não seu cliente'
            title='Integração'
            icon={GrConnect}
         />
      </IconsGroup>

      <div id='entenda' className='my-20 md:my-24'>
         <Image src={VideoExemple} className='rounded-2xl' layout='responsive' />
      </div>

      <VerticalFeatureRow
         id='fidelizar'
         title='Fidelize seus clientes'
         description='Se você está buscando maneiras de aprimorar a experiência dos clientes em locais físicos e se destacar no mercado entre em contato conosco e descubra como podemos te ajudar a se diferenciar!'
         image='/assets/images/macuaufi.png'
         button={
            <Link href='www.uaufi.com'>
               <a>
                  <Button xl>Seja um revendedor oficial</Button>
               </a>
            </Link>
         }
         imageAlt='First feature alt text'
      />

      <div className='text-center mt-20 md:mt-24'>
         <h2 className='text-2xl md:text-4xl text-gray-900 font-bold'>
            Como os parceiros da Uau-Fi
         </h2>
         <div className='relative'>
            <a className='underline text-blue-500  text-xl md:text-3xl'>
               atingem melhores resultados?
            </a>
         </div>
      </div>

      <div className='flex justify-between items-center flex-col md:flex-row gap-10 mt-5'>
         <MiniCard image={LogoGoogle} title='SVA(Serviço de valor agregado)' />
         <MiniCard image={LogoGoogle} title='Agregar valor aos serviços' />
         <MiniCard image={LogoGoogle} title='Aumentar ticket médio' />
      </div>
      <div className='flex justify-center items-center flex-col md:flex-row gap-10 mt-10 mb-20 md:mb-24'>
         <MiniCard image={LogoGoogle} title='Captação e análise dados' />
         <MiniCard image={LogoGoogle} title='Adequação a LGPD' />
         <MiniCard image={LogoGoogle} title='Marco Civil da Internet' />
      </div>

      <VerticalFeatureRow
         title='Fique por dentro das novidades'
         description='Receber notificações sobre novas funcionalidades e atualizações'
         image='/assets/images/email.png'
         imageAlt='Second feature alt text'
         reverse
         button={
            <div className='flex gap-3'>
               <Input placeHolder='Seu E-mail' className='w-2/3' />
               <Link href='www.uaufi.com'>
                  <Button xl>Inscrever-se</Button>
               </Link>
            </div>
         }
      />

      <Section
         id='parceiros'
         marginBottom='mb-14'
         title='Nossos parceiros'
         description='Nossa plataforma integrada e segura já conta com inúmeras empresas 
      que confiam em na solução para revolucionar sua experiência de atendimento'
      >
         <Carrossel />
         <div className='mt-10 flex justify-center'>
            <Link href='www.uaufi.com'>
               <Button xl>Seja um revendedor oficial</Button>
            </Link>
         </div>
      </Section>
   </Section>
);

export { VerticalFeatures };
