export const paletteTokens = [
  { name: 'Primary dark maroon', key: 'brand.primary', value: '#5F2138', swatchClass: 'bg-brand-primary', textClass: 'text-semantic-canvas' },
  { name: 'Secondary maroon', key: 'brand.secondary', value: '#61253B', swatchClass: 'bg-brand-secondary', textClass: 'text-semantic-canvas' },
  { name: 'Muted accent / smoky rose', key: 'brand.muted', value: '#8E6874', swatchClass: 'bg-brand-muted', textClass: 'text-semantic-canvas' },
  { name: 'Soft neutral / almond silk', key: 'brand.almond', value: '#D6C4C4', swatchClass: 'bg-brand-almond', textClass: 'text-semantic-textPrimary' },
  { name: 'Main background / white smoke', key: 'brand.smoke', value: '#F8F5F4', swatchClass: 'bg-brand-smoke', textClass: 'text-semantic-textPrimary' },
] as const

export const semanticColorTokens = [
  { name: 'Canvas background', key: 'semantic.canvas', className: 'bg-semantic-canvas text-semantic-textPrimary' },
  { name: 'Surface background', key: 'semantic.surface', className: 'bg-semantic-surface text-semantic-textPrimary' },
  { name: 'Muted surface', key: 'semantic.surfaceMuted', className: 'bg-semantic-surfaceMuted text-semantic-textPrimary' },
  { name: 'Primary text', key: 'semantic.textPrimary', className: 'bg-brand-primary text-semantic-canvas' },
  { name: 'Secondary text', key: 'semantic.textSecondary', className: 'bg-brand-secondary text-semantic-canvas' },
  { name: 'Muted text', key: 'semantic.textMuted', className: 'bg-brand-muted text-semantic-canvas' },
  { name: 'Soft border', key: 'semantic.borderSoft', className: 'bg-semantic-borderSoft text-semantic-textPrimary' },
  { name: 'Strong border / focus', key: 'semantic.borderStrong', className: 'bg-semantic-borderStrong text-semantic-canvas' },
] as const

export const typographyTokens = [
  { name: 'Display', className: 'type-display', preview: 'Muslim leadership rooted in service and scholarship' },
  { name: 'Heading 1', className: 'type-h1', preview: 'Design system title hierarchy' },
  { name: 'Heading 2', className: 'type-h2', preview: 'Section hierarchy for institutional content' },
  { name: 'Heading 3', className: 'type-h3', preview: 'Subsection hierarchy and card titles' },
  { name: 'Body Large', className: 'type-body-lg', preview: 'Readable narrative text for project intros and mission context.' },
  { name: 'Body', className: 'type-body', preview: 'Default body copy for paragraphs, labels, and standard informational text.' },
  { name: 'Muted / Helper', className: 'type-muted', preview: 'Supportive helper copy, timestamps, captions, and metadata.' },
] as const

export const spacingTokens = ['1rem', '1.5rem', '2rem', '3rem', '4.5rem'] as const
