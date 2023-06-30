import { Logo } from './Logo';

const Footer = () => (
   <div className='w-full bg-base-200 '>
      <footer className='footer p-10 max-w-7xl mx-auto text-base-content'>
         <div>
            <Logo xl />
            <p>
               ACME Industries Ltd.
               <br />
               Providing reliable tech since 1992
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
