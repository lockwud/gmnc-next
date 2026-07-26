import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/landing/ContactForm";
import LandingPageEnhancements from "@/components/landing/LandingPageEnhancements";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CalendarCheck,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Specialist consults",
    text: "Pediatric neuro experts guide care decisions with clear next steps for each child.",
    icon: HeartHandshake,
  },
  {
    title: "Therapy planning",
    text: "Speech, physio, nutrition, and rehab plans stay connected around shared goals.",
    icon: Activity,
  },
  {
    title: "Progress tracking",
    text: "Families and clinicians can follow milestones, notes, and outcomes in one place.",
    icon: BarChart3,
  },
];

const team = [
  { name: "Celestina Nyarko", role: "Speech and Language Therapist", image: "/images/celestina.jpeg" },
  { name: "Dr. Dora Dapaah", role: "Pediatric Specialist", image: "/images/dora.jpeg", position: "center top" },
  { name: "Dr. Rosemond Kokuro", role: "Paediatrician", image: "/images/drRosemond.jpeg", position: "center top" },
  { name: "Thomas Quaye Dodzi", role: "Physiotherapist", image: "/images/thomas.jpeg", position: "center top" },
  { name: "Pearl Exonam Selormey", role: "Dietitian Nutritionist", image: "/images/salormey.jpeg", position: "center top" },
];

export default function RootPage() {
  return (
    <main className="landing-page">
      <LandingPageEnhancements />
      <header className="landing-header">
        <div className="landing-container landing-nav">
          <Link href="/" className="landing-logo">
            <Image src="/logo.png" alt="Get My Neuro Care logo" width={44} height={44} />
            <span>Get My Neuro Care</span>
          </Link>

          <nav className="landing-links">
            <Link href="#care">Care</Link>
            <Link href="#services">Services</Link>
            <Link href="#ai-chat">AI Chat</Link>
            <Link href="#team">Team</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link href="/download" className="landing-pill landing-pill-green">Start care</Link>
        </div>
      </header>

      <section className="landing-container landing-hero">
        <div className="landing-hero-copy">
          <div className="landing-eyebrow">
            <Sparkles size={16} />
            GetMyNeurocare
          </div>
          <h1>Neuro care that feels simple.</h1>
          <p>
            Get My Neuro Care connects families with pediatric neurorehabilitation specialists, therapy plans, and progress tracking without the heavy clinical back-and-forth.
          </p>
          <div className="landing-actions">
            <Link href="#contact" className="landing-button landing-button-dark">
              Get started <ArrowRight size={17} />
            </Link>
            <Link href="#services" className="landing-button landing-button-light">See services</Link>
          </div>
        </div>

        <div className="landing-hero-art" aria-label="Neurorehabilitation care preview">
          <div className="landing-blob landing-blob-large" />
          <div className="landing-blob landing-blob-small" />
          <div className="landing-phone-card">
            <div className="landing-photo-frame">
              <Image src="/images/ne5.jpg" alt="Child undergoing neurorehabilitation care" fill priority className="landing-cover-image" />
              <div className="landing-photo-fade" />
            </div>
          </div>
        </div>
      </section>

      <section className="landing-container landing-benefits" aria-label="Key benefits">
        {[
          ["One care plan", "Families and clinicians aligned"],
          ["Fast consults", "Specialist guidance sooner"],
          ["Clear tracking", "Milestones made visible"],
          ["Family support", "Care continues at home"],
        ].map(([title, text]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </section>

      <section id="care" className="landing-container landing-care-section">
        <div>
          <p className="landing-section-label">Built for neurorehab</p>
          <h2>Less admin. More focused care.</h2>
        </div>
        <div className="landing-care-cards">
          <article className="landing-soft-card">
            <ShieldCheck size={34} />
            <h3>Trusted clinical workflows</h3>
            <p>Assessments, therapy notes, caregiver guidance, and follow-ups stay organized around the child.</p>
          </article>
          <article className="landing-green-card">
            <CalendarCheck size={34} />
            <h3>A simpler next step</h3>
            <p>Start with a consultation, align the care team, and keep progress visible from session to session.</p>
          </article>
        </div>
      </section>

      <section id="services" className="landing-container landing-panel">
        <div className="landing-section-head">
          <div>
            <p className="landing-section-label">Services</p>
            <h2>Care in three parts</h2>
          </div>
          <p>A compact model for families who need expert support, practical therapy planning, and visible outcomes.</p>
        </div>
        <div className="landing-service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="landing-service-card">
                <div><Icon size={26} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="ai-chat" className="landing-container landing-ai-section">
        <div className="landing-ai-copy">
          <p className="landing-section-label">Gemini-powered chat</p>
          <h2>Quick answers before the next appointment.</h2>
          <p>
            The in-app AI chatbot helps families understand care instructions, prepare questions, and get simple guidance on using GetMyNeurocare. It supports the care journey without replacing a clinician.
          </p>
          <div className="landing-ai-points">
            <span>Explains therapy instructions in plain language</span>
            <span>Helps prepare questions for specialists</span>
            <span>Guides families around app features and next steps</span>
          </div>
        </div>

        <div className="landing-ai-preview" aria-label="AI chatbot preview">
          <div className="landing-ai-preview-top">
            <span>GetMyNeurocare AI</span>
            <Sparkles size={18} />
          </div>
          <div className="landing-chat-bubble landing-chat-bubble-user">How do I prepare for my child&apos;s next therapy review?</div>
          <div className="landing-chat-bubble landing-chat-bubble-ai">
            Bring recent progress notes, list any changes you noticed at home, and write down questions for the specialist. If symptoms feel urgent, contact your clinician directly.
          </div>
          <div className="landing-ai-input">
            Ask about care steps...
            <MessageCircle size={18} />
          </div>
        </div>
      </section>

      <section id="team" className="landing-container landing-team-section">
        <div className="landing-team-intro">
          <p className="landing-section-label">Specialists</p>
          <h2>A focused multidisciplinary team.</h2>
          <p>Speech therapy, pediatrics, physiotherapy, and nutrition support work together for practical neurorehabilitation care.</p>
        </div>
        <div className="landing-team-orbit" aria-label="GetMyNeurocare specialist team">
          <div className="landing-team-center">
            <span>5</span>
            <small>care specialists</small>
          </div>
          <div className="landing-orbit-track">
            {team.map((member, index) => (
              <div key={member.name} className={`landing-orbit-member landing-orbit-member-${index + 1}`}>
                <div className="landing-orbit-photo">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="landing-cover-image"
                    style={member.position ? { objectPosition: member.position } : undefined}
                  />
                </div>
                <span>{member.name}</span>
                <small>{member.role}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="landing-container landing-contact">
        <div>
          <p className="landing-section-label">Start here</p>
          <h2>Leave us a message and we&apos;ll help with the next step.</h2>
        </div>
        <div className="landing-contact-panel">
          <ContactForm />

          <div className="landing-contact-actions">
            <Link href="mailto:support@getmyneurocare.com">
              support@getmyneurocare.com <MessageCircle size={20} />
            </Link>
            <Link href="tel:+233548599553">
              +233 54 859 9553 <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="landing-container landing-footer">
        <p>2026 © Get My Neuro Care. All Rights Reserved.</p>
        <div>
          <Link href="/terms">Terms</Link>
          <Link href="#care">Care</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
