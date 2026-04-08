import { ContentSection } from '../components/layout/ContentSection'
import { PageHeaderBlock } from '../components/layout/PageHeaderBlock'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Callout } from '../components/ui/Callout'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function DocumentsLegalPage() {
  return (
    <div className="space-y-4">
      <PageHeaderBlock
        title="Documents & Legal"
        description="This page helps you understand which documents may be needed when applying to college and what to do if you are missing documents."
        tone="almond"
      />

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Intro"
            title="Documents Required for Refugees Applying to University or College"
            description="Refugees applying to universities or colleges are generally required to submit a range of documents. While requirements vary depending on the country and institution, the following are the most commonly requested materials:"
          />
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Academic Documents"
            title="Academic Documents"
          />
          <Card className="space-y-2">
            <p className="type-body">• High school transcripts or records of previous education</p>
            <p className="type-body">• Diploma or certificate of graduation (high school or equivalent)</p>
            <p className="type-body">• Transcripts from any college or university attended (if applicable)</p>
            <p className="type-body">
              • Credential evaluation (in some countries, foreign qualifications may need to be assessed)
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            title="Proof of Identity and Legal Status"
          />
          <Card tone="rose" className="space-y-2">
            <p className="type-body">• Passport or national identification (if available)</p>
            <p className="type-body">• Refugee or asylum documentation, such as:</p>
            <p className="type-body">o Refugee status approval letter</p>
            <p className="type-body">o Asylum seeker documentation</p>
            <p className="type-body">o UNHCR registration documents</p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Application Materials"
            title="Application Materials"
          />
          <Card className="space-y-2">
            <p className="type-body">• Completed application form (online or paper)</p>
            <p className="type-body">• Personal statement or admissions essay</p>
            <p className="type-body">• Letters of recommendation (usually from teachers or mentors)</p>
            <p className="type-body">• Resume or curriculum vitae (CV), if required</p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading
            eyebrow="Language Proficiency (if applicable)"
            title="Language Proficiency (if applicable)"
          />
          <Card tone="rose" className="space-y-2">
            <p className="type-body">
              • Proof of proficiency in the language of instruction (e.g., English)
            </p>
            <p className="type-body">
              • Standardized test scores such as TOEFL or IELTS (may be waived in some cases)
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            eyebrow="Financial and Scholarship Documents"
            title="Financial and Scholarship Documents"
          />
          <Card className="space-y-2">
            <p className="type-body">• Scholarship or financial aid applications</p>
            <p className="type-body">• Proof of financial need (if applying for aid)</p>
            <p className="type-body">
              • Documentation for refugee-specific scholarships or support programs
            </p>
          </Card>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="rose">
        <SectionWrapper tone="rose">
          <SectionHeading
            eyebrow="Alternative Options for Missing Documents"
            title="Alternative Options for Missing Documents"
          />
          <Callout>
            <p className="type-body">
              Many refugees may not have access to all required documents. In such cases, some universities may accept:
            </p>
            <p className="type-body">• Placement tests or entrance exams</p>
            <p className="type-body">• Interviews instead of transcripts</p>
            <p className="type-body">• Written explanations for missing documents</p>
            <p className="type-body">• Enrollment in foundation or bridging programs</p>
          </Callout>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading
            title="College Applications for Refugee Students"
          />
          <div className="space-y-4">
            <p className="type-body max-w-prose">
              For refugees and asylees applying to colleges in Virginia, the admissions process is generally the same as for all other students, but there are a few important things to keep in mind when preparing your application. Colleges like University of Virginia review applications holistically, meaning they consider your grades, experiences, background, and personal story together—not just test scores or GPA.
            </p>
            <p className="type-body max-w-prose">
              Your application is your opportunity to explain your journey clearly and confidently. If you have experienced interruptions in your education, changes in schooling systems, or challenges related to displacement, you should briefly explain these in your application. This can be done in the “Additional Information” section or your personal essay. Admissions officers are trained to understand that refugee students may not have had the same opportunities or consistent records as others.
            </p>
            <p className="type-body max-w-prose">
              It is important that your academic records are as complete as possible. If transcripts are missing or difficult to obtain, you should communicate this directly to the admissions office. Many schools will work with you on alternative documentation or evaluation methods. Some students may also choose to start at a community college such as Piedmont Virginia Community College and later transfer through established pathways, which can make the transition into a four-year university smoother.
            </p>
            <p className="type-body max-w-prose">
              Your personal statement (essay) is especially important. This is where you can share your experiences, strengths, and goals. Focus on your resilience, adaptability, and what you hope to achieve through higher education. Avoid feeling like you must tell your entire story—choose a few meaningful experiences and explain how they shaped you.
            </p>
            <p className="type-body max-w-prose">
              You should also be aware that application requirements can vary by school, and policies may change. It is strongly recommended to check official admissions websites regularly for the most up-to-date information. Programs like Advise Virginia and local high school counselors can help guide you through the process and answer questions.
            </p>
            <p className="type-body max-w-prose">
              Finally, many refugee students feel uncertain about whether they belong at selective universities. These concerns are common, but colleges in Virginia are actively working to support students from diverse and nontraditional backgrounds. There are also transfer pathways, support programs, and campus organizations that help students succeed once they enroll.
            </p>
            <p className="type-body max-w-prose">
              Overall, while the application process is standardized, each student’s situation is unique. Taking the time to clearly present your experiences and staying informed through official resources will give you the best chance of success.
            </p>
          </div>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="almond">
        <SectionWrapper tone="almond">
          <SectionHeading eyebrow="Conclusion" title="Conclusion" />
          <p className="type-body max-w-prose">
            Although documentation requirements can vary, many universities offer flexible admission pathways for refugees. Applicants are encouraged to contact admissions offices directly to explore available options and support services.
          </p>
        </SectionWrapper>
      </ContentSection>

      <ContentSection tone="default">
        <SectionWrapper tone="default">
          <SectionHeading eyebrow="Important Note" title="Important Note" />
          <Callout>
            <p className="text-sm font-semibold text-semantic-textPrimary">
              Policies and requirements can change, and every situation is different. Always confirm with official sources.
            </p>
          </Callout>
        </SectionWrapper>
      </ContentSection>
    </div>
  )
}
