import { Helmet } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import { personalInfo } from './data/personalInfo';

function App() {
  const siteUrl = 'https://vullakalyan.dev'; // Replace with actual domain

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    url: siteUrl,
    sameAs: [
      personalInfo.social.github,
      personalInfo.social.linkedin,
    ],
    email: personalInfo.social.email,
    description: personalInfo.tagline,
  };

  return (
    <>
      <Helmet>
        <title>{`${personalInfo.name} | ${personalInfo.title}`}</title>
        <meta name="description" content={personalInfo.bio} />
        <meta name="keywords" content="Full-Stack Developer, Web Developer, React, Node.js, Vulla Kalyan, Portfolio" />
        <meta name="author" content={personalInfo.name} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={`${personalInfo.name} | ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.bio} />
        {/* <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={`${personalInfo.name} | ${personalInfo.title}`} />
        <meta property="twitter:description" content={personalInfo.bio} />
        {/* <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} /> */}

        <link rel="canonical" href={siteUrl} />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <MainLayout />
    </>
  );
}

export default App;
