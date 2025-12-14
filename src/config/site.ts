// Site configuration
export const SITE = {
  title: 'Master Ken',
  description: '-- Put Small Description Blurb --',
  url: 'https://philliams.github.io/master_ken',
  author: 'Master ken',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Traditional Martial Arts', href: '/traditional_martial_arts' },
  { name: 'Mixed Martial Arts', href: '/mixed_martial_arts' },
  { name: 'Fitness', href: '/personal_fitness'},
  { name: 'Child Programs', href: '/child_programs' },
  { name: 'About', href: '/about'}
  // { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

