'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-orb orb-a" />
      <div className="bg-orb orb-b" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="GlucoBit home">
          <Image
            src="/glucobit-logo.png"
            alt="GlucoBit logo"
            className="brand-logo"
            width={50}
            height={50}
          />
        </a>

        <button
          className="menu-btn"
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav id="nav" className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main">
          <a href="#how" className='nav-text' onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#features" className='nav-text' onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#alerts" className='nav-text' onClick={() => setMenuOpen(false)}>
            Alerts
          </a>
          <a href="#setup" className='nav-text' onClick={() => setMenuOpen(false)}>
            Setup
          </a>
          <a href="#faq" className='nav-text' onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section reveal">
          <div className="hero-copy">
            <p className="eyebrow">Portable Glucose Companion</p>
            <h1>See your glucose instantly, anywhere, at a glance.</h1>
            <p className="lead">
              GlucoBit brings real-time Dexcom CGM readings to a dedicated, high-visibility screen with trend cues,
              LED color states, and strong low-glucose alerts.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#features">
                Explore Features
              </a>
              <a className="btn btn-ghost" href="#setup">
                View Setup Flow
              </a>
            </div>
            <ul className="meta-list">
              <li>Minute-by-minute updates</li>
              <li>Fully Battery-powered</li>
              <li>US &amp; international Dexcom Share servers</li>
            </ul>
          </div>

          <div className="hero-device" aria-label="GlucoBit device mockup">
            <div className="device-shell">
              <div className="device-screen">
                <div className="screen-top">
                  <span className="chip">Dexcom Share</span>
                  <span className="status">In Range</span>
                </div>
                <div className="reading-wrap">
                  <p className="reading">6.7</p>
                  <p className="units">mmol/L</p>
                </div>
                <div className="trend">
                  <span className="arrow">↗</span>
                  <span>Steady Rise</span>
                </div>
                <div className="gradient-bar" aria-hidden="true" />
              </div>
              <div className="device-led" />
            </div>
          </div>
        </section>

        <section id="how" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">How It Works</p>
            <h2>Conveniently View Your Glucose Data</h2>
          </div>
          <div className="grid three">
            <article className="card">
              <h3>1. Fetch</h3>
              <p>GlucoBit securely pulls your latest Dexcom readings from Dexcom Share servers.</p>
            </article>
            <article className="card">
              <h3>2. Translate</h3>
              <p>Values are rendered with large numerals, trend arrows, and clear low/in-range/high states.</p>
            </article>
            <article className="card">
              <h3>3. Alert</h3>
              <p>Urgent lows trigger visual warnings, RGB LEDs, and loud audio prompt alerts that continue until acknowledged.</p>
            </article>
          </div>
        </section>

        <section id="features" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Features</p>
            <h2>Built to imporve safety and everyday confidence</h2>
          </div>
          <div className="grid two">
            <article className="feature-card">
              <h3>Real-Time Glucose Display</h3>
              <p>Minute-by-minute glucose updates from Dexcom Share, shown on a bright, full color display.</p>
            </article>
            <article className="feature-card">
              <h3>Strong Visual Language</h3>
              <p>Large glucose values, trend arrows, and status labels keep state immediately understandable.</p>
            </article>
            <article className="feature-card">
              <h3>Color-State Feedback</h3>
              <p>RGB LED gradient transitions from low to in-range to high for room-visible awareness.</p>
            </article>
            <article className="feature-card">
              <h3>Dual Units</h3>
              <p>Display supports both mmol/L and mg/dL for global usability and caregiver alignment.</p>
            </article>
            <article className="feature-card">
              <h3>Portable Battery Runtime</h3>
              <p>Compact battery-powered operation designed for 3+ hours, with deep sleep for efficiency.</p>
            </article>
            <article className="feature-card">
              <h3>Compact Form</h3>
              <p>Small 3D-printed enclosure made for bedside tables, desks, and easy transport.</p>
            </article>
          </div>
        </section>

        <section id="alerts" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Alert System</p>
            <h2>Convenient visualisation when stable. Impossible to miss when urgent.</h2>
          </div>
          <div className="alert-panel">
            <div>
              <h3>Urgent Low Alerts</h3>
              <p>
                When low, GlucoBit enters a high-attention mode with flashing
                screen cues, LED emphasis, and loud I2S audio alerts.
              </p>
            </div>
            <ul>
              <li>Touch-to-silence alarm interaction</li>
              <li>Wake/sleep touch control for quick bedside use</li>
              <li>Designed for glanceability in daytime and low light</li>
            </ul>
          </div>
        </section>

        <section id="setup" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Setup Process</p>
            <h2>Web-based setup in minutes</h2>
          </div>
          <ol className="steps">
            <li>
              <h3>Power On</h3>
              <p>Start GlucoBit and open the setup portal from your phone or computer.</p>
            </li>
            <li>
              <h3>Connect Wi-Fi</h3>
              <p>Provide network details to get reliable cloud synchronization.</p>
            </li>
            <li>
              <h3>Add Dexcom Credentials</h3>
              <p>Enter Share credentials and select US or international server.</p>
            </li>
            <li>
              <h3>Choose Preferences</h3>
              <p>Set units, low threshold, alert behavior, and screen sleep options.</p>
            </li>
          </ol>
        </section>

        <section id="hardware" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">Hardware Design</p>
            <h2>Maker-grade engineering with production-minded reliability</h2>
          </div>
          <div className="grid two">
            <article className="card">
              <h3>Core Platform</h3>
              <p>
                Built with CircuitPython on Xiao ESP32 S3/C3-class hardware for practical IoT performance and
                flexibility.
              </p>
            </article>
            <article className="card">
              <h3>Display + Indicators</h3>
              <p>ST7789 TFT panel for crisp visuals plus NeoPixel RGB LEDs for ambient glucose state communication.</p>
            </article>
            <article className="card">
              <h3>Audio Path</h3>
              <p>I2S speaker support for loud urgent-low alerts and configurable audible behavior.</p>
            </article>
            <article className="card">
              <h3>Use Case Fit</h3>
              <p>
                Engineered for always-on glanceability, alert confidence, and portable placement across daily
                environments.
              </p>
            </article>
          </div>
        </section>

        <section id="faq" className="section reveal">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Does GlucoBit replace the official Dexcom app?</summary>
              <p>No. GlucoBit is designed as a companion display for fast visibility and local alerts.</p>
            </details>
            <details>
              <summary>Is it compatible with all Dexcom CGM models?</summary>
              <p>GlucoBit works with any Dexcom CGM that supports Share and cloud data access, including G6 and G7.</p>
            </details>
            <details>
              <summary>Can I use it with other CGM brands?</summary>
              <p>Currently, GlucoBit is built specifically for Dexcom Share data. Support for other CGM platforms is comming soon.</p>
            </details>
            <details>
              <summary>Is it currently available?</summary>
              <p>No. GlucoBit is still udergoing development and testing.</p>
            </details>
            <details>
              <summary>Can I switch between mg/dL and mmol/L?</summary>
              <p>Yes. Both units are supported and can be changed in settings.</p>
            </details>
            <details>
              <summary>Is it only for bedside use?</summary>
              <p>No. The battery-powered design and compact enclosure support bedside, desk, or on-the-go use.</p>
            </details>
            <details>
              <summary>How long does setup take?</summary>
              <p>Most users complete Wi-Fi and Dexcom setup in a few minutes through the web flow.</p>
            </details>
          </div>
        </section>

        <section className="section disclaimer reveal">
          <p>
            GlucoBit is not a medical device and should not be used as the sole source for treatment decisions. Always
            confirm readings and follow guidance from your healthcare provider and official CGM apps.
          </p>
        </section>

        
      </main>


      <footer className="site-footer">
        <p>
          © {year} GlucoBit. Portable glucose visibility, designed for clarity.
        </p>

        
        <div className='icons'>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/github.svg" 
              alt="GitHub"
              style={{ width: 42, height: 42 }}
            />
          </a>

          <a 
            href="mailto:james.harcourt@2028.castleknockcollege.ie"
          >
            <img 
              src="/email.svg" 
              alt="Email"
              style={{ width: 42, height: 42 }}
            />
          </a>

        </div>

      </footer>
    </>
  );
}
