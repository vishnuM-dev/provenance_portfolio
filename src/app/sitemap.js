import { getAllAssets } from '@/lib/dynamodb';

export default async function sitemap() {
  const baseUrl = 'https://provenancetech.com';

  const staticRoutes = [
    '',
    '/services',
    '/portfolio',
    '/technologies',
    '/about',
    '/contact',
    '/catalog',
    '/verify',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  try {
    const assets = await getAllAssets();
    const dynamicRoutes = assets.map((asset) => ({
      url: `${baseUrl}/catalog/${asset.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch {
    return staticRoutes;
  }
}
