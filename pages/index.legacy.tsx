import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <nav className="p-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="JoinEcoGrow" width={60} height={60} />
            <span className="text-2xl font-bold text-hand">JoinEcoGrow</span>
          </div>
          <div className="flex space-x-6">
            <a href="/features/trees" className="hover:text-leaf transition">Trees</a>
            <a href="/features/diy" className="hover:text-leaf transition">DIY</a>
            <a href="/features/community" className="hover:text-leaf transition">Community</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6 text-hand">
          Nurturing Growth, One Tree at a Time 🌱
        </h1>
        <p className="text-xl mb-12 text-textg">
          Join the revolution - 925+ features combining gaming with real environmental impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition ring-2 ring-ringg">
            <div className="text-5xl mb-4">🌳</div>
            <h3 className="text-xl font-bold mb-2 text-hand">Tree Planting</h3>
            <p className="text-gray-600">91 Features Ready</p>
            <p className="mt-4 text-sm text-leaf">Plant real trees through gaming</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition ring-2 ring-ringg">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold mb-2 text-hand">DIY Eco-Growing</h3>
            <p className="text-gray-600">88 Features Ready</p>
            <p className="mt-4 text-sm text-leaf">Learn sustainable growing</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition ring-2 ring-ringg">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2 text-hand">Community</h3>
            <p className="text-gray-600">87 Features Ready</p>
            <p className="mt-4 text-sm text-leaf">Connect with eco-warriors</p>
          </div>
        </div>

        <button className="mt-12 px-8 py-4 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition bg-gradient-to-r from-leaf to-hand">
          Start Your Eco Journey 🌍
        </button>
      </div>
    </main>
  )
}
