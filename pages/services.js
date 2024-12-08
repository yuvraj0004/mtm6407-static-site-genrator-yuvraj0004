import Layout from '../components/Layout';

export default function Services() {
  return (
      <section>
        <h1>Services I Offer</h1>
        <ul>
          <li>
            <h2>Web Design</h2>
            <p>I help you create visually stunning and user-friendly websites.</p>
          </li>
          <li>
            <h2>Logo Design</h2>
            <p>I help you learn how to create a logo that represents your brand.</p>
          </li>
          <li>
            <h2>Wireframing</h2>
            <p>I help you design the structure and layout of your website.</p>
          </li>
          <li>
            <h2>UI/UX Design</h2>
            <p>I help you design the user interface and user experience of your website.</p>
          </li>
          <li>
            <h2>Front-End Development</h2>
            <p>I help you build the front-end of your website using HTML, CSS, and JavaScript.</p>
          </li>
          <li>
            <h2>Back-End Development</h2>
            <p>I help you build the back-end of your website using Node.js, Express.js, and MongoDB.</p>
          </li>
          <li>
            <h2>Mobile App Development</h2>
            <p>I help you build mobile apps using React Native.</p>
          </li>
        </ul>
        <img
          src="/images/service.jpeg"
          alt="Our Services"
          style={{ width: '100%' }}
        />
      </section>
  );
}
