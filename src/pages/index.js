import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={siteConfig.tagline}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        padding: '2rem'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <Heading as="h1" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            {siteConfig.title}
          </Heading>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-color-emphasis-600)' }}>
            {siteConfig.tagline}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              className="button button--primary button--lg"
              to="/blog">
              Blog →
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/journal">
              Journal →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
