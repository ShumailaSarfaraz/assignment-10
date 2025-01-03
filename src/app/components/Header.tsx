export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Store</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="search"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  }