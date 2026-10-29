import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAssetById, getAllAssets } from '@/lib/dynamodb';
import CaseStudyDetailView from '@/components/CaseStudyDetailView';

export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = await getAssetById(id);

  if (!project) {
    return {
      title: 'Project Not Found | ProvenanceTech',
      description: 'The requested software case study could not be found.',
    };
  }

  const shortTitle = project.shortTitle || project.title;
  return {
    title: `${shortTitle} — Case Study | ProvenanceTech`,
    description: project.leadDesc || project.description || `Case study and technical architecture overview for ${shortTitle}.`,
    openGraph: {
      title: `${shortTitle} | ProvenanceTech Case Study`,
      description: project.leadDesc || project.description,
      images: project.imageUrl ? [{ url: project.imageUrl }] : [],
    },
  };
}

export default async function CaseStudyPage({ params }) {
  const { id } = await params;
  const project = await getAssetById(id);
  const allProjects = await getAllAssets();

  if (!project) {
    return (
      <div className="container" style={{ padding: '7rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem', color: '#1a130e' }}>
          Case Study Not Found
        </h2>
        <p style={{ color: '#6e6054', marginBottom: '2.5rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          No registered software case study was found with identifier: <strong>{id}</strong>
        </p>
        <Link
          href="/portfolio"
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.8rem',
            borderRadius: '9999px',
            fontWeight: 650
          }}
        >
          <ArrowLeft size={16} /> Return to Portfolio
        </Link>
      </div>
    );
  }

  return <CaseStudyDetailView project={project} allProjects={allProjects} />;
}
