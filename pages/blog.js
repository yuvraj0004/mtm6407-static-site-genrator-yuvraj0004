import Layout from "../components/Layout";

export default function Blog() {
  return (
    <section>
      <h1>Welcome to My Web Development Blog</h1>

      <section>
        <h2>Blog 1: My Web Development Journey</h2>
        <p>
          My passion for web development started when I was introduced to HTML
          and CSS during a college course. Since then, I’ve been hooked on
          creating functional and aesthetically pleasing websites.
        </p>
        <p>
          After my initial exposure to the web technologies, I began learning
          JavaScript, which allowed me to bring dynamic features to websites.
          Over the years, I’ve honed my skills in front-end frameworks like
          React and back-end technologies like Node.js.
        </p>
      </section>

      <section>
        <h2>Blog 2: Why I Chose Web Development</h2>
        <p>
          Web development is all about solving problems creatively. I chose it
          because I love the challenge of finding solutions to technical issues
          while also ensuring a smooth user experience.
        </p>
        <p>
          With the rise of e-commerce, social media, and online services, web
          development has become an essential skill. I decided to pursue it as a
          career due to the growing demand for developers and the potential for
          continuous learning.
        </p>
      </section>

      <section>
        <h2>Blog 3: My Favorite Tools as a Web Developer</h2>
        <p>
          Visual Studio Code is my go-to code editor. It's lightweight, fast,
          and comes with a plethora of extensions to streamline my workflow,
          from syntax highlighting to version control integration.
        </p>
        <p>
          Version control is essential for any web developer, and Git allows me
          to manage my codebase efficiently. GitHub serves as my repository for
          sharing and collaborating on projects with other developers.
        </p>
      </section>

      <section>
        <h2>Blog 4: The Importance of Responsive Web Design</h2>
        <p>
          Responsive web design ensures that websites look and function properly
          across all devices, from desktops to smartphones. It uses CSS media
          queries to adapt to different screen sizes and resolutions.
        </p>
        <p>
          In today’s mobile-first world, it’s essential to have a responsive
          design to provide users with a seamless experience. Websites that
          aren’t mobile-friendly risk losing potential visitors and customers.
        </p>
      </section>

      <img src="/images/blog.jpeg" alt="Blog" style={{ width: "100%" }} />
    </section>
  );
}
