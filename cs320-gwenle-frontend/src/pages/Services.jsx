import "../App.css";

function Services() {
  return (
    <div className="services-page">
      <section className="services-header">
        <h1>Our Marketing Packages</h1>
        <p>Choose the perfect plan to grow your business</p>
      </section>

      <div className="packages">
        <div className="package">
          <h2>Starter Package</h2>
          <p className="price">$499<span>/month</span></p>
          <ul>
            <li>Basic SEO audit and optimization</li>
            <li>Social media account setup</li>
            <li>Monthly performance reports</li>
            <li>Email support</li>
          </ul>
          <button className="package-button">Choose Starter</button>
        </div>

        <div className="package featured">
          <div className="popular-badge">Most Popular</div>
          <h2>Professional Package</h2>
          <p className="price">$999<span>/month</span></p>
          <ul>
            <li>Complete SEO optimization</li>
            <li>Social media management (5 platforms)</li>
            <li>Weekly content creation</li>
            <li>Google Ads management</li>
            <li>Bi-weekly strategy calls</li>
          </ul>
          <button className="package-button">Choose Professional</button>
        </div>

        <div className="package">
          <h2>Enterprise Package</h2>
          <p className="price">$1999<span>/month</span></p>
          <ul>
            <li>Everything in Professional</li>
            <li>Dedicated account manager</li>
            <li>Custom strategy development</li>
            <li>Priority support</li>
            <li>Advanced analytics and reporting</li>
          </ul>
          <button className="package-button">Choose Enterprise</button>
        </div>
      </div>

      <section className="services-details">
        <h2>What's Included in Our Services</h2>
        <div className="service-details">
          <div className="detail">
            <h3>SEO Optimization</h3>
            <p>Complete on-page and off-page SEO to improve your search rankings</p>
          </div>
          <div className="detail">
            <h3>Social Media Management</h3>
            <p>Professional management of your social media presence across all platforms</p>
          </div>
          <div className="detail">
            <h3>Content Strategy</h3>
            <p>Strategic content creation that engages your audience and drives conversions</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
