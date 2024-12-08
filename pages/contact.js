import Layout from '../components/Layout';

export default function Contact() {
  return (
      <section>
        <h1>Contact Me</h1>
        <p>I would love to hear from you! Please reach out to me using the form below or my contact details are:</p>
        <ul>
          <li>Email: yuvr0004@algonquinlive.com</li>
          <li>Phone: +1 (343) 613 6610</li>
        </ul>
        <form>
          <label>
            Name: <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Email: <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Message: <textarea name="message" rows="5" required></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <img src="/images/contact.jpeg" alt="Contact" style={{ width: '100%' }} />
      </section>
  );
}
