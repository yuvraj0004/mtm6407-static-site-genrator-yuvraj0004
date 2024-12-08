import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/Logo.jpeg" alt="Website Logo" />
        </div>
        <p>&copy; 2024 Yuvraj Singh</p>
      </div>
    </footer>
  );
}
