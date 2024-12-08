import Navbar from './Navbar';  // Import Navbar component
import Footer from './Footer';  // Import Footer component

export default function Layout({ children }) {
  return (
    <>
      <Navbar />  {/* Navbar included here, only once */}
      <main>{children}</main>
      <Footer />  {/* Footer included here, only once */}
    </>
  );
}
