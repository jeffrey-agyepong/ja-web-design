import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/testimonials'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Free Consultation', href: 'https://calendly.com/jawebdesign', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'About', href: '#' },
        { text: 'Projects', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Contact', href: '#' },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Sitemap', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/j-a-web-design/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/j.a.webdesign' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jeffrey-agyepong' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    © 2024 J.A Web Design· All rights reserved.
  `,
};
