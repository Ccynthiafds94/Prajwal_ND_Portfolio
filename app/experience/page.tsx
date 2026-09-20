import PageHero from '../../components/PageHero';
import SectionTitle from '../../components/SectionTitle';

const jobs: Array<[string, string, string, string[]]> = [
  [
    'Lead Instructional Designer',
    'ArisGlobal Software Pvt Ltd',
    'January 2022 – Present',
    [
      'Support change management collateral development, including change impact analysis, readiness surveys, communications and engagement materials.',
      'Structure, review and validate deliverables, analysis and recommendations.',
      'Lead training collateral development for ILTs, WBTs and nano-learning videos, including curriculum and training evaluation.',
      'Create industry-standard process training simulation courses for Pharma clients using Articulate Storyline/Rise 360.',
      'Plan and manage training projects for large-scale transformations and ensure timely delivery.',
      'Support and maintain LMS activities using SuccessFactors/UberFlip.',
    ],
  ],
  [
    'Principal Consultant',
    'ArisGlobal Software Pvt Ltd',
    'Sept 2021 – Dec 2021',
    ['Previous position held before moving into the Lead Instructional Designer role.'],
  ],
  [
    'Senior Consultant',
    'ArisGlobal Software Pvt Ltd',
    'Aug 2020 – Aug 2021',
    ['Previous position held before the Principal Consultant role.'],
  ],
  [
    'Associate Instructional Design',
    'Tesco Bengaluru Pvt Ltd',
    'Feb 2019 – Aug 2020',
    [
      'Created learning modules for colleagues across Bengaluru, UK and the rest of the world using Articulate 360 and Elucidat.',
      'Created training decks for existing and upcoming People Services, Transformation and Change Management processes.',
      'Created and revised self-serve knowledge-base articles.',
      'Supported and maintained LMS activities using Moodle/SkillCast.',
      'Created and hosted assessments via Storyline 360 for internal teams.',
    ],
  ],
  [
    'Associate Instructional Design',
    'ExcelSoft Technologies Pvt Ltd',
    'Dec 2016 – Feb 2019',
    [
      'Managed projects through the development process while ensuring instructional integrity.',
      'Developed training solutions using prescribed tools.',
      'Developed learning material for BFSI, Corporate, K-12, Central Government, Higher Education, Healthcare, Manufacturing and Pharmaceutical sectors.',
      'Helped a Central Government Organization plan and launch its PAN India distance outreach programme.',
    ],
  ],
  [
    'Trainee Instructional Designer',
    'Creative Works Studio',
    'Jul 2015 – Dec 2016',
    [
      'Analysed requirements from clients and SMEs to achieve learning goals.',
      'Developed objectives aligned with content, created assessments and quizzes.',
      'Built effective working relationships with Subject Matter Experts to gather information and feedback.',
    ],
  ],
];

export default function Experience() {
  return (
    <>
      <PageHero
        kicker="EXPERIENCE"
        title="From requirements to learning."
        desc="A career across instructional design, e-learning development, training simulations, project delivery and change-management support."
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="CAREER TIMELINE" title="Work experience" />

          <div className="timeline">
            {jobs.map(([role, company, period, duties]) => (
              <div className="timeline-item" key={`${role}-${company}-${period}`}>
                <div className="dot" />

                <article className="exp">
                  <div className="exp-head">
                    <div>
                      <h3>{role}</h3>
                      <div className="company">{company}</div>
                    </div>

                    <div className="period">{period}</div>
                  </div>

                  <ul>
                    {duties.map((duty) => (
                      <li key={duty}>{duty}</li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
