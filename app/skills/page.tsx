import PageHero from '../../components/PageHero';
import SectionTitle from '../../components/SectionTitle';

const groups: Array<[string, string[]]> = [
  ['Creative & Media', ['Vyond', 'Audacity', 'Microlearning video creation', 'Mobile-first storyboarding']],
  ['Design & Strategy', ['Instructional design', 'Adult learning theories', 'Design document / Proof of concept', 'Content writing']],
  ['Collaboration & Delivery', ['Microsoft Visio', 'Training curriculum', 'Training evaluation', 'Change management collateral', 'LMS administration']],
];

export default function Skills() {
  return (
    <>
      <PageHero
        kicker="SKILLS"
        title="Tools, methods & capabilities."
        desc="A practical toolkit spanning instructional design, e-learning development, media creation, training simulations, change management and LMS support."
      />

      <section className="section band">
        <div className="container">
          <SectionTitle eyebrow="CAPABILITIES" title="My toolkit" />

          <div className="skill-groups">
            {groups.map(([title, items]) => (
              <div className="skill-card" key={title}>
                <h3>{title}</h3>

                <div className="chips">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
