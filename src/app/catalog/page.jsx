'use client';

import { useState, useEffect } from 'react';
import AssetCard from '@/components/AssetCard';
import { Search, Sparkles, RefreshCw, AlertCircle, Smartphone, Globe, Code2 } from 'lucide-react';

const CATEGORIES = ['All', 'Mobile Apps', 'Web Applications', 'Custom Software', 'Cloud Solutions'];
const STATUSES = ['All', 'Live Production', 'Sample Project'];

export default function CatalogPage() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [error, setError] = useState('');

  const fetchAssets = async () => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams();
      if (search) params.set('search', search);
      if (selectedCategory !== 'All') params.set('category', selectedCategory);
      if (selectedStatus !== 'All') params.set('status', selectedStatus);

      const res = await fetch(`/api/assets?${params.toString()}`);
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      setAssets(data.assets || []);
    } catch (err) {
      console.error(err);
      setError('Could not connect to the project registry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function loadInitial() {
      try {
        const params = new URLSearchParams();
        if (selectedCategory !== 'All') params.set('category', selectedCategory);
        if (selectedStatus !== 'All') params.set('status', selectedStatus);

        const res = await fetch(`/api/assets?${params.toString()}`);
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        if (!ignore) {
          setAssets(data.assets || []);
          setLoading(false);
        }
      } catch {
        if (!ignore) {
          setError('Could not connect to the project registry.');
          setLoading(false);
        }
      }
    }
    loadInitial();
    return () => { ignore = true; };
  }, [selectedCategory, selectedStatus]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchAssets();
  };

  const handleReset = async () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedStatus('All');
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/assets');
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      setAssets(data.assets || []);
    } catch {
      setError('Could not connect to the project registry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem 5rem' }}>
      {/* Header */}
      <div className="section-header">
        <div className="section-badge">
          <Sparkles size={14} color="var(--primary)" />
          Production Releases & Prototypes
        </div>
        <h1 className="section-title">
          Software Projects & Case Studies
        </h1>
        <p className="section-desc">
          Explore our portfolio of custom web applications, native & cross-platform mobile apps, and scalable Amazon DynamoDB backends.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel" style={{
        padding: '1.5rem',
        borderRadius: '24px',
        marginBottom: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        background: '#ffffff',
        border: '1px solid rgba(220, 195, 170, 0.45)',
      }}>
        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px', position: 'relative' }}>
            <label htmlFor="catalog-search" className="sr-only">
              Search projects by title, client, or tech stack
            </label>
            <Search size={18} color="var(--primary)" style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              id="catalog-search"
              type="text"
              placeholder="Search projects by title, client, or tech stack (e.g. Next.js, React Native, DynamoDB)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.8rem', height: '48px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0 1.6rem', height: '48px' }}>
            Search Projects
          </button>
        </form>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginRight: '0.25rem' }}>Platform:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
                style={{
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: selectedCategory === cat ? 'var(--primary)' : 'var(--bg-surface-elevated)',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  boxShadow: selectedCategory === cat ? 'var(--primary-glow)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Status:</span>
            {STATUSES.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                aria-pressed={selectedStatus === st}
                style={{
                  padding: '0.35rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  background: selectedStatus === st ? 'var(--secondary-bg)' : '#fdf6ef',
                  color: selectedStatus === st ? 'var(--secondary-text)' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <div style={{
          padding: '1.25rem',
          background: 'var(--accent-danger-bg)',
          color: 'var(--accent-danger)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {/* Grid of Projects */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '5rem 0' }}>
          <RefreshCw className="animate-spin" size={32} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
          <p style={{ color: 'var(--text-muted)' }}>Loading projects from database...</p>
        </div>
      ) : assets.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', background: '#ffffff' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>No projects match your filter criteria</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Try resetting your search query or choosing another platform category.
          </p>
          <button
            onClick={handleReset}
            className="btn btn-secondary btn-sm"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid-catalog">
          {assets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      )}
    </div>
  );
}
