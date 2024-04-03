import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/index.html#projects'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/index.html#testimonials'),
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
        { text: 'About', href: getPermalink('/about') },
        { text: 'Projects', href: getPermalink('/index.html#projects') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },

  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Sitemap', href: 'https://jawebdesign.ca/sitemap-0.xml' },
  ],
  // socialLinks: [
  //   { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/j-a-web-design/' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/j.a.webdesign' },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jeffrey-agyepong' },
  // ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    © 2024 J.A Web Design· All rights reserved.
  `,
};
