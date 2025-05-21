import React from 'react';
import { Service, PortfolioImage, NavLinkItem, WhyChooseItem, Testimonial } from './types';

export const APP_NAME = "OTP"; // Or "NR" if preferred, to match logo
export const FULL_APP_NAME = "One Time Portraits";

export const APP_LOGO_URL = "https://peka2006.github.io/EMail/logo.png"
export const NAV_LINKS: NavLinkItem[] = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
];

// EmailJS Configuration - Replace with your actual details from EmailJS dashboard
export const EMAILJS_SERVICE_ID = 'service_d8j536u'; // Replace with your EmailJS Service ID
export const EMAILJS_TEMPLATE_ID = 'template_ngksoad'; // Replace with your EmailJS Template ID
export const EMAILJS_PUBLIC_KEY = 'hC7aNkNcUGSxn6mkQ';   // Replace with your EmailJS Public Key (already in index.html init)

// WhatsApp Configuration
export const WHATSAPP_PHONE_NUMBER = '919398828072'; // Replace with your WhatsApp number (country code included, no '+')


export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


export const CONTACT_DETAILS = {
  phone: '+91 9202502357',
  email: 'contact@gmail.com'
  address: '123 Photography Lane, Art City, AC 54321',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
  mapLink: 'https://maps.app.goo.gl/9rgkK5UrAxpYBrD57',
};

// Note: For GOOGLE_MAP_EMBED_URL to work without issues, 
// you need a valid Google Maps Embed API key and the API enabled in your Google Cloud Console.
// The key should replace 'YOUR_API_KEY_HERE'.
export const GOOGLE_MAP_EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY_HERE&q=${encodeURIComponent(CONTACT_DETAILS.address)}`;


// Icons (basic examples, you can use a library like react-icons)
export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);
export const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);
export const CreativeVisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
    </svg>
);
export const ClientFocusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
);
export const QualityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M9.983 3v7.391c0 2.908-2.352 5.261-5.261 5.261h-.722v4.348h.722c5.382 0 9.739-4.357 9.739-9.739v-7.261h-4.478zm10.017 0v7.391c0 2.908-2.352 5.261-5.261 5.261h-.722v4.348h.722c5.383 0 9.739-4.357 9.739-9.739v-7.261h-4.478z"/>
    </svg>
);

export const WHY_CHOOSE_US_DATA: WhyChooseItem[] = [
    { icon: CreativeVisionIcon, title: 'Creative Vision', description: 'We bring a unique artistic perspective to every shot, ensuring your photos are not just pictures, but pieces of art.' },
    { icon: ClientFocusIcon, title: 'Client-Focused Approach', description: 'Your story and satisfaction are our top priorities. We listen, adapt, and deliver a personalized experience.' },
    { icon: QualityIcon, title: 'Exceptional Quality', description: 'From high-end equipment to meticulous editing, we guarantee stunning, professional-grade images.' },
  ];
  
export const TESTIMONIALS_DATA: Testimonial[] = [
    { id: 't1', quote: 'The photos are absolutely breathtaking! OTP Studios captured our wedding day perfectly. We couldn\'t be happier.', name: 'Swathi & Suhaas.', service: 'Wedding Photography' },
    { id: 't2', quote: 'Professional, creative, and so easy to work with. The portrait session was fun, and the results exceeded our expectations.', name: 'Rahul B.', service: 'Portrait Session' },
    { id: 't3', quote: 'We hired Studios for our corporate event, and they delivered outstanding images that truly represented our brand. Highly recommend!', name: 'Janu G. - Event Corp', service: 'Event Coverage' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'portrait',
    title: 'Portrait Sessions',
    shortDescription: 'Individual, couple, or family portraits that capture your unique personality and relationships.',
    longDescription: 'Our portrait sessions are designed to be a relaxed and enjoyable experience. Whether you\'re looking for professional headshots, intimate couple photos, or fun family portraits, we work with you to create images that reflect your true self. We offer both studio and on-location shoots to match your desired aesthetic.',
    coverImage: 'https://picsum.photos/seed/portraits/800/600',
    sampleImages: [
      'https://picsum.photos/seed/portrait1/400/300',
      'https://picsum.photos/seed/portrait2/400/300',
      'https://picsum.photos/seed/portrait3/400/300',
    ],
  },
  {
    id: 'event',
    title: 'Event Coverage',
    shortDescription: 'Comprehensive photography for corporate events, parties, and special occasions.',
    longDescription: 'From large corporate conferences to intimate birthday celebrations, we provide thorough and discreet event coverage. Our goal is to capture the key moments, the atmosphere, and the candid interactions that make your event special. We deliver a mix of wide shots, detailed captures, and guest interactions.',
    coverImage: 'https://picsum.photos/seed/events/800/600',
    sampleImages: [
      'https://picsum.photos/seed/event1/400/300',
      'https://picsum.photos/seed/event2/400/300',
      'https://picsum.photos/seed/event3/400/300',
    ],
  },
  {
    id: 'wedding',
    title: 'Wedding Photography',
    shortDescription: 'Timeless and beautiful wedding photos that tell the story of your special day.',
    longDescription: 'Your wedding day is one of the most important days of your life, and we are honored to capture its magic. We offer various packages to suit your needs, from intimate elopements to grand celebrations. Our style is a blend of documentary and fine art, ensuring we capture both the candid moments and the beautifully posed portraits.',
    coverImage: 'https://picsum.photos/seed/weddings/800/600',
    sampleImages: [
      'https://picsum.photos/seed/wedding1/400/300',
      'https://picsum.photos/seed/wedding2/400/300',
      'https://picsum.photos/seed/wedding3/400/300',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial & Branding',
    shortDescription: 'High-quality imagery for your business, products, and marketing campaigns.',
    longDescription: 'Elevate your brand with professional commercial photography. We provide product shots, lifestyle imagery for marketing, corporate headshots, and visual content for your website and social media. We work closely with you to understand your brand identity and deliver images that resonate with your target audience.',
    coverImage: 'https://picsum.photos/seed/commercial/800/600',
    sampleImages: [
      'https://picsum.photos/seed/comm1/400/300',
      'https://picsum.photos/seed/comm2/400/300',
      'https://picsum.photos/seed/comm3/400/300',
    ],
  },
   {
    id: 'maternity',
    title: 'Maternity & Newborn',
    shortDescription: 'Celebrate the miracle of life with beautiful maternity and adorable newborn photos.',
    longDescription: 'Capture the precious moments of pregnancy and your baby\'s first days with our specialized maternity and newborn sessions. We create a comfortable and safe environment for both mother and baby, resulting in tender and timeless photographs you\'ll cherish forever.',
    coverImage: 'https://picsum.photos/seed/maternity/800/600',
    sampleImages: [
      'https://picsum.photos/seed/maternity1/400/300',
      'https://picsum.photos/seed/newborn1/400/300',
      'https://picsum.photos/seed/maternity2/400/300',
    ],
  },
  {
    id: 'realestate',
    title: 'Real Estate Photography',
    shortDescription: 'Showcase properties at their best with professional real estate photography and videography.',
    longDescription: 'High-quality visuals are crucial in the real estate market. We provide stunning interior and exterior photos, drone shots, and virtual tours that make properties stand out. Our images help attract potential buyers and highlight the unique features of each listing.',
    coverImage: 'https://picsum.photos/seed/realestate/800/600',
    sampleImages: [
      'https://picsum.photos/seed/estate1/400/300',
      'https://picsum.photos/seed/estate2/400/300',
      'https://picsum.photos/seed/estate3/400/300',
    ],
  },
];

export const PORTFOLIO_IMAGES_DATA: PortfolioImage[] = [
  { id: 'p1', src: 'https://picsum.photos/seed/gallery1/600/600', alt: 'Elegant Wedding Couple', category: 'Weddings' },
  { id: 'p2', src: 'https://picsum.photos/seed/gallery2/600/600', alt: 'Joyful Family Portrait', category: 'Portraits' },
  { id: 'p3', src: 'https://picsum.photos/seed/gallery3/600/600', alt: 'Dynamic Corporate Event', category: 'Events' },
  { id: 'p4', src: 'https://picsum.photos/seed/gallery4/600/600', alt: 'Modern Product Shot', category: 'Commercial' },
  { id: 'p5', src: 'https://picsum.photos/seed/gallery5/600/600', alt: 'Serene Maternity Photo', category: 'Maternity' },
  { id: 'p6', src: 'https://picsum.photos/seed/gallery6/600/600', alt: 'Bright Real Estate Interior', category: 'Real Estate' },
  { id: 'p7', src: 'https://picsum.photos/seed/gallery7/600/600', alt: 'Candid Street Portrait', category: 'Portraits' },
  { id: 'p8', src: 'https://picsum.photos/seed/gallery8/600/600', alt: 'Festive Celebration Moment', category: 'Events' },
  { id: 'p9', src: 'https://picsum.photos/seed/gallery9/600/600', alt: 'Detailed Food Photography', category: 'Commercial' },
  { id: 'p10', src: 'https://picsum.photos/seed/gallery10/600/600', alt: 'Adorable Newborn Close-up', category: 'Newborn' },
  { id: 'p11', src: 'https://picsum.photos/seed/gallery11/600/600', alt: 'Wedding Ceremony Detail', category: 'Weddings' },
  { id: 'p12', src: 'https://picsum.photos/seed/gallery12/600/600', alt: 'Professional Headshot', category: 'Portraits' },
];

// Icons for Contact Page
export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
);
export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);
export const LocationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);
export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);
