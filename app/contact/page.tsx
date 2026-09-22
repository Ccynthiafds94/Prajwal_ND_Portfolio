import PageHero from '../../components/PageHero';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="CONTACT"
        title="Let's build better learning."
        desc="For instructional design, e-learning development, training simulations or learning-project conversations, get in touch."
      />

      <section className="section">
        <div className="container contact-wrap">
          <h2>Start a conversation.</h2>
          <p>Available through email, phone or LinkedIn.</p>

          <div className="contact-links">
            <a href="mailto:prajwal.2912@gmail.com">
              <Mail size={18} /> prajwal.2912@gmail.com
            </a>

            <a href="tel:+919611600846">
              <Phone size={18} /> +91 9611600846
            </a>

            <a href="https://www.linkedin.com/in/prajwal-nd/" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href="/Prajwal-ND-Resume.pdf" download>
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
