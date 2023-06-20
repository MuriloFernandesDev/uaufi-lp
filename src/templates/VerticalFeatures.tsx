import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsShieldCheck } from 'react-icons/bs';
import { GrConnect } from 'react-icons/gr';
import VideoExemple from '../../public/assets/images/screen.png';
import IconComponent from '../components/IconComponent';
import IconsGroup from '../components/IconsGroup';
import Input from '../components/Input';
import { Button } from '../components/button/Button';
import { VerticalFeatureRow } from '../components/feature/VerticalFeatureRow';
import { Section } from '../components/layout/Section';
const Carrossel: any = dynamic(() => import('../../src/components/Carrossel'), { ssr: false });

const VerticalFeatures = () => (
   <Section
      yPadding='pt-24'
      title='VANTAGEM COMPETITIVA'
      description='Ao adotar nossa tecnologia, você terá um diferencial competitivo em relação aos 
      seus concorrentes.  Nossa solução oferece um alto valor agregado, com informações 
      precisas e em tempo real para serem usadas em qualquer tipo de negócio.'
   >
      <IconsGroup cols={3} className='my-24'>
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

      <div className='my-24'>
         <Image src={VideoExemple} className='rounded-2xl' layout='responsive' />
      </div>

      <VerticalFeatureRow
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
         yPadding='py-24'
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
      {/* 
      <VerticalFeatureRow
         title='Your title here'
         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.'
         image='/assets/images/feature3.svg'
         imageAlt='Third feature alt text'
      /> */}
   </Section>
);

export { VerticalFeatures };
