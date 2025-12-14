// Site configuration
export const SITE = {
  title: 'Master Ken',
  description: '-- Put Small Description Blurb --',
  url: 'https://philliams.github.io/master_ken',
  author: 'Master ken',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Traditional Martial Arts', href: '/master_ken/traditional_martial_arts' },
  { name: 'Mixed Martial Arts', href: '/master_ken/mixed_martial_arts' },
  { name: 'Fitness', href: '/master_ken/personal_fitness'},
  { name: 'Child Programs', href: '/master_ken/child_programs' },
  { name: 'About', href: '/master_ken/about'}
  // { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

