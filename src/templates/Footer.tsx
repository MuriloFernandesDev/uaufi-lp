import { AiOutlinePhone } from 'react-icons/ai';
import { BsPinMap } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { Logo } from './Logo';

const Footer = () => (
   <div className='w-full bg-base-200 '>
      <footer className='footer p-10 max-w-7xl mx-auto text-base-content'>
         <div>
            <Logo xl />
            <p>
               <div className='flex items-center gap-1 font-medium'>
                  <AiOutlinePhone className='rotate-90' />
                  <span>Telefone: (18) 99706-3114 | Suporte 24h (11) 5200-1762</span>
               </div>
               <div className='flex items-center gap-1 font-medium'>
                  <BsPinMap />
                  <span>Endereço: Rua Pereira Passos, 308 - CEP 16.050-320 - Araçatuba/SP</span>
               </div>
               <div className='flex items-center gap-1 font-medium'>
                  <CiMail />
                  <span>E-mail: sac@uaufi.com</span>
               </div>
            </p>
         </div>
         <div>
            <span className='footer-title'>Serviços</span>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
         </div>
         <div>
            <span className='footer-title'>Company</span>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Jobs</a>
            <a className='link link-hover'>Press kit</a>
         </div>
         <div>
            <span className='footer-title'>Legal</span>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
         </div>
      </footer>
   </div>
);

export { Footer };
