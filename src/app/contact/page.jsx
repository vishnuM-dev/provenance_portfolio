'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/components/ContactPage.css';
import {
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  ExternalLink,
  Check,
  CheckCheck,
  AlertCircle,
  Loader2,
  X,
  MapPin,
  Building2,
  Clock,
  Target,
  Users,
  ShieldCheck,
  Copy,
  Send,
  Sparkles,
} from 'lucide-react';

export default function ContactPage() {
  // Modal State: null | 'project' | 'phone' | 'email' | 'meeting'
  const [activeModal, setActiveModal] = useState(null);

  // Copy Feedback Toast State
  const [copyFeedback, setCopyFeedback] = useState('');

  // 1. Discuss a Project Form State
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'Web Application Development',
    budget: '₹2,50,000 - ₹5,00,000',
    timeline: '1 - 3 Months',
    message: '',
  });
  const [projectStatus, setProjectStatus] = useState({ loading: false, msg: '', success: false });

  // 2. Schedule a Meeting Form State
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('02:30 PM IST');
  const [meetingForm, setMeetingForm] = useState({
    name: '',
    email: '',
    agenda: '',
  });
  const [meetingStatus, setMeetingStatus] = useState({ loading: false, msg: '', success: false });

  // Calculate upcoming business days for the meeting scheduler
  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    const dates = [];
    const now = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 6) {
      const d = new Date(now);
      d.setDate(now.getDate() + daysAhead);
      const day = d.getDay();
      // Skip Sundays (0)
      if (day !== 0) {
        dates.push({
          full: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: d.getDate(),
          monthName: d.toLocaleDateString('en-US', { month: 'short' }),
        });
        count++;
      }
      daysAhead++;
    }
    setAvailableDates(dates);
    if (dates.length > 0) {
      setMeetingDate(dates[0].full);
    }
  }, []);

  // Handle ESC key to close any active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  // Copy helper
  const handleCopy = (text, label) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopyFeedback(`${label} copied to clipboard!`);
      setTimeout(() => setCopyFeedback(''), 3000);
    }
  };

  // Submit Project Inquiry
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setProjectStatus({ loading: true, msg: '', success: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectForm),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setProjectStatus({
        loading: false,
        msg: 'Project inquiry successfully transmitted! Our lead solutions architect will reach out within 24 hours.',
        success: true,
      });

      setProjectForm({
        name: '',
        email: '',
        organization: '',
        projectType: 'Web Application Development',
        budget: '₹2,50,000 - ₹5,00,000',
        timeline: '1 - 3 Months',
        message: '',
      });
    } catch (err) {
      setProjectStatus({ loading: false, msg: err.message, success: false });
    }
  };

  // Submit Meeting Request
  const handleMeetingSubmit = async (e) => {
    e.preventDefault();
    setMeetingStatus({ loading: true, msg: '', success: false });

    try {
      const payload = {
        name: meetingForm.name,
        email: meetingForm.email,
        organization: 'Discovery Consultation Client',
        projectType: 'Discovery Consultation Meeting',
        budget: 'Consultation',
        timeline: `${meetingDate} at ${meetingTime}`,
        message: `Meeting Slot Request: ${meetingDate} at ${meetingTime}. Agenda/Notes: ${meetingForm.agenda || 'Initial project technical consultation.'}`,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to schedule meeting request');

      setMeetingStatus({
        loading: false,
        msg: `Your discovery consultation request for ${meetingDate} at ${meetingTime} has been scheduled! We will send a calendar invitation to ${meetingForm.email}.`,
        success: true,
      });

      setMeetingForm({ name: '', email: '', agenda: '' });
    } catch (err) {
      setMeetingStatus({ loading: false, msg: err.message, success: false });
    }
  };

  return (
    <div className="cp-page-wrapper">
      <div className="cp-container">
        {/* ========================================================= */}
        {/* THREE-COLUMN HERO COMPOSITION                              */}
        {/* ========================================================= */}
        <div className="cp-main-grid">
          {/* ------------------------------------------------------- */}
          {/* COLUMN 1: INTRODUCTION & VALUE PROPOSITIONS             */}
          {/* ------------------------------------------------------- */}
          <div className="cp-intro-col">
            {/* Eyebrow Label */}
            <div className="cp-badge-pill">
              <MessageSquare size={13} className="cp-badge-icon" />
              <span>LET&apos;S TALK</span>
            </div>

            {/* Main Headline */}
            <h1 className="cp-headline">
              Great Ideas<br />
              Start With a<br />
              <span className="cp-headline-accent">Conversation.</span>
            </h1>

            {/* Supporting Description */}
            <p className="cp-desc">
              Tell us about your goals, technical challenges, or product ideas. Our team is here to listen, guide, and help you turn your vision into a reliable digital solution.
            </p>

            {/* 3 Compact Value Propositions */}
            <div className="cp-valprops-row">
              {/* Item 1 */}
              <div className="cp-valprop-item">
                <div className="cp-valprop-icon-box">
                  <MessageSquare size={18} strokeWidth={2.2} />
                </div>
                <div className="cp-valprop-title">Free Consultation</div>
                <p className="cp-valprop-desc">Discuss your ideas with our experts.</p>
              </div>

              {/* Item 2 */}
              <div className="cp-valprop-item">
                <div className="cp-valprop-icon-box">
                  <Target size={18} strokeWidth={2.2} />
                </div>
                <div className="cp-valprop-title">Tailored Solutions</div>
                <p className="cp-valprop-desc">Get the right technology approach.</p>
              </div>

              {/* Item 3 */}
              <div className="cp-valprop-item">
                <div className="cp-valprop-icon-box">
                  <Users size={18} strokeWidth={2.2} />
                </div>
                <div className="cp-valprop-title">Long-Term Partnership</div>
                <p className="cp-valprop-desc">We focus on lasting business value.</p>
              </div>
            </div>

            {/* Bottom Left Offices & Direct Technical Dispatch Card */}
            <div className="cp-offices-card">
              {/* Left Group: Our Offices */}
              <div className="cp-office-group-col">
                <div className="cp-office-group-header">
                  <MapPin size={15} className="cp-office-group-header-icon" />
                  <span>Our Offices</span>
                </div>

                {/* Office 1 */}
                <div className="cp-office-unit">
                  <Building2 size={16} className="cp-office-icon" />
                  <div>
                    <div className="cp-office-unit-title">Hyderabad Engineering Hub</div>
                    <div className="cp-office-unit-sub">
                      Mindspace Madhapur, HITEC City, Hyderabad, Telangana 500081, India
                    </div>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="cp-office-unit">
                  <Building2 size={16} className="cp-office-icon" />
                  <div>
                    <div className="cp-office-unit-title">Financial District Center</div>
                    <div className="cp-office-unit-sub">
                      Nanakramguda, Financial District, Gachibowli, Hyderabad, Telangana 500032, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Group: Direct Technical Dispatch */}
              <div className="cp-office-group-col">
                {/* Email */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '3px' }}>
                    <Mail size={14} color="var(--primary, #ea580c)" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#1a130e' }}>
                      Direct Technical Dispatch
                    </span>
                  </div>
                  <a
                    href="mailto:engineering@provenancetech.com"
                    className="cp-direct-link"
                    title="engineering@provenancetech.com"
                  >
                    engineering@provenancetech.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '3px' }}>
                    <Phone size={14} color="var(--primary, #ea580c)" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#1a130e' }}>Call Us</span>
                  </div>
                  <a href="tel:+918074407095" className="cp-direct-link" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    +91 80744 07095
                  </a>
                  <div style={{ fontSize: '0.72rem', color: '#6e6054', marginTop: '2px' }}>
                    Mon – Sat, 10:00 AM – 6:00 PM (IST)
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '4px' }}>
                    <Clock size={14} color="var(--primary, #ea580c)" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 750, color: '#1a130e' }}>Follow Us</span>
                  </div>
                  <div className="cp-social-row">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cp-social-btn" aria-label="LinkedIn">
                      in
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cp-social-btn" aria-label="Instagram">
                      ig
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cp-social-btn" aria-label="Facebook">
                      f
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="cp-social-btn" aria-label="X Twitter">
                      𝕏
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* COLUMN 2: CENTRAL VISUAL (BRAND ARCH EXPERIENCE)        */}
          {/* ------------------------------------------------------- */}
          <div className="cp-visual-col" aria-label="ProvenanceTech Engineering Office Experience">
            <div className="cp-arch-stage">
              {/* Ambient Dot Grid Matrix */}
              <svg className="cp-dot-grid-svg" viewBox="0 0 140 120" fill="none" aria-hidden="true">
                <pattern id="dotGridPattern" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.3" fill="#e2d2c1" />
                </pattern>
                <rect width="140" height="120" fill="url(#dotGridPattern)" />
              </svg>

              {/* Floating Circular Buttons along the Curve */}
              <button
                type="button"
                onClick={() => setActiveModal('phone')}
                className="cp-curve-btn cp-curve-btn-phone"
                aria-label="Direct Phone Consultation"
              >
                <Phone size={18} />
              </button>

              <button
                type="button"
                onClick={() => setActiveModal('project')}
                className="cp-curve-btn cp-curve-btn-send"
                aria-label="Send Project Inquiry"
              >
                <Send size={17} />
              </button>

              {/* Floating Speech Bubble - Safely placed inside the arch boundaries */}
              <div className="cp-floating-speech">
                <div className="cp-speech-icon-box">
                  <Users size={14} />
                </div>
                <span className="cp-speech-text">Let&apos;s build something meaningful together.</span>
              </div>

              {/* Main Arch Architectural Visual */}
              <div className="cp-arch-wrap">
                <Image
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
                  alt="ProvenanceTech architectural corporate workspace and technology office"
                  fill
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1220px) 480px, 330px"
                  className="cp-arch-img"
                />
                <div className="cp-arch-overlay" />

                {/* Glowing ProvenanceTech Sign on Wall */}
                <div className="cp-wall-sign">
                  Provenance&nbsp;<span className="cp-wall-sign-accent">Tech</span>
                </div>
              </div>
            </div>

            {/* Handwritten Script Calligraphy in Cream Space Below Arch */}
            <div className="cp-script-wrap" aria-hidden="true">
              <div className="cp-script-text">
                Ideas<br />
                Discussions<br />
                Solutions
              </div>
              <svg className="cp-script-underline" width="90" height="16" viewBox="0 0 90 16" fill="none">
                <path d="M4 12C32 3 65 5 86 10" stroke="var(--primary, #ea580c)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* COLUMN 3: RIGHT INTERACTIVE CONTACT PANEL (REPLACES FORM) */}
          {/* ------------------------------------------------------- */}
          <div className="cp-interactive-col">
            <div className="cp-connect-card">
              {/* Eyebrow Label */}
              <div className="cp-badge-pill" style={{ alignSelf: 'flex-start' }}>
                <MessageSquare size={13} className="cp-badge-icon" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Heading */}
              <h2 className="cp-connect-title">
                How would you like to connect?
              </h2>

              {/* Supporting Text */}
              <p className="cp-connect-sub">
                Choose the best way to reach us. Our team will get back to you shortly.
              </p>

              {/* 2x2 Grid of 4 Interactive Contact Choices */}
              <div className="cp-options-grid">
                {/* Option 1: Discuss a Project */}
                <button
                  type="button"
                  onClick={() => setActiveModal('project')}
                  className="cp-option-card highlighted"
                  aria-label="Discuss a project with our engineering team"
                >
                  <div className="cp-option-top-row">
                    <div className="cp-option-icon-box">
                      <MessageSquare size={18} />
                    </div>
                    <div className="cp-option-arrow-box">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                  <div className="cp-option-title">Discuss a Project</div>
                  <p className="cp-option-desc">Talk to our team about your requirements.</p>
                </button>

                {/* Option 2: Talk on Phone */}
                <button
                  type="button"
                  onClick={() => setActiveModal('phone')}
                  className="cp-option-card"
                  aria-label="Talk on phone with our team"
                >
                  <div className="cp-option-top-row">
                    <div className="cp-option-icon-box">
                      <Phone size={18} />
                    </div>
                    <div className="cp-option-arrow-box">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                  <div className="cp-option-title">Talk on Phone</div>
                  <p className="cp-option-desc">Speak directly with our team.</p>
                </button>

                {/* Option 3: Send an Email */}
                <button
                  type="button"
                  onClick={() => setActiveModal('email')}
                  className="cp-option-card"
                  aria-label="Send an email to our engineering team"
                >
                  <div className="cp-option-top-row">
                    <div className="cp-option-icon-box">
                      <Mail size={18} />
                    </div>
                    <div className="cp-option-arrow-box">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                  <div className="cp-option-title">Send an Email</div>
                  <p className="cp-option-desc">Share your details and we&apos;ll respond.</p>
                </button>

                {/* Option 4: Schedule a Meeting */}
                <button
                  type="button"
                  onClick={() => setActiveModal('meeting')}
                  className="cp-option-card"
                  aria-label="Schedule a 30-minute consultation meeting"
                >
                  <div className="cp-option-top-row">
                    <div className="cp-option-icon-box">
                      <Calendar size={18} />
                    </div>
                    <div className="cp-option-arrow-box">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                  <div className="cp-option-title">Schedule a Meeting</div>
                  <p className="cp-option-desc">Pick a time that works for you.</p>
                </button>
              </div>

              {/* Dedicated WhatsApp Contact Panel (Horizontal) */}
              <a
                href="https://wa.me/918074407095?text=Hello%20ProvenanceTech%2C%20I%20would%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="cp-whatsapp-panel"
                aria-label="Chat directly with ProvenanceTech on WhatsApp"
              >
                <div className="cp-whatsapp-left">
                  <div className="cp-whatsapp-icon-box" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.976.58 1.961.928 3.149.929 3.182 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.112-.527-1.424-.591-2.339-2.029-2.41-2.123-.07-.095-.578-.769-.578-1.467 0-.698.366-1.042.497-1.185.132-.144.288-.18.384-.18.096 0 .192.001.276.006.09.005.21-.034.329.252.126.301.431 1.05.468 1.127.037.077.062.167.012.268-.05.1-.075.163-.15.251-.075.088-.158.196-.226.264-.075.075-.153.157-.066.307.087.15.387.638.831 1.033.571.509 1.053.667 1.203.742.15.075.237.063.325-.038.087-.101.374-.436.474-.586.1-.15.199-.126.335-.075.136.05 8.64.407.994.472.13.065.217.1.25.152.033.052.033.303-.111.708z" />
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5.01L2 22l5.18-1.31C8.61 21.53 10.26 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.03 16.94c-1.19 0-2.31-.34-3.28-.94l-.23-.14-2.43.64.65-2.37-.15-.24C6.01 14.93 5.5 13.5 5.5 11.94c0-3.6 2.93-6.53 6.53-6.53 3.6 0 6.53 2.93 6.53 6.53 0 3.6-2.93 6.53-6.53 6.53z" />
                    </svg>
                  </div>
                  <div>
                    <div className="cp-whatsapp-title">Chat with Us on WhatsApp</div>
                    <div className="cp-whatsapp-sub">Get a quick response on WhatsApp.</div>
                  </div>
                </div>
                <ExternalLink size={16} className="cp-whatsapp-ext-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* COPY NOTIFICATION TOAST                                   */}
      {/* ========================================================= */}
      {copyFeedback && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: '#1a130e',
            color: '#ffffff',
            padding: '0.85rem 1.35rem',
            borderRadius: '9999px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            zIndex: 10000,
            fontSize: '0.88rem',
            fontWeight: 650,
            animation: 'fadeInModal 0.2s ease',
          }}
          role="status"
          aria-live="polite"
        >
          <Check size={16} color="var(--primary, #ea580c)" />
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 1: DISCUSS A PROJECT                                */}
      {/* ========================================================= */}
      {activeModal === 'project' && (
        <div
          className="cp-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="cp-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-modal-close-btn"
              aria-label="Close project discussion modal"
            >
              <X size={20} />
            </button>

            <div className="cp-modal-header">
              <div className="cp-badge-pill">
                <Sparkles size={12} className="cp-badge-icon" />
                <span>PROJECT INQUIRY</span>
              </div>
              <h2 id="modal-project-title" className="cp-modal-title">
                Tell Us What You&apos;re Building
              </h2>
              <p className="cp-modal-sub">
                Share your requirements, business goals, or technical challenges. Our solutions architect will review and reply within 24 hours.
              </p>
            </div>

            {projectStatus.msg && (
              <div className={`cp-alert ${projectStatus.success ? 'cp-alert-success' : 'cp-alert-error'}`}>
                {projectStatus.success ? <CheckCheck size={18} /> : <AlertCircle size={18} />}
                <span>{projectStatus.msg}</span>
              </div>
            )}

            {!projectStatus.success && (
              <form onSubmit={handleProjectSubmit}>
                {/* Row 1: Name & Email */}
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label htmlFor="p-name" className="cp-form-label">Full Name *</label>
                    <input
                      id="p-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Mitchell"
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      className="cp-form-input"
                    />
                  </div>

                  <div className="cp-form-group">
                    <label htmlFor="p-email" className="cp-form-label">Work Email *</label>
                    <input
                      id="p-email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={projectForm.email}
                      onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                      className="cp-form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Organization & Service Focus */}
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label htmlFor="p-org" className="cp-form-label">Company / Organization</label>
                    <input
                      id="p-org"
                      type="text"
                      placeholder="e.g. Horizon Labs Inc."
                      value={projectForm.organization}
                      onChange={(e) => setProjectForm({ ...projectForm, organization: e.target.value })}
                      className="cp-form-input"
                    />
                  </div>

                  <div className="cp-form-group">
                    <label htmlFor="p-service" className="cp-form-label">Service Focus</label>
                    <select
                      id="p-service"
                      value={projectForm.projectType}
                      onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
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

                {/* Row 3: Budget & Timeline */}
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label htmlFor="p-budget" className="cp-form-label">Estimated Budget</label>
                    <select
                      id="p-budget"
                      value={projectForm.budget}
                      onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
                      className="cp-form-select"
                    >
                      <option value="Under ₹2,50,000">&lt; ₹2,50,000</option>
                      <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                      <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                      <option value="₹10,00,000+">₹10,00,000+</option>
                    </select>
                  </div>

                  <div className="cp-form-group">
                    <label htmlFor="p-timeline" className="cp-form-label">Target Timeline</label>
                    <select
                      id="p-timeline"
                      value={projectForm.timeline}
                      onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                      className="cp-form-select"
                    >
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="6 - 12 Months">6 - 12 Months</option>
                      <option value="Ongoing Retainer">Ongoing Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="cp-form-group" style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="p-msg" className="cp-form-label">Project Requirements &amp; Goals *</label>
                  <textarea
                    id="p-msg"
                    required
                    rows={4}
                    placeholder="Describe what your product needs to do, technical requirements, or key features..."
                    value={projectForm.message}
                    onChange={(e) => setProjectForm({ ...projectForm, message: e.target.value })}
                    className="cp-form-textarea"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={projectStatus.loading}
                  className="cp-submit-btn"
                >
                  {projectStatus.loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Project Inquiry</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>
            )}

            {projectStatus.success && (
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="cp-submit-btn"
                  style={{ width: 'auto', margin: '0 auto', padding: '0.75rem 2rem' }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: TALK ON PHONE                                    */}
      {/* ========================================================= */}
      {activeModal === 'phone' && (
        <div
          className="cp-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-phone-title"
        >
          <div className="cp-modal-box" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-modal-close-btn"
              aria-label="Close phone consultation modal"
            >
              <X size={20} />
            </button>

            <div className="cp-modal-header">
              <div className="cp-badge-pill">
                <Phone size={12} className="cp-badge-icon" />
                <span>DIRECT LINE</span>
              </div>
              <h2 id="modal-phone-title" className="cp-modal-title">
                Speak With Our Engineering Team
              </h2>
              <p className="cp-modal-sub">
                Connect directly with our Hyderabad engineering hub for discovery calls and architecture consultations.
              </p>
            </div>

            {/* Quick Box 1 */}
            <div className="cp-quick-dialog-box">
              <div className="cp-quick-dialog-info">
                <span className="cp-quick-dialog-label">Official Direct Line</span>
                <span className="cp-quick-dialog-val">+91 80744 07095</span>
                <span style={{ fontSize: '0.75rem', color: '#6e6054', marginTop: '2px' }}>
                  Mon – Sat, 10:00 AM – 6:00 PM (IST)
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('+91 80744 07095', 'Phone number')}
                className="cp-copy-btn"
                aria-label="Copy phone number"
              >
                <Copy size={13} />
                <span>Copy</span>
              </button>
            </div>

            {/* Quick Box 2 (Secondary Line) */}
            <div className="cp-quick-dialog-box">
              <div className="cp-quick-dialog-info">
                <span className="cp-quick-dialog-label">Secondary Engineering Dispatch</span>
                <span className="cp-quick-dialog-val">+91 98765 43210</span>
                <span style={{ fontSize: '0.75rem', color: '#6e6054', marginTop: '2px' }}>
                  HITEC City Engineering Hub
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('+91 98765 43210', 'Phone number')}
                className="cp-copy-btn"
                aria-label="Copy secondary phone number"
              >
                <Copy size={13} />
                <span>Copy</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.5rem' }}>
              <a
                href="tel:+918074407095"
                className="cp-submit-btn"
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                <Phone size={16} />
                <span>Dial Now (+91 80744 07095)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: SEND AN EMAIL                                    */}
      {/* ========================================================= */}
      {activeModal === 'email' && (
        <div
          className="cp-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-email-title"
        >
          <div className="cp-modal-box" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-modal-close-btn"
              aria-label="Close email consultation modal"
            >
              <X size={20} />
            </button>

            <div className="cp-modal-header">
              <div className="cp-badge-pill">
                <Mail size={12} className="cp-badge-icon" />
                <span>EMAIL DISPATCH</span>
              </div>
              <h2 id="modal-email-title" className="cp-modal-title">
                Send Us an Email
              </h2>
              <p className="cp-modal-sub">
                Share your RFPs, product blueprints, or technical inquiries directly with our engineering inbox.
              </p>
            </div>

            {/* Email 1 */}
            <div className="cp-quick-dialog-box">
              <div className="cp-quick-dialog-info">
                <span className="cp-quick-dialog-label">Technical Dispatch</span>
                <span className="cp-quick-dialog-val" style={{ fontSize: '1rem' }}>
                  engineering@provenancetech.com
                </span>
                <span style={{ fontSize: '0.75rem', color: '#6e6054', marginTop: '2px' }}>
                  Architecture &amp; Development Queue
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('engineering@provenancetech.com', 'Email address')}
                className="cp-copy-btn"
                aria-label="Copy engineering email"
              >
                <Copy size={13} />
                <span>Copy</span>
              </button>
            </div>

            {/* Email 2 */}
            <div className="cp-quick-dialog-box">
              <div className="cp-quick-dialog-info">
                <span className="cp-quick-dialog-label">General Communications</span>
                <span className="cp-quick-dialog-val" style={{ fontSize: '1rem' }}>
                  provenancetech@gmail.com
                </span>
                <span style={{ fontSize: '0.75rem', color: '#6e6054', marginTop: '2px' }}>
                  General Inquiries &amp; Partnerships
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('provenancetech@gmail.com', 'Email address')}
                className="cp-copy-btn"
                aria-label="Copy general email"
              >
                <Copy size={13} />
                <span>Copy</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', marginTop: '1.5rem' }}>
              <a
                href="mailto:engineering@provenancetech.com?subject=Project%20Inquiry%20%E2%80%94%20ProvenanceTech"
                className="cp-submit-btn"
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                <Mail size={16} />
                <span>Open in Email App</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: SCHEDULE A MEETING                               */}
      {/* ========================================================= */}
      {activeModal === 'meeting' && (
        <div
          className="cp-modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-meeting-title"
        >
          <div className="cp-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="cp-modal-close-btn"
              aria-label="Close meeting scheduler modal"
            >
              <X size={20} />
            </button>

            <div className="cp-modal-header">
              <div className="cp-badge-pill">
                <Calendar size={12} className="cp-badge-icon" />
                <span>DISCOVERY CALL</span>
              </div>
              <h2 id="modal-meeting-title" className="cp-modal-title">
                Schedule a 30-Minute Consultation
              </h2>
              <p className="cp-modal-sub">
                Choose a day and time slot to discuss technical feasibility, product roadmap, or cloud architecture.
              </p>
            </div>

            {meetingStatus.msg && (
              <div className={`cp-alert ${meetingStatus.success ? 'cp-alert-success' : 'cp-alert-error'}`}>
                {meetingStatus.success ? <CheckCheck size={18} /> : <AlertCircle size={18} />}
                <span>{meetingStatus.msg}</span>
              </div>
            )}

            {!meetingStatus.success && (
              <form onSubmit={handleMeetingSubmit}>
                {/* 1. Date Selector */}
                <div style={{ marginBottom: '1.15rem' }}>
                  <label className="cp-form-label" style={{ marginBottom: '0.45rem', display: 'block' }}>
                    1. Select Date
                  </label>
                  <div className="cp-date-picker-row">
                    {availableDates.map((item) => (
                      <button
                        key={item.full}
                        type="button"
                        onClick={() => setMeetingDate(item.full)}
                        className={`cp-date-pill ${meetingDate === item.full ? 'active' : ''}`}
                        aria-pressed={meetingDate === item.full}
                      >
                        <span className="cp-date-pill-day">{item.dayName}</span>
                        <span className="cp-date-pill-num">{item.dayNum}</span>
                        <span style={{ fontSize: '0.7rem', color: '#8c7e70' }}>{item.monthName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Time Slot Selector */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="cp-form-label" style={{ marginBottom: '0.45rem', display: 'block' }}>
                    2. Select Time (IST)
                  </label>
                  <div className="cp-time-slots-grid">
                    {['10:30 AM IST', '11:45 AM IST', '02:30 PM IST', '04:00 PM IST', '05:15 PM IST', '06:30 PM IST'].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setMeetingTime(slot)}
                        className={`cp-time-slot-btn ${meetingTime === slot ? 'active' : ''}`}
                        aria-pressed={meetingTime === slot}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Client Contact Info */}
                <div className="cp-form-row">
                  <div className="cp-form-group">
                    <label htmlFor="m-name" className="cp-form-label">Full Name *</label>
                    <input
                      id="m-name"
                      type="text"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={meetingForm.name}
                      onChange={(e) => setMeetingForm({ ...meetingForm, name: e.target.value })}
                      className="cp-form-input"
                    />
                  </div>

                  <div className="cp-form-group">
                    <label htmlFor="m-email" className="cp-form-label">Work Email *</label>
                    <input
                      id="m-email"
                      type="email"
                      required
                      placeholder="e.g. jordan@company.com"
                      value={meetingForm.email}
                      onChange={(e) => setMeetingForm({ ...meetingForm, email: e.target.value })}
                      className="cp-form-input"
                    />
                  </div>
                </div>

                <div className="cp-form-group" style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="m-agenda" className="cp-form-label">Brief Meeting Objective (Optional)</label>
                  <input
                    id="m-agenda"
                    type="text"
                    placeholder="e.g. Architecture review for an on-demand delivery app"
                    value={meetingForm.agenda}
                    onChange={(e) => setMeetingForm({ ...meetingForm, agenda: e.target.value })}
                    className="cp-form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={meetingStatus.loading}
                  className="cp-submit-btn"
                >
                  {meetingStatus.loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      <span>Reserving Consultation Slot...</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={16} />
                      <span>Confirm Consultation on {meetingDate} ({meetingTime})</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {meetingStatus.success && (
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="cp-submit-btn"
                  style={{ width: 'auto', margin: '0 auto', padding: '0.75rem 2rem' }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
