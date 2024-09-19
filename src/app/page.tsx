"use client";

import { products } from "@/data/products";
import { TruckIcon, ShieldCheckIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/components/productCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-extrabold mb-4">Welcome to My E-Commerce Store</h1>
          <p className="text-white text-lg mb-8">
            Discover the latest trends and exclusive deals curated just for you.
          </p>
          <a href="/products" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            Shop Now
          </a>

        </div>
      </section>

      {/* Featured Products Section with Swiper */}
      <section className="container mx-auto p-8 mt-8">
        <h2 className="text-3xl font-bold text-center mb-4">Popular Products</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1024: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="pb-12 pt-4 pl-4 pr-4">
              <div className="hover-scale">
                <Link href={`/product/${product.id}`}>
                  <ProductCard name={product.name} price={product.price} />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-8 text-center mt-8 mb-12">
        <h2 className="text-3xl font-bold mb-8">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <TruckIcon className="mx-auto text-secondary h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold text-primary">Fast Shipping</h3>
            <p className="text-secondary">Get your products delivered quickly with our premium shipping options.</p>
          </div>
          <div className="card">
            <ShieldCheckIcon className="mx-auto text-secondary h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold text-primary">Quality Guaranteed</h3>
            <p className="text-secondary">Our products are sourced from trusted suppliers with a focus on quality.</p>
          </div>
          <div className="card">
            <PhoneIcon className="mx-auto text-secondary h-12 w-12 mb-4" />
            <h3 className="text-xl font-bold text-primary">24/7 Support</h3>
            <p className="text-secondary">Our dedicated support team is available around the clock for your convenience.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
