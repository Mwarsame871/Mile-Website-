import { Link, useNavigate } from 'react-router-dom'
import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { ResponsiveGrid } from '../components/layout/ResponsiveGrid'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/Button'
import { Callout } from '../components/ui/Callout'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TextLink } from '../components/ui/TextLink'

export function FinancialAidPage() {
  const navigate = useNavigate()

  const nextSteps = [
    {
      title: 'Documents & Legal',
      description: 'Review paperwork basics and status-related guidance.',
      to: '/documents-legal',
      tone: 'rose' as const,
    },
    {
      title: 'Start Here',
      description: 'Return to the beginner roadmap and checklist.',
      to: '/start-here',
      tone: 'default' as const,
    },
    {
      title: 'Resources',
      description: 'Browse trusted links, tools, and official resource pathways.',
      to: '/resources',
      tone: 'rose' as const,
    },
  ]

  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Financial Aid"
        description="This page helps you understand how to pay for college and what aid options may be available to you."
        tone="rose"
      />

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading eyebrow="Intro" title="Financial aid can be a confusing process for refugee families." />
          <p className="type-body max-w-prose">
            Financial aid can be a confusing process for refugee families. Below is some
            general information, common questions, and resources that can be used to
            navigate this process.
          </p>
          <Callout>
            <p className="type-body">
              *All of the following information was obtained and verified by professionals
              within the UVA financial office, as well as online materials. If you have
              questions or would like to research yourself, please see our Additional
              Resources section.*
            </p>
          </Callout>
          <Card tone="rose" className="space-y-2 p-5 md:p-6">
            <p className="text-sm font-semibold text-semantic-textPrimary">Student story</p>
            <p className="type-body max-w-prose">
              After two years, she applied to transfer to a selective four-year university in Virginia and was accepted. While that moment marked a major achievement, it did not immediately lead to enrollment. “I had to delay my acceptance,” she explains, describing how the financial aid package she initially received left a significant gap. Despite her family living in Virginia for several years—paying taxes and owning a home—her immigration status made the process far more complicated. Abi is currently in the United States on a visa and is in the process of applying for permanent residency, but delays in that process have affected what she qualifies for. She notes that recent federal policy changes have placed restrictions and additional scrutiny on individuals from certain countries, slowing down visa and residency processing for many students in similar situations.
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Financial Aid Requirements & Status"
            title="Financial Aid Requirements & Status"
          />
          <p className="type-body max-w-prose">
            For refugee families, the largest factor in obtaining governmental financial
            aid is obtaining the Arrival-Departure Record (I-94). Families must have an
            approved status before applying for financial aid, and any pending statuses
            may impede their ability to get financial aid. Changing statuses, such as a
            status pending between refugee status and permanent resident status, can still
            impede governmental assistance while in college. Any unapproved green cards
            must be approved before the admission is processed.
          </p>
          <ResponsiveGrid columns={2}>
            <Card className="space-y-2">
              <p className="type-body">
                Refugees/Asylees: status has to be an approved status, BASE application,
                financial aid, etc. needs approved status I-94 needs to say approved
                refugee/asylee. Federal government has criteria for that. Very formalized
                and dependent on homeland security
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">
                Often get questions from families about unapproved green cards, but needs
                to be fully done before admissions is processed
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">
                Citizen status CHANGE after coming to UVA, going into a pending status
              </p>
            </Card>
            <Card className="space-y-2">
              <p className="type-body">
                Eligible status of refugee to permanent resident may affect eligibility
              </p>
            </Card>
            <Card className="space-y-2 md:col-span-2">
              <p className="type-body">Financial aid and status can be very case by case</p>
            </Card>
          </ResponsiveGrid>
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Abi’s financial aid experience
            </p>
            <p className="type-body max-w-prose">
              Because she is not yet a permanent resident, Abi could not complete the FAFSA, which is the primary pathway for federal financial aid. Instead, she had to navigate alternatives like the Virginia Alternative State Aid (VASA) application and the CSS Profile. “It was a lot,” she says, emphasizing how overwhelming the process felt. While VASA allowed her to still be considered for need-based aid, it did not fully replace FAFSA, and understanding what to do—and when—was not always clear. Even something as fundamental as qualifying for in-state tuition at her community college took time. “I only got in-state near the end,” she explains, describing a long and detailed process that required her to prove strong ties to Virginia while being on a temporary visa.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="UVA Financial Aid and Residency"
            title="UVA Financial Aid and Residency"
          />
          <h3 className="type-h3">Does UVA Financial Assistance Depend on my In-State Eligibility?</h3>
          <p className="type-body max-w-prose">
            UVA meets 100% of demonstrated financial aid for both in-state and
            out-of-state students. In-state eligibility would come into play in the case
            that the student is not eligible for federal aid, in which case they would be
            obtaining state aid. Financial aid can also be on a case-by-case basis,
            depending on factors like residence approval.
          </p>
          <p className="type-body max-w-prose">
            Residency isn’t entirely tied to admissions, and students unsure of their
            residency status are still encouraged to apply.
          </p>
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">Student story</p>
            <p className="type-body max-w-prose">
              After reaching out and asking more questions about her situation, Abi says she received reassurance from the university that they aim to meet 100% of demonstrated financial need, even for students applying through alternative pathways like VASA and CSS. “That gave me hope,” she explains. With that clarity, she moved forward with submitting updated financial aid materials, now with a better understanding of how her need would be evaluated.
            </p>
          </Callout>
          <ResponsiveGrid columns={2}>
            <Card className="space-y-2">
              <p className="type-body">
                Because UVA is 100% need institution, in state and out of state doesn’t
                matter regardless your need will be met.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">
                In state eligibility comes into play if you are not eligble for federal
                aid. The only way to receive need based at UVA then is to get in state
                for VESA doc.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">
                Application for refugees and citizens and review process is all the same.
                Invisible barriers, students not feeling like they can come to UVA or
                belong here. Office is doing more with VA highschools to dispel these
                myths.
              </p>
            </Card>
            <Card className="space-y-2">
              <p className="type-body">
                Residency is separate from admission in some ways – even if a student
                isn’t totally sure of residency status they can still apply to UVA
              </p>
            </Card>
            <Card className="space-y-2 md:col-span-2">
              <p className="type-body">
                Questions around Virginia status/residency – at UVA residency is
                determined by suboffice in admissions, office of Virginia status, Virginia
                requirement websites can be accessed to ensure if status.
              </p>
              <TextLink href="https://www.schev.edu/financial-aid/in-state-residency/guidelines-for-in-state-residency-tuition">
                SCHEV guidelines for in-state residency & tuition:
                https://www.schev.edu/financial-aid/in-state-residency/guidelines-for-in-state-residency-tuition
              </TextLink>
            </Card>
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Notes from Interviews & Key Insights"
            title="Notes from Interviews & Key Insights"
          />
          <div className="space-y-3">
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">Financial aid and status can be very case by case</p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">
                Financial aid is met current 100% of need, eligibility check process
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">
                Application for refugees and citizens and review process is all the same.
                Invisible barriers, students not feeling like they can come to UVA or
                belong here. Office is doing more with VA highschools to dispel these
                myths.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">
                Student feedback: some international students feel support system. Current
                climate.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">
                Students going through legal aid justice center, UVA law has an
                immigration clinic, community resource.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">Multicultural center, ISO, etc.</p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">Specific to financially eligible families.</p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">
                Guidance can change frequently so just keep up with the website.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">They can look over website before we finish</p>
            </Card>
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading eyebrow="Scholarships" title="Scholarships" />
          <p className="type-body max-w-prose">
            Outside of financial assistance from the university or federal government, to
            need need-based aid, many private scholarships are offered to support
            low-income students. These scholarships want to hear refugee stories, and it
            is crucial that during applications, your personal story is emphasized so that
            your application truly represents your needs. Below are large national
            programs that prioritize low-income Americans:
          </p>
          <div className="space-y-3">
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">• QuestBridge Scholarship</p>
              <p className="type-body">
                • The QuestBridge National College Match is a highly selective scholarship
                program that connects high-achieving, low-income students with full
                four-year scholarships at top colleges and universities in the United
                States. Because the application is detailed and asks students to share
                personal experiences, applicants may want to take advantage of the
                additional writing space provided. Refugee and immigrant students often
                have unique educational paths or life experiences that may not fit neatly
                into traditional application categories. Using the essay sections to
                provide more context about your background, challenges, and goals can help
                admissions officers better understand your journey. While sharing personal
                experiences can sometimes feel uncomfortable, providing context about your
                story can strengthen your application and highlight the resilience,
                leadership, and determination that many refugee students bring to their
                academic goals.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">• The Dream US Scholarship</p>
              <p className="type-body">
                • A renewable scholarship for immigrant students, including many DACA or
                TPS recipients. It can cover tuition and fees and may also provide support
                for books and transportation.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">• Paul & Daisy Soros Fellowship for New Americans</p>
              <p className="type-body">
                • A highly competitive scholarship for immigrants, refugees, and children
                of immigrants pursuing graduate degrees. Fellows can receive up to $90,000
                over two years to help cover tuition and living expenses.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">• Western Union Foundation Global Scholarship</p>
              <p className="type-body">
                • Scholarships for international students, migrants, and refugees studying
                in fields such as business, technology, or engineering.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">• Esperanza Education Fund</p>
              <p className="type-body">
                • Scholarships for students born outside the United States or whose
                parents were born outside the U.S. Students in Washington D.C., Maryland,
                or Virginia may receive awards ranging from $5,000 to $20,000, along with
                mentorship opportunities.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">• UNHCR Opportunities Portal</p>
              <p className="type-body">
                • The UNHCR Opportunities Portal is an online platform that helps refugees
                find verified scholarships, university programs, and training
                opportunities around the world. The portal allows students to search for
                programs based on their country, field of study, or level of education.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">• InspirASIAN</p>
              <p className="type-body">
                • InspirASIAN makes a difference in our community by supporting graduating
                high school seniors with their college education through our scholarship
                awards. InspirASIAN awards national scholarships to students residing in
                any state with a participating local InspirASIAN chapter. All students who
                apply will be considered for the national scholarship awards. Students who
                are not awarded national scholarships will be considered for state
                scholarships if offered by local InspirASIAN chapters.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2 p-5 md:p-6">
              <p className="type-body">• IIE Odyssey Scholarship</p>
              <p className="type-body">
                • The IIE Odyssey Scholarship is a comprehensive scholarship for student
                refugees and displaced individuals. The scholarship covers tuition, housing
                and living expenses for students pursuing associate’s, bachelor’s, or
                master’s degrees, as well as advising services, community support and
                practical resources they may need along their journey.
              </p>
            </Card>
            <Card className="space-y-2 p-5 md:p-6">
              <p className="type-body">• Dell Scholars</p>
              <p className="type-body">
                • Dell Scholars is a scholarship program for Pell grant-eligible students
                that provides students with $20,000 in scholarship funds to be used on
                tuition, housing, and other related expenses. Since its beginning, the
                Dell Foundation has supported over 6,000 scholars.
              </p>
            </Card>
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Programs & Pathways"
            title="Programs & Pathways"
          />
          <ResponsiveGrid columns={2}>
            <Card className="space-y-2">
              <p className="type-body">
                Virginia Counseling Cohort can come for questions about admissions.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">Local highschools have pathway advisors.</p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">Advise Virginia.</p>
            </Card>
            <Card className="space-y-2">
              <p className="type-body">Community College Pathways.</p>
            </Card>
            <Card className="space-y-2">
              <p className="type-body">
                Piedmont CC has enrollment staff to help students interested in
                transferring.
              </p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">Guaranteed admissions through transfer pathway.</p>
            </Card>
            <Card className="space-y-2">
              <p className="type-body">A team that supports that pathway.</p>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="type-body">
                Non traditional students as well – starting colleges somewhere else.
              </p>
            </Card>
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Additional Resources"
            title="Additional Resources"
          />
          <ResponsiveGrid columns={3}>
            <Card className="space-y-3">
              <h3 className="type-h3">Official resource</h3>
              <TextLink href="https://studentaid.gov/understand-aid/eligibility/requirements">
                https://studentaid.gov/understand-aid/eligibility/requirements
              </TextLink>
            </Card>
            <Card tone="rose" className="space-y-3">
              <h3 className="type-h3">Official resource</h3>
              <TextLink href="https://www.schev.edu/financial-aid/in-state-residency/guidelines-for-in-state-residency-tuition">
                SCHEV guidelines for in-state residency & tuition:
                https://www.schev.edu/financial-aid/in-state-residency/guidelines-for-in-state-residency-tuition
              </TextLink>
            </Card>
            <Card className="space-y-3">
              <h3 className="type-h3">Community resource reference</h3>
              <p className="type-body">
                CVille tulips – afghan and Syrian refugees, first community resource for
                many families
              </p>
            </Card>
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Decision Paths"
            title="If this is your situation, start here"
            description="Use these quick paths to decide your next action."
          />
          <ResponsiveGrid columns={3}>
            <Card className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">
                Pending status or unclear eligibility
              </p>
              <p className="type-body">
                Review the eligibility section on this page, then use Documents & Legal to organize required records.
              </p>
              <TextLink href="#/documents-legal">Open Documents & Legal</TextLink>
            </Card>
            <Card tone="rose" className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">
                Missing financial forms or deadlines
              </p>
              <p className="type-body">
                Start with official aid requirements and track due dates before submitting applications.
              </p>
              <TextLink href="https://studentaid.gov/understand-aid/eligibility/requirements">
                Open official aid requirements
              </TextLink>
            </Card>
            <Card className="space-y-2">
              <p className="text-sm font-semibold text-semantic-textPrimary">
                Need scholarship options now
              </p>
              <p className="type-body">
                Use the scholarship list on this page, then continue in Resources for additional program links.
              </p>
              <TextLink href="#/resources">Open Resources</TextLink>
            </Card>
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading eyebrow="Closing Note" title="Closing Note" />
          <Callout>
            <p className="type-body">
              Financial aid and status can be very case by case
            </p>
            <p className="type-body">
              As frequently as I can direct users to official websites for guidance.
            </p>
            <p className="type-body">Guidance can change frequently so just keep up with the website.</p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Next Steps"
            title="Continue with related guide sections"
            action={
              <div className="flex flex-wrap gap-2.5">
                <Button onClick={() => navigate('/documents-legal')}>Documents & Legal</Button>
                <Button variant="secondary" onClick={() => navigate('/start-here')}>
                  Start Here
                </Button>
                <Button variant="ghost" onClick={() => navigate('/resources')}>
                  Resources
                </Button>
              </div>
            }
          />
          <ResponsiveGrid columns={3}>
            {nextSteps.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas"
              >
                <Card
                  tone={item.tone}
                  className="h-full space-y-3 transition-colors group-hover:border-semantic-borderStrong/70"
                >
                  <h3 className="type-h3">{item.title}</h3>
                  <p className="type-body">{item.description}</p>
                  <p className="type-muted">Open section</p>
                </Card>
              </Link>
            ))}
          </ResponsiveGrid>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
