'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ShieldCheck,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Layers,
  Search,
  RefreshCw,
  Clock,
  DollarSign,
  LogOut,
  Mail,
  Building,
  CheckCircle2,
  Calendar,
  Code2,
  Sparkles
} from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [assets, setAssets] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'inquiries'
  const [search, setSearch] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [authRes, metricsRes, assetsRes, inqRes] = await Promise.all([
        fetch('/api/auth/me'),
        fetch('/api/assets?metrics=true'),
        fetch('/api/assets'),
        fetch('/api/contact'),
      ]);

      const authData = await authRes.json();
      if (!authRes.ok || !authData.authenticated) {
        router.push('/admin/login');
        return;
      }
      setUser(authData.user);

      if (metricsRes.ok) {
        const m = await metricsRes.json();
        setMetrics(m);
      }

      if (assetsRes.ok) {
        const a = await assetsRes.json();
        setAssets(a.assets || []);
      }

      if (inqRes.ok) {
        const inqData = await inqRes.json();
        setInquiries(inqData.inquiries || []);
      }
    } catch (err) {
      console.error('Dashboard init error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function loadInitial() {
      try {
        const [authRes, metricsRes, assetsRes, inqRes] = await Promise.all([
          fetch('/api/auth/me'),
          fetch('/api/assets?metrics=true'),
          fetch('/api/assets'),
          fetch('/api/contact'),
        ]);

        const authData = await authRes.json();
        if (!authRes.ok || !authData.authenticated) {
          router.replace('/admin/login');
          return;
        }

        if (!ignore) {
          setUser(authData.user);
          if (metricsRes.ok) {
            const m = await metricsRes.json();
            setMetrics(m);
          }
          if (assetsRes.ok) {
            const a = await assetsRes.json();
            setAssets(a.assets || []);
          }
          if (inqRes.ok) {
            const inqData = await inqRes.json();
            setInquiries(inqData.inquiries || []);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Dashboard init error:', err);
        if (!ignore) setLoading(false);
      }
    }

    loadInitial();
    return () => {
      ignore = true;
    };
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.replace('/admin/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
      router.replace('/admin/login');
    }
  };

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      const res = await fetch(`/api/assets/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setAssets(assets.filter((a) => a.id !== id));
        setDeleteConfirmId(null);
      } else {
        alert('Failed to delete project');
      }
    } catch (err) {
      console.error(err);
      alert('Error communicating with server');
    } finally {
      setActionLoading(false);
    }
  };

  const filteredAssets = assets.filter((asset) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      asset.title?.toLowerCase().includes(q) ||
      asset.creator?.toLowerCase().includes(q) ||
      asset.id?.toLowerCase().includes(q) ||
      asset.category?.toLowerCase().includes(q) ||
      asset.currentCustodian?.toLowerCase().includes(q)
    );
  });

  const filteredInquiries = inquiries.filter((inq) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      inq.name?.toLowerCase().includes(q) ||
      inq.email?.toLowerCase().includes(q) ||
      inq.organization?.toLowerCase().includes(q) ||
      inq.projectType?.toLowerCase().includes(q) ||
      inq.message?.toLowerCase().includes(q)
    );
  });

  if (loading) {
    return (
      <div className="container" style={{ padding: '7rem 0', textAlign: 'center' }}>
        <RefreshCw className="animate-spin" size={38} color="var(--primary)" style={{ margin: '0 auto 1.25rem' }} />
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          Loading Prevenance Engineering Operations...
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
          Syncing projects, database records, and consultation inquiries
        </p>
      </div>
    );
  }

  const liveDeploymentsCount = assets.filter(
    (a) => a.status === 'Verified' || a.status === 'Live Production'
  ).length;
  const inDevelopmentCount = assets.filter(
    (a) => a.status === 'Under Review' || a.status === 'In Development' || a.status === 'Active Sprint'
  ).length;

  return (
    <div className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
      {/* Top Banner Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginBottom: '2.5rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid #dfd5c8',
      }}>
        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            color: 'var(--primary, #df7a38)',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            background: 'rgba(223, 122, 56, 0.1)',
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            marginBottom: '0.65rem',
          }}>
            <ShieldCheck size={14} />
            Authenticated Admin Console
          </div>
          <h1 style={{ fontSize: '2.35rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Software Delivery & CMS Operations
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginTop: '0.35rem' }}>
            Logged in as <strong style={{ color: 'var(--text-primary)' }}>{user?.email || 'Administrator'}</strong> • Authorized via environment credentials
          </p>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={fetchData}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '0.6rem 1.1rem',
              fontWeight: 600,
              background: '#ffffff',
              border: '1px solid #dfd5c8',
              borderRadius: '9999px',
            }}
            title="Refresh database records"
          >
            <RefreshCw size={15} />
            Refresh
          </button>

          <Link
            href="/admin/assets/new"
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.35rem',
              fontWeight: 600,
              borderRadius: '9999px',
            }}
          >
            <Plus size={18} />
            Add New Project
          </Link>

          <button
            onClick={handleLogout}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '0.6rem 1.1rem',
              fontWeight: 600,
              background: '#fde8e8',
              color: '#d94343',
              border: '1px solid rgba(217, 67, 67, 0.3)',
              borderRadius: '9999px',
            }}
            title="Sign out of Admin Session"
          >
            <LogOut size={15} />
            Sign Out
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '1.25rem',
        marginBottom: '2.5rem',
      }}>
        {/* KPI 1 */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Total Systems
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(223, 122, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Layers size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
            {assets.length}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            Managed in Amazon DynamoDB
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Live Deployments
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(46, 125, 90, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2e7d5a' }}>
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#2e7d5a', lineHeight: 1 }}>
            {liveDeploymentsCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            Active in Cloud Production SLA
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Active Sprints
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(223, 122, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Clock size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
            {inDevelopmentCount}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            In Architecture & Sprint Review
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 24px rgba(45, 35, 27, 0.04)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Client Leads / Inquiries
            </span>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(223, 122, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Mail size={18} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
            {inquiries.length}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
            Consultation requests received
          </div>
        </div>
      </div>

      {/* Navigation Tabs & Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}>
        {/* Tab Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', background: '#ffffff', padding: '0.35rem', borderRadius: '9999px', border: '1px solid #dfd5c8' }}>
          <button
            onClick={() => setActiveTab('projects')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: activeTab === 'projects' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'projects' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.2s',
            }}
          >
            <Code2 size={16} />
            Software Projects ({assets.length})
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: activeTab === 'inquiries' ? 'var(--primary)' : 'transparent',
              color: activeTab === 'inquiries' ? '#ffffff' : 'var(--text-secondary)',
              transition: 'all 0.2s',
            }}
          >
            <Mail size={16} />
            Client Inquiries ({inquiries.length})
          </button>
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} color="var(--primary)" style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <input
            type="text"
            placeholder={activeTab === 'projects' ? 'Filter by title, client, stack...' : 'Filter by client name, email, scope...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-input"
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.8rem',
              borderRadius: '9999px',
              border: '1px solid #dfd5c8',
              background: '#ffffff',
              fontSize: '0.875rem',
            }}
          />
        </div>
      </div>

      {/* TAB 1: Projects Table */}
      {activeTab === 'projects' && (
        <div className="glass-panel" style={{
          overflowX: 'auto',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 30px rgba(45, 35, 27, 0.04)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #dfd5c8', background: '#f7eee4' }}>
                <th style={{ padding: '1.1rem 1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Project / Application</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Category</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Client / Organization</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Deployment Status</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Scope / Budget</th>
                <th style={{ padding: '1.1rem 1.25rem', color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssets.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3.5rem 1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No projects found matching your search.
                  </td>
                </tr>
              ) : (
                filteredAssets.map((asset) => (
                  <tr key={asset.id} style={{ borderBottom: '1px solid #dfd5c8', transition: 'background 0.2s' }}>
                    <td style={{ padding: '1.1rem 1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={asset.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80'}
                          alt={asset.title}
                          style={{
                            width: '46px',
                            height: '46px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            border: '1px solid #dfd5c8',
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                            {asset.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                            {asset.creator} {asset.creationYear ? `• Launched ${asset.creationYear}` : ''}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td style={{ padding: '1.1rem 1rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: '#f7eee4',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        border: '1px solid #dfd5c8',
                      }}>
                        {asset.category}
                      </span>
                    </td>

                    <td style={{ padding: '1.1rem 1rem', color: 'var(--text-secondary)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                        <Building size={14} color="var(--primary)" />
                        {asset.currentCustodian || 'Enterprise Client'}
                      </div>
                    </td>

                    <td style={{ padding: '1.1rem 1rem' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: asset.status === 'Verified' || asset.status === 'Live Production' ? '#eaf5f0' : '#fef2e9',
                        color: asset.status === 'Verified' || asset.status === 'Live Production' ? '#2e7d5a' : '#df7a38',
                        border: `1px solid ${asset.status === 'Verified' || asset.status === 'Live Production' ? 'rgba(46, 125, 90, 0.25)' : 'rgba(223, 122, 56, 0.25)'}`,
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: asset.status === 'Verified' || asset.status === 'Live Production' ? '#2e7d5a' : '#df7a38',
                        }} />
                        {asset.status === 'Verified' ? 'Live Production' : (asset.status || 'Active')}
                      </span>
                    </td>

                    <td style={{ padding: '1.1rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {formatCurrency(asset.estimatedValue)}
                    </td>

                    <td style={{ padding: '1.1rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.45rem', alignItems: 'center' }}>
                        <Link
                          href={`/catalog/${asset.id}`}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.4rem 0.65rem', borderRadius: '8px' }}
                          title="View Live Dossier"
                        >
                          <ExternalLink size={14} />
                        </Link>

                        <Link
                          href={`/admin/assets/${asset.id}`}
                          className="btn btn-secondary btn-sm"
                          style={{ padding: '0.4rem 0.65rem', borderRadius: '8px' }}
                          title="Edit Project & Engineering Milestones"
                        >
                          <Edit size={14} />
                        </Link>

                        <button
                          onClick={() => setDeleteConfirmId(asset.id)}
                          className="btn btn-danger btn-sm"
                          style={{ padding: '0.4rem 0.65rem', borderRadius: '8px' }}
                          title="Delete Project"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 2: Inquiries Table */}
      {activeTab === 'inquiries' && (
        <div className="glass-panel" style={{
          overflowX: 'auto',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid #dfd5c8',
          boxShadow: '0 8px 30px rgba(45, 35, 27, 0.04)',
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #dfd5c8', background: '#f7eee4' }}>
                <th style={{ padding: '1.1rem 1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Client & Contact</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Organization</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Project Scope</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Budget & Timeline</th>
                <th style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 700 }}>Message</th>
                <th style={{ padding: '1.1rem 1.25rem', color: 'var(--text-primary)', fontWeight: 700, textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredInquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3.5rem 1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No client inquiries recorded yet. Any consultation submitted through &ldquo;Discuss Project&rdquo; or the Contact form will appear here.
                  </td>
                </tr>
              ) : (
                filteredInquiries.map((inq) => (
                  <tr key={inq.id} style={{ borderBottom: '1px solid #dfd5c8', transition: 'background 0.2s' }}>
                    <td style={{ padding: '1.1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                        {inq.name}
                      </div>
                      <a
                        href={`mailto:${inq.email}`}
                        style={{ fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}
                      >
                        <Mail size={12} />
                        {inq.email}
                      </a>
                    </td>

                    <td style={{ padding: '1.1rem 1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Building size={14} color="var(--primary)" />
                        {inq.organization || 'Independent Enterprise'}
                      </div>
                    </td>

                    <td style={{ padding: '1.1rem 1rem' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: '#f7eee4',
                        color: 'var(--primary)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        border: '1px solid #dfd5c8',
                      }}>
                        {inq.projectType || inq.assetCategory || 'Web & Mobile App'}
                      </span>
                    </td>

                    <td style={{ padding: '1.1rem 1rem' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.85rem' }}>
                        {inq.budget || 'Flexible'}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '2px' }}>
                        <Calendar size={12} />
                        {inq.timeline || 'Standard timeline'}
                      </div>
                    </td>

                    <td style={{ padding: '1.1rem 1rem', maxWidth: '300px' }}>
                      <div style={{
                        color: 'var(--text-secondary)',
                        fontSize: '0.85rem',
                        lineHeight: 1.45,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {inq.message}
                      </div>
                      {inq.createdAt && (
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                          Received {formatDate(inq.createdAt)}
                        </div>
                      )}
                    </td>

                    <td style={{ padding: '1.1rem 1.25rem', textAlign: 'right' }}>
                      <a
                        href={`mailto:${inq.email}?subject=Prevenance%20Consultation%20Follow-up%20for%20${encodeURIComponent(inq.name)}`}
                        className="btn btn-primary btn-sm"
                        style={{ padding: '0.45rem 0.95rem', borderRadius: '9999px', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        <Mail size={13} />
                        Reply
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem',
        }}>
          <div className="glass-panel" style={{
            maxWidth: '440px',
            width: '100%',
            padding: '2rem',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(217, 67, 67, 0.4)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: '#d94343' }}>
              Confirm Project Deletion
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Are you sure you want to permanently delete project record <strong style={{ color: 'var(--text-primary)' }}>{deleteConfirmId}</strong> from Amazon DynamoDB? This cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="btn btn-secondary btn-sm"
                style={{ borderRadius: '9999px', padding: '0.55rem 1.1rem' }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                disabled={actionLoading}
                className="btn btn-danger btn-sm"
                style={{ borderRadius: '9999px', padding: '0.55rem 1.1rem' }}
              >
                {actionLoading ? 'Deleting...' : 'Confirm Deletion'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
