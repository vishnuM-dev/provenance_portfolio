'use client';

import { useState } from 'react';
import { Calendar, MapPin, Building, ShieldCheck, ArrowDownUp, CheckCircle2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function ProvenanceTimeline({ events = [], currentCustodian }) {
  const [ascending, setAscending] = useState(false);

  if (!events || events.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        No release milestones recorded yet for this project.
      </div>
    );
  }

  const sortedEvents = [...events].sort((a, b) => {
    const timeA = new Date(a.date).getTime() || 0;
    const timeB = new Date(b.date).getTime() || 0;
    return ascending ? timeA - timeB : timeB - timeA;
  });

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <ShieldCheck size={22} color="var(--primary)" />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Development & Production Milestones
          </h3>
          <span className="badge badge-category" style={{ fontSize: '0.75rem' }}>
            {events.length} Milestones
          </span>
        </div>

        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-secondary btn-sm"
          style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem', fontWeight: 600 }}
        >
          <ArrowDownUp size={13} />
          {ascending ? 'Oldest First' : 'Most Recent First'}
        </button>
      </div>

      <div className="timeline">
        {sortedEvents.map((evt, idx) => (
          <div key={evt.id || idx} className="timeline-item animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="timeline-marker" />

            <div className="glass-panel" style={{ padding: '1.4rem 1.6rem', background: '#fffbf7' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.75rem',
              }}>
                <div>
                  <span className="badge badge-category" style={{ marginBottom: '0.4rem' }}>
                    {evt.eventType || 'Custody Event'}
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} color="var(--primary)" />
                      {formatDate(evt.date)}
                    </span>
                    {evt.location && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={14} color="var(--text-muted)" />
                        {evt.location}
                      </span>
                    )}
                  </div>
                </div>

                {evt.verifiedBy && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-verified)',
                    background: 'var(--accent-verified-bg)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(46, 125, 90, 0.25)',
                  }}>
                    <CheckCircle2 size={13} />
                    Audit Signed: {evt.verifiedBy}
                  </div>
                )}
              </div>

              {/* Custodian */}
              <div style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.5rem',
              }}>
                <Building size={16} color="var(--primary)" />
                Custodian: {evt.custodian}
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}>
                {evt.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
