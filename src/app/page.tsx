const products = [
  {
    name: "Wireless Headphones",
    price: 299,
    oldPrice: 399,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "Premium noise-canceling headphones of your choice"
  },
  {
    name: "Smart Watch",
    price: 199,
    oldPrice: 299,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Next-gen smartwatch with health tracking"
  },
  {
    name: "Premium Camera",
    price: 899,
    oldPrice: 999,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    description: "Professional DSLR camera to capture your beautiful moments"
  },
  {
    name: "Running Shoes",
    price: 129,
    oldPrice: 159,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    description: "Lightweight performance running shoes for your morning jog"
  },
  {
    name: "Sunglasses",
    price: 159,
    oldPrice: 199,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    description: "Classic aviator sunglasses to use in your summer vacations"
  },
  {
    name: "Backpack",
    price: 79,
    oldPrice: 99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    description: "Durable everyday backpack to keep your things safe in rainy days"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  NEW
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>
                  </div>
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}