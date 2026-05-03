import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Fiza Shakil | Full Stack SaaS Developer',
  description = 'Passionate Full Stack Developer specializing in React.js, Node.js, MySQL, and modern web technologies. Building scalable SaaS applications and enterprise solutions.',
  canonical = 'https://fiza-shakil.dev',
  image = 'https://fiza-shakil.dev/preview.png',
  type = 'website',
  keywords = 'Fiza Shakil, Full Stack Developer, React Developer, Node.js, MySQL, MERN Stack, SaaS Developer, Web Development, JavaScript, TypeScript, Next.js',
  author = 'Fiza Shakil'
}) => {
  const siteUrl = 'https://fiza-shakil.dev';
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fiza Shakil Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@fizashakil" />
      <meta name="twitter:site" content="@fizashakil" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#507e4f" />
      <meta name="msapplication-TileColor" content="#507e4f" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fiza Shakil",
          "jobTitle": "Full Stack SaaS Developer",
          "description": description,
          "url": siteUrl,
          "image": fullImageUrl,
          "sameAs": [
            "https://linkedin.com/in/fiza-shakil",
            "https://github.com/FizaShakil"
          ],
          "knowsAbout": [
            "React.js",
            "Node.js", 
            "MySQL",
            "MongoDB",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "Express.js",
            "Full Stack Development",
            "SaaS Development",
            "Busineess Solutions"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;