# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# eslint.config.mjs

```mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# next.config.ts

```ts
  // next.config.js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['placeholder.com', 'via.placeholder.com'],
    },
    experimental: {
      optimizeCss: true,
    },
  };
  
module.exports = nextConfig;
```

# package.json

```json
{
  "name": "gm-films",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "next": "15.2.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.0.2"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.2.3",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

# postcss.config.mjs

```mjs
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

```

# public/images/balvenie.png

This is a binary file of the type: Image

# public/images/bts.jpg

This is a binary file of the type: Image

# public/images/ceo-portrait.jpg

This is a binary file of the type: Image

# public/images/cinematography.jpg

This is a binary file of the type: Image

# public/images/CocaCola.png

This is a binary file of the type: Image

# public/images/cut-scene.jpg

This is a binary file of the type: Image

# public/images/dlxmedia.jpg

This is a binary file of the type: Image

# public/images/fanta.png

This is a binary file of the type: Image

# public/images/glenfiddich.png

This is a binary file of the type: Image

# public/images/Logo-mark.png

This is a binary file of the type: Image

# public/images/Primary logo.png

This is a binary file of the type: Image

# public/images/travelbeta.png

This is a binary file of the type: Image

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# src/app/about/page.tsx

```tsx
import Image from 'next/image';
import CeoProfile from '@/components/about/CeoProfile';
import CompanyStory from '@/components/about/CompanyStory';

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/about/about-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              About <span className="text-[#3A6E71]">GMFILMS</span>
            </h1>
            <p className="text-xl text-gray-300">
              Learn about our company, our journey, and the passion that drives us to create 
              exceptional visual stories.
            </p>
          </div>
        </div>
      </section>
      
      
      
      {/* CEO Profile */}
      <CeoProfile />

      {/* Company Story */}
      <CompanyStory />
      
      {/* Team Section */}
      
    </>
  );
}
```

# src/app/clients/page.tsx

```tsx
import Image from 'next/image';
import ClientGrid from '@/components/clients/ClientGrid';
import ClientTestimonial from '@/components/clients/ClientTestimonial';

export default function ClientsPage() {
  return (
    <>
      {/* Clients Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/clients/clients-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Clients</span>
            </h1>
            <p className="text-xl text-gray-300">
              We&apos;ve had the privilege of working with renowned brands and talented individuals 
              across various industries.
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Grid */}
      <ClientGrid />
      
      {/* Featured Case Study */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/images/clients/case-study.jpg"
                  alt="Featured case study with Nike"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#3A6E71] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Featured <span className="text-[#3A6E71]">Case Study</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Nike - &quot;Beyond Limits&quot; Campaign
              </p>
              <p className="text-gray-300 mb-6">
                We collaborated with Nike to create a dynamic commercial for their latest product line, 
                showcasing athletes pushing beyond their limits in visually stunning environments.
              </p>
              <p className="text-gray-300 mb-8">
                Our team handled the entire production process, from concept development to final delivery, 
                resulting in a campaign that exceeded expectations and resonated with audiences worldwide.
              </p>
              {/* <button className="inline-flex items-center text-white hover:text-[#3A6E71] transition-colors">
                <span className="mr-2">View Full Case Study</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Client <span className="text-[#3A6E71]">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here&apos;s what our clients have to say about working with GMFILMS.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClientTestimonial
              quote="GMFILMS delivered beyond our expectations. Their creative vision and technical prowess transformed our concept into a stunning visual narrative."
              author="Sarah Williams"
              position="Marketing Director"
              company="Nike"
              image="/images/clients/testimonial-1.jpg"
            />
            
            <ClientTestimonial
              quote="Working with GMFILMS was seamless from start to finish. Their attention to detail and commitment to quality is unmatched in the industry."
              author="Michael Chen"
              position="Creative Lead"
              company="Sony Music"
              image="/images/clients/testimonial-2.jpg"
            />
            
            <ClientTestimonial
              quote="The team at GMFILMS brought our vision to life with creativity and precision. They're not just service providers, but true creative partners."
              author="Emily Rodriguez"
              position="Brand Manager"
              company="Adidas"
              image="/images/clients/testimonial-3.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
```

# src/app/contact/page.tsx

```tsx
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/contact/contact-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Get In <span className="text-[#3A6E71]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind or questions about our services? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 font-montserrat">
                Contact <span className="text-[#3A6E71]">Information</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-4 mr-6">
                    <svg className="w-6 h-6 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-300">+234 701 439 4105</p>
                    {/* <p className="text-gray-400 text-sm mt-1">Monday-Friday, 9AM-6PM EST</p> */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-4 mr-6">
                    <svg className="w-6 h-6 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-300">GMFilmsx@gmail.com</p>
                    <p className="text-gray-400 text-sm mt-1">We aim to respond within 24 hours</p>
                  </div>
                </div>
                
                {/* <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-800 p-4 mr-6">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Studio Location</h3>
                    <p className="text-gray-300">123 Filmmakers Avenue</p>
                    <p className="text-gray-300">Los Angeles, CA 90028</p>
                    <p className="text-gray-400 text-sm mt-1">Open for equipment pickup & meetings by appointment</p>
                  </div>
                </div> */}
              </div>
              
              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="bg-gray-800 p-3 text-gray-300 hover:text-[#3A6E71] transition-colors duration-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 text-gray-300 hover:text-[#3A6E71] transition-colors duration-300">
                    <span className="sr-only">Vimeo</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.543 7.104c-.089 1.973-1.465 4.674-4.124 8.103-2.746 3.566-5.072 5.35-6.975 5.35-1.179 0-2.176-1.089-2.994-3.268-.545-1.995-1.089-3.989-1.634-5.984-.605-2.178-1.254-3.268-1.947-3.268-.152 0-.684.32-1.595.96L1 7.536C2.086 6.654 3.152 5.773 4.198 4.89c1.496-1.299 2.618-1.986 3.366-2.063 1.768-.152 2.858 1.039 3.269 3.574.442 2.798.749 4.54.919 5.227.51 2.316 1.072 3.475 1.686 3.475.476 0 1.19-.757 2.14-2.271.95-1.514 1.458-2.664 1.524-3.452.136-1.305-.376-1.958-1.536-1.958-.545 0-1.107.125-1.683.375 1.118-3.664 3.254-5.445 6.41-5.344 2.339.071 3.44 1.585 3.31 4.54l-.09.011z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 text-gray-300 hover:text-[#3A6E71] transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-800 p-3 text-gray-300 hover:text-[#3A6E71] transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Google Map */}
              
            </div>
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
```

# src/app/equipment/page.tsx

```tsx
import EquipmentList from '@/components/equipment/EquipmentList';

export default function EquipmentPage() {
  return (
    <>
      {/* Equipment Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/equipment/equipment-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Equipment <span className="text-[#3A6E71]">Rental</span>
            </h1>
            <p className="text-xl text-gray-300">
              Access professional cinematography equipment for your projects. We offer a wide range of 
              cameras, lenses, lighting setups, and accessories.
            </p>
          </div>
        </div>
      </section>
      
      {/* Rental Information */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-800 bg-opacity-50 p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Rental Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Rental Period
                </h3>
                <p className="text-gray-300">
                  Our standard rental period is 24 hours (1 day). We also offer weekend, weekly, and monthly rates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment
                </h3>
                <p className="text-gray-300">
                  We accept credit/debit cards and bank transfers. A security deposit is required for all rentals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Insurance
                </h3>
                <p className="text-gray-300">
                  All renters must provide proof of insurance coverage for rented equipment.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Reservations
                </h3>
                <p className="text-gray-300">
                  Equipment should be reserved at least 48 hours in advance to ensure availability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Pickup & Return
                </h3>
                <p className="text-gray-300">
                  Equipment can be picked up and returned at our studio during business hours (9 AM - 6 PM).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#3A6E71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Cancellation
                </h3>
                <p className="text-gray-300">
                  Cancellations must be made at least 24 hours before the scheduled pickup time to avoid fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Equipment List */}
      <EquipmentList />
      
      {/* Contact for Rental */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-900 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Rent Equipment?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us to check availability, discuss your specific requirements, or schedule a rental.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3A6E71] hover:bg-[#2d5456] text-white text-sm font-medium tracking-wider uppercase transition-all duration-200"
              >
                Contact Us
              </a>
              <a 
                href="#equipment-list" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#3A6E71] text-white hover:bg-red-600/10 text-sm font-medium tracking-wider uppercase transition-all duration-200"
              >
                View Equipment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

# src/app/globals.css

```css
@import "tailwindcss";
@config "../../tailwind.config.js";


:root {
  --font-inter: 'Inter', sans-serif;
  --font-montserrat: 'Montserrat', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-black text-white;
}

/* h1, h2, h3, h4, h5, h6 {
  @apply font-montserrat;
} */

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-900;
}

::-webkit-scrollbar-thumb {
  @apply bg-[#3A6E71];
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-red-700;
}

/* Smooth fade-in animation for page transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

main {
  animation: fadeIn 0.5s ease-in-out;
}

/* Custom utility classes */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover-scale {
  @apply transition-transform duration-300;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.overlay-gradient {
  @apply absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent;
}

/* Custom component classes */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200;
  }

  .btn-primary {
    @apply bg-[#3A6E71] hover:bg-red-700 text-white;
  }

  .btn-outline {
    @apply border-2 border-[#3A6E71] text-white hover:bg-red-600/10;
  }

  .section-title {
    @apply text-3xl md:text-4xl font-bold mb-6 font-montserrat;
  }

  .input-field {
    @apply w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white;
  }
}

.red {
  border: 1px solid red;
}
```

# src/app/layout.tsx

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// Configure fonts
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GMFILMS | Cinematography & Equipment Rental',
  description: 'Professional cinematography services and equipment rental for commercials, films, documentaries, music videos, and events.',
  icons: {
    icon: [
      { url: '/images/Logo-mark.png'}
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

# src/app/page.tsx

```tsx
// app/page.tsx
import HeroBanner from '@/components/home/HeroBanner';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ClientsSection from '@/components/home/ClientsSection';
import EquipmentSection from '@/components/home/EquipmentSection';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <>
      <HeroBanner />
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cinematic Excellence<br/>
                <span className="text-[#3A6E71]">Visual Storytelling</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                GMFILMS is a premier cinematography company dedicated to creating visually stunning narratives. 
                Our expertise spans commercials, films, documentaries, music videos, and event coverage.
              </p>
              <p className="text-gray-300 mb-8">
                With state-of-the-art equipment and a passionate team, we transform concepts into captivating visual stories 
                that resonate with audiences and deliver your message with impact.
              </p>
              <Button href="/about" variant="outline">
                About Us
              </Button>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden ">
                <div className="w-full h-full bg-[url('/images/cut-scene.jpg')] bg-cover bg-center"></div>
              </div>
              {/* <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                <div className="w-full h-full bg-[url('/images/behind-scenes-2.jpg')] bg-cover bg-center"></div>
              </div> */}
              {/* <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden -translate-y-8 ">
                <div className="w-full h-full bg-[url('/images/cut-scene.jpg')] bg-cover bg-center"></div>
              </div> */}
              <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-[url('/images/bts.jpg')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PortfolioPreview />
      <ClientsSection />
      <EquipmentSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your <span className="text-[#3A6E71]">Vision to Life</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Let&apos;s collaborate to create stunning visuals that tell your story and captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/portfolio" variant="default">
              Explore Our Work
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
```

# src/app/portfolio/[category]/page.tsx

```tsx
import { notFound } from 'next/navigation';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';
import CategoryFilter from '@/components/portfolio/CategoryFilter';

// Define the categories for portfolio
const categories = [
  { id: 'commercials', name: 'Commercials' },
  { id: 'films', name: 'Films & Documentaries' },
  { id: 'music', name: 'Music Videos' },
  { id: 'events', name: 'Event Coverage' },
];

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((cat) => cat.id === params.category);
  
  if (!category) {
    notFound();
  }
  
  return (
    <>
      {/* Category Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url("/images/portfolio/${params.category}-hero.jpg")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              <span className="text-[#3A6E71]">{category.name}</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our collection of {category.name.toLowerCase()} projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <CategoryFilter activeCategory={params.category} />
          <PortfolioGallery category={params.category} />
        </div>
      </section>
    </>
  );
}
```

# src/app/portfolio/page.tsx

```tsx
import CategoryFilter from '@/components/portfolio/CategoryFilter';
import PortfolioGallery from '@/components/portfolio/PortfolioGallery';

export default function PortfolioPage() {
  return (
    <>
      {/* Portfolio Hero */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url("/images/portfolio/portfolio-hero.jpg")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-gray-900"></div>
        </div>
        
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore our diverse collection of projects spanning commercials, films, documentaries, 
              music videos, and event coverage.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <CategoryFilter />
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}

```

# src/components/about/CeoProfile.tsx

```tsx
import Image from 'next/image';

const CeoProfile = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Meet Our <span className="text-[#3A6E71]">CEO</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              John Foster is the visionary leader behind GMFILMS, with over 15 years of 
              experience in the film and cinematography industry.
            </p>
            <p className="text-gray-300 mb-6">
              After graduating from the New York Film Academy, John worked on numerous 
              high-profile projects for major studios before founding GMFILMS in 2015.
            </p>
            <p className="text-gray-300">
              His passion for visual storytelling and commitment to technical excellence 
              has established GMFILMS as a leading name in the industry. John personally 
              oversees each project, ensuring the highest quality standards are maintained.
            </p>
            
            <div className="mt-8 flex items-center">
              <div className="mr-4">
                <svg className="w-8 h-8 text-[#3A6E71]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Watch John&apos;s director&apos;s reel</p>
                <p className="text-sm text-gray-400">Discover his unique visual style</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="relative">
              <div className="aspect-[3/4] max-w-md relative z-10 mx-auto">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="John Foster - CEO of GMFILMS"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover border-2 border-[#3A6E71]"
                />
              </div>
              {/* <div className="absolute top-8 -left-8 w-full h-full border-2 border-[#3A6E71]"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoProfile;
```

# src/components/about/CompanyStory.tsx

```tsx

const CompanyStory = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-10 md:mt-0 md:pr-12">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/about/company-1.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden translate-y-8">
                  <div className="w-full h-full bg-[url('/images/about/company-2.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden -translate-y-8">
                  <div className="w-full h-full bg-[url('/images/about/company-3.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-[url('/images/about/company-4.jpg')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Our <span className="text-[#3A6E71]">Story</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Founded in 2015, GMFILMS began as a small team of passionate filmmakers dedicated 
              to creating powerful visual narratives.
            </p>
            <p className="text-gray-300 mb-6">
              What started as a boutique cinematography studio quickly grew into a comprehensive 
              production company, as our commitment to quality and creative excellence attracted 
              clients from various industries.
            </p>
            <p className="text-gray-300 mb-6">
              Over the years, we&apos;ve expanded our services to include equipment rental, providing 
              fellow filmmakers with access to professional gear. We&apos;ve had the privilege of working 
              with renowned brands, studios, and artists on projects that have reached global audiences.
            </p>
            <p className="text-gray-300">
              Today, GMFILMS continues to push creative boundaries, combining technical expertise 
              with artistic vision to deliver exceptional visual content for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
```

# src/components/clients/ClientGrid.tsx

```tsx
import Image from 'next/image';

// Sample client data
const clients = [
  // { id: 1, name: 'CocaCola', logo: '/images/clients/client-1.svg', industry: 'Entertainment' },
  { id: 2, name: 'Fanta', logo: '/images/clients/client-2.svg', industry: 'Beverages' },
  { id: 3, name: 'OctaFx', logo: '/images/clients/client-3.svg', industry: 'Technology' },
  { id: 4, name: 'International Breweries', logo: '/images/clients/client-4.svg', industry: 'Beverages' },
  { id: 5, name: 'Eveninday', logo: '/images/clients/client-5.svg', industry: 'Entertainment' },
  { id: 6, name: 'MainlandBlock', logo: '/images/clients/client-6.svg', industry: 'Entertainment' },
  { id: 7, name: 'Glenfiddich', logo: '/images/clients/client-7.svg', industry: 'Beverages' },
  { id: 8, name: 'Balvenie', logo: '/images/clients/client-8.svg', industry: 'Beverages' },
  { id: 9, name: 'Louie 13', logo: '/images/clients/client-9.svg', industry: 'Beverages' },
  { id: 10, name: 'TravelBeta', logo: '/images/clients/client-10.svg', industry: 'Travel' },
  { id: 11, name: 'Scheweppes', logo: '/images/clients/client-11.svg', industry: 'Beverages' },
  { id: 12, name: 'Coca-Cola', logo: '/images/clients/client-12.svg', industry: 'Beverages' },
];

// Group clients by industry
const clientsByIndustry = clients.reduce((acc, client) => {
  if (!acc[client.industry]) {
    acc[client.industry] = [];
  }
  acc[client.industry].push(client);
  return acc;
}, {} as Record<string, typeof clients>);

const industries = Object.keys(clientsByIndustry).sort();

const ClientGrid = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {industries.map((industry) => (
          <div key={industry} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-800">{industry}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clientsByIndustry[industry].map((client) => (
                <div 
                  key={client.id} 
                  className="bg-gray-800 bg-opacity-50 p-6 flex items-center justify-center aspect-video"
                >
                  <div className="relative h-12 w-full opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientGrid;
```

# src/components/clients/ClientTestimonial.tsx

```tsx
import Image from 'next/image';

interface ClientTestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const ClientTestimonial = ({
  quote,
  author,
  position,
  company,
  image,
}: ClientTestimonialProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-8 relative">
      <div className="absolute top-8 left-8 text-4xl text-[#3A6E71] opacity-40">&quot;</div>
      <div className="relative">
        <p className="text-gray-300 mb-8 relative z-10">{quote}</p>
        
        <div className="flex items-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={image}
              alt={author}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-sm text-gray-400">{position}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
```

# src/components/common/Button.tsx

```tsx
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'default' | 'outline' | 'text';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

const Button = ({ 
  children, 
  href, 
  variant = 'default', 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-200 rounded-none";
  
  const variantStyles = {
    default: "bg-[#3A6E71] hover:bg-[#3A6E71] text-white",
    outline: "border-2 border-[#3A6E71] text-white hover:bg-red-600/10",
    text: "text-[#3A6E71] hover:text-[#3A6E71] underline-offset-4 hover:underline",
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
```

# src/components/common/Footer.tsx

```tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-montserrat tracking-wider mb-4">
              <span className="text-white">GM</span>
              <span className="text-[#3A6E71]">FILMS</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Professional cinematography services for commercials, films, documentaries, 
              music videos, and events. Equipment rental available.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/portfolio/commercials" className="text-gray-400 hover:text-white transition-colors">Commercials</Link></li>
                <li><Link href="/portfolio/films" className="text-gray-400 hover:text-white transition-colors">Films & Documentaries</Link></li>
                <li><Link href="/portfolio/music" className="text-gray-400 hover:text-white transition-colors">Music Videos</Link></li>
                <li><Link href="/portfolio/events" className="text-gray-400 hover:text-white transition-colors">Event Coverage</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/clients" className="text-gray-400 hover:text-white transition-colors">Our Clients</Link></li>
                <li><Link href="/equipment" className="text-gray-400 hover:text-white transition-colors">Equipment Rental</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Vimeo</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.543 7.104c-.089 1.973-1.465 4.674-4.124 8.103-2.746 3.566-5.072 5.35-6.975 5.35-1.179 0-2.176-1.089-2.994-3.268-.545-1.995-1.089-3.989-1.634-5.984-.605-2.178-1.254-3.268-1.947-3.268-.152 0-.684.32-1.595.96L1 7.536C2.086 6.654 3.152 5.773 4.198 4.89c1.496-1.299 2.618-1.986 3.366-2.063 1.768-.152 2.858 1.039 3.269 3.574.442 2.798.749 4.54.919 5.227.51 2.316 1.072 3.475 1.686 3.475.476 0 1.19-.757 2.14-2.271.95-1.514 1.458-2.664 1.524-3.452.136-1.305-.376-1.958-1.536-1.958-.545 0-1.107.125-1.683.375 1.118-3.664 3.254-5.445 6.41-5.344 2.339.071 3.44 1.585 3.31 4.54l-.09.011z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GMFILMS. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="mx-2 text-gray-600">|</span>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

# src/components/common/Header.tsx

```tsx
// components/common/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Clients', path: '/clients' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative z-10">
            {/* <h1 className="text-2xl font-bold font-montserrat tracking-wider">
              <span className="text-white">GM</span>
              <span className="text-red-600">FILMS</span>
            </h1> */}
            <img src={'/images/Primary logo.png'} alt='logo' className='w-[120px]'/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm uppercase tracking-wider font-medium hover:text-[#3A6E71] transition-colors ${
                  pathname === link.path ? 'text-[#3A6E71]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
              mobileMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg uppercase tracking-wider font-medium hover:text-[#3A6E71] transition-colors ${
                    pathname === link.path ? 'text-[#3A6E71]' : 'text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

# src/components/common/Layout.tsx

```tsx

```

# src/components/common/VideoPlayer.tsx

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  url: string;
  autoPlay?: boolean;
}

const VideoPlayer = ({ url, autoPlay = false }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID from YouTube URL
  const getYouTubeId = (youtubeUrl: string) => {
    // Handle multiple YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = youtubeUrl.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const youtubeId = getYouTubeId(url);
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&rel=0&modestbranding=1`;

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (playerRef.current) {
      playerRef.current.addEventListener('load', handleLoad);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.removeEventListener('load', handleLoad);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3A6E71]"></div>
        </div>
      )}
      <iframe
        ref={playerRef}
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
```

# src/components/contact/ContactForm.tsx

```tsx
'use client';

import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      // In a real application, you would send the form data to a server here
      // For demonstration purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
      });
    } catch (error) {
      setFormStatus('error');
      return error
    }
  };
  
  return (
    <div className="bg-gray-800 bg-opacity-50 p-8 md:p-12">
      <h2 className="text-3xl font-bold mb-6 font-montserrat">
        Send Us a <span className="text-[#3A6E71]">Message</span>
      </h2>
      
      {formStatus === 'success' ? (
        <div className="bg-green-900 bg-opacity-50 border border-green-700 p-6 rounded">
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-300">
            Thank you for reaching out. We&apos;ll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setFormStatus('idle')} 
            className="mt-4 inline-flex items-center justify-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name <span className="text-[#3A6E71]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-[#3A6E71]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
              Project Type <span className="text-[#3A6E71]">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
            >
              <option value="">Select Project Type</option>
              <option value="commercial">Commercial</option>
              <option value="film">Film/Documentary</option>
              <option value="music">Music Video</option>
              <option value="event">Event Coverage</option>
              <option value="equipment">Equipment Rental</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message <span className="text-[#3A6E71]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 focus:border-[#3A6E71] focus:ring-1 focus:ring-[#3A6E71] outline-none transition-colors text-white"
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#3A6E71] hover:bg-red-700 text-white text-sm font-medium tracking-wider uppercase transition-all duration-200 w-full md:w-auto disabled:bg-gray-700 disabled:cursor-not-allowed"
            >
              {formStatus === 'submitting' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
          
          {formStatus === 'error' && (
            <div className="bg-red-900 bg-opacity-50 border border-red-700 p-4 text-white">
              An error occurred. Please try again later.
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
```

# src/components/equipment/EquipmentCard.tsx

```tsx
import Image from 'next/image';

interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
}

interface EquipmentCardProps {
  equipment: Equipment;
}

const EquipmentCard = ({ equipment }: EquipmentCardProps) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={equipment.image}
          alt={equipment.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase ${
          equipment.availability ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {equipment.availability ? 'Available' : 'Unavailable'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{equipment.name}</h3>
        <p className="text-gray-300 mb-4">{equipment.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">${equipment.dailyRate} <span className="text-sm text-gray-400">/ day</span></p>
            <p className="text-sm text-gray-400">${equipment.weeklyRate} / week</p>
          </div>
          <button 
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              equipment.availability
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!equipment.availability}
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
```

# src/components/equipment/EquipmentList.tsx

```tsx
'use client';

import { useState } from 'react';
import EquipmentCard from './EquipmentCard';

// Equipment categories
const categories = [
  { id: 'all', name: 'All Equipment' },
  { id: 'cameras', name: 'Cameras' },
  { id: 'lenses', name: 'Lenses' },
  { id: 'lighting', name: 'Lighting' },
  { id: 'audio', name: 'Audio' },
  { id: 'stabilizers', name: 'Stabilizers' },
  { id: 'accessories', name: 'Accessories' },
];

// Sample equipment data
const equipmentItems = [
  {
    id: 1,
    name: 'Sony FX9',
    category: 'cameras',
    image: '/images/equipment/camera-1.jpg',
    description: 'Full-frame 6K sensor camera with 15+ stops of dynamic range and dual ISO.',
    dailyRate: 350,
    weeklyRate: 1400,
    availability: true,
  },
  {
    id: 2,
    name: 'RED Komodo 6K',
    category: 'cameras',
    image: '/images/equipment/camera-2.jpg',
    description: 'Compact cinema camera with 6K Super 35mm sensor and global shutter.',
    dailyRate: 400,
    weeklyRate: 1600,
    availability: true,
  },
  {
    id: 3,
    name: 'Canon Cinema Prime Lens Set',
    category: 'lenses',
    image: '/images/equipment/lens-1.jpg',
    description: 'Set of 6 cinema prime lenses (24mm, 35mm, 50mm, 85mm, 100mm, 135mm).',
    dailyRate: 250,
    weeklyRate: 1000,
    availability: true,
  },
  {
    id: 4,
    name: 'Arri SkyPanel S60-C',
    category: 'lighting',
    image: '/images/equipment/light-1.jpg',
    description: 'LED soft light with adjustable CCT and full RGB color control.',
    dailyRate: 180,
    weeklyRate: 720,
    availability: false,
  },
  {
    id: 5,
    name: 'Sennheiser MKH 416',
    category: 'audio',
    image: '/images/equipment/audio-1.jpg',
    description: 'Professional short shotgun microphone for film and television production.',
    dailyRate: 60,
    weeklyRate: 240,
    availability: true,
  },
  {
    id: 6,
    name: 'DJI Ronin 2',
    category: 'stabilizers',
    image: '/images/equipment/stabilizer-1.jpg',
    description: 'Professional 3-axis camera stabilizer with 30lb payload capacity.',
    dailyRate: 150,
    weeklyRate: 600,
    availability: true,
  },
  {
    id: 7,
    name: 'SmallHD 702 Touch Monitor',
    category: 'accessories',
    image: '/images/equipment/accessory-1.jpg',
    description: '7" daylight viewable on-camera monitor with touchscreen interface.',
    dailyRate: 80,
    weeklyRate: 320,
    availability: true,
  },
  {
    id: 8,
    name: 'ARRI ALEXA Mini LF',
    category: 'cameras',
    image: '/images/equipment/camera-3.jpg',
    description: 'Large format camera with ARRI color science and up to 4.5K resolution.',
    dailyRate: 550,
    weeklyRate: 2200,
    availability: true,
  },
  {
    id: 9,
    name: 'Zeiss Supreme Prime Lens Set',
    category: 'lenses',
    image: '/images/equipment/lens-2.jpg',
    description: 'Set of 7 high-end cinema lenses with T1.5 aperture.',
    dailyRate: 400,
    weeklyRate: 1600,
    availability: true,
  },
];

const EquipmentList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter equipment based on active category
  const filteredEquipment = activeCategory === 'all'
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="equipment-list" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {categories.map((category) => {
              const isActive = category.id === activeCategory;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item) => (
            <EquipmentCard key={item.id} equipment={item} />
          ))}
        </div>
        
        {filteredEquipment.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No equipment found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquipmentList;
```

# src/components/home/ClientsSection.tsx

```tsx
import Image from 'next/image';
import Button from '@/components/common/Button';

const clients = [
  // { id: 1, name: 'OctaFx', logo: '/images/clients/client-1.svg' },
  { id: 2, name: 'Glenfiddich', logo: '/images/Glenfiddich.png' },
  { id: 3, name: 'Balvenie', logo: '/images/balvenie.png' },
  // { id: 4, name: 'TravelBeta', logo: '/images/travelbeta.png' },
  { id: 5, name: 'CocaCola', logo: '/images/CocaCola.png' },
  { id: 6, name: 'Fanta', logo: '/images/fanta.png' },
];

const ClientsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Trusted by <span className="text-[#3A6E71]">Leading Brands</span>
          </h2>
          <p className="md:text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;ve collaborated with renowned brands and individuals across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 mb-15 ">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="flex items-center justify-center"
            >
              <div className="relative h-12 w-full grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/clients" variant="outline" className='text-sm'>
            View All Clients
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
```

# src/components/home/EquipmentSection.tsx

```tsx
import Image from 'next/image';
import Button from '@/components/common/Button';

const EquipmentSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 w-full">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="/images/dlxmedia.jpg"
                alt="Professional cinematography equipment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
              Professional <span className="text-[#3A6E71]">Equipment</span> Rental
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Access high-end cinematography equipment for your projects. We offer a diverse range of cameras, 
              lenses, lighting, and accessories to bring your vision to life.
            </p>
            <p className="text-gray-300 mb-8">
              Our rental service provides flexible options for filmmakers, directors, and videographers 
              looking for quality equipment without the high costs of ownership.
            </p>
            <Button href="/equipment">
              View Available Equipment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
```

# src/components/home/HeroBanner.tsx

```tsx
/* eslint-disable @next/next/no-img-element */
// components/home/HeroBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/common/Button';

const HeroBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/cinematography.jpg"
          alt=""
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Captivating <span className="text-[#3A6E71]">Visual Stories</span> That Resonate
            </h1>
            <p 
              className={`text-xl md:text-2xl text-gray-300 mb-10 transition-all duration-1000 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Professional cinematography services for commercials, films, documentaries, music videos, and events.
            </p>
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Button href="/portfolio">
                View Our Work
              </Button>
              <Button href="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
```

# src/components/home/PortfolioPreview.tsx

```tsx
import Link from 'next/link';
import Button from '@/components/common/Button';

const categories = [
  { 
    id: 'commercials', 
    name: 'Commercials', 
    image: '/images/portfolio/commercial-preview.jpg',
    count: 12
  },
  { 
    id: 'films', 
    name: 'Films & Documentaries', 
    image: '/images/portfolio/film-preview.jpg',
    count: 8
  },
  { 
    id: 'music', 
    name: 'Music Videos', 
    image: '/images/portfolio/music-preview.jpg',
    count: 15
  },
  { 
    id: 'events', 
    name: 'Event Coverage', 
    image: '/images/portfolio/event-preview.jpg',
    count: 10
  },
];

const PortfolioPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Our <span className="text-[#3A6E71]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse range of visual storytelling across different genres and formats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/portfolio/${category.id}`}
              className="group relative overflow-hidden red"
            >
              <div className="aspect-video bg-gray-800 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.count} Projects</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/portfolio">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
```

# src/components/portfolio/CategoryFilter.tsx

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface CategoryFilterProps {
  activeCategory?: string;
}

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'commercials', name: 'Commercials' },
  { id: 'films', name: 'Films & Documentaries' },
  // { id: 'documentaries', name: 'Films & Documentaries' },
  { id: 'music', name: 'Music Videos' },
  { id: 'events', name: 'Event Coverage' },
];

const CategoryFilter = ({ activeCategory }: CategoryFilterProps) => {
  const [active, setActive] = useState(activeCategory || 'all');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActive(activeCategory || 'all');
  }, [activeCategory]);

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
        {categories.map((category) => {
          const isActive = category.id === active;
          const href = category.id === 'all' ? '/portfolio' : `/portfolio/${category.id}`;
          
          return (
            <Link
              key={category.id}
              href={href}
              className={`px-6 py-2 text-sm transition-colors duration-200 ${
                isActive
                  ? 'bg-[#3A6E71] text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;

```

# src/components/portfolio/PortfolioGallery.tsx

```tsx
'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { useRouter } from 'next/navigation';

// Mock portfolio data with YouTube video URLs
const portfolioItems = [
  {
    id: 1,
    title: 'Octa How to..',
    category: 'commercials',
    image: '/images/portfolio/commercial-1.jpg',
    video: ' https://youtu.be/pcXIfx9V108',
    client: 'OctaFX',
  },
  {
    id: 2,
    title: 'The Balvenie x Cigars',
    category: 'commercials',
    image: '/images/portfolio/film-1.jpg',
    video: 'https://youtu.be/zRVyu58eT9o',
    client: 'Balvenie',
  },
  {
    id: 3,
    title: 'Entity Fashion Film',
    category: 'commercials',
    image: '/images/portfolio/music-1.jpg',
    video: 'https://youtu.be/_hekaNQ6-zU',
    client: 'Entity',
  },
  {
    id: 4,
    title: 'Grand Cru Night',
    category: 'events',
    image: '/images/portfolio/event-1.jpg',
    video: 'https://youtu.be/keoiQuOqML8',
    client: 'Glenfiddich',
  },
  {
    id: 5,
    title: 'Balvenie Networking Event',
    category: 'events',
    image: '/images/portfolio/commercial-2.jpg',
    video: 'https://youtu.be/k4l22qSuyZ8',
    client: 'Balvenie',
  },
  {
    id: 6,
    title: 'If the world revolves around me',
    category: 'films',
    image: '/images/portfolio/film-2.jpg',
    video: 'https://youtu.be/TebtBJPX7mo',
    client: 'OctaFX',
  },
  {
    id: 7,
    title: 'Ready to Choose Financial Freedom?',
    category: 'commercials',
    image: '/images/portfolio/music-2.jpg',
    video: 'https://youtu.be/xmOGaCZH7a8',
    client: 'OctaFx',
  },
  {
    id: 8,
    title: 'Sounds from Vict0ny',
    category: 'music',
    image: '/images/portfolio/event-2.jpg',
    video: 'https://youtu.be/tawp1V7M3i4',
    client: 'Vict0ny',
  },
  {
    id: 9,
    title: 'Chess in Slums Makoko',
    category: 'films',
    image: '/images/portfolio/commercial-3.jpg',
    video: 'https://youtu.be/scHxpzxmQQw',
    client: 'Chess in Slums',
  },
  {
    id: 10,
    title: 'Travel Beta Ad',
    category: 'commercials',
    image: '/images/portfolio/commercial-3.jpg',
    video: 'https://youtu.be/tSTGizFwJ6U',
    client: 'TravelBeta',
  },
  {
    id: 11,
    title: 'Travel Beta Spec Ad',
    category: 'commercials',
    image: '/images/portfolio/commercial-3.jpg',
    video: 'https://youtu.be/sKwNMcCHu5Q',
    client: 'TravelBeta',
  },
  {
    id: 12,
    title: 'Octa celebrates 11 years',
    category: 'events',
    image: '/images/portfolio/commercial-3.jpg',
    video: 'https://youtu.be/EI0snblr7q8',
    client: 'OctaFX',
  },
];

interface PortfolioGalleryProps {
  category?: string;
}

const PortfolioGallery = ({ category }: PortfolioGalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  // const router = useRouter();
  
  // Filter portfolio items based on category
  const filteredItems = category && category !== 'all'
    ? portfolioItems.filter(item => item.category === category)
    : portfolioItems;
  
  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    // Here you would typically open a modal or navigate to a project detail page
    // For simplicity, we'll just set the selected project ID for now
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <ProjectCard
            key={item.id}
            project={item}
            onClick={() => handleProjectClick(item.id)}
          />
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;
```

# src/components/portfolio/ProjectCard.tsx

```tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';
import VideoPlayer from '@/components/common/VideoPlayer';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  client: string;
  // year: number;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'commercials':
        return 'Commercial';
      case 'films':
        return 'Film';
      case 'music':
        return 'Music Video';
      case 'events':
        return 'Event';
      default:
        return category;
    }
  };
  
  return (
    <>
      <div
        className="group cursor-pointer overflow-hidden"
        onClick={handleOpenModal}
      >
        <div className="aspect-video bg-gray-800 overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-[#3A6E71] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold group-hover:text-[#3A6E71] transition-colors">{project.title}</h3>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300">
              {getCategoryLabel(project.category)}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">{project.client}</p>
        </div>
      </div>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-5xl w-full bg-gray-900 relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video w-full">
              <VideoPlayer url={project.video} />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-400">Client: {project.client}</p>
                </div>
                <span className="text-sm px-3 py-1 bg-gray-800 text-gray-300">
                  {getCategoryLabel(project.category)}
                </span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-2">Project Details</h3>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                  Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, 
                  eget aliquam nisl nisl sit amet nisl.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
```

# src/data/clients.ts

```ts

```

# src/data/equipment.ts

```ts

```

# src/data/portfolio.ts

```ts

```

# src/lib/utils.ts

```ts
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines className strings with Tailwind CSS classes
 * This utility helps prevent class conflicts when using dynamic classNames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string into a human-readable format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Truncates a string to a specified length and adds an ellipsis
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Gets a YouTube video ID from a URL
 */
export function getVideoId(url: string): { platform: 'youtube' | null; id: string | null } {
  // YouTube
  const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const youtubeMatch = url.match(youtubeRegex);
  
  if (youtubeMatch && youtubeMatch[2].length === 11) {
    return { platform: 'youtube', id: youtubeMatch[2] };
  }
  
  return { platform: null, id: null };
}

/**
 * Generates an embedded video URL for YouTube
 */
export function getEmbedUrl(url: string): string | null {
  const { platform, id } = getVideoId(url);
  
  if (!platform || !id) return null;
  
  if (platform === 'youtube') {
    return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`;
  }
  
  return null;
}

/**
 * Formats a price with currency symbol
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}

// types/index.ts
// Portfolio Types
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video: string;
  client: string;
  year: number;
  description?: string;
}

export type PortfolioCategory = 'commercials' | 'films' | 'music' | 'events' | 'all';

// Client Types
export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

// Equipment Types
export interface Equipment {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
  specifications?: Record<string, string>;
}

export type EquipmentCategory = 'cameras' | 'lenses' | 'lighting' | 'audio' | 'stabilizers' | 'accessories' | 'all';

// Team Types
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: string;
  message: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// UI Component Types
export type ButtonVariant = 'default' | 'outline' | 'text';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-inter)'],
          montserrat: ['var(--font-montserrat)'],
        },
        colors: {
          black: '#0A0A0A',
          red: {
            600: '#DC2626',
            700: '#B91C1C',
          },
          gray: {
            800: '#1F1F1F',
            900: '#121212',
          },
        },
        transitionTimingFunction: {
          'cinema': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.5s ease-in-out',
          slideUp: 'slideUp 0.7s ease-out',
        },
      },
    },
    plugins: [],
  }

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", "tailwind.config.js"],
  "exclude": ["node_modules"]
}

```

