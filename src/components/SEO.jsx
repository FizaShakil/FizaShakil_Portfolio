import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Fiza Shakil | Product-Minded Full-Stack Developer',
  description = 'I build digital products that solve real business problems — web apps, e-commerce platforms, business systems, and AI-powered products, from the problem first.',
  canonical = 'https://fiza-shakil.dev',
  image = 'https://fiza-shakil.dev/preview.png',
  type = 'website',
  keywords = 'Product-minded full-stack developer, Full stack developer, React developer, Node.js developer, Product-focused developer, E-commerce development, Business systems, AI-powered products, Custom web applications, Product engineering',
  author = 'Fiza Shakil',
}) => {
  const siteUrl = 'https://fiza-shakil.dev';
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fiza Shakil — Product-Minded Full-Stack Developer" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@fizashakil" />
      <meta name="twitter:site" content="@fizashakil" />

      <meta name="theme-color" content="#507e4f" />
      <meta name="msapplication-TileColor" content="#507e4f" />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Fiza Shakil',
          jobTitle: 'Product-Minded Full-Stack Developer',
          description,
          url: siteUrl,
          image: fullImageUrl,
          knowsAbout: [
            'Full-Stack Development',
            'E-Commerce Platforms',
            'Business Systems',
            'AI-Powered Products',
            'React',
            'Node.js',
            'Product Engineering',
          ],
          sameAs: [
            'https://linkedin.com/in/fiza-shakil',
            'https://github.com/FizaShakil',
          ],
          worksFor: {
            '@type': 'Organization',
            name: 'SumItUp',
            url: 'https://github.com/SumitUp-AI',
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
