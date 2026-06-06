// ============================================================================
// CONSTANTS.JS - All reusable data and configuration
// ============================================================================
import CreativeDesign from './assets/71620b30-e223-11ee-b9b5-2bfbff3e4a5d.json';
import Professional from './assets/004628a6-1171-11ee-b788-5fed2b5dc1db.json';
import Innovation from './assets/27b0439a-1180-11ee-8516-bb9c0d8f7b24.json';
import Satisfaction from './assets/112c6490-1181-11ee-b0f7-871603e699f6.json';
export const COLORS = {
  neonCyan: '#00D9FF',
  electricBlue: '#0066FF',
  deepNavy: '#061122',
  black: '#0a0e27',
  white: '#FFFFFF',
  darkGray: '#1a1f3a',
  glowBlue: 'rgba(0, 217, 255, 0.2)',
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];
export const SERVICES = [
  {
    id: 1,
    image: 'images/creativeD.png',
    title: 'Creative Design',
    desc: 'Custom visual solutions tailored to your brand identity and goals',
    fullDesc: 'We create stunning visual designs that capture your brand essence and engage your audience.',
    features: ['Custom illustrations', 'Brand guidelines', 'Design system'],
  },
  {
    id: 2,
    image: 'images/branding.png',
    title: 'Branding Solutions',
    desc: 'Complete brand identity from concept to execution',
    fullDesc: 'Build a strong brand identity with our comprehensive branding services.',
    features: ['Logo design', 'Brand strategy', 'Visual identity'],
  },
  {
    id: 3,
    image: 'images/socialMedia.png',
    title: 'Social Media Design',
    desc: 'Engaging content that drives engagement and growth',
    fullDesc: 'Create compelling social media content that resonates with your audience.',
    features: ['Post design', 'Templates', 'Story content'],
  },
  {
    id: 4,
    image: 'images/printing.png',
    title: 'Print Design',
    desc: 'Professional materials for all mediums',
    fullDesc: 'Design impactful print materials that leave lasting impressions.',
    features: ['Brochures', 'Business cards', 'Packaging'],
  },
  {
    id: 5,
    image: 'images/logoDesign.png',
    title: 'Logo Design',
    desc: 'Memorable logos that define your brand',
    fullDesc: 'Create distinctive logos that represent your brand perfectly.',
    features: ['Logo concepts', 'Variations', 'Brand marks'],
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Unique & Modern Designs',
    desc: 'Cutting-edge designs that set you apart from competitors',
    icon: 'Palette',
  },
  {
    title: 'Fast Delivery',
    desc: 'Quick turnaround without compromising on quality',
    icon: 'Rocket',
  },
  {
    title: 'Brand-Focused Strategy',
    desc: 'Designs aligned with your vision and business goals',
    icon: 'Zap',
  },
  {
    title: 'Affordable Pricing',
    desc: 'Premium quality at competitive and transparent rates',
    icon: 'Clock',
  },
  {
    title: 'High Quality Output',
    desc: 'Pixel-perfect designs in all required formats',
    icon: 'Star',
  },
  {
    title: 'Dedicated Support',
    desc: 'Professional support available for all your needs',
    icon: 'Users',
  },
];

export const PORTFOLIO = [
  {
    id: 1,
    title: 'TechBrand Identity',
    category: 'Branding',
    image: 'images/Branding/Branding2.jpeg',
    description: 'Complete branding solution for a tech startup',
    services: ['Logo Design', 'Brand Guidelines', 'Marketing Materials'],
    year: 2024,
  },
  {
    id: 2,
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'images/Ads/Ads1.jpg',
    description: 'Engaging social media content series',
    services: ['Post Design', 'Story Templates', 'Content Strategy'],
    year: 2024,
  },
  {
    id: 3,
    title: 'E-commerce Redesign',
    category: 'Logo Design',
    image: 'images/LogoDesign/Logo.jpeg',
    description: 'Complete redesign of e-commerce platform',
    services: ['UI Design', 'User Experience', 'Prototyping'],
    year: 2023,
  },
    {
    id: 4,
    title: 'E-commerce Redesign',
    category: 'Logo Design',
    image: 'images/LogoDesign/Logo1.jpeg',
    description: 'Complete redesign of e-commerce platform',
    services: ['UI Design', 'User Experience', 'Prototyping'],
    year: 2023,
  },
      {
    id: 5,
    title: 'E-commerce Redesign',
    category: 'Logo Design',
    image: 'images/LogoDesign/Logo2.jpeg',
    description: 'Complete redesign of e-commerce platform',
    services: ['UI Design', 'User Experience', 'Prototyping'],
    year: 2023,
  },
  {
    id: 6,
    title: 'Corporate Branding',
    category: 'Branding',
    image: 'images/Branding/Branding3.jpeg',
    description: 'Enterprise-level branding project',
    services: ['Brand Strategy', 'Visual Identity', 'Guidelines'],
    year: 2023,
  },
  {
    id: 7,
    title: 'Social Media Campaign',
    category: 'Social Media',
    image: 'images/Ads/Ads2.png',
    description: 'Engaging social media content series',
    services: ['Post Design', 'Story Templates', 'Content Strategy'],
    year: 2023,
  },
  {
    id: 8,
    title: 'Print Campaign',
    category: 'Print',
    image: 'images/Print/Print.jpg',
    description: 'Multi-piece print advertising campaign',
    services: ['Print Design', 'Brand Collateral', 'Distribution'],
    year: 2023,
  },
  {
    id: 9,
    title: 'Print Redesign',
    category: 'Print',
    image: 'images/Print/Print2.jpg',
    description: 'Complete redesign of print materials',
    services: ['Print Design', 'Brand Collateral', 'Distribution'],
    year: 2024,
  },
  {
    id: 10,
    title: 'Packaging Design',
    category: 'Print',
    image: 'images/Print/Print3.jpg',
    description: 'Product packaging design and branding',
    services: ['Packaging', 'Illustrations', 'Print Production'],
    year: 2024,
  },
  {
    id: 11,
    title: 'Brand Refresh',
    category: 'Branding',
    image: 'images/Branding/Branding4.jpeg',
    description: 'Logo and visual identity refresh',
    services: ['Logo Update', 'Brand Evolution', 'Guidelines Update'],
    year: 2024,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Santosh Shrestha',
    role: 'CEO, TechStart',
    text: 'GFXify transformed our brand vision into stunning reality. The team was professional, responsive, and delivered exceptional work that exceeded our expectations!',
    rating: 5,
    company: 'TechStart Inc.',
  },
  {
    id: 2,
    name: 'Sumit Baniya',
    role: 'Founder, Creative Co',
    text: 'The team is incredibly talented and responsive to feedback. Working with GFXify was a pleasure. Highly recommended for anyone seeking top-notch design services.',
    rating: 5,
    company: 'Creative Co.',
  },
  {
    id: 3,
    name: 'Ishwor Shrestha',
    role: 'Marketing Director, Global Brands',
    text: 'Best design agency I have worked with. The creative team delivered beyond expectations and helped us stand out in a competitive market.',
    rating: 5,
    company: 'Global Brands LLC',
  }
];
export const PORTFOLIO_CATEGORIES = [
  'All',
  'Branding',
  'Logo Design',
  'Social Media',
  'Print',
];
export const ABOUT_VALUES = [
  {
    title: 'Creativity',
    description: 'Innovative and original design solutions',
    icon:CreativeDesign,
  },
  {
    title: 'Innovation',
    description: 'Cutting-edge techniques and trends',
    icon:Innovation,
  },
  {
    title: 'Professionalism',
    description: 'Expert execution and high standards',
    icon: Professional,
  },
  {
    title: 'Satisfaction',
    description: 'Client success and happiness',
    icon: Satisfaction,
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Jessica Palmer',
    role: 'Creative Director',
    bio: 'Award-winning designer with 8+ years of experience',
    image: '👩‍🎨',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Lead Designer',
    bio: 'Specializing in branding and visual identity',
    image: '👨‍💼',
  },
  {
    id: 3,
    name: 'Sofia Garcia',
    role: 'UI/UX Designer',
    bio: 'Expert in digital design and user experience',
    image: '👩‍💻',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Design Strategist',
    bio: 'Focuses on brand strategy and market insights',
    image: '👨‍🔬',
  },
];

export const FAQ = [
  {
    id: 1,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on scope. Simple logos take 1-2 weeks, full branding projects 4-8 weeks. We always discuss timelines upfront.',
  },
  {
    id: 2,
    question: 'What is your revision policy?',
    answer: 'We include 2-3 rounds of revisions in all packages. Additional revisions are available for a small fee.',
  },
  {
    id: 3,
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We work with clients worldwide and have experience across multiple industries and markets.',
  },
  {
    id: 4,
    question: 'What file formats do you deliver?',
    answer: 'We deliver all designs in multiple formats: PNG, JPEG, SVG, PDF, and source files depending on the project.',
  },
  {
    id: 5,
    question: 'Can you help with the entire branding process?',
    answer: 'Yes, we offer complete branding services from strategy and research to final brand guidelines and implementation.',
  },
  {
    id: 6,
    question: 'What are your payment terms?',
    answer: 'We typically require 50% upfront and 50% upon delivery. Custom payment plans available for larger projects.',
  },
];

export const CONTACT_INFO = {
  email: 'gfxify.creative@gmail.com',
  phone: '+977-9805177172',
  location: 'Nepal, Kathmandu',
  hours: 'Mon - Fri, 9:00 AM - 6:00 PM PST',
  social: {
    twitter: 'https://twitter.com/gfxify',
    instagram: 'https://instagram.com/gfxify',
    linkedin: 'https://linkedin.com/company/gfxify',
    dribbble: 'https://dribbble.com/gfxify',
  },
};

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery',
    description: 'We understand your brand, goals, and target audience',
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Strategy',
    description: 'Develop a creative strategy aligned with your vision',
    icon: '💡',
  },
  {
    step: 3,
    title: 'Design',
    description: 'Create beautiful designs that bring your vision to life',
    icon: '🎨',
  },
  {
    step: 4,
    title: 'Refinement',
    description: 'Gather feedback and refine the designs to perfection',
    icon: '✨',
  },
  {
    step: 5,
    title: 'Delivery',
    description: 'Deliver final files in all necessary formats',
    icon: '📦',
  },
];

export const STATS = [
  {
    number: 500,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    number: 200,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    number: 5,
    label: 'Years Experience',
    suffix: '+',
  },
];

export const PRICING_PLANS = [
  {
    id: 1,
    name: 'Starter',
    price: '$200',
    duration: 'project',
    description: 'Perfect for small projects',
    features: ['Logo Design', '2 Concepts', '3 Revisions', 'Final Files'],
    popular: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: '$450',
    duration: 'project',
    description: 'Best for growing businesses',
    features: ['Branding Package', 'Brand Guidelines', '5 Concepts', '5 Revisions', 'All Formats'],
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    duration: 'quote',
    description: 'For large organizations',
    features: ['Custom Solutions', 'Unlimited Revisions', 'Dedicated Account Manager', 'Priority Support'],
    popular: false,
  },
];
export const Follow_Us=[
  {
    id:1,
    name:'Facebook',
    image:'socialMediaLogo/Facebook.png',
    link:'#'
  },
  {
    id:3,
    name:'LinkedIn',
    image:'socialMediaLogo/Linkedin.png',
    link:'#'
  },
  {
    id:4,
    name:'WhatsApp',
    image:'socialMediaLogo/whatsApp.png',
    link:'#'
  },
  {
    id:5,
    name:'Youtube',
    image:'socialMediaLogo/Youtube.png',
    link:'#'
  }
]
