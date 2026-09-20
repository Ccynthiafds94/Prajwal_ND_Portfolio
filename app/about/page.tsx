import PageHero from '../../components/PageHero';
import SectionTitle from '../../components/SectionTitle';
import { Lightbulb, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <>
      <PageHero
        kicker="ABOUT ME"
        title="Designing learning that feels simple."
        desc="Passionate about building simple and visually appealing products for learners and businesses. Creative, resourceful, adaptable, and positive when priorities change."
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="APPROACH" title="How I work" />

          <div className="cards">
            <div className="card">
              <Lightbulb color="var(--accent)" />
              <h3>Creative thinking</h3>
              <p>
                Transforming requirements and subject-matter inputs into clear, engaging
                learning experiences.
              </p>
            </div>

            <div className="card">
              <Users color="var(--accent)" />
              <h3>Collaboration</h3>
              <p>
                Working closely with SMEs, L&D teams and stakeholders to gather feedback
                and build effective materials.
              </p>
            </div>

            <div className="card">
              <Target color="var(--accent)" />
              <h3>Learning focused</h3>
              <p>
                Keeping objectives, assessments, simulations and learner needs aligned
                throughout development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
