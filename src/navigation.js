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
          text: 'All Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Web Development & Design',
          href: getPermalink('/services/edmonton-web-development-design'),
        },
        {
          text: 'SEO',
          href: getPermalink('/services/edmonton-seo'),
        },
      ],
    },
    
    
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
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
    {
      text: 'Responsive design icons by Flat Icons',
      href: 'https://www.flaticon.com/free-icons/responsive-design',
    },
    {
      text: 'Backend icons by Flat Icons',
      href: 'https://www.flaticon.com/free-icons/backend',
    },
    {
      text: 'Web development icons created by Roundicons Premium',
      href: 'https://www.flaticon.com/free-icons/web-development',
    }
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/j-a-web-design/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/j.a.webdesign' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jeffrey-agyepong' },
  ],
  byLocation: [
    {
      title: 'By Location',
      links: [
        {
          text: 'Calgary Web Design',
          href: getPermalink('/locations/calgary-web-development-design'),
        },
        {
          text: 'Sherwood Park Web Design',
          href: getPermalink('/locations/sherwood-park-web-development-design'),
        },
        {
          text: 'Spruce Grove Web Design',
          href: getPermalink('/locations/spruce-grove-web-development-design'),
        },
        {
          text: 'St. Albert Web Design',
          href: getPermalink('/locations/st-albert-web-development-design'),
        },
        {
          text: 'Leduc Web Design',
          href: getPermalink('/locations/leduc-web-development-design'),
        },
        {
          text: 'Calgary SEO',
          href: getPermalink('/locations/calgary-seo'),
        },
        {
          text: 'Sherwood Park SEO',
          href: getPermalink('/locations/sherwood-park-seo'),
        },
        {
          text: 'Spruce Grove SEO',
          href: getPermalink('/locations/spruce-grove-seo'),
        },
        {
          text: 'St. Albert SEO',
          href: getPermalink('/locations/st-albert-seo'),
        },
        {
          text: 'Leduc SEO',
          href: getPermalink('/locations/leduc-seo'),
        },
      ],
    },
  ],
  footNote: `
    <div class="sm:flex gap-80 justify-center items-center">
    <p>Developed by <a href="https://jawebdesign.ca/" class="text-gray-900 dark:text-green-400">J.A Web Design</a>
    </p>
     <p>
    © 2025 J.A Web Design 
    </p>
    </div>
  `,
};
