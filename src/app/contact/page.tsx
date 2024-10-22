export default function ContactUs() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-12 shadow-lg text-center">
          <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-lg leading-relaxed">
            We&apos;re here to help! Reach out to us with any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-32"
                placeholder="Write your message..."
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary text-lg px-8 py-3 rounded-lg">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Address</h3>
            <p className="text-gray-700">123 E-Shop St, Suite 100</p>
            <p className="text-gray-700">City, Country, ZIP</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Email Us</h3>
            <p className="text-gray-700">support@myeshop.com</p>
            <p className="text-gray-700">sales@myeshop.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Call Us</h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Find Us</h2>
          <p className="text-gray-700 mb-4">
            You can find us at our office location shown below.
          </p>
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map embed */}
            <p className="absolute inset-0 flex items-center justify-center text-gray-600">
              [Map placeholder]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
