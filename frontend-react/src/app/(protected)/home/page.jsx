import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

// This is now a Server Component - no 'use client' directive
export default function Home() {
  // Static featured products - could be fetched from backend if needed
  const featuredProducts = [
    {
      id: 1,
      name: 'Running Shoes',
      price: 'Rs 12999.99',
      image: '/images/runnungshoes.webp',
      alt: 'Running Shoes'
    },
    {
      id: 2,
      name: 'Urban Explorer Boots',
      price: 'Rs 11999.99',
      image: '/images/Explorerboots.png',
      alt: 'Urban Explorer Boots'
    },
    {
      id: 3,
      name: 'Comfort Stride Loafers',
      price: 'Rs 7999.99',
      image: '/images/loafer.png',
      alt: 'Comfort Stride Loafers'
    }
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Step Into Bold Style</h1>
          <p>Express Yourself With Every Step</p>
          <Link href="/products" className="btn">Shop Collection</Link>
        </div>
      </div>

      <section className="featured-products">
        <h2>Trending Now</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.alt} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">{product.price}</div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2>Join The Movement</h2>
        <p>Subscribe for early access to our limited collections</p>
        <NewsletterForm />
      </section>
    </>
  );
}
