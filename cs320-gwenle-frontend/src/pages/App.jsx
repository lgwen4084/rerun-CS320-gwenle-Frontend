import "../App.css";
import { images, imageKeys } from "../assets/images";

function App() {
  // Debug: remove after you see images working
  console.log("imageKeys:", imageKeys);
  console.log("seo-icon:", images["seo-icon"]);
  console.log("social-icon:", images["social-icon"]);
  console.log("content-icon:", images["content-icon"]);

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Professional Digital Marketing Services</h1>
        <p>Boost your business with our comprehensive marketing solutions</p>
        <p>Transform your online presence and drive real results with our expert team</p>
        <button className="cta-button">Get Started Today</button>
      </section>

      <section className="services-preview">
        <h2>Our Core Services</h2>

        <div className="service-cards">
          <div className="card">
            <img
              src={images["seo-icon"]}
              alt="SEO Services"
              className="service-icon"
            />
            <h3>SEO Optimization</h3>
            <p>Improve your search rankings and drive organic traffic</p>
          </div>

          <div className="card">
            <img
              src={images["social-icon"]}
              alt="Social Media"
              className="service-icon"
            />
            <h3>Social Media Marketing</h3>
            <p>Engage your audience across all social platforms</p>
          </div>

          <div className="card">
            <img
              src={images["content-icon"]}
              alt="Content Creation"
              className="service-icon"
            />
            <h3>Content Creation</h3>
            <p>Quality content that converts visitors into customers</p>
          </div>

          <div className="card">
            <h3>PPC Advertising</h3>
            <p>Targeted advertising campaigns that maximize your ROI</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
