import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Prajwal N D | Instructional Design Manager',
  description: 'Portfolio of Prajwal N D — Instructional Design Manager, e-learning development (Articulate Storyline 360), Storyboarding, Content Writing, Technical Training simulations, Needs Analysis, Organizational Change Management(OCM), and WellSaid Labs AI.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Prajwal N D</span>
            <span>Instructional Design Manager</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
