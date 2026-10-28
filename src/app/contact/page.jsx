'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@/components/ContactPage.css';
import {
  Send,
  MapPin,
  Building,
  Mail,
  Clock,
  ShieldCheck,
  CheckCheck,
  AlertCircle,
  Loader2,
  Sparkles,
  MessageSquare,
  FileText,
  Lightbulb,
  Target,
  ArrowRight,
  Code2,
  Cloud
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Web Application Development',
    budget: '₹2,50,000 - ₹5,00,000',
    timeline: '1 - 3 Months',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, msg: '', success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, msg: '', success: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setStatus({
        loading: false,
        msg: 'Project inquiry successfully transmitted! Our lead solutions architect will reach out within 24 hours.',
        success: true,
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        projectType: 'Web Application Development',
        budget: '₹2,50,000 - ₹5,00,000',
        timeline: '1 - 3 Months',
        message: ''
      });
    } catch (err) {
      setStatus({ loading: false, msg: err.message, success: false });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const nameInput = document.getElementById('contact-name');
      if (nameInput) nameInput.focus();
    }
  };

  return (
    <div className="cp-page-wrapper">
      {/* ========================================================= */}
      {/* SECTION 1: EDITORIAL SPLIT LAYOUT (HERO & INQUIRY FORM)   */}
      {/* ========================================================= */}
      <section className="cp-split-section">
        <div className="cp-container">
          <div className="cp-split-grid">
            {/* Left Column: Headline, Info Hubs & 3D Illustration */}
            <div className="cp-left-col">
              <div className="cp-badge">
                <Sparkles size={14} className="cp-badge-icon" />
                <span>Let&apos;s Build Something Meaningful</span>
              </div>

              <h1 className="cp-hero-title">
                Every Great Product<br />
                Starts With a<br />
                <span className="cp-hero-title-accent">Conversation.</span>
              </h1>

              <p className="cp-hero-desc">
                Share your project goals, technical challenges, or product ideas with our engineering team. We&apos;ll discuss your requirements, explore the best approach, and help you turn your vision into a reliable digital solution.
              </p>

              {/* Contact Information Hubs */}
              <div className="cp-info-list">
                {/* 1. Hyderabad Engineering Hub */}
                <div className="cp-info-item">
                  <div className="cp-info-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="cp-info-title">Hyderabad Engineering Hub</div>
                    <div className="cp-info-sub">
                      Mindspace Madhapur, HITEC City, Hyderabad, Telangana 500081, India
                    </div>
                  </div>
                </div>

                {/* 2. Financial District Center */}
                <div className="cp-info-item">
                  <div className="cp-info-icon-box">
                    <Building size={18} />
                  </div>
                  <div>
                    <div className="cp-info-title">Financial District Center</div>
                    <div className="cp-info-sub">
                      Nanakramguda, Financial District, Gachibowli, Hyderabad, Telangana 500032, India
                    </div>
                  </div>
                </div>

                {/* 3. Direct Technical Dispatch */}
                <div className="cp-info-item">
                  <div className="cp-info-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="cp-info-title">Direct Technical Dispatch</div>
                    <div className="cp-info-sub">
                      <a href="mailto:engineering@provenancetech.com" className="cp-info-link">
                        engineering@provenancetech.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* 4. Discovery Call Hours */}
                <div className="cp-info-item">
                  <div className="cp-info-icon-box">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="cp-info-title">Discovery Call Hours</div>
                    <div className="cp-info-sub">
                      Monday – Friday, 6:00 PM – 12:00 AM IST
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Verification Trust Badge */}
              <div className="cp-trust-badge">
                <ShieldCheck size={16} />
                <span>Encrypted inquiry transport &amp; DynamoDB storage</span>
              </div>

              {/* Custom 3D Software Engineering Illustration */}
              <div className="cp-illustration-stage" aria-hidden="true">
                {/* Floating 3D Badges */}
                <div className="cp-float-code-badge">
                  <Code2 size={18} />
                </div>
                <div className="cp-float-cloud-badge">
                  <Cloud size={24} />
                </div>

                {/* Isometric Cubes */}
                <div className="cp-iso-cube-1" />
                <div className="cp-iso-cube-2" />

                {/* Isometric Code Window */}
                <div className="cp-iso-code-window">
                  <div className="cp-code-dots">
                    <span className="cp-code-dot" style={{ background: '#ef4444' }} />
                    <span className="cp-code-dot" style={{ background: '#f59e0b' }} />
                    <span className="cp-code-dot" style={{ background: '#10b981' }} />
                  </div>
                  <div className="cp-code-lines">
                    <div className="cp-code-bar orange" style={{ width: '45%' }} />
                    <div className="cp-code-bar" style={{ width: '80%' }} />
                    <div className="cp-code-bar" style={{ width: '65%' }} />
                    <div className="cp-code-bar orange" style={{ width: '55%' }} />
                    <div className="cp-code-bar" style={{ width: '90%' }} />
                    <div className="cp-code-bar" style={{ width: '40%' }} />
                  </div>
                </div>

                {/* Isometric Center Card: "Building Better Products" */}
                <div className="cp-iso-center-card">
                  <div className="cp-center-card-title">Building<br />Better Products</div>
                  <div className="cp-center-card-skeleton">
                    <div className="cp-skeleton-bar" style={{ width: '85%' }} />
                    <div className="cp-skeleton-bar" style={{ width: '60%' }} />
                    <div className="cp-skeleton-bar" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Inquiry Form & Direct Contact Panel */}
            <div className="cp-right-col" id="inquiry-form">
              <div className="cp-form-panel">
                <div className="cp-form-header">
                  <div className="cp-badge">
                    <Sparkles size={14} className="cp-badge-icon" />
                    <span>Project Inquiry</span>
                  </div>
                  <h2 className="cp-form-title">Tell Us What You&apos;re Building</h2>
                  <p className="cp-form-sub">
                    Fill in the details below and our team will get back to you to discuss your project, technical requirements, and next steps.
                  </p>
                </div>

                {status.msg && (
                  <div className={`cp-status-alert ${status.success ? 'cp-status-success' : 'cp-status-error'}`}>
                    {status.success ? <CheckCheck size={18} /> : <AlertCircle size={18} />}
                    <span>{status.msg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name & Email */}
                  <div className="cp-form-row">
                    <div className="cp-form-group">
                      <label htmlFor="contact-name" className="cp-form-label">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. Alex Mitchell"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="cp-form-input"
                      />
                    </div>

                    <div className="cp-form-group">
                      <label htmlFor="contact-email" className="cp-form-label">Work Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="cp-form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Organization & Service Focus */}
                  <div className="cp-form-row">
                    <div className="cp-form-group">
                      <label htmlFor="contact-org" className="cp-form-label">Company / Organization</label>
                      <input
                        id="contact-org"
                        type="text"
                        placeholder="e.g. Horizon Labs Inc."
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="cp-form-input"
                      />
                    </div>

                    <div className="cp-form-group">
                      <label htmlFor="contact-type" className="cp-form-label">Service Focus</label>
                      <select
                        id="contact-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="cp-form-select"
                      >
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                        <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                        <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                        <option value="UI/UX & Design Systems">UI/UX & Design Systems</option>
                        <option value="Cloud & DynamoDB Architecture">Cloud & DynamoDB Architecture</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Estimated Budget & Target Timeline */}
                  <div className="cp-form-row">
                    <div className="cp-form-group">
                      <label htmlFor="contact-budget" className="cp-form-label">Estimated Budget</label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="cp-form-select"
                      >
                        <option value="Under ₹2,50,000">Select budget range</option>
                        <option value="Under ₹2,50,000">&lt; ₹2,50,000</option>
                        <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                        <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                        <option value="₹10,00,000+">₹10,00,000+</option>
                      </select>
                    </div>

                    <div className="cp-form-group">
                      <label htmlFor="contact-timeline" className="cp-form-label">Target Timeline</label>
                      <select
                        id="contact-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="cp-form-select"
                      >
                        <option value="1 - 3 Months">Select timeline</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="3 - 6 Months">3 - 6 Months</option>
                        <option value="6 - 12 Months">6 - 12 Months</option>
                        <option value="Ongoing Retainer">Ongoing Retainer</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Requirements */}
                  <div className="cp-form-group" style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="contact-message" className="cp-form-label">Project Requirements &amp; Goals *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Describe what your web or mobile app needs to do, existing tech stack (if any), and your target launch timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="cp-form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="cp-submit-btn"
                  >
                    {status.loading ? (
                      <>
                        <Loader2 className="animate-spin" size={17} />
                        <span>Transmitting to Engineering Queue...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Project Inquiry</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>

                  <p className="cp-submit-note">
                    Our team usually responds within 1-2 business days.
                  </p>
                </form>
              </div>

              {/* Direct Discussion Panel Beneath Form */}
              <div className="cp-direct-panel">
                <div className="cp-direct-icon-wrap">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <div className="cp-direct-title">Prefer a direct discussion?</div>
                  <p className="cp-direct-text">
                    If you&apos;d like to discuss your project in detail, feel free to reach out directly at{' '}
                    <a href="mailto:engineering@provenancetech.com" className="cp-info-link" style={{ fontWeight: 800 }}>
                      engineering@provenancetech.com
                    </a>{' '}
                    or during our discovery call hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: THREE-STEP COLLABORATION PROCESS               */}
      {/* ========================================================= */}
      <section className="cp-collab-section">
        <div className="cp-container">
          <div className="cp-section-header">
            <div className="cp-badge">
              <Sparkles size={14} className="cp-badge-icon" />
              <span>Our Collaboration Process</span>
            </div>

            <h2 className="cp-section-title">
              From Your Idea to a Clear Plan
            </h2>

            <p className="cp-section-subtitle">
              We keep the initial conversation simple, focused, and tailored to your business goals.
            </p>
          </div>

          <div className="cp-collab-grid">
            {/* Step 01 */}
            <div className="cp-collab-card">
              <div className="cp-collab-icon-wrap">
                <FileText size={22} />
              </div>
              <div className="cp-collab-num">01</div>
              <h3 className="cp-collab-title">Share your idea</h3>
              <p className="cp-collab-desc">
                Tell us about your business goals, product idea, or technical challenge.
              </p>
              <div className="cp-collab-connector" aria-hidden="true" />
            </div>

            {/* Step 02 */}
            <div className="cp-collab-card">
              <div className="cp-collab-icon-wrap">
                <Lightbulb size={22} />
              </div>
              <div className="cp-collab-num">02</div>
              <h3 className="cp-collab-title">Align on a solution</h3>
              <p className="cp-collab-desc">
                We&apos;ll discuss possible approaches, technologies, and a practical plan.
              </p>
              <div className="cp-collab-connector" aria-hidden="true" />
            </div>

            {/* Step 03 */}
            <div className="cp-collab-card">
              <div className="cp-collab-icon-wrap">
                <Target size={22} />
              </div>
              <div className="cp-collab-num">03</div>
              <h3 className="cp-collab-title">Plan the next steps</h3>
              <p className="cp-collab-desc">
                Walk away with clear recommendations and a roadmap for moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: FINAL CALL TO ACTION (BEFORE FOOTER)           */}
      {/* ========================================================= */}
      <section className="cp-final-cta-section">
        <div className="cp-container">
          <div className="cp-final-cta-card">
            {/* Ambient Rings */}
            <div className="cp-cta-rings" aria-hidden="true" />
            <div className="cp-cta-rings-inner" aria-hidden="true" />

            {/* Left Content */}
            <div className="cp-cta-content">
              <div className="cp-badge" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                <Sparkles size={14} className="cp-badge-icon" />
                <span>Ready to start?</span>
              </div>

              <h2 className="cp-cta-title">
                Let&apos;s Build Something Great Together.
              </h2>

              <p className="cp-cta-desc">
                Whether you have a detailed project specification or just an initial idea, our engineering team is ready to help you explore the right solution.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="cp-cta-btn-wrap">
              <button onClick={scrollToForm} className="cp-cta-large-btn">
                <span>Contact Our Team</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
