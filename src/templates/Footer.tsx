import { GrFacebook, GrLinkedin, GrTwitter } from 'react-icons/gr';

const Footer = () => (
   <div className='bg-slate-300 w-full mx-auto mt-18'>
      <footer className='flex justify-between r p-10 max-w-7xl mx-auto text-base-content'>
         <div className='flex flex-col'>
            <span className='footer-title'>Services</span>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
         </div>
         <div className='flex flex-col'>
            <span className='footer-title'>Services</span>
            <a className='link link-hover'>Branding</a>
            <a className='link link-hover'>Design</a>
            <a className='link link-hover'>Marketing</a>
            <a className='link link-hover'>Advertisement</a>
         </div>
         <div>
            <span className='footer-title'>Social</span>
            <div className='grid grid-flow-col gap-4'>
               <a>
                  <GrFacebook size={30} />
               </a>
               <a>
                  <GrTwitter size={30} />
               </a>
               <a>
                  <GrLinkedin size={30} />
               </a>
            </div>
         </div>
      </footer>
   </div>
);

export { Footer };
