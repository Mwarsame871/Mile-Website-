import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card } from '../components/ui/Card'

interface PlaceholderPageProps {
  title: string
  description: string
  headerTone?: 'rose' | 'almond'
  sectionTone?: 'default' | 'almond' | 'rose'
}

export function PlaceholderPage({
  title,
  description,
  headerTone = 'rose',
  sectionTone = 'default',
}: PlaceholderPageProps) {
  return (
    <div className="space-y-4">
      <PageHeaderBlock title={title} description={description} tone={headerTone} />
      <ContentSection tone={sectionTone}>
        <SectionWrapper tone={sectionTone}>
          <Card tone="rose" className="space-y-2 p-5 md:p-6">
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Placeholder Preview
            </p>
            <p className="type-body max-w-prose">
              Full content for this section is intentionally pending. This placeholder
              keeps the navigation and shell structure ready for the next build phase.
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
