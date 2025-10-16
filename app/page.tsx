export default function Home() {

  return (
    <div style={{ minHeight: "100vh", background: "#1a1a1a", padding: "2rem" }} className="main">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🌱 JoinEcoGrow Platform
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8">
              750+ Features for Sustainable Growing
            </p>
            
            {/* V0-Cursor Demo Link */}
            <div className="mb-8">
              <a 
                href="/v0-cursor-demo"
                className="inline-flex items-center px-8 py-4 bg-white text-[#388E3C] rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Try V0-Cursor Integration Demo
                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Platform Features */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Platform Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🌿 DIY Eco-Growing
                </h3>
                <p className="text-green-600 font-medium">88 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🌳 Tree Planting
                </h3>
                <p className="text-green-600 font-medium">91 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🎮 Entertainment
                </h3>
                <p className="text-green-600 font-medium">63 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🎯 Gaming
                </h3>
                <p className="text-green-600 font-medium">55 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🤖 AI Services
                </h3>
                <p className="text-green-600 font-medium">68 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  📡 IoT Integration
                </h3>
                <p className="text-green-600 font-medium">38 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ⛓️ Blockchain
                </h3>
                <p className="text-green-600 font-medium">42 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  👥 Community
                </h3>
                <p className="text-green-600 font-medium">87 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  📊 Analytics
                </h3>
                <p className="text-green-600 font-medium">47 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🛒 Commerce
                </h3>
                <p className="text-green-600 font-medium">45 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🏢 Enterprise
                </h3>
                <p className="text-green-600 font-medium">74 features</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  ⚙️ Admin Panel
                </h3>
                <p className="text-green-600 font-medium">52 features</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Backend API Connection
              </h3>
              <p className="text-blue-600">
                <a 
                  href="https://joinecogrow-backend-pfybw.ondigitalocean.app" 
                  className="underline hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connected to Backend API
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

