import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
      href: getPermalink('/index.html#projects'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Web Design',
          href: getPermalink('/services/web-design'),
        },
        // {
        //   text: 'E-commerce',
        //   href: getPermalink('/services/e-commerce'),
        // },
      ],
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
        {
          text: 'Performance', href: getPermalink('/posts/performance')
        },
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
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/j-a-web-design/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/j.a.webdesign' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jeffrey-agyepong' },
  ],
  footNote: `
    <div class="sm:flex gap-80 justify-center items-center">
    <p>Developed by <a href="https://jawebdesign.ca/" class="text-green-400">J.A Web Design</a>
    </p>
     <p>
    © 2024 J.A Web Design 
    </p>
    </div>
  `,
};
