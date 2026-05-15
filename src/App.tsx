import { ShoppingCart, Heart, Truck, Lock, Star, ChevronRight } from 'lucide-react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Deep Sleep Foldable Bed',
      features: 'Removable, Washable, and Ultra-Soft',
      link: 'https://s.click.aliexpress.com/e/_EHf2lYq',
      image: '/S54ef10ac2bb94d0d831b210342f62a4eO.jpg_960x960q75.jpg_.avif',
    },
    {
      id: 2,
      name: 'Fashion Adjustable Bell Collars',
      features: 'Safety Bell & Durable Colorful Patterns',
      link: 'https://s.click.aliexpress.com/e/_EvW6qyE',
      image: '/S0a7eb5b9669f41449da5495fb2843407I.jpg_960x960q75.jpg_.avif',
    },
    {
      id: 3,
      name: 'Cartoon Bee Harness Set',
      features: 'Double Layer Security for Outdoor Walks',
      link: 'https://s.click.aliexpress.com/e/_EHfXWsK',
      image: '/A601d7952defc422786df67e4d41f7ed0b.jpg_960x960q75.jpg_.avif',
    },
    {
      id: 4,
      name: 'Interactive Automatic Rolling Ball',
      features: 'Self-Moving & Boredom Relief',
      link: 'https://s.click.aliexpress.com/e/_EworslM',
      image: '/HTB1excYckWE3KVjSZSyq6xocXXab.jpg_960x960q75.jpg_.avif',
    },
    {
      id: 5,
      name: 'Fashion Adjustable Bell Collars',
      features: 'High-quality, safe, and comfortable adjustable collars with a bell',
      link: 'https://s.click.aliexpress.com/e/_EG3HhQS',
      image: '/S0a7eb5b9669f41449da5495fb2843407I.jpg_960x960q75.jpg_.avif',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6" style={{ color: '#FFB5A0' }} />
            <span className="text-xl font-semibold text-gray-900">Meowmain</span>
          </div>
          <button className="bg-gradient-to-r from-orange-100 to-amber-100 text-gray-900 px-6 py-2 rounded-lg font-medium hover:shadow-md transition-shadow">
            Shop Now
          </button>
        </div>
      </nav>

      {/* Summer Refresh Savings Banner */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center">
          <p className="text-sm font-semibold text-orange-900">
            Summer Refresh Savings: Up to 40% off selected items!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Ultimate Comfort for Your Furry Friend
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover the Meowmain collection: Handpicked essentials designed for your cat's happiness. Premium quality, affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#products"
                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-400 to-amber-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Shop the Collection
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                See Reviews
              </a>
            </div>
            <p className="text-sm text-gray-500">New User Deal: Welcome offers starting from $0.99</p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <img
                src="/S54ef10ac2bb94d0d831b210342f62a4eO.jpg_960x960q75.jpg_.avif"
                alt="Premium Cat Bed"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Heart className="w-8 h-8" style={{ color: '#B8E6DB' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Curated Collection
            </h2>
            <p className="text-lg text-gray-600">
              Premium essentials for the modern cat and their owner
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-green-50 to-teal-50 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md group-hover:bg-orange-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 group-hover:text-orange-400" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {product.features}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">
                      Buy Now
                      <ShoppingCart className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <img
              src="/A601d7952defc422786df67e4d41f7ed0b.jpg_960x960q75.jpg_.avif"
              alt="Happy Cat Customer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Trusted by Cat Owners Worldwide
            </h2>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "Finally found a harness my cat actually likes! High quality and super cute design. The material is durable and the fit is perfect. Highly recommend to all cat lovers!"
              </p>
              <p className="font-semibold text-gray-900">Happy Customer</p>
              <p className="text-sm text-gray-500">Verified Purchase</p>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-4 mb-3 inline-block">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Quality Guaranteed</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-4 mb-3 inline-block">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Secure Payment</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-4 mb-3 inline-block">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">Global Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Deals Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            New User? Get Exclusive Deals
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Welcome offers starting from just $0.99 on selected items
          </p>
          <a
            href="#products"
            className="inline-flex items-center justify-center bg-gradient-to-r from-orange-400 to-amber-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow text-lg"
          >
            Claim Your Deal
            <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5" style={{ color: '#FFB5A0' }} />
              <span className="font-semibold text-white">Meowmain</span>
            </div>
            <p className="text-sm">Premium curated essentials for your beloved cat.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-white transition-colors">Shop Collection</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Meowmain. All rights reserved. Crafted with love for cat lovers everywhere.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
