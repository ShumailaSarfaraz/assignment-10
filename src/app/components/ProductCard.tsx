export default function ProductCard() {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative">
          <img 
            src="/api/placeholder/400/300" 
            alt="Product"
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            NEW
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Headphones</h3>
          <p className="text-gray-500 mb-4">Wireless noise-canceling headphones with premium sound quality</p>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold text-gray-900">$299</span>
              <span className="text-sm text-gray-500 line-through ml-2">$399</span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
  }