import Image from "next/image";
import Link from "next/link";
import LandingPageEnhancements from "@/components/landing/LandingPageEnhancements";
import { Bell, CalendarCheck, CheckCircle2, ClipboardList, HeartPulse, ShieldCheck, Smartphone, TrendingUp } from "lucide-react";

const playStoreTestUrl = "https://play.google.com/apps/internaltest/4701588827421408893";

const appFeatures = [
  {
    title: "Book care faster",
    text: "Request appointments, review upcoming sessions, and keep family schedule organized.",
    icon: CalendarCheck,
  },
  {
    title: "Track therapy goals",
    text: "See therapy plans, home guidance, and progress notes without search through messages.",
    icon: TrendingUp,
  },
  {
    title: "Care team updates",
    text: "Receive timely reminders and updates from specialists support your child's neurorehab journey.",
    icon: Bell,
  },
];

export default function DownloadPage() {
  return (
    <main className="app-page">
      <LandingPageEnhancements />
      <header className="landing-header">
        <div className="landing-container landing-nav">
          <Link href="/" className="landing-logo">
            <Image src="/logo.png" alt="GetMyNeurocare logo" width={44} height={44} />
            <span>GetMyNeurocare</span>
          </Link>

          <nav className="landing-links">
            <Link href="/#care">Care</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <Link href="#stores" className="landing-pill landing-pill-green">Get the app</Link>
        </div>
      </header>

      <section className="landing-container app-hero">
        <div className="app-hero-copy">
          <div className="landing-eyebrow">
            <Smartphone size={16} />
            Get the app
          </div>
          <h1>Neuro care in your pocket.</h1>
          <p>
            GetMyNeurocare help families book sessions, follow therapy plans, and keep progress updates close between clinic visits.
          </p>

          <div id="stores" className="app-store-section" aria-label="Download GetMyNeurocare">
            <div className="app-store-badges">
              <span className="app-store-badge-disabled" aria-label="App Store link coming soon">
                <Image src="/app-store-badge.svg" alt="Get it on App Store" width={260} height={82} />
              </span>

              <a href={playStoreTestUrl} target="_blank" rel="noopener noreferrer" aria-label="Get it on Play Store">
                <Image src="/play-store-badge.svg" alt="Get it on Play Store" width={260} height={82} />
              </a>
            </div>

            <a href={playStoreTestUrl} target="_blank" rel="noopener noreferrer" aria-label="Scan or open Play Store internal testing link">
              <Image src="/app-qr.png" alt="QR code for the GetMyNeurocare Play Store internal test" width={240} height={240} className="app-store-qr" />
            </a>
          </div>

        </div>

        <div className="app-hero-card" aria-label="Mobile app benefits preview">
          <div className="app-green-dot app-green-dot-one" />
          <div className="app-green-dot app-green-dot-two" />
          <div className="app-phone-preview">
            <div className="app-phone-top">
              <span>GetMyNeurocare</span>
              <HeartPulse size={22} />
            </div>
            <h2>Today&apos;s care</h2>
            <div className="app-progress-ring">
              <span>78%</span>
              <small>goal progress</small>
            </div>
            <div className="app-preview-list">
              <div><ClipboardList size={18} /><span>Therapy plan updated</span></div>
              <div><CalendarCheck size={18} /><span>Next session Friday</span></div>
              <div><ShieldCheck size={18} /><span>Care team connected</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-container app-section app-feature-section">
        <div>
          <p className="landing-section-label">Why families use it</p>
          <h2>Simple tools for everyday care.</h2>
        </div>
        <div className="app-feature-grid">
          {appFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="app-feature-card">
                <div><Icon size={27} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="landing-container app-split-section">
        <div className="app-plain-panel">
          <p className="landing-section-label">Built around families</p>
          <h2>Less guessing between appointments.</h2>
          <p>
            The app keep the important details visible so caregivers know what happen, what come next, and how to support care at home.
          </p>
        </div>
        <div className="app-check-list">
          {[
            "Appointment reminders",
            "Therapy instructions",
            "Progress summaries",
            "Care team communication",
          ].map((item) => (
            <div key={item}>
              <CheckCircle2 size={22} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="landing-container landing-footer">
        <p>2026 © GetMyNeurocare. All Rights Reserved.</p>
        <div>
          <Link href="/terms">Terms</Link>
          <Link href="/#care">Care</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
