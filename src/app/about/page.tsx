import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-12 shadow-lg">
          <h1 className="text-5xl font-extrabold mb-6 text-center">About Us</h1>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Welcome to My E-Shop, your number one source for all things [product types]. 
            We&apos;re dedicated to giving you the very best of [product types], 
            with a focus on quality, customer service, and uniqueness.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At My E-Shop, our mission is to deliver the finest quality [product types] 
              to our customers, combined with exceptional service and a focus on creating 
              unique and innovative experiences.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to be a leader in the [industry type], providing sustainable 
              and high-quality [product types] to customers all over the world. Our vision 
              is to make shopping an enjoyable, reliable, and seamless experience for all.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-primary">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Founded in [Year], My E-Shop has come a long way from its humble beginnings. 
            Driven by a passion for [specific value, e.g., eco-friendly products], 
            we invested countless hours of research to bring the best [product types] to our customers.
            Today, we are proud to serve customers across the globe, offering a unique blend 
            of innovation, quality, and convenience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We value your feedback and are always here to assist you. Feel free to 
          reach out if you have any questions or concerns.
        </p>
        <Link href="/contact">
          <p className="btn-primary text-lg px-8 py-3 rounded-lg">
            Contact Us
          </p>
        </Link>
      </section>
    </div>
  );
}
