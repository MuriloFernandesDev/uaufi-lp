import Link from 'next/link';
import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { HeroOneButton } from '../components/hero/HeroOneButton';
import { Section } from '../components/layout/Section';
import { NavbarTwoColumns } from '../components/navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
   <Background image='background.png'>
      <NavbarTwoColumns logo={<Logo xl />}>
         <li>
            <a href='#inicio'>Inicio</a>
         </li>
         <li>
            <a href='#vantagem'>Vantagem</a>
         </li>
         <li>
            <a href='#entenda'>Entenda</a>
         </li>
         <li>
            <a href='#fidelizar'>Fidelizar</a>
         </li>
         <li>
            <a href='#parceiros'>Parceiros</a>
         </li>
      </NavbarTwoColumns>

      <Section id='inicio' yPadding='py-20'>
         <HeroOneButton
            title={
               <>
                  {
                     'Ofereça aos seus clientes a solução de inteligência de dados mais procurada e confiável do mercado\n'
                  }
               </>
            }
            description='Potencialize suas vendas utilizando uma ferramenta de coleta de dados 
        por meio da tecnologia Wi-Fi e esteja à frente da concorrência'
            button={
               <Link href='www.uaufi.com'>
                  <a>
                     <Button xl>Seja um revendedor oficial</Button>
                  </a>
               </Link>
            }
         />
      </Section>
   </Background>
);

export { Hero };
