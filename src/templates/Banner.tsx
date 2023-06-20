import Link from 'next/link';
import { Section } from '../components/layout/Section';
import { CTABanner } from '../components/cta/CTABanner';
import { Button } from '../components/button/Button';

const Banner = () => (
   <Section>
      <CTABanner
         title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
         subtitle='Start your Free Trial.'
         button={
            <Link href='https://creativedesignsguru.com/category/nextjs/'>
               <a>
                  <Button>Get Started</Button>
               </a>
            </Link>
         }
      />
   </Section>
);

export { Banner };
