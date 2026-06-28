import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Fiza Shakil | Custom Web Development for Growing Businesses',
  description = 'I help startups and businesses launch products, improve customer experience, and automate workflows through custom web solutions. Book a free consultation.',
  canonical = 'https://fiza-shakil.dev',
  image = 'https://fiza-shakil.dev/preview.png',
  type = 'website',
  keywords = 'Web Development, Business Websites, Custom Web Applications, SaaS Development, Landing Pages, Business Automation, Website Developer, Digital Products, Startup Development, High-Converting Websites',
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
      <meta property="og:site_name" content="Fiza Shakil — Digital Product Consultant" />
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
          '@type': 'ProfessionalService',
          name: 'Fiza Shakil — Digital Product Development',
          description,
          url: siteUrl,
          image: fullImageUrl,
          areaServed: 'Worldwide',
          serviceType: [
            'Web Development',
            'SaaS Development',
            'Business Automation',
            'Landing Page Design',
            'E-commerce Development',
          ],
          sameAs: [
            'https://linkedin.com/in/fiza-shakil',
            'https://github.com/FizaShakil',
          ],
          founder: {
            '@type': 'Person',
            name: 'Fiza Shakil',
            jobTitle: 'Digital Product Consultant',
            url: siteUrl,
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
