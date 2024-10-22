export async function fetchPopularProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  
  const products = await res.json();
  
  // Randomize and select a few products for the "Popular" section
  return products.sort(() => 0.5 - Math.random()).slice(0, 6);
}
