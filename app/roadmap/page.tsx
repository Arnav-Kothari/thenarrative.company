'use client';

import { useEffect } from 'react';
import './roadmap.css';

export default function RoadmapPage() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 120);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <div className="roadmap-page">
      <header className="katha-header">
        <div className="container">
          <a href="/" className="katha-logo">The Narrative Company</a>
          <div className="katha-header-right">2026 Roadmap</div>
        </div>
      </header>

      <div className="rm-hero">
        <div className="container">
          <div className="badge">Internal</div>
          <h1>Three clients, two hires, <span>$2M.</span></h1>
          <p className="hero-sub">The quarterly roadmap for scaling The Narrative Company to $2M in revenue by end of 2026.</p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              Revenue Target
              <strong>$2M</strong>
            </div>
            <div className="hero-meta-item">
              Clients
              <strong>3</strong>
            </div>
            <div className="hero-meta-item">
              Hires
              <strong>2</strong>
            </div>
            <div className="hero-meta-item">
              Quarters
              <strong>4</strong>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="label">Timeline</div>
          <h2 className="title">Quarter by quarter</h2>
          <p className="desc">Salesforce is sage. Clients #2 and #3 are amber. Hires are plum. Same name, same color, everywhere.</p>

          <div className="timeline-grid">

            {/* Q1: all done */}
            <div className="quarter done fade-in">
              <div className="quarter-header">
                <div className="quarter-label">Q1 - Done</div>
                <div className="quarter-months">Jan - Mar</div>
              </div>
              <ul className="tasks">
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Complete pilot + handle engagement</div>
                </li>
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Deliver SaaS Apocalypse moment</div>
                </li>
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Negotiate post-pilot agreement</div>
                </li>
              </ul>
            </div>

            {/* Q2 */}
            <div className="quarter active fade-in">
              <div className="quarter-header">
                <div className="quarter-label">Q2</div>
                <div className="quarter-months">Apr - Jun</div>
              </div>
              <ul className="tasks">
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Post-pilot agreement starts April 6</div>
                </li>
                <li className="task critical">
                  <div className="task-tag">Client #2</div>
                  <div className="task-body">Close and onboard</div>
                </li>
                <li className="task team">
                  <div className="task-tag">Hire</div>
                  <div className="task-body">Employee #1 - client ops lead</div>
                </li>
              </ul>
            </div>

            {/* Q3 */}
            <div className="quarter fade-in">
              <div className="quarter-header">
                <div className="quarter-label">Q3</div>
                <div className="quarter-months">Jul - Sep</div>
              </div>
              <ul className="tasks">
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Scope expansion and upsell</div>
                </li>
                <li className="task critical">
                  <div className="task-tag">Client #2</div>
                  <div className="task-body">First big moment delivered, move to full rate</div>
                </li>
                <li className="task critical">
                  <div className="task-tag">Client #3</div>
                  <div className="task-body">Close and onboard</div>
                </li>
                <li className="task team">
                  <div className="task-tag">Hire</div>
                  <div className="task-body">Employee #2 - ops or data/analytics</div>
                </li>
              </ul>
            </div>

            {/* Q4 */}
            <div className="quarter fade-in">
              <div className="quarter-header">
                <div className="quarter-label">Q4</div>
                <div className="quarter-months">Oct - Dec</div>
              </div>
              <ul className="tasks">
                <li className="task done">
                  <div className="task-tag">Salesforce</div>
                  <div className="task-body">Full expanded scope running</div>
                </li>
                <li className="task critical">
                  <div className="task-tag">Client #2</div>
                  <div className="task-body">Full rate, fully ramped</div>
                </li>
                <li className="task critical">
                  <div className="task-tag">Client #3</div>
                  <div className="task-body">Move to full rate</div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <div className="bottom">
        <div className="container">
          <p>The system is built. The proof is there. Now <strong>hit $2M.</strong></p>
        </div>
      </div>

      <footer>
        <div className="container">
          <span className="accent">The Narrative Company</span> &nbsp;&middot;&nbsp; 2026 Internal Roadmap
        </div>
      </footer>
    </div>
  );
}
