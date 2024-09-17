export default function Home() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-extrabold text-primary mb-6">
        Welcome to my E-Commerce Store
      </h1>
      <p className="text-lg text-secondary mb-8">
        Discover the latest trends and exclusive deals curated just for you.
      </p>
      <a href="/products" className="btn-primary inline-block">
        Explore Products
      </a>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card">
          <h2 className="text-xl font-bold text-primary">Fast Shipping</h2>
          <p className="text-secondary">Get your products delivered quickly with our premium shipping options.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-primary">Quality Guaranteed</h2>
          <p className="text-secondary">Our products are sourced from trusted suppliers with a focus on quality.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-bold text-primary">24/7 Support</h2>
          <p className="text-secondary">Our dedicated support team is available around the clock for your convenience.</p>
        </div>
      </div>
    </div>
  );
}
