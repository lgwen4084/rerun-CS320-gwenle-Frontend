import "../App.css";
import ecommerceImg from "../assets/case-study-ecommerce.jpg";
import restaurantImg from "../assets/case-study-restaurant.jpg";
import saasImg from "../assets/case-study-saas.jpg";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <h1>Our Success Stories</h1>
        <p>See how we've helped businesses transform their digital presence</p>
      </section>

      <div className="case-studies">
        <div className="case-study">
          <div className="case-study-image">
            <img src={ecommerceImg} alt="E-commerce Success Story" />
          </div>
          <div className="case-study-content">
            <h3>E-commerce Store Transformation</h3>
            <p>
              Helped an online retailer triple their organic traffic and double their sales
              in just 6 months through comprehensive SEO and content strategy.
            </p>
            <div className="metrics">
              <div className="metric"><h4>300%</h4><span>Traffic Increase</span></div>
              <div className="metric"><h4>150%</h4><span>Sales Growth</span></div>
              <div className="metric"><h4>200%</h4><span>ROI Improvement</span></div>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-study-image">
            <img src={restaurantImg} alt="Restaurant Success Story" />
          </div>
          <div className="case-study-content">
            <h3>Local Restaurant Social Media Growth</h3>
            <p>
              Transformed a local restaurant's social presence, leading to packed reservations
              and increased brand awareness in the community.
            </p>
            <div className="metrics">
              <div className="metric"><h4>500%</h4><span>Follower Growth</span></div>
              <div className="metric"><h4>80%</h4><span>More Bookings</span></div>
              <div className="metric"><h4>120%</h4><span>Revenue Increase</span></div>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-study-image">
            <img src={saasImg} alt="SaaS Startup Success" />
          </div>
          <div className="case-study-content">
            <h3>Tech Startup Digital Launch</h3>
            <p>
              Launched a comprehensive digital marketing campaign for a SaaS startup,
              resulting in rapid user acquisition and revenue growth.
            </p>
            <div className="metrics">
              <div className="metric"><h4>400%</h4><span>Lead Generation</span></div>
              <div className="metric"><h4>250%</h4><span>Conversion Rate</span></div>
              <div className="metric"><h4>180%</h4><span>Monthly Revenue</span></div>
            </div>
          </div>
        </div>
      </div>

      <section className="portfolio-cta">
        <h2>Ready to Be Our Next Success Story?</h2>
        <p>Let's discuss how we can help grow your business</p>
        <button className="cta-button">Start Your Project</button>
      </section>
    </div>
  );
}

export default Portfolio;
