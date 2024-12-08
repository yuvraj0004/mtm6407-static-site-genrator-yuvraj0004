import '../styles/global.css';  // Import global CSS
import Layout from '../components/Layout';  // Import Layout component

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout> {/* All pages will be wrapped inside Layout component */}
      <Component {...pageProps} />
    </Layout>
  );
}
