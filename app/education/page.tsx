import PageHero from '../../components/PageHero';
import SectionTitle from '../../components/SectionTitle';

export default function Education() {
  return (
    <>
      <PageHero
        kicker="EDUCATION"
        title="A technical foundation for learning design."
        desc="Combining an engineering background with formal instructional-design education to bridge technology, content and learner experience."
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="ACADEMIC JOURNEY" title="Education" />

          <div className="edu">
            <div className="edu-card">
              <div className="edu-year">2022 · PURSUING</div>
              <h3>Post Graduate Diploma in Instructional Design (PGDID)</h3>
              <p>Symbiosis Centre for Distance Learning</p>
            </div>

            <div className="edu-card">
              <div className="edu-year">2011 – 2015</div>
              <h3>Bachelor's in Computer Science and Engineering (BE)</h3>
              <p>The National Institute of Engineering</p>
            </div>

            <div className="edu-card">
              <div className="edu-year">2009 – 2011</div>
              <h3>Pre-University</h3>
              <p>St. Joseph’s Pre-University College, Mysuru</p>
            </div>

            <div className="edu-card">
              <div className="edu-year">2009</div>
              <h3>High School</h3>
              <p>St. Joseph’s High School, Mysuru</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
